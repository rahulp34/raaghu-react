import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createAction,
} from "@reduxjs/toolkit";
import { AbpApplicationConfigurationService } from "../../proxy/services/AbpApplicationConfigurationService";
import { AccountService } from "../../proxy/services/AccountService";

type hostInitialState = {
  loading: boolean;
  configuration: any;
  callLogin: any;
  profilepic: any;
  error: string;
  invalidCredential: any;
  getProfilePicData: any;
};

const hostInitialState: hostInitialState = {
  loading: false,
  configuration: null,
  callLogin: null,
  profilepic: null,
  invalidCredential: { invalid: false, message: "" },
  getProfilePicData: null,
  error: "",
};

export const callLoginAction = createAction<any>("host/callLoginAction");
export const invalidCredentialAction = createAction<any>(
  "host/invalidCredentialAction"
);
export const setPicSideNav = createAction<any>("host/setPicSideNav");
export const getProfilePictureHost = createAsyncThunk(
  "host/getProfilePictureHost",
  (id: any) => {
    return AccountService.getProfilePicture({ id }).then((result: any) => {
      return result;
    });
  }
);

const hostSlice = createSlice({
  name: "host",
  initialState: hostInitialState,
  reducers: {
    callLoginAction: (state: any, action: PayloadAction<any>) => {
      state.callLogin = action.payload;
    },
    invalidCredentialAction: (state: any, action: PayloadAction<any>) => {
      state.invalidCredential = action.payload;
    },
    setPicSideNav: (state: any, action: PayloadAction<any>) => {
      state.profilepic = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfilePictureHost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      getProfilePictureHost.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.profilepic = action.payload;
      }
    );
    builder.addCase(getProfilePictureHost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default hostSlice.reducer;
