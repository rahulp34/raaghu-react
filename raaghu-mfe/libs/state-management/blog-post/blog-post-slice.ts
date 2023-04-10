
        import { createSlice, createAsyncThunk, PayloadAction, } from "@reduxjs/toolkit";

        export interface blogPostInitialState {
          loading: boolean;
          blogPosts: any;
          error: string;
        }; 

        export const blogPostState: blogPostInitialState = {
          loading: false,
          blogPosts: {},
          error: "",
        };

        // Add your Api call here

        const blogPostSlice = createSlice({
          name: "blogPost",
          initialState: blogPostState,
          reducers: {},
          extraReducers: (builder) => {
            // Add your extraReducers here
          }})

          export default blogPostSlice.reducer;
        