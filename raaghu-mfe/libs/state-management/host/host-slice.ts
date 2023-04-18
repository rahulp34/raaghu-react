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
  },
})


export default hostSlice.reducer