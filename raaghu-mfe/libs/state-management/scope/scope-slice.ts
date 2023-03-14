import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type ScopeInitialState = {
  loading : boolean,
  scopes : any,
  error : string,
  editScope:any,

}

const ScopeInitialState : ScopeInitialState = {
  loading : false,
  scopes : null,
  editScope:{},
  error : "",


}

const proxy =new ServiceProxy()

export const fetchScopeshData = createAsyncThunk('Scopes/fetchScopesData',() => {
    return proxy.apiScopesGET(undefined,undefined,undefined,1000).then((result:any) =>{
        console.log("result",result)
        return result
    })
})
export const editScopeshData = createAsyncThunk('Scopes/editScopeshData',(id:any) => {
  return proxy.apiScopesGET2(id).then((result:any) =>{
      console.log("result",result)
      return result
  })
})
export const deleteScopeshData = createAsyncThunk('Scopes/deleteScopeshData',  (id:any) => {

  return proxy.apiScopesDELETE(id).then((result:any) =>{
      return result
  })
})

export const saveScopesData = createAsyncThunk('Scopes/getScopesData',  (ScopeDto:any) => {

  return proxy.apiScopesPOST(ScopeDto).then((result:any) =>{
      return result.items;
  })
})

export const updateScopeshData = createAsyncThunk('Scopes/updateScopesData',  (data:any) => {

  return proxy.apiScopesPUT(data.id,data.body).then((result:any) =>{
      return result.items;
  })
})

const scopeHSlice = createSlice({
  name: 'ScopesH',
  initialState:ScopeInitialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchScopeshData.pending, (state) => {
      state.loading = true
    });
    builder.addCase(fetchScopeshData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.scopes = action.payload
      state.error = ''
    });
    builder.addCase(fetchScopeshData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });

    builder.addCase(deleteScopeshData.pending, (state) => {
      state.loading = true
    
    });
    builder.addCase(deleteScopeshData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.error = ''
    });
    builder.addCase(deleteScopeshData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
     
    });  
    builder.addCase(saveScopesData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.error = ''
     
    });
    builder.addCase(saveScopesData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
  
      
    });
    builder.addCase(saveScopesData.pending, (state) => {
      state.loading = true
    });
    builder.addCase(updateScopeshData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.error = ''

    });
    builder.addCase(updateScopeshData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'

    });
    builder.addCase(updateScopeshData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editScopeshData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.editScope = action.payload
      state.error = ''
    });
    builder.addCase(editScopeshData.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });
    builder.addCase(editScopeshData.pending, (state) => {
      state.loading = true;
    });
  },
})

export default scopeHSlice.reducer