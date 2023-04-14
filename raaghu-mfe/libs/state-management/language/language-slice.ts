import { PostLanguage } from './language-models';
import {
  createSlice,
  createAsyncThunk, 
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import axios from "axios";

import { LanguagesService } from '../../proxy';

type InitialState = {
  loading: boolean;
  languages: any;
  cultureList:any;
  error: string;
};


export const initialState: InitialState = {
  loading: false,
  languages: {},
  cultureList :{},
  error: "",
};

// Generates pending, fulfilled and rejected action types

export const fetchLanguages = createAsyncThunk(
  "language/fetchLanguages",
  async () => {
    return await LanguagesService.getLanguages({filter:undefined,  resourceName:undefined,  baseCultureName:undefined,  targetCultureName:undefined, getOnlyEmptyValues: undefined,sorting: 'id DESC', skipCount:undefined, maxResultCount:1000}).then((result:any)=>{
      return result
    })

  }
);
export const fetchCultureList = createAsyncThunk(
  "language/fetchCultureList",
  async () => {
    return await LanguagesService.getLanguagesCultureList().then((result:any)=>{
      return result
    })

  }
);


export const postNewLanguage= createAsyncThunk(
  "language/postNewLanguage",
 (cultureModel:any) => {
    return LanguagesService.postLanguages({requestBody:cultureModel}).then((result:any)=>{
     return result
    })
  }
);



export const deleteLanguage= createAsyncThunk(
  "language/deleteLanguage",
 (id:any) => {
    return LanguagesService.deleteLanguages({id:id}).then((result:any)=>{
     return result
    })
  }
);
export const defaultLanguage= createAsyncThunk(
  "language/defaultLanguage",
 (id:any) => {
    return LanguagesService.putLanguagesSetAsDefault({id:id}).then((result:any)=>{
     return result
    })
  }
);
export const updateLanguage= createAsyncThunk(
  "language/updateLanguage",
  ({idd, model}:{idd:any, model:any}) => {
    return LanguagesService.putLanguages({id:idd,requestBody:model}).then((result:any)=>{
     return result
    })
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
      state.languages = {};
      state.error = action.error.message || "Something went wrong";
    });






    builder.addCase(postNewLanguage.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      postNewLanguage.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.languages = action.payload;
        state.error = "";
      }
    );

    builder.addCase(postNewLanguage.rejected, (state, action) => {
      state.loading = false;
      state.languages = {};
      state.error = action.error.message || "Something went wrong";
    });





    builder.addCase(deleteLanguage.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      deleteLanguage.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.languages = action.payload;
        state.error = "";
      }
    );

    builder.addCase(deleteLanguage.rejected, (state, action) => {
      state.loading = false;
      state.languages = {};
      state.error = action.error.message || "Something went wrong";
    });






    builder.addCase(fetchCultureList.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchCultureList.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.cultureList = action.payload;
        state.error = "";
      }
    );

    builder.addCase(fetchCultureList.rejected, (state, action) => {
      state.loading = false;
      state.cultureList = {};
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default languageSlice.reducer;
