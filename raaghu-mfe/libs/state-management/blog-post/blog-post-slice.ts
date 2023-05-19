import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { BlogPostAdminService } from "../../proxy";

export interface blogPostInitialState {
  loading: boolean;
  blogPosts: [];
  error: string;
  allblogpost: [];
}

export const blogPostState: blogPostInitialState = {
  loading: false,
  blogPosts: [],
  allblogpost: [],
  error: "",
};

export const getAllBlogPost = createAsyncThunk(
  "blogPost/getAllBlogPost", () => {
  return BlogPostAdminService.getBlogsBlogPosts({
    filter: undefined,
    blogId: undefined,
    authorId: undefined,
    tagId: undefined,
    status: undefined,
    sorting: undefined,
    skipCount: 0,
    maxResultCount: 10,
  }).then((result: any) => {
    return result;
  });
});

export const addBlogPostData = createAsyncThunk(
  "blogPost/addBlogPostData",
  (data: any) => {
    return BlogPostAdminService.postBlogsBlogPostsCreateAndPublish(data).then(
      (result: any) => {
        return result.items;
      }
    );
  }
);

export const editBlogPostData = createAsyncThunk(
  "blogPost/editBlogPostData",
  ({ id, postTypeDto }: { id: any; postTypeDto: any }) => {
    return BlogPostAdminService.putBlogsBlogPosts({
      id,
      requestBody: postTypeDto,
    }).then((result: any) => {
      return result.items;
    });
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
      state.loading = true;
    });
    builder.addCase(
      getAllBlogPost.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.allblogpost = action.payload;
        state.error = "";
      }
    );
    builder.addCase(getAllBlogPost.rejected, (state, action) => {
      state.loading = false;
      state.allblogpost = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(addBlogPostData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      addBlogPostData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.allblogpost = action.payload;
        state.error = "";
      }
    );

    builder.addCase(addBlogPostData.rejected, (state, action) => {
      state.loading = false;
      state.allblogpost = [];
      state.error = "";
    });

    builder.addCase(editBlogPostData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      editBlogPostData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.allblogpost = action.payload;
        state.error = "";
      }
    );
    builder.addCase(editBlogPostData.rejected, (state, action) => {
      state.loading = false;
      state.allblogpost = [];
      state.error = action.error.message || "Something Went Wrong";
    });
  },
});

export default blogPostSlice.reducer;
