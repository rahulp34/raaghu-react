import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { result } from "lodash-es";
import { ServiceProxy } from "../../shared/service-proxy";


export interface UserState {
  loading: boolean
  users: any
  organizationUnit:any
  editUser:any
  roles:any
  editUserRoles:any,
  error: string;
  permission:any;
};
export const UserInitialState: UserState = {
  loading: false,
  users: [],
  editUser:null,
  roles:null,
  editUserRoles:null,
  organizationUnit:null,
  error: "",
  permission:null

};

// Generates pending, fulfilled and rejected action types

const proxy = new ServiceProxy();

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async () => {
    return await proxy.usersGET2(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,0,1000).then((result:any)=>{
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
    return proxy.rolesGET3(undefined,undefined,0,1000,undefined).then((result:any)=>{
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

export const fetchEditUserRoles = createAsyncThunk("user/fetchEditUserRoles",
(id:any)=>{
  return proxy.rolesGET4(id).then((result)=>{
    return result;
  })
})

// export const fetchEditUserOrg = createAsyncThunk("user/fetchEditUserOrg",
// (id:any)=>{
//   return proxy.organizationUnitsAll(id).then((result)=>{
//     return result;
//   })
// })

export const updateUser = createAsyncThunk("user/updateUser",
(data:any)=>{
  return proxy.usersPUT(data.id, data.body).then((result:any)=>{
    console.log("successfully updated user")
    return result;
  })
})

export const createUser = createAsyncThunk(
  "user/createuser",
  (data:any)=>{
    return proxy.usersPOST(data).then((result:any)=>{
      return result;
    })
  }
)

export const deleteUser = createAsyncThunk("user/deleteUser",(data:any)=>{
  return proxy.usersDELETE(data).then(result=>{
    return result;
  })
})

export const getPermission = createAsyncThunk("user/getPermission", (key:string) => {
  return proxy.permissionsGET("U",key,undefined).then((result:any)=>{
     return result;
  }) 
});

export const updatePermission = createAsyncThunk("user/updatePermission", (data:any) => {
  return proxy.permissionsPUT("U",data.key,data.permissions,undefined).then((result:any)=>{
     return result;
  }) 
});

const userSlice = createSlice({
  name: "user",
  initialState:UserInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled,(state, action: PayloadAction<any>) => {
      debugger
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

    builder.addCase(fetchEditUser.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchEditUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.editUser = action.payload;
        state.error = "";
      }
    );

    builder.addCase(fetchEditUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(
      createUser.pending,
      (state, action: PayloadAction<any>) => {
        state.loading = true;
        state.error = "";
      }
    );

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
    });


    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(
      updateUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = "";
      }
    );

    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(deleteUser.pending, (state, action) => {
      state.loading = false;
    });

    builder.addCase(
      deleteUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = "";
      }
    );

    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });


     //permissions

     builder.addCase(getPermission.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      getPermission.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.permission=action.payload;
      }
    );
    builder.addCase(getPermission.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message||"Somethingwentwrong";
    });

    //updatePermission
    builder.addCase(updatePermission.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      updatePermission.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading=false;
      }
    );
    builder.addCase(updatePermission.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message||"Somethingwentwrong";
    });
    
    builder.addCase(fetchEditUserRoles.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      fetchEditUserRoles.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.editUserRoles = action.payload
      }
    );
    builder.addCase(fetchEditUserRoles.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message||"Somethingwentwrong";
    });
  },
});

export default userSlice.reducer;

