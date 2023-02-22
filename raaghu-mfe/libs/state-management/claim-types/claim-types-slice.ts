import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type InitialState = {
  loading: boolean;
  users: any[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

const proxy = new ServiceProxy();

export const fetchClaimTypesData = createAsyncThunk(
  "claimTypes/fetchClaimTypesData",
  () => {
    return proxy
      .claimTypesGET(undefined, undefined, undefined, undefined)
      .then((result: any) => {
        console.log("result ClaimType", result);
        return result.items;
      });
  }
);

export const deleteClaimTypesData = createAsyncThunk(
  "claimTypes/deleteClaimTypesData",
  (id: any) => {
    return proxy.claimTypesDELETE(id!).then((result: any) => {
      return result.items;
    });
  }
);

export const addClaimTypesData = createAsyncThunk(
  "claimTypes/addClaimTypesData",
  (claimTypeDto: any) => {
    return proxy.claimTypesPOST(claimTypeDto).then((result:any)=>{
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
      }
    );
    builder.addCase(deleteClaimTypesData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
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
      }
    );
    builder.addCase(addClaimTypesData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
    });
  },
});

export default claimTypesSlice.reducer;
