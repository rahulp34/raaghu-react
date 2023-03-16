import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type InitialState = {
  loading: boolean;
  users: any[];
  error: string;
};

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

const proxy = new ServiceProxy();

export const fetchChatsData = createAsyncThunk(
    "chats/fetchChatsData",
    () => { 
      return proxy
        .contacts(undefined, true)
        .then((result: any) => {
          console.log("result chats", result);
          return result.items;
        });
    }
  );


const ChatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // Fetch Data
  
      builder.addCase(fetchChatsData.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(
        fetchChatsData.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.users = action.payload;
          state.error = "";
        }
      );
      builder.addCase(fetchChatsData.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message || "Something Went Wrong";
      });
    },
  });

  export default ChatsSlice.reducer;