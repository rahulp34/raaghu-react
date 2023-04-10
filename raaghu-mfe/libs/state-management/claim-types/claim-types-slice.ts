import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ClaimTypeService } from "../../proxy/services/ClaimTypeService";

type InitialState = {
  loading: boolean;
  users: any[];
  error: string;
  alert: boolean;
  alertMessage: string;
  success: boolean;
  editClaimsData:any[];
};

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
  alert: false,
  alertMessage: "",
  success: false,
  editClaimsData:[]
};

export const fetchClaimTypesData = createAsyncThunk(
  "claimTypes/fetchClaimTypesData",
  () => { 
    return ClaimTypeService
      .getClaimTypes({filter:undefined, sorting:'id DESC', skipCount:undefined, maxResultCount:undefined})
      .then((result: any) => {
        console.log("result ClaimType", result);
        return result.items;
      });
  }
);

export const deleteClaimTypesData = createAsyncThunk(
  "claimTypes/deleteClaimTypesData",
  (id: any) => {
    return ClaimTypeService.deleteClaimTypes(id!).then((result: any) => {
      return result.items;
    });
  }
);

export const addClaimTypesData = createAsyncThunk(
  "claimTypes/addClaimTypesData",
  (claimTypeDto: any) => {
    return ClaimTypeService.postClaimTypes(claimTypeDto).then((result:any)=>{
      return result.items;
    })
  }
);

export const getClaimTypesData = createAsyncThunk(
  "claimTypes/getClaimTypesData",
  (id:string) => {
    return ClaimTypeService.getClaimTypes1({id:id}).then((result:any)=>{
      return result;
    })
  }
);

export const editClaimTypesData = createAsyncThunk(
  "claimTypes/editClaimTypesData",
  ({id ,claimTypeDto}:{id: any, claimTypeDto: any}) => {
    return ClaimTypeService.putClaimTypes({id, requestBody:claimTypeDto}).then((result:any)=>{
      return result.items;
    })
  }
);

const claimTypesSlice = createSlice({
  name: "claimTypes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Data

    builder.addCase(fetchClaimTypesData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchClaimTypesData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchClaimTypesData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(deleteClaimTypesData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      deleteClaimTypesData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data deleted Successfully";
        state.success = true;
      }
    );
    builder.addCase(deleteClaimTypesData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Data deleted successfully";
      state.success = true;
    });

    builder.addCase(addClaimTypesData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      addClaimTypesData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data added Successfully";
        state.success = true;
      }
    );
    builder.addCase(addClaimTypesData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

    builder.addCase(editClaimTypesData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      editClaimTypesData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data edited successfully";
        state.success = true;
      }
    );
    builder.addCase(editClaimTypesData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

    builder.addCase(getClaimTypesData.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      getClaimTypesData.fulfilled,(state,action:PayloadAction<any>)=>{
        
        state.loading=false;
        state.editClaimsData=action.payload;
      }
    );
    builder.addCase(getClaimTypesData.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message||"Somethingwentwrong";
    });
  },
});

export default claimTypesSlice.reducer;
