import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import { BookService } from '../../proxy/index';
import { Acme_BookStore_Books_Dto_BookDto } from '../../proxy/index';

import { Acme_BookStore_Books_Dto_CreateUpdateBookDto } from '../../proxy/index';

import { Volo_Abp_Application_Dtos_PagedResultDto_1 } from '../../proxy/index';

export const postBookrequest = createAsyncThunk(
      'book/postBookrequest',
      async ({
        requestBody,
    }:{
        requestBody?: Acme_BookStore_Books_Dto_CreateUpdateBookDto,
    }) => {
          const response = await BookService.postBook({
        requestBody,
    });
          return response;
      }
    );

export const getBookrequest = createAsyncThunk(
      'book/getBookrequest',
      async ({
        sorting,
        skipCount,
        maxResultCount,
    }:{
        sorting?: string,
        skipCount?: number,
        maxResultCount?: number,
    }) => {
          const response = await BookService.getBook({
        sorting,
        skipCount,
        maxResultCount,
    });
          return response;
      }
    );

export const putBookrequest = createAsyncThunk(
      'book/putBookrequest',
      async ({
        id,
        requestBody,
    }:{
        id: string,
        requestBody?: Acme_BookStore_Books_Dto_CreateUpdateBookDto,
    }) => {
          const response = await BookService.putBook({
        id,
        requestBody,
    });
          return response;
      }
    );

export const deleteBookrequest = createAsyncThunk(
      'book/deleteBookrequest',
      async ({
        id,
    }:{
        id: string,
    }) => {
          const response = await BookService.deleteBook({
        id,
    });
          return response;
      }
    );

export const getBook1request = createAsyncThunk(
      'book/getBook1request',
      async ({
        id,
    }:{
        id: string,
    }) => {
          const response = await BookService.getBook1({
        id,
    });
          return response;
      }
    );

export interface BookState {
  loading: boolean;
  error: string;
  getBook:any;

getBook1:any;
};


const initialState: BookState = {
  loading: false,
  error: "",
  getBook:{},

getBook1:{},
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postBookrequest.pending, (state) => {
        state.loading = true;
      });

      builder.addCase(postBookrequest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";

      });

      builder.addCase(postBookrequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });

builder.addCase(getBookrequest.pending, (state) => {
        state.loading = true;
      });

      builder.addCase(getBookrequest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.getBook = action.payload 
      });




      builder.addCase(getBookrequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });

builder.addCase(putBookrequest.pending, (state) => {
        state.loading = true;
      });

      builder.addCase(putBookrequest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";

      });




      builder.addCase(putBookrequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });

builder.addCase(deleteBookrequest.pending, (state) => {
        state.loading = true;
      });

      builder.addCase(deleteBookrequest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";

      });




      builder.addCase(deleteBookrequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });

builder.addCase(getBook1request.pending, (state) => {
        state.loading = true;
      });

      builder.addCase(getBook1request.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.getBook1 = action.payload
      });




      builder.addCase(getBook1request.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default bookSlice.reducer;