import { createSlice, createAsyncThunk, PayloadAction, createAction} from "@reduxjs/toolkit";
import {AbpApplicationConfigurationService} from "../../proxy/services/AbpApplicationConfigurationService"

type hostInitialState = {
  loading : boolean,
  configuration : any,
  callLogin:any
  error : string,
}

const hostInitialState : hostInitialState = {
  loading : false,
  configuration : null,
  callLogin:null,
  error : "",
}


export const fetchApplicationConfig = createAsyncThunk('host/fetchApplicationConfig',() => {
    return AbpApplicationConfigurationService.getApplicationConfiguration({includeLocalizationResources:false}).then((result:any) =>{
        console.log("result",result)
        return result
    })
})
export const callLoginAction = createAction<any>('host/callLoginAction');



const hostSlice = createSlice({
  name: 'host',
  initialState:hostInitialState,
  reducers:{
    callLoginAction: (state, action: PayloadAction<any>) => {
      
      state.callLogin = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApplicationConfig.pending, (state) => {
      state.loading = true
    });
    builder.addCase(fetchApplicationConfig.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.configuration = action.payload
      state.error = ''
    });
    builder.addCase(fetchApplicationConfig.rejected, (state , action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });
  },
})


export default hostSlice.reducer