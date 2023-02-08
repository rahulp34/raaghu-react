import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import axiosInstance from "../axios-instance";
// import { AnyAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
import axios from "axios";
import {
  LanguageServiceProxy,
  GetLanguagesOutput,
} from "../../shared/service-proxies";

type InitialState = {
  loading: boolean;
  languages: any[];
  error: string;
};
export const initialState: InitialState = {
  loading: false,
  languages: [],
  error: "",
};

const getLanguage = new LanguageServiceProxy(); 

export const fetchLanguages = createAsyncThunk(
  "language/fetchLanguages",
  async () => {
    await getLanguage
      .getLanguages()
      .then((res) => {
        // Access data from resolved Promise
        // const getLang = new GetLanguagesOutput;
        console.log("promise hai ", res);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }
);

// const fetchLanguagesAction = (): AnyAction => ({
//   type: "language/fetchLanguages",
// });

// Generates pending, fulfilled and rejected action types

// const getEdition =  new EditionServiceProxy();

// export const fetchLanguages = createAsyncThunk(
//   "language/fetchLanguages",
//   () => {
//     return axiosInstance
//       .get("/api/services/app/Language/GetLanguages")

//       .then((response) =>
//         response.data.result.items.map((item: any) => {
//           let date = new Date(item.creationTime);
//           let day = date.getDate();
//           let month = date.getMonth() + 1;
//           let year = date.getFullYear();
//           console.log("hello");
//           let currentTime = date.toLocaleString("en-IN", {
//             hour: "numeric",
//             minute: "numeric",
//             second: "numeric",
//             hour12: true,
//           });

//           let currentDate = `${day}/${month}/${year}, ${currentTime}`;

//           return {
//             id: item.id,
//             languageName: item.displayName,
//             code: item.name,
//             isenabled: item.isDisabled ? "False" : "True",
//             creationTime: currentDate,
//           };
//         })
//       );
//     // console.log(
//     //   "hello this is new data",
//     //   resp.data.result.items.map((item: any) => ({
//     //     id: item.id,
//     //     languageName: item.languageName,
//     //     code: item.name,
//     //     isenabled: !item.isDisabled,
//     //     creationTime: item.creationTime,
//     //   }))
//     // );
//   }

//   // async () => {
//   //   console.log("Hi from API via Slice")
//   //   const result = await getLanguage.getLanguages();
//   //   return result;
//   // }
// );

// export const fetchLanguageForEdit = createAsyncThunk(
//   "language/fetchLanguageForEdit",
//   () => {
//     return axios
//       .post(
//         "https://anzdemoapi.raaghu.io/api/services/app/Language/GetLanguageForEdit?",
//         {
//           headers: {
//             Authorization: "Bearer " + parsedCredentials.token, //the token is a variable which holds the token
//           },
//         },
//       ).then((response:any)=>{
//         console.log(response)
//       })
//   }
// );

// export const createLanguages = createAsyncThunk(
//   "language/createLanguages",
//   () => {
//     return axios
//       .post(
//         "https://anzdemoapi.raaghu.io/api/services/app/Language/CreateOrUpdateLanguage",
//         {
//           headers: {
//             Authorization: "Bearer " + parsedCredentials.token, //the token is a variable which holds the token
//           },
//         },
//       )
//   }
// );

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
      state.languages = [];
      state.error = action.error.message || "Something went wrong";
    });

    // builder.addCase(createLanguages.pending, (state)=>{
    //   state.loading=true;
    // })

    // builder.addCase(createLanguages.fulfilled,(state,action:PayloadAction<any>)=>{
    //   state.loading = false;
    //   state.languages=action.payload;
    //   state.error="";
    // })
    // builder.addCase(createLanguages.rejected,(state,action)=>{
    //   state.loading=false;
    //   state.languages=[];
    //   state.error = action.error.message || "Something went wrong"

    // })
  },
});

export default languageSlice.reducer;
