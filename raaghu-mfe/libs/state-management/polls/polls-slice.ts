import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type pollsInitialState = {
  loading : boolean,
  error : string,
  GetPolls:any,
  fetchPolls:any,
}

const PollsInitialState : pollsInitialState = {
  loading : false,
 GetPolls:null, 
 fetchPolls:null,
 error : "",
}

const proxy =new ServiceProxy();

export const GetPolls = createAsyncThunk('Polls/GetPolls',() => {
    return proxy.pollGET(undefined,undefined,0,1000).then((result:any) =>{
      debugger
        console.log("result",result)
        return result
    })
})

export const SavePolls = createAsyncThunk('Polls/SavePolls',(data:any) => {
  return proxy.pollPOST(data).then((result:any) =>{
      return result
  })
})

export const deletePolls = createAsyncThunk('Polls/deletePolls',  (id:any) => {
  return proxy.pollDELETE(id).then((result:any) =>{
      return result
  })
})

export const Widgets = createAsyncThunk('Polls/Widgets',  () => {
  return proxy.widgets(undefined).then((result:any) =>{
      return result.items;
  })
})
export const fetchPollsData = createAsyncThunk('Polls/fetchPollsData',  (data:any) => {
  return proxy.pollGET2(data.id,undefined).then((result:any) =>{
      return result.items;
  })
})
export const UpdatePollsData = createAsyncThunk('Polls/UpdatePollsData',  (data:any) => {
  return proxy.pollPUT(data.id,data.body).then((result:any) =>{
      return result.items;
  })
})
const PollsSlice = createSlice({
  name: 'polls',
  initialState:PollsInitialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(GetPolls.pending, (state) => {
      state.loading = true
    });
    builder.addCase(GetPolls.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.GetPolls = action.payload
     
    });
  
    builder.addCase(deletePolls.pending, (state) => {
      state.loading = true
    
    });
    builder.addCase(deletePolls.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.error = ''
    });
    builder.addCase(deletePolls.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    }); 
    
    builder.addCase(SavePolls.pending, (state) => {
        state.loading = true
      });
    builder.addCase(SavePolls.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      
    });
    builder.addCase(SavePolls.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });

    builder.addCase(Widgets.pending, (state) => {
      state.loading = true
    });
  builder.addCase(Widgets.fulfilled, (state , action : PayloadAction<any>) =>{
    state.loading = false
    
  });
  builder.addCase(Widgets.rejected, (state , action) => {
    state.loading = false
    state.error = action.error.message || 'Something Went Wrong'
  });
    
    builder.addCase(UpdatePollsData.pending, (state) => {
        state.loading = true;
      });
    builder.addCase(UpdatePollsData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.error = ''
    });
    builder.addCase(UpdatePollsData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });
    
    builder.addCase(fetchPollsData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.fetchPolls = action.payload
      state.error = ''
    });
    builder.addCase(fetchPollsData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });
    builder.addCase(fetchPollsData.pending, (state) => {
      state.loading = true;
    });
  },
})

export default PollsSlice.reducer