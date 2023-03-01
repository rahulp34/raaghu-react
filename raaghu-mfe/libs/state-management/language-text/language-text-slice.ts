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

import {ServiceProxy} from '../../shared/service-proxy'

type InitialState = {
  loading: boolean;
  languagesText: any;
  resources:any;
  languagesTextEdit:any;
  error: string;
};
export const languageTextState: InitialState = {
  loading: false,
  languagesText: [],
  resources:[],
  languagesTextEdit:{},
  error: "",
};

// Generates pending, fulfilled and rejected action types

const proxy = new ServiceProxy()

export const fetchLanguagesText = createAsyncThunk(
  "languageText/fetchLanguagesText",
  async ({resourceName,baseCultureName,targetCultureName,getOnlyEmptyValues}:{resourceName:any, baseCultureName:any,targetCultureName:any, getOnlyEmptyValues:any}) => {
    return await proxy.languageTextsGET(undefined,resourceName, baseCultureName, targetCultureName, getOnlyEmptyValues,  undefined,  0 , 100,  undefined).then((result:any)=>{
      return result;
    })
  }
);

export const fetchResources = createAsyncThunk(
  "languageText/fetchResources",
  async ()=>{
    return await proxy.resources().then((result:any)=>{
      return result
    })
  }
)

export const putLanguages = createAsyncThunk(
  "languageText/putLanguages",
  async({resourceName, cultureName, Name , value}:{resourceName:any , cultureName:any, Name:any, value:any})=>{
    return await proxy.languageTextsPUT(resourceName, cultureName, Name, value, undefined).then((result:any)=>{
      return result
    })
  }
)




export const restore = createAsyncThunk(
  "languageText/restore",
  async ({resourceName, cultureName, Name}:{resourceName:any , cultureName:any, Name:any})=>{
    return await proxy.restore(resourceName, cultureName, Name,  undefined).then((result:any)=>{
      return result
    })
  }
)




const languageTextSlice = createSlice({
  name: "languageText",
  initialState:languageTextState,
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
