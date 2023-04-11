import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type NewsLettersInitialState = {
  loading : boolean,
  error : string,
  GetAllNewsLetters:string
  GetNewsLetter:string
  GetCsvDetails:string,
  preferenceData:string,
  exportCsvData:string,
  alert: boolean;
  alertMessage: string;
  success: boolean;
}

const NewslettersInitialState : NewsLettersInitialState = {
  loading : false,
 GetAllNewsLetters:"",
 GetNewsLetter:"",
 GetCsvDetails:"",
 preferenceData:"",
 exportCsvData:"",
 error : "",
 alert: false,
 alertMessage: "",
 success: false,
}

const proxy = new ServiceProxy();

export const GetAllNewsLetters = createAsyncThunk('newsletters/GetNewsLettersData',(data:any) => {
    return proxy.newsletterGET(data.preference,data.source,0,1000,undefined).then((result:any) =>{
      debugger
        console.log("result",result)
        return result
    })
})
export const csvDetails = createAsyncThunk('newsletters/csvDetails',() => {
    return proxy.csvDetail(undefined,undefined,undefined).then((result:any) =>{
        return result
    })
})
export const preferencesData = createAsyncThunk('newsletters/preferencesData',() => {
    return proxy.preferences(undefined).then((result:any) =>{
        return result
    })
})
export const exportCsv = createAsyncThunk('NewsLetters/exportCsv',() => {
    return proxy.exportCsv(undefined,undefined,undefined).then((result:any) =>{
        return result
    })
})
export const fetchNewsLetterData= createAsyncThunk('NewsLetters/fetchNewsLetterData',  (id:any) => {
  return proxy.newsletterGET2(id,undefined).then((result:any) =>{
      return result;
  })
})

const newslettersSlice = createSlice({
  name: 'newsletters',
  initialState:NewslettersInitialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(GetAllNewsLetters.pending, (state) => {
      state.loading = true
    });
    builder.addCase(GetAllNewsLetters.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.GetAllNewsLetters = action.payload
    });
    builder.addCase(GetAllNewsLetters.rejected, (state , action) => {
        state.loading = false
        state.error = action.error.message || 'Something Went Wrong'
      });
      builder.addCase(fetchNewsLetterData.pending, (state) => {
        state.loading = true
      });
      builder.addCase(fetchNewsLetterData.fulfilled, (state , action : PayloadAction<any>) =>{
        state.loading = false
        state.GetNewsLetter = action.payload
      });
      builder.addCase(fetchNewsLetterData.rejected, (state , action) => {
          state.loading = false
          state.error = action.error.message || 'Something Went Wrong'
        });
        builder.addCase(csvDetails.pending, (state) => {
            state.loading = true
          });
          builder.addCase(csvDetails.fulfilled, (state , action : PayloadAction<any>) =>{
            state.loading = false
            state.GetCsvDetails = action.payload
          });
          builder.addCase(csvDetails.rejected, (state , action) => {
              state.loading = false
              state.error = action.error.message || 'Something Went Wrong'
            });
            builder.addCase(preferencesData.pending, (state) => {
                state.loading = true
              });
              builder.addCase(preferencesData.fulfilled, (state , action : PayloadAction<any>) =>{
                state.loading = false
                state.preferenceData = action.payload
              });
              builder.addCase(preferencesData.rejected, (state , action) => {
                  state.loading = false
                  state.error = action.error.message || 'Something Went Wrong'
                });

                builder.addCase(exportCsv.pending, (state) => {
                    state.loading = true
                  });
                  builder.addCase(exportCsv.fulfilled, (state , action : PayloadAction<any>) =>{
                    state.loading = false
                    state.exportCsvData = action.payload
                  });
                  builder.addCase(exportCsv.rejected, (state , action) => {
                      state.loading = false
                      state.error = action.error.message || 'Something Went Wrong'
                    });
  },
})

export default newslettersSlice.reducer