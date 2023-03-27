import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type InitialState = {
  allTags: any,
  tag: any,
  tagDefinations: any,
  loading: boolean,
  error: string,
}

const initialState: InitialState = {
  allTags: {},
  tag: {},
  tagDefinations: {},
  loading: false,
  error: "",
}

const proxy = new ServiceProxy()

export const getAllTags = createAsyncThunk('Tags/GetAllTags', (data: any) => {
  return proxy.tagsGET(data.filter, data.sorting, data.skipCount, data.maxResultCount, data.cancelToken).then((result: any) => {
      return result;
    })
});

export const createTag = createAsyncThunk('Tags/CreateTag', (data: any) => {
  return proxy.tagsPOST(data.body, data.cancelToken).then((result: any) => {
      return result;
    })
});

export const getTagById = createAsyncThunk('Tags/GetTagById', (data: any) => {
  return proxy.tagsGET2(data.id, data.cancelToken).then((result: any) => {
      return result;
    })
});

export const updateTag = createAsyncThunk('Tags/UpdateTag', (data: any) => {
  return proxy.tagsPUT(data.id, data.body, data.cancelToken).then((result: any) => {
      return result;
    });
});

export const deleteTag = createAsyncThunk('Tags/DeleteTag', (data: any) => {
  return proxy.tagsDELETE(data.id, data.cancelToken).then((result: any) => {
      return result;
    })
});

export const tagDefinations = createAsyncThunk('Tags/TagDefinations', (data: any) => {
  return proxy.tagDefinitions(data.cancelToken).then((result: any) => {
      return result;
    })
});


const scopeSlice = createSlice({
  name: 'Blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTags.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllTags.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.allTags = action.payload;
      state.error = '';
    });
    builder.addCase(getAllTags.rejected, (state, action) => {
      state.loading = false;
      state.allTags = {};
      state.error = action.error.message || 'Something Went Wrong';
    });

    builder.addCase(createTag.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createTag.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(createTag.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something Went Wrong';
    });

    builder.addCase(getTagById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTagById.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.tag = action.payload;
      state.error = '';
    });
    builder.addCase(getTagById.rejected, (state, action) => {
      state.loading = false;
      state.tag = {};
      state.error = action.error.message || 'Something Went Wrong';
    });

    builder.addCase(updateTag.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateTag.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(updateTag.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something Went Wrong';
    });

    builder.addCase(deleteTag.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteTag.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(deleteTag.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something Went Wrong';
    });

    builder.addCase(tagDefinations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(tagDefinations.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.tagDefinations = action.payload;
      state.error = '';
    });
    builder.addCase(tagDefinations.rejected, (state, action) => {
      state.loading = false;
      state.tagDefinations = {};
      state.error = action.error.message || 'Something Went Wrong';
    });

  },
})

export default scopeSlice.reducer