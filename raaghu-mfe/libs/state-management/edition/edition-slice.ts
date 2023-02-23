import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";

type InitialState = {
  loading : boolean,
  users : any[],
  error : string
}

const initialState : InitialState = {
  loading : false,
  users : [],
  error : ""
}

var credentials = localStorage.getItem("LoginCredential");
if (credentials) {
  var parsedCredentials = JSON.parse(credentials);
}

export const EditionUser = createAsyncThunk('Edition/AddUser',  () => {})

const editionSlice:any = createSlice({
  name: 'edition',
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(EditionUser.pending, (state) => {
      state.loading = true
    });
    builder.addCase(EditionUser.fulfilled, (state , action : PayloadAction<any>) =>{
      state.loading = false
      state.users = action.payload
      state.error = ''
    });
    builder.addCase(EditionUser.rejected, (state , action) => {
      state.loading = false
      state.users = []
      state.error = action.error.message || 'Something Went Wrong'
    })
  },
})

export default editionSlice.reducer