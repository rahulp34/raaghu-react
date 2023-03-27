import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type InitialState = {
  allComments: any,
  comment: any,
  loading: boolean,
  error: string,
}

const initialState: InitialState = {
  allComments: {},
  comment: {},
  loading: false,
  error: "",
}

const proxy = new ServiceProxy()

export const getAllComments = createAsyncThunk('Comments/GetAllComments', (data: any) => {
  return proxy.commentsGET(data.entityType, data.text, data.repliedCommentId, data.author, data.creationStartDate,
    data.creationEndDate, data.sorting, data.skipCount, data.maxResultCount, data.cancelToken).then((result: any) => {
      return result;
    })
});

export const getCommentById = createAsyncThunk('Comments/GetCommentById', (data: any) => {
  return proxy.commentsGET2(data.id, data.cancelToken).then((result: any) => {
      return result;
    })
});

export const deleteComment = createAsyncThunk('Comments/DeleteComment', (data: any) => {
  return proxy.commentsDELETE(data.id, data.cancelToken).then((result: any) => {
      return result;
    })
});


const scopeSlice = createSlice({
  name: 'Blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllComments.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.allComments = action.payload;
      state.error = '';
    });
    builder.addCase(getAllComments.rejected, (state, action) => {
      state.loading = false;
      state.allComments = {};
      state.error = action.error.message || 'Something Went Wrong';
    });

    builder.addCase(getCommentById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCommentById.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.comment = action.payload;
      state.error = '';
    });
    builder.addCase(getCommentById.rejected, (state, action) => {
      state.loading = false;
      state.comment = {};
      state.error = action.error.message || 'Something Went Wrong';
    });

    builder.addCase(deleteComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteComment.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(deleteComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something Went Wrong';
    });

  },
})

export default scopeSlice.reducer