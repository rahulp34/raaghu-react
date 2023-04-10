import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { ContactCreateInput} from "../../shared/service-proxy";
import {ConversationService} from "../../proxy/services/ConversationService"
import {ContactService} from "../../proxy/services/ContactService"
import {SettingsService} from "../../proxy/services/SettingsService"

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


export const fetchChatsData = createAsyncThunk(
    "chats/fetchChatsData",
    (data:any) => { 
      return ConversationService
        .getConversationConversation({targetUserId:data.targetUserId, skipCount:undefined, maxResultCount:undefined})
        .then((result: any) => {
          return result;
        });
    }
  );

  export const putMessageData = createAsyncThunk(
    "chats/putMessageData",
    (data:any) => { 
      return ConversationService
        .postConversationSendMessage(data.body)
        .then((result: any) => {
          return result;
        });
    }
  );

  export const ReadConversationData  = createAsyncThunk(
    "chats/ReadConversationData",
    (data:any) => { 
      return ConversationService
        .postConversationMarkConversationAsRead(data.body)
        .then((result: any) => {
          return result;
        });
    }
  );

  export const fetchChatContactsData  = createAsyncThunk(
    "chats/fetchChatContactsData",
    (data:any) => { 
      return ContactService
        .getContactContacts({filter:data.filter, includeOtherContacts:data.includeOtherContacts})
        .then((result: any) => {
          return result;
        });
    }
  );
  export const enterSendChat  = createAsyncThunk(
    "chats/enterSendChat",
    (data:any) => { 
      return SettingsService
        .postSettingsSendOnEnter(data.body)
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