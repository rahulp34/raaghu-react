import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit"; 
import axios from "axios";
import {
  LanguageServiceProxy,
  GetLanguagesOutput,
} from "../../shared/service-proxies";

type InitialState = {
  loading: boolean;
  languages: { defaultLanguageName: string; items: any[] };
  error: string;
};
export const initialState: InitialState = {
  loading: false,
  languages: { defaultLanguageName: "", items: [] },
  error: "",
};

// Generates pending, fulfilled and rejected action types

var credentials = localStorage.getItem("LoginCredential");
if (credentials) {
  var parsedCredentials = JSON.parse(credentials);
}

export const fetchLanguages = createAsyncThunk(
  "language/fetchLanguages",
  () => {
    return axios
      .get(
        "https://anzdemoapi.raaghu.io/api/services/app/Language/GetLanguages",
        {
          headers: {
            Authorization: "Bearer " + parsedCredentials.token, //the token is a variable which holds the token
          },
        }
      )
      .then(
        (response) => response.data.result
      );
  }
);

export const creatUpdateLanguages = createAsyncThunk(
  "language/fetchLanguages",
  (body:any) => {
    const content_ = JSON.stringify(body);
    return axios
      .put(
        "https://anzdemoapi.raaghu.io/api/services/app/Language/CreateOrUpdateLanguage",
        {
          body: content_,
          headers: {
            Authorization: "Bearer " + parsedCredentials.token, //the token is a variable which holds the token
          },
        }
      )
      .then(
        (response) => response.data.result
      );
  }
);

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLanguages.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchLanguages.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.languages = action.payload;
        state.error = "";
      }
    );

    builder.addCase(fetchLanguages.rejected, (state, action) => {
      state.loading = false;
      state.languages = { defaultLanguageName: '', items: [] };
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default languageSlice.reducer;
