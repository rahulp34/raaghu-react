import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

type InitialState = {
  loading: boolean;
  languagesForEdit: any[];
  error: string;
};
export const initialState: InitialState = {
  loading: false,
  languagesForEdit: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types

// var credentials = localStorage.getItem("LoginCredential");
// if (credentials) {
//   var parsedCredentials = JSON.parse(credentials);
// }

export const fetchLanguageForEdit = createAsyncThunk(
  "language/fetchLanguageForEdit",
  () => {
    return axios
      .get(
        "https://anzdemoapi.raaghu.io/api/services/app/Language/GetLanguageForEdit?",
        {
          // headers: {
          //   Authorization: "Bearer " + parsedCredentials.token, //the token is a variable which holds the token
          // },
        }
      )
      .then((response) =>response.data.result.map((item: any) => {
          console.log("hello")
          return {
            languageName: item.languageName,
            flags: item.flags,
            language: item.language,
          };
        })
      );
  }
);

const languageEditSlice = createSlice({
  name: "languageEdit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLanguageForEdit.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchLanguageForEdit.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.languagesForEdit = action.payload;
        state.error = "";
      }
    );

    builder.addCase(fetchLanguageForEdit.rejected, (state, action) => {
      state.loading = false;
      state.languagesForEdit = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default languageEditSlice.reducer;
