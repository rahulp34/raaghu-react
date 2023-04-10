
        import { createSlice, createAsyncThunk, PayloadAction, } from "@reduxjs/toolkit";

        export interface pagesInitialState {
          loading: boolean;
          pagess: any;
          error: string;
        }; 

        export const pagesState: pagesInitialState = {
          loading: false,
          pagess: {},
          error: "",
        };

        // Add your Api call here

        const pagesSlice = createSlice({
          name: "pages",
          initialState: pagesState,
          reducers: {},
          extraReducers: (builder) => {
            // Add your extraReducers here
          }})

          export default pagesSlice.reducer;
        