import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface SecurityLogsState  {
    loading: boolean;
    securityLogs: any[];
    error: string;
  };

  export const securityLogsState: SecurityLogsState = {
    loading: false,
    securityLogs: [],
    error: "",
  };

  var credentials = localStorage.getItem("LoginCredential");
if (credentials) {
  var parsedCredentials = JSON.parse(credentials);
} 


export const fetchSecurityLogs = createAsyncThunk(
    "securityLogs/fetchSecurityLogs",
    () => {
        // return axios
        // .get(
        //     "https://anzdemoapi.raaghu.io/api/identity/security-logs",
        //     {
        //         headers:{
        //             Authorization: "Bearer " + parsedCredentials.token, //the token is a variable which holds the token
        //         },
        //     },
        // )
        // .then((response)=>
        //     response.data.result.items.map((item:any)=>{
        //         let date = new Date(item.creationTime);
        //         let day = date.getDate();
        //         let month = date.getMonth() + 1;
        //         let year = date.getFullYear();

        //         let currentTime = date.toLocaleString("en-IN", {
        //          hour: "numeric",
        //         minute: "numeric",
        //         second: "numeric",
        //         hour12: true,
        //     });      
            
        //     let currentDate = `${day}/${month}/${year}, ${currentTime}`;

        //     return {
        //         id:item.id,
        //         creationTime:item.currentDate,
        //         action:item.action,
        //         clientIpAddress:item.clientIpAddress,
        //         browserInfo:item.browserInfo,
        //         applicationName:item.applicationName,
        //         identity:item.identity,
        //         userName:item.userName
        //     }
        //     }
        //     ))
    }
    );


    const securityLogs = createSlice({
        name: "securityLogs",
        initialState:securityLogsState,
        reducers: {},
        extraReducers: (builder) => {
          builder.addCase(fetchSecurityLogs.pending, (state) => {
            state.loading = true;
          });
      
          builder.addCase(
            fetchSecurityLogs.fulfilled,
            (state, action: PayloadAction<any>) => {
              state.loading = false;
              state.securityLogs = action.payload;
              state.error = "";
            }
          );
      
          builder.addCase(fetchSecurityLogs.rejected, (state, action) => {
            state.loading = false;
            state.securityLogs = [];
            state.error = action.error.message || "Something went wrong";
          });
        },
      });

export default securityLogs.reducer;
      