import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { ContactCreateInput, ServiceProxy } from "../../shared/service-proxy";

type chatInitialState = {
  loading: boolean;
  users: any[];
  error: string;
  status: "pending" | "loading" | "error" | "success";
 
};

export const chatInitialState: chatInitialState = {
  loading: false,
  users: [],
  error: "",
  status:"pending"
};

const proxy = new ServiceProxy();

export const fetchChatsData = createAsyncThunk(
    "chats/fetchChatsData",
    (data:any) => { 
      return proxy
        .conversation(data.targetUserId,undefined,undefined,undefined)
        .then((result: any) => {
          return result;
        });
    }
  );

  export const putMessageData = createAsyncThunk(
    "chats/putMessageData",
    (data:any) => { 
      return proxy
        .sendMessage(data.body,undefined)
        .then((result: any) => {
          return result;
        });
    }
  );

  export const ReadConversationData  = createAsyncThunk(
    "chats/ReadConversationData",
    (data:any) => { 
      return proxy
        .markConversationAsRead(data.body,undefined)
        .then((result: any) => {
          return result;
        });
    }
  );

  export const fetchChatContactsData  = createAsyncThunk(
    "chats/fetchChatContactsData",
    (data:any) => { 
      return proxy
        .contactsAll(data.filter,data.includeOtherContacts,undefined)
        .then((result: any) => {
          return result;
        });
    }
  );
  export const enterSendChat  = createAsyncThunk(
    "chats/enterSendChat",
    (data:any) => { 
      return proxy
        .sendOnEnter(data.body,undefined)
        .then((result:any) => {
          return result;
        });
    }
  );

const ChatsSlice = createSlice({
    name: "chats",
    initialState:chatInitialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchChatsData.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        fetchChatsData.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.users = action.payload;
          state.error = "";
        }
      );
      builder.addCase(fetchChatsData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "Something went wrong";
      });

      builder.addCase(putMessageData.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        putMessageData.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.users = action.payload;
          state.error = "";
        }
      );
      builder.addCase(putMessageData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "Something went wrong";
      });

      builder.addCase(ReadConversationData.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        ReadConversationData.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.users = action.payload;
          state.error = "";
        }
      );
      builder.addCase(ReadConversationData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "Something went wrong";
      });

      builder.addCase(fetchChatContactsData.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        fetchChatContactsData.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.users = action.payload;
          state.error = "";
        }
      );
      builder.addCase(fetchChatContactsData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "Something went wrong";
      });

      builder.addCase(enterSendChat.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        enterSendChat.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.users = action.payload;
          state.error = "";
        }
      );
      builder.addCase(enterSendChat.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "Something went wrong";
      });
    },
  });

  export default ChatsSlice.reducer;