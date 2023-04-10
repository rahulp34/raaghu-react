import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CommentAdminService } from "../../proxy/services/CommentAdminService";

type InitialState = {
  allComments: any;
  comment: any;
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  allComments: {},
  comment: {},
  loading: false,
  error: "",
};


export const getAllComments = createAsyncThunk(
  "Comments/GetAllComments",
  (data: any) => {
    return CommentAdminService.getComments({
      entityType: data.entityType,
      text: data.text,
      repliedCommentId: data.repliedCommentId,
      author: data.author,
      creationStartDate: data.creationStartDate,
      creationEndDate: data.creationEndDate,
      sorting: data.sorting,
      skipCount: data.skipCount,
      maxResultCount: data.maxResultCount,
    }).then((result: any) => {
      return result;
    });
  }
);

export const getCommentById = createAsyncThunk(
  "Comments/GetCommentById",
  (data: any) => {
    return CommentAdminService.getComments1(data.id).then((result: any) => {
      return result;
    });
  }
);

export const deleteComment = createAsyncThunk(
  "Comments/DeleteComment",
  (data: any) => {
    return CommentAdminService
      .deleteComments(data.id)
      .then((result: any) => {
        return result;
      });
  }
);

const scopeSlice = createSlice({
  name: "Blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllComments.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAllComments.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.allComments = action.payload;
        state.error = "";
      }
    );
    builder.addCase(getAllComments.rejected, (state, action) => {
      state.loading = false;
      state.allComments = {};
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(getCommentById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getCommentById.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.comment = action.payload;
        state.error = "";
      }
    );
    builder.addCase(getCommentById.rejected, (state, action) => {
      state.loading = false;
      state.comment = {};
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(deleteComment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      deleteComment.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = "";
      }
    );
    builder.addCase(deleteComment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something Went Wrong";
    });
  },
});

export default scopeSlice.reducer;
