
        import { createSlice, createAsyncThunk, PayloadAction, } from "@reduxjs/toolkit";

        export interface newPageInitialState {
          loading: boolean;
          newPages: any;
          error: string;
        }; 

        export const newPageState: newPageInitialState = {
          loading: false,
          newPages: {},
          error: "",
        };

        // Add your Api call here

        const newPageSlice = createSlice({
          name: "newPage",
          initialState: newPageState,
          reducers: {},
          extraReducers: (builder) => {
            // Add your extraReducers here
          }})

          export default newPageSlice.reducer;
        