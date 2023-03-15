import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type InitialState = {
  allblogs: any,
  blog: any
  loading: boolean,
  error: string,
}

const initialState: InitialState = {
  allblogs: {},
  blog: {},
  loading: false,
  error: "",
}

const proxy = new ServiceProxy()

export const getAllBlogs = createAsyncThunk('Blogs/GetAll', () => {
  return proxy.adminGET().then((result: any) => {
    return result;
  })
});

export const createNewBlog = createAsyncThunk('Blogs/Create', (data: any) => {
  return proxy.adminPOST(data.data).then((result: any) => {
    return result;
  })
});

export const getBlogById = createAsyncThunk('Blogs/GetById', (data: any) => {
  return proxy.adminGET2(data.id).then((result: any) => {
    return result;
  })
});

export const updateBlog = createAsyncThunk('Blogs/Update', (data: any) => {
  return proxy.adminPUT(data.id, data.data).then((result: any) => {
    return result;
  })
});

export const deleteBlog = createAsyncThunk('Blogs/Delete', (data: any) => {
  return proxy.adminDELETE(data.id).then((result: any) => {
    return result;
  })
});

export const clearCache = createAsyncThunk('Blogs/ClearCache', (data: any) => {
  return proxy.clearCache(data.id).then((result: any) => {
    return result;
  })
});


const scopeSlice = createSlice({
  name: 'Blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlogs.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getAllBlogs.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.allblogs = action.payload
      state.error = ''
    });
    builder.addCase(getAllBlogs.rejected, (state, action) => {
      state.loading = false
      state.allblogs = {}
      state.error = action.error.message || 'Something Went Wrong'
    });

    builder.addCase(createNewBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createNewBlog.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(createNewBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something Went Wrong';
    });

    builder.addCase(getBlogById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getBlogById.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.blog = action.payload;
      state.error = '';
    });
    builder.addCase(getBlogById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something Went Wrong';
    });


    builder.addCase(updateBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateBlog.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(updateBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something Went Wrong';
    });


    builder.addCase(deleteBlog.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteBlog.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(deleteBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something Went Wrong';
    });


    builder.addCase(clearCache.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(clearCache.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(clearCache.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something Went Wrong';
    });



  },
})

export default scopeSlice.reducer