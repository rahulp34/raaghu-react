import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";
import { useAppDispatch } from "../../state-management/hooks";
type InitialState = {
  loading: boolean;
  users: any;
  error: string;
  alert: boolean;
  alertMessage: string;
  success: boolean;
  featureIdentitySettings: any;
};

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
  alert: false,
  alertMessage: "",
  success: false,
  featureIdentitySettings: null,
};

const proxy = new ServiceProxy();

export const fetchEditionData = createAsyncThunk(
  "edition/fetchEditionData",
  () => {
    return proxy.editionsGET2(undefined, 'id DESC', undefined, 1000).then((result) => {
      console.log("result", result);
      return result;
    });
  }
);

export const deleteEditionData = createAsyncThunk(
  "edition/deleteEditionData",
  (id: any) => {
    return proxy.editionsDELETE(id).then((result) => {
      return result;
    });
  }
);

export const addEditionData = createAsyncThunk(
  "edition/addEditionData",
  (value: any) => {
    return proxy.editionsPOST(value).then((result) => {
      return result;
    });
  }
);

export const editEditionData = createAsyncThunk(
  "edition/editEditionData",
  ({ id, dTo }: { id: any; dTo: any }) => {
    return proxy.editionsPUT(id, dTo).then((result) => {
      return result;
    });
  }
);

export const fetchFeaturesEdition = createAsyncThunk(
  "edition/fetchFeaturesEdition",
  (id: any) => { 
    return proxy.featuresGET("E", id, undefined).then((result: any) => {
      return result;
    });
  }
);
export const saveFeaturesEdition = createAsyncThunk(
  "edition/saveFeaturesEdition",
  (data: any) => { 
    return proxy.featuresPUT("E", data.id, data.body).then((result: any) => {
      return result;
    });
  }
);
export const restoreToDefaultFeaturesEdition = createAsyncThunk(
  "edition/restoreToDefaultFeaturesEdition",
  (id: any) => { 
    return proxy.featuresDELETE("E", id, undefined).then((result: any) => {
      return result;
    });
  }
);

const editionSlice: any = createSlice({
  name: "edition",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEditionData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchEditionData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchEditionData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(deleteEditionData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      deleteEditionData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data deleted Successfully";
        state.success = true;
      }
    );
    builder.addCase(deleteEditionData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something went wrong";
      state.success = false;
    });

    builder.addCase(addEditionData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      addEditionData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data added Successfully";
        state.success = true;
      }
    );
    builder.addCase(addEditionData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

    builder.addCase(editEditionData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      editEditionData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data edited successfully";
        state.success = true;
      }
    );
    builder.addCase(editEditionData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

    builder.addCase(fetchFeaturesEdition.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchFeaturesEdition.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.featureIdentitySettings = action.payload;
      }
    );
    builder.addCase(fetchFeaturesEdition.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(saveFeaturesEdition.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      saveFeaturesEdition.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.featureIdentitySettings = action.payload;
      }
    );
    builder.addCase(saveFeaturesEdition.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(restoreToDefaultFeaturesEdition.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      restoreToDefaultFeaturesEdition.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.featureIdentitySettings = action.payload;
      }
    );
    builder.addCase(
      restoreToDefaultFeaturesEdition.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      }
    );
  },
});

export default editionSlice.reducer;
