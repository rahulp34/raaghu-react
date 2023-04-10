import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type pollsInitialState = {
  loading : boolean,
  error : string,
  GetPolls:any,
  resultData:any,
  fetchPollsEdit:any,
  alert: boolean;
  alertMessage: string;
  success: boolean;
}

const PollsInitialState : pollsInitialState = {
  loading : false,
 GetPolls:null, 
 resultData:null,
 fetchPollsEdit:null,
 error : "",
 alert: false,
 alertMessage: "",
 success: false,
}

const proxy = new ServiceProxy();

export const GetPolls = createAsyncThunk('Polls/GetPolls',() => {
    return proxy.pollGET(undefined,undefined,0,1000).then((result:any) =>{
      
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
      return result;
  })
})
export const fetchPollsData = createAsyncThunk('Polls/fetchPollsData',  (id:any) => {
  return proxy.pollGET2(id,undefined).then((result:any) =>{
      return result;
  })
})
export const resultData = createAsyncThunk('Polls/resultData',  (id:any) => {
  return proxy.result(id,undefined).then((result:any) =>{
      return result;
  })
})
export const UpdatePollsData = createAsyncThunk('Polls/UpdatePollsData',  (data:any) => {
  return proxy.pollPUT(data.id,data.body).then((result:any) =>{
      return result;
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
    builder.addCase(resultData.pending, (state) => {
      state.loading = true
    });
    builder.addCase(resultData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.resultData = action.payload
     
    });
  
    builder.addCase(deletePolls.pending, (state) => {
      state.loading = true
      state.error = "";
    });
    builder.addCase(deletePolls.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.error = ''
      state.alert = true;
      state.alertMessage = "Data deleted Successfully";
      state.success = true;
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
      state.alert = true;
        state.alertMessage = "Data added Successfully";
        state.success = true;
      
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
    state.alert = true;
    state.alertMessage = "Data copied successfully";
    state.success = true;
    
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
      state.alert = true;
      state.alertMessage = "Data edited successfully";
      state.success = true;
    });
    builder.addCase(UpdatePollsData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });
    
    builder.addCase(fetchPollsData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.fetchPollsEdit = action.payload
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