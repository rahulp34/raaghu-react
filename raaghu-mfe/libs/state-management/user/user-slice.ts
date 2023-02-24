import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";


export interface UserState {
  loading: boolean
  users: any
  organizationUnit:any
  roles:any
  error: string;
};
export const UserInitialState: UserState = {
  loading: false,
  users: [],
  roles:null,
  organizationUnit:null,
  error: "",
};

// Generates pending, fulfilled and rejected action types

const proxy = new ServiceProxy();

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  () => {
    return proxy.usersGET2(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,0,1000).then((result:any)=>{
      console.log(result);
      return result;
    })
  }
);

export const fetchOrganizationUnits = createAsyncThunk(
  "user/fetchOrganizationUnit",
  () => {
    return proxy.organizationUnitsGET(undefined,undefined,0,1000).then((result:any)=>{
      return result;
    })
  }
);

export const fetchRoles = createAsyncThunk(
  "user/fetchRoles",
  () => {
    return proxy.rolesGET3(undefined,undefined,0,1000).then((result:any)=>{
      return result;
    })
  }
);

export const fetchEditUser = createAsyncThunk(
  "user/fetchEditUser",
  (id:any) => {
    return proxy.usersGET(id).then((result:any)=>{
      return result;
    })
  }
);

export const createUser = createAsyncThunk(
  "user/createuser",
  (data:any)=>{
    return proxy.usersPOST(data).then((result:any)=>{
      return result;
    })
  }
)

const userSlice = createSlice({
  name: "user",
  initialState:UserInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
  
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(fetchOrganizationUnits.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchOrganizationUnits.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.organizationUnit = action.payload;
        state.error = "";
      }
    );

    builder.addCase(fetchOrganizationUnits.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });


    builder.addCase(fetchRoles.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchRoles.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.roles = action.payload;
        state.error = "";
      }
    );

    builder.addCase(fetchRoles.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(
      createUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = "";
      }
    );

    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    
  },
});

export default userSlice.reducer;

