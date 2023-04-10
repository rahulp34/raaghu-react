import {
  createSlice,
  createAsyncThunk, 
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import axios from "axios";
import { MenuItemAdminService, MenuItemPublicService } from "../../proxy";

import {ServiceProxy} from '../../shared/service-proxy'

type MenuState = {
  loading: boolean;
  menus: any;
  error: string;
};


export const MenusState: MenuState = {
  loading: false,
  menus: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types

const proxy = new ServiceProxy()

export const getAllMenuItems = createAsyncThunk(
  "menu/getAllMenuItems",
  async () => {
    return await MenuItemPublicService.getMenuItems().then((result:any)=>{
      return result
    })

  }
);
export const getMenuItem = createAsyncThunk(
    "menu/getMenuItem",
    async (id:any) => {
      return await MenuItemAdminService.getMenuItems1({id:id}).then((result:any)=>{
        return result
      })
  
    }
  );
export const editMenuItem = createAsyncThunk(
  "menu/editMenuItem",
  async (id:any) => {
    return await MenuItemAdminService.putMenuItems({id:id,requestBody:undefined}).then((result:any)=>{
      return result
    })

  }
);

export const postMenuItems= createAsyncThunk(
  "menu/postMenuItems",
 (dto:any) => {
    return MenuItemAdminService.postMenuItems(dto).then((result:any)=>{
     return result
    })
  }
);


export const deleteMenuItem= createAsyncThunk(
  "menu/deleteMenuItem",
 (id:any) => {
    return MenuItemAdminService.deleteMenuItems({id:id}).then((result:any)=>{
     return result
    })
  }
);

const menuSlice = createSlice({
  name: "menu",
  initialState:MenusState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllMenuItems.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      getAllMenuItems.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.menus = action.payload;
        state.error = "";
      }
    );

    builder.addCase(getAllMenuItems.rejected, (state, action) => {
      state.loading = false;
      state.menus = {};
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(postMenuItems.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      postMenuItems.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.menus = action.payload;
        state.error = "";
      }
    );

    builder.addCase(postMenuItems.rejected, (state, action) => {
      state.loading = false;
      state.menus = {};
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(deleteMenuItem.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      deleteMenuItem.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.menus = action.payload;
        state.error = "";
      }
    );

    builder.addCase(deleteMenuItem.rejected, (state, action) => {
      state.loading = false;
      state.menus = {};
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(editMenuItem.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      editMenuItem.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.menus = action.payload;
        state.error = "";
      }
    );

    builder.addCase(editMenuItem.rejected, (state, action) => {
      state.loading = false;
      state.menus = {};
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default menuSlice.reducer;
