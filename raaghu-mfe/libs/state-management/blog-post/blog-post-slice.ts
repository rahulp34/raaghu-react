
import { createSlice, createAsyncThunk, PayloadAction, } from "@reduxjs/toolkit";
import { BlogPostAdminService } from "../../proxy/services/BlogPostAdminService";


export interface blogPostInitialState {
  loading: boolean;
  blogPosts: [];
  error: string;
  allblogpost: [];
};

export const blogPostState: blogPostInitialState = {
  loading: false,
  blogPosts: [],
  allblogpost: [],
  error: "",
};

export const getAllBlogPost = createAsyncThunk('BlogPost/GetAll', () => {
  return BlogPostAdminService.getBlogsBlogPosts({ filter: undefined, blogId: undefined, authorId: undefined, tagId: undefined, status: undefined, sorting: undefined, skipCount: undefined, maxResultCount: undefined })
    .then((result: any) => {
      return result;
    })
});

export const addBlogPostData = createAsyncThunk(
  "BlogPostTypes/addBlogPostData",
  (BlogPostDto: any) => {
    return BlogPostAdminService.postBlogsBlogPostsCreateAndPublish(BlogPostDto).then((result: any) => {
      console.log("Blog post ", result)
      debugger
      return result;
    })
  }
);

// Add your Api call here

const blogPostSlice = createSlice({
  name: "blogPost",
  initialState: blogPostState,
  reducers: {},
  extraReducers: (builder) => {
    // Add your extraReducers here 
    builder.addCase(getAllBlogPost.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getAllBlogPost.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.allblogpost = action.payload
      state.error = ''
    });
    builder.addCase(getAllBlogPost.rejected, (state, action) => {
      state.loading = false
      state.allblogpost = []
      state.error = action.error.message || 'Something Went Wrong'
    });


    builder.addCase(addBlogPostData.pending, (state) => {
      state.loading = true;
    })

    builder.addCase(addBlogPostData.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.allblogpost = action.payload;
      state.error = "";

    })

    builder.addCase(addBlogPostData.rejected, (state, action) => {
      state.loading = false;
      state.allblogpost = [];
      state.error = "";
    })
  }
})

export default blogPostSlice.reducer;
