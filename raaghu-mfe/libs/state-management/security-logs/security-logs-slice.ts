import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { ServiceProxy } from "../../shared/service-proxy";

export interface SecurityLogsState {
  loading: boolean;
  securityLogs: any;
  error: string;
};

export const securityLogsState: SecurityLogsState = {
  loading: false,
  securityLogs:null,
  error: "",
};

const IdentityService = new ServiceProxy();

export const fetchSecurityLogs = createAsyncThunk(
  "securityLogs/fetchSecurityLogs",  (data:any) => {   
    let date = new Date(data.creationTime);     
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    // console.log('time :' ,day,month,year)
    let currentTime = date.toLocaleString("en-IN", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });    
     let currentDate = `${year}-${month}-${day}, ${currentTime}`;  
    console.log('time :' ,currentDate)
    return IdentityService.securityLogs2(data?.startDate,
      data?.endDate,
      data?.applicationName,
      data?.identity,
      data?.action,
      data?.userName,
      data?.clientId,
      data?.correlationId,
      data?.sorting,
      0,
      1000,
      data?.cancelToken);   
})




const securityLogs = createSlice({
  name: "securityLogs",
  initialState: securityLogsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSecurityLogs.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchSecurityLogs.fulfilled,
      (state, action: PayloadAction<any>) => {
        console.log({actionPayload: action});
        state.loading = false;
        state.securityLogs = action.payload;
        state.error = "";
      }
    );

    builder.addCase(fetchSecurityLogs.rejected, (state, action) => {
      state.loading = false;
      state.securityLogs = {items: [],totalCount:''};
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default securityLogs.reducer;
