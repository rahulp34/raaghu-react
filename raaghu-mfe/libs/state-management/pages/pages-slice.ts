
import { createSlice, createAsyncThunk, PayloadAction, } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

export interface pagesInitialState {
  loading: boolean;
  pagesData: any;
  error: string;
};

export const pagesState: pagesInitialState = {
  loading: false,
  pagesData: {},
  error: "",
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
      }
    );
    builder.addCase(fetchPagesData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  }
})

export default pagesSlice.reducer;
