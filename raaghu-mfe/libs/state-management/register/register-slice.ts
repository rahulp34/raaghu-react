
        import { createSlice, createAsyncThunk, PayloadAction, } from "@reduxjs/toolkit";

        export interface registerInitialState {
          loading: boolean;
          registers: any;
          error: string;
        }; 

        export const registerState: registerInitialState = {
          loading: false,
          registers: {},
          error: "",
        };

        // Add your Api call here

        const registerSlice = createSlice({
          name: "register",
          initialState: registerState,
          reducers: {},
          extraReducers: (builder) => {
            // Add your extraReducers here
          }})

          export default registerSlice.reducer;
        