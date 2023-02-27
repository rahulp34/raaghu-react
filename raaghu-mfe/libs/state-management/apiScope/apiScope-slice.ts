import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type InitialState = {
  loading : boolean,
  users : any,
  error : string,
  editScope:any,

}

const initialState : InitialState = {
  loading : false,
  users : {},
  editScope:{},
  error : "",


}

const proxy =new ServiceProxy()

export const fetchScopesData = createAsyncThunk('Scopes/fetchScopesData',() => {
    return proxy.scopesGET2(undefined,undefined,undefined,1000).then((result:any) =>{
        console.log("result",result)
        return result
    })
})
export const editScopesData = createAsyncThunk('Scopes/editScopesData',(id:any) => {
  return proxy.scopesGET(id).then((result:any) =>{
      console.log("result",result)
      return result
  })
})
export const deleteScopesData = createAsyncThunk('Scopes/deleteScopesData',  (id:any) => {

  return proxy.scopesDELETE(id).then((result:any) =>{
      return result
  })
})

export const getScopesData = createAsyncThunk('Scopes/getScopesData',  (ScopeDto:any) => {

  return proxy.scopesPOST(ScopeDto).then((result:any) =>{
      return result.items;
  })
})

export const updateScopesData = createAsyncThunk('Scopes/updateScopesData',  ({id,updateScopeDto}:{id:any,updateScopeDto:any}) => {

  return proxy.scopesPUT(id,updateScopeDto).then((result:any) =>{
      return result.items;
  })
})

const scopeSlice = createSlice({
  name: 'Scopes',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(fetchScopesData.pending, (state) => {
      state.loading = true
    });
    builder.addCase(fetchScopesData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.users = action.payload
      state.error = ''
    });
    builder.addCase(fetchScopesData.rejected, (state , action) => {
      state.loading = false
      state.users = {}
      state.error = action.error.message || 'Something Went Wrong'
    });
    builder.addCase(deleteScopesData.pending, (state) => {
      state.loading = true
    
    });
    builder.addCase(deleteScopesData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.users = action.payload
      state.error = ''
    });
    builder.addCase(deleteScopesData.rejected, (state , action) => {
      state.loading = false
      state.users = {}
      state.error = action.error.message || 'Something Went Wrong'
     
    });  
    builder.addCase(getScopesData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.users = action.payload
      state.error = ''
     
    });
    builder.addCase(getScopesData.rejected, (state , action) => {
      state.loading = false
      state.users = {}
      state.error = action.error.message || 'Something Went Wrong'
  
      
    });
    builder.addCase(getScopesData.pending, (state) => {
      state.loading = true
    });
    builder.addCase(updateScopesData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.users = action.payload
      state.error = ''

    });
    builder.addCase(updateScopesData.rejected, (state , action) => {
      state.loading = false
      state.users = {}
      state.error = action.error.message || 'Something Went Wrong'

    });
    builder.addCase(updateScopesData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(editScopesData.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.editScope = action.payload
      state.error = ''
 
    });
    builder.addCase(editScopesData.rejected, (state , action) => {
      state.loading = false
      state.editScope = {}
      state.error = action.error.message || 'Something Went Wrong'
      
    });
    builder.addCase(editScopesData.pending, (state) => {
      state.loading = true;
      
    });
    
    
  },
})

export default scopeSlice.reducer