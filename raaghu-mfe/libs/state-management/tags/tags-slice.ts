import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { TagAdminService } from "../../proxy/services/TagAdminService";

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


export const getAllTags = createAsyncThunk('Tags/GetAllTags', (data: any) => {
  return TagAdminService.getTags({filter:data.filter, sorting:data.sorting, skipCount:data.skipCount, maxResultCount:data.maxResultCount}).then((result: any) => {
      return result;
    })
});

export const createTag = createAsyncThunk('Tags/CreateTag', (data: any) => {
  return TagAdminService.postTags(data.body).then((result: any) => {
      return result;
    })
});

export const getTagById = createAsyncThunk('Tags/GetTagById', (data: any) => {
  return TagAdminService.getTags1(data.id).then((result: any) => {
      return result;
    })
});

export const updateTag = createAsyncThunk('Tags/UpdateTag', (data: any) => {
  return TagAdminService.putTags({id:data.id,requestBody: data.body}).then((result: any) => {
      return result;
    });
});

export const deleteTag = createAsyncThunk('Tags/DeleteTag', (data: any) => {
  return TagAdminService.deleteTags(data.id).then((result: any) => {
      return result;
    })
});

export const tagDefinations = createAsyncThunk('Tags/TagDefinations', (data: any) => {
  return TagAdminService.getTagsTagDefinitions().then((result: any) => {
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