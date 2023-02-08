import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
// import axios from "axios";
import {
  LanguageServiceProxy,
  GetLanguagesOutput,
} from "../../shared/service-proxies";

type InitialState = {
  loading: boolean;
  languagesEdit: { flags: any[]; language: string; languageName: any[] };
  error: string;
};
export const initialStateEdit: InitialState = {
  loading: false,
  languagesEdit: { flags: [], language: "", languageName: [] },
  error: "",
};

// Generates pending, fulfilled and rejected action types

var credentials = localStorage.getItem("LoginCredential");
if (credentials) {
  var parsedCredentials = JSON.parse(credentials);
}

export const fetchLanguagesEdit = createAsyncThunk(
  "languageEdit/fetchLanguagesEdit",
  () => {
    // return axios
    //   .get(
    //     "https://anzdemoapi.raaghu.io/api/services/app/Language/GetLanguageForEdit?",
    //     {
    //       headers: {
    //         Authorization: "Bearer " + parsedCredentials.token, //the token is a variable which holds the token
    //       },
    //     }
    //   )
    //   .then((response) => response.data.result);
  }
);

const languageEditSlice = createSlice({
  name: "languageEdit",
  initialState: initialStateEdit,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLanguagesEdit.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchLanguagesEdit.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.languagesEdit = action.payload;
        state.error = "";
      }
    );

    builder.addCase(fetchLanguagesEdit.rejected, (state, action) => {
      state.loading = false;
      state.languagesEdit = { flags: [], language: "", languageName: [] };
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default languageEditSlice.reducer;
