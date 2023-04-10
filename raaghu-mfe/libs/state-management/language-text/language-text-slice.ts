import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { LanguageTextsService } from "../../proxy/services/LanguageTextsService";
import { LanguagesService } from "../../proxy/services/LanguagesService";

type InitialState = {
  loading: boolean;
  languagesText: any;
  resources: any;
  languagesTextEdit: any;
  error: string;
};
export const languageTextState: InitialState = {
  loading: false,
  languagesText: [],
  resources: [],
  languagesTextEdit: {},
  error: "",
};

// Generates pending, fulfilled and rejected action types

export const fetchLanguagesText = createAsyncThunk(
  "languageText/fetchLanguagesText",
  async ({
    resourceName,
    baseCultureName,
    targetCultureName,
    getOnlyEmptyValues,
  }: {
    resourceName: any;
    baseCultureName: any;
    targetCultureName: any;
    getOnlyEmptyValues: any;
  }) => {
    return await LanguageTextsService.getLanguageTexts({
      filter: undefined,
      resourceName: resourceName,
      baseCultureName: baseCultureName,
      targetCultureName: targetCultureName,
      getOnlyEmptyValues: getOnlyEmptyValues,
      sorting: "id DESC",
      skipCount: 0,
      maxResultCount: 100,
    }).then((result: any) => {
      return result;
    });
  }
);

export const fetchResources = createAsyncThunk(
  "languageText/fetchResources",
  async () => {
    return await LanguagesService.getLanguagesResources().then((result: any) => {
      return result;
    });
  }
);

export const putLanguages = createAsyncThunk(
  "languageText/putLanguages",
  async ({
    resourceName,
    cultureName,
    Name,
    value,
  }: {
    resourceName: any;
    cultureName: any;
    Name: any;
    value: any;
  }) => {
    return await LanguageTextsService
      .putLanguageTexts({resourceName:resourceName, cultureName:cultureName, name:Name, value:value})
      .then((result: any) => {
        return result;
      });
  }
);

export const restore = createAsyncThunk(
  "languageText/restore",
  async ({
    resourceName,
    cultureName,
    Name,
  }: {
    resourceName: any;
    cultureName: any;
    Name: any;
  }) => {
    return await LanguageTextsService
      .putLanguageTextsRestore({resourceName:resourceName, cultureName:cultureName, name:Name})
      .then((result: any) => {
        return result;
      });
  }
);

const languageTextSlice = createSlice({
  name: "languageText",
  initialState: languageTextState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLanguagesText.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchLanguagesText.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.languagesText = action.payload;
        state.error = "";
      }
    );

    builder.addCase(fetchLanguagesText.rejected, (state, action) => {
      state.loading = false;
      state.languagesText = [];
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(fetchResources.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchResources.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.resources = action.payload;
        state.error = "";
      }
    );

    builder.addCase(fetchResources.rejected, (state, action) => {
      state.loading = false;
      state.resources = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default languageTextSlice.reducer;
