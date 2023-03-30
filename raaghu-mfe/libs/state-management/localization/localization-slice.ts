import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import { getAppLocalization } from "raaghu-core";

type localInitialState = {
  localization: any;
  error: string;
  status: "pending" | "loading" | "error" | "success";
};
export const localInitialState: localInitialState = {
  localization: [],
  error: "",
  status: "pending",
};

let API_URL:string;
if (process.env.REACT_APP_API_URL !== undefined) {
 API_URL = process.env.REACT_APP_API_URL.toString();
}
export const fetchLocalization = createAsyncThunk(
  "Localization/fetchLocalization",
  (cultureName: any) => {
    return getAppLocalization({
      api_url: API_URL,
      cultureName: cultureName,
      onlyDynamics: false,
    }).then((result: any) => {
      return result;
    });
  }
);

const Localizationslice = createSlice({
  name: "Localization",
  initialState: localInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLocalization.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchLocalization.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.localization = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchLocalization.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message || "Something went wrong";
    });
  },
});
export default Localizationslice.reducer;
