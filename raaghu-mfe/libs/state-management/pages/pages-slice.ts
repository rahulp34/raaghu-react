
import { createSlice, createAsyncThunk, PayloadAction, } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

export interface pagesInitialState {
  loading: boolean;
  pagesData: any;
  error: string;
  pagesDataEdit: any[];
  alert: boolean;
  alertMessage: string;
  success: boolean;
};

export const pagesState: pagesInitialState = {
  loading: false,
  pagesData: {},
  error: "",
  pagesDataEdit: [],
  alert: false,
  alertMessage: "",
  success: false,
};

const pagesService = new ServiceProxy();

// Add your Api call here
export const fetchPagesData = createAsyncThunk(
  "pages/fetchPagesData", () => {
    return pagesService.pagesGET3(undefined, undefined, undefined, undefined, undefined).then((result: any) => {
      return result;
    })
  }
)

export const postPagesData = createAsyncThunk(
  "pages/postPagesData", (PageDto: any) => {
    return pagesService.pagesPOST(PageDto).then((result: any) => {
      console.log("test pagedata", result)
      return result.items;

    })
  }
)

export const deletePageData = createAsyncThunk(
  "pages/deletePageData",
  (id: any) => {
    return pagesService.pagesDELETE(id!).then((result: any) => {
      console.log("test pagedata delete", result)
     
      return result;
    });
  }
);

export const editPageData = createAsyncThunk(
  "pages/editPageData",
  ({ id, UpdatePageInputDto }: { id: any, UpdatePageInputDto: any }) => {
    return pagesService.pagesPUT(id, UpdatePageInputDto, undefined).then((result: any) => {
      return result.items;
    })
  }
)

export const fetchEditPagesData = createAsyncThunk(
  "pages/fetchEditPagesData",
  (id: string) => {
    return pagesService.pagesGET2(id, undefined).then((result: any) => {
      return result;
    })
  }
);

export const isHomePageChangeData = createAsyncThunk(
  "pages/isHomePageChangeData",
  ({ id }: { id: any}) => {
    return pagesService.setashomepage(id).then((result: any) => {
      return result.items;
    })
  }
)





const pagesSlice = createSlice({
  name: "pages",
  initialState: pagesState,
  reducers: {},
  extraReducers: (builder) => {
    // Add your extraReducers here
    builder.addCase(fetchPagesData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchPagesData.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.pagesData = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchPagesData.rejected, (state, action) => {
      state.loading = false;
      state.pagesData = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(postPagesData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      postPagesData.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.pagesData = action.payload;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data added Successfully";
        state.success = true;
      }
    );
    builder.addCase(postPagesData.rejected, (state, action) => {
      state.loading = false;
      state.pagesData = [];
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

    builder.addCase(deletePageData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      deletePageData.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.pagesData = action.payload;
        state.loading = false;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data deleted Successfully";
        state.success = true;
      }
    );
    builder.addCase(deletePageData.rejected, (state, action) => {
      state.loading = false;
      state.pagesData = [];
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Data deleted successfully";
      state.success = true;
    });

    builder.addCase(editPageData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      editPageData.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.pagesData = action.payload;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data edited successfully";
        state.success = true;
      }
    );
    builder.addCase(editPageData.rejected, (state, action) => {
       state.loading = false;
      state.pagesData = [];
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

    builder.addCase(fetchEditPagesData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchEditPagesData.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.pagesDataEdit = action.payload;
      }
    );
    builder.addCase(fetchEditPagesData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(isHomePageChangeData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      isHomePageChangeData.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.pagesData = action.payload;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data edited successfully";
        state.success = true;
      }
    );
    builder.addCase(isHomePageChangeData.rejected, (state, action) => {
       state.loading = false;
      state.pagesData = [];
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });
  }
})

export default pagesSlice.reducer;
