import { createSlice, createAsyncThunk, PayloadAction, AnyAction, } from "@reduxjs/toolkit";
import {ServiceProxy, UpdatePermissionsDto} from '../../shared/service-proxy'

type InitialStateApplication = {
  loading: boolean;
  applications: any;
  editApplication:any;
  scopes:any;
  permission:any;
  error: string;
  alert: boolean;
  alertMessage: string;
  success: boolean;
}; 

export const InitialStateApplication:InitialStateApplication= {
  loading: false,
  applications: null,
  editApplication:null,
  error: "",
  scopes: null,
  permission:null,
  alert: false,
  alertMessage: "",
  success: false,
};

// Generates pending, fulfilled and rejected action types
const proxy = new ServiceProxy();

//effects and actions
export const fetchApplications = createAsyncThunk("applications/fetchApplications", () => {
  return proxy.applicationsGET2(undefined, 'id DESC', 0, 30, undefined).then((result:any)=>{
     return result;
  }) 
});

export const deleteApplications = createAsyncThunk("applications/deleteApplications", (id:string) => {
  return proxy.applicationsDELETE(id,undefined,).then((result:any)=>{
     return result;
  }) 
});

export const saveApplications = createAsyncThunk("applications/saveApplications", (data:any) => {
  return proxy.applicationsPOST(data,undefined).then((result:any)=>{
     return result;
  }) 
});

export const updateApplications = createAsyncThunk("applications/updateApplications", (data:any) => {
  return proxy.applicationsPUT(data.id, data.body,undefined).then((result:any)=>{
     return result;
  }) 
});

export const getApplications = createAsyncThunk("applications/getApplications", (id:string) => {
  return proxy.applicationsGET(id,undefined).then((result:any)=>{
     return result;
  }) 
});

export const getScopes = createAsyncThunk("applications/getScopes", () => {
  return proxy.allAll(undefined).then((result:any)=>{
     return result;
  }) 
});

export const getPermission = createAsyncThunk("applications/getPermission", (key:string) => {
  return proxy.permissionsGET("C",key,undefined).then((result:any)=>{
     return result;
  }) 
});

export const updatePermission = createAsyncThunk("applications/updatePermission", (data:any) => {
  return proxy.permissionsPUT("C",data.key,data.permissions,undefined).then((result:any)=>{
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
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data deleted Successfully";
        state.success = true;
      }  
    );

    //Save
    builder.addCase(saveApplications.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      saveApplications.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data added Successfully";
        state.success = true;
      }
    );
    builder.addCase(saveApplications.rejected,(state,action)=>{
      state.loading=false;
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

    //update
    builder.addCase(updateApplications.pending,(state)=>{
      state.loading=true;
      state.error = "";    
    });

    builder.addCase(
      updateApplications.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.alert = true;
        state.alertMessage = "Data edited successfully";
        state.success = true;
      }
    );
    builder.addCase(updateApplications.rejected,(state,action)=>{
      state.loading=false;
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

    //getUpdate
    builder.addCase(getApplications.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      getApplications.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.editApplication=action.payload;
      }
    );
    builder.addCase(getApplications.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message||"Somethingwentwrong";
    });


    //getScopes
    builder.addCase(getScopes.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      getScopes.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.scopes=action.payload;
      }
    );
    builder.addCase(getScopes.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message||"Somethingwentwrong";
    });

    //permissions

    builder.addCase(getPermission.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      getPermission.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.permission=action.payload;
      }
    );
    builder.addCase(getPermission.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message||"Somethingwentwrong";
    });

    //updatePermission
    builder.addCase(updatePermission.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      updatePermission.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.alert = true;
        state.alertMessage = "Data edited successfully";
        state.success = true;
      }
    );
    builder.addCase(updatePermission.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message||"Somethingwentwrong";
    });
  }, 
});


export default applicationsSlice.reducer;
