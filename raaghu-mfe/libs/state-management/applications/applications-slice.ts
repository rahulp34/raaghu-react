import { createSlice, createAsyncThunk, PayloadAction, AnyAction, } from "@reduxjs/toolkit";
import {ServiceProxy} from '../../shared/service-proxy'

type InitialStateApplication = {
  loading: boolean;
  applications: any;
  error: string;
}; 

export const InitialStateApplication:InitialStateApplication= {
  loading: false,
  applications: null,
  error: ""
};

// Generates pending, fulfilled and rejected action types
const proxy = new ServiceProxy();

//effects and actions
export const fetchApplications = createAsyncThunk("applications/fetchApplications", () => {
  return proxy.applicationsGET2(undefined, undefined, 0, 30, undefined).then((result:any)=>{
     return result;
  }) 
});

export const deleteApplications = createAsyncThunk("applications/deleteApplications", (id:string) => {
  return proxy.applicationsDELETE(id,undefined,).then((result:any)=>{
     return result;
  }) 
});

//reducer
const applicationsSlice = createSlice({
  name: "applications",
  initialState :InitialStateApplication, 
  reducers: {},

  extraReducers: (builder) => {
    //get
    builder.addCase(fetchApplications.pending, (state) => {
      state.loading = true;
    }); 

    builder.addCase(
      fetchApplications.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.applications= action.payload;
      }  
    );
    builder.addCase(fetchApplications.rejected, (state, action) => { 
      state.loading = false; 
      state.error = action.error.message || "Something went wrong"; 
    }); 

    //delete
    builder.addCase(
      deleteApplications.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.applications= action.payload;
      }  
    );
  }, 
});



export default applicationsSlice.reducer;
