import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type UrlForwardingInitialState = {
  loading : boolean,
  urlShortings : any,
  error : string,
  editUrlShortings:any,
}

const UrlForwardingInitialState : UrlForwardingInitialState = {
  loading : false,
  urlShortings : null,
  editUrlShortings:{},
  error : "",
}

const proxy =new ServiceProxy();

export const fetchUrlShortingsData = createAsyncThunk('urlForwardingSlice/fetchUrlShortingsData',() => {
    return proxy.urlShortingGET('','',0,1000).then((result:any) =>{
        console.log("result",result)
        return result
    })
})

export const editUrlShortingsData = createAsyncThunk('urlForwardingSlice/editUrlShortingsData',(id:any) => {
  return proxy.urlShortingGET2(id).then((result:any) =>{
      console.log("result",result)
      return result
  })
})

export const deleteurlShortingData = createAsyncThunk('urlForwardingSlice/deleteurlShortingData',  (id:any) => {
  return proxy.urlShortingDELETE(id).then((result:any) =>{
      return result
  })
})

export const saveUrlShortingData = createAsyncThunk('urlForwardingSlice/saveUrlShortingData',  (data:any) => {
  return proxy.urlShortingPOST(data).then((result:any) =>{
      return result.items;
  })
})

export const updateUrlShortingData = createAsyncThunk('urlForwardingSlice/updateUrlShortingData',  (data:any) => {
  return proxy.urlShortingPUT(data.id,data.body).then((result:any) =>{
      return result.items;
  })
})

const urlForwardingSlice = createSlice({
  name: 'urlForwarding',
  initialState:UrlForwardingInitialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchUrlShortingsData.pending, (state) => {
      state.loading = true
    });
    builder.addCase(fetchUrlShortingsData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.urlShortings = action.payload
      state.error = ''
    });
    builder.addCase(fetchUrlShortingsData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });

    builder.addCase(deleteurlShortingData.pending, (state) => {
      state.loading = true
    
    });
    builder.addCase(deleteurlShortingData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.error = ''
    });
    builder.addCase(deleteurlShortingData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    }); 
    
    builder.addCase(saveUrlShortingData.pending, (state) => {
        state.loading = true
      });
    builder.addCase(saveUrlShortingData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.error = ''
    });
    builder.addCase(saveUrlShortingData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });
    
    builder.addCase(updateUrlShortingData.pending, (state) => {
        state.loading = true;
      });
    builder.addCase(updateUrlShortingData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.error = ''
    });
    builder.addCase(updateUrlShortingData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });
    
    builder.addCase(editUrlShortingsData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.editUrlShortings = action.payload
      state.error = ''
    });
    builder.addCase(editUrlShortingsData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });
    builder.addCase(editUrlShortingsData.pending, (state) => {
      state.loading = true;
    });
  },
})

export default urlForwardingSlice.reducer