import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";
import { useAppDispatch } from "../../state-management/hooks";
type InitialState = {
  loading: boolean;
  blogs: any;
  error: string;
  alert: boolean;
  alertMessage: string;
  success: boolean;
  featureIdentitySettings: any;
};

const initialState: InitialState = {
  loading: false,
  blogs: [],
  error: "",
  alert: false,
  alertMessage: "",
  success: false,
  featureIdentitySettings: null,
};

const proxy = new ServiceProxy();

export const fetchBlogsData = createAsyncThunk(
  "blogs/fetchBlogsData",
  () => {
    debugger
    return proxy.blogsGET2(undefined, undefined, 10, 5,  undefined).then((result) => {
      console.log("resultblog", result);
      return result;
    });
  }
);

// export const deleteEditionData = createAsyncThunk(
//   "edition/deleteEditionData",
//   (id: any) => {
//     return proxy.editionsDELETE(id).then((result) => {
//       return result;
//     });
//   }
// );

export const addBlogsData = createAsyncThunk(
  "blogs/addBlogsData",
  (data: any) => {
    return proxy.blogsPOST(data.data).then((result) => {
      return result;
    });
  }
);

export const editBlogsData = createAsyncThunk(
  "edition/editBlogsData",
  ({ id, dTo }: { id: any; dTo: any }) => {
    return proxy.blogPostsPUT(id, dTo).then((result) => {
      return result;
    });
  }
);

// export const fetchFeaturesEdition = createAsyncThunk(
//   "edition/fetchFeaturesEdition",
//   (id: any) => { 
//     return proxy.featuresGET("E", id, undefined).then((result: any) => {
//       return result;
//     });
//   }
// );
// export const saveFeaturesEdition = createAsyncThunk(
//   "edition/saveFeaturesEdition",
//   (data: any) => { 
//     return proxy.featuresPUT("E", data.id, data.body).then((result: any) => {
//       return result;
//     });
//   }
// );
// export const restoreToDefaultFeaturesEdition = createAsyncThunk(
//   "edition/restoreToDefaultFeaturesEdition",
//   (id: any) => { 
//     return proxy.featuresDELETE("E", id, undefined).then((result: any) => {
//       return result;
//     });
//   }
// );

const blogsSlice: any = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBlogsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchBlogsData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.blogs = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchBlogsData.rejected, (state, action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    // builder.addCase(deleteEditionData.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(
    //   deleteEditionData.fulfilled,
    //   (state, action: PayloadAction<any>) => {
    //     state.loading = false;
    //     state.blogs = action.payload;
    //     state.error = "";
    //     state.alert = true;
    //     state.alertMessage = "Data deleted Successfully";
    //     state.success = true;
    //   }
    // );
    // builder.addCase(deleteEditionData.rejected, (state, action) => {
    //   state.loading = false;
    //   state.blogs = [];
    //   state.error = action.error.message || "Something Went Wrong";
    //   state.alert = true;
    //   state.alertMessage = "Something went wrong";
    //   state.success = false;
    // });

    builder.addCase(addBlogsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      addBlogsData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.blogs = action.payload;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data added Successfully";
        state.success = true;
      }
    );
    builder.addCase(addBlogsData.rejected, (state, action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });


    builder.addCase(editBlogsData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      editBlogsData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.blogs = action.payload;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data edited successfully";
        state.success = true;
      }
    );
    builder.addCase(editBlogsData.rejected, (state, action) => {
      state.loading = false;
      state.blogs = [];
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

    // builder.addCase(fetchFeaturesEdition.pending, (state) => {
    //   state.loading = true;
    // });

    // builder.addCase(
    //   fetchFeaturesEdition.fulfilled,
    //   (state, action: PayloadAction<any>) => {
    //     state.loading = false;
    //     state.featureIdentitySettings = action.payload;
    //   }
    // );
    // builder.addCase(fetchFeaturesEdition.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message || "Something went wrong";
    // });

    // builder.addCase(saveFeaturesEdition.pending, (state) => {
    //   state.loading = true;
    // });

    // builder.addCase(
    //   saveFeaturesEdition.fulfilled,
    //   (state, action: PayloadAction<any>) => {
    //     state.loading = false;
    //     state.featureIdentitySettings = action.payload;
    //   }
    // );
    // builder.addCase(saveFeaturesEdition.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message || "Something went wrong";
    // });

    // builder.addCase(restoreToDefaultFeaturesEdition.pending, (state) => {
    //   state.loading = true;
    // });

    // builder.addCase(
    //   restoreToDefaultFeaturesEdition.fulfilled,
    //   (state, action: PayloadAction<any>) => {
    //     state.loading = false;
    //     state.featureIdentitySettings = action.payload;
    //   }
    // );
    // builder.addCase(
    //   restoreToDefaultFeaturesEdition.rejected,
    //   (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message || "Something went wrong";
    //   }
    // );
  },
});

export default blogsSlice.reducer;
