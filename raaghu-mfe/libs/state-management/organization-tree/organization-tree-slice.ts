import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import {ServiceProxy} from '../../shared/service-proxy'

type InitialState = {
  organizationUnitTree: any;
  members: any;
  roles: any;
  rolesList: any;
  usersList: any;
  error: string;
  status: "pending" | "loading" | "error" | "success";
};
export const initialState: InitialState = {
  organizationUnitTree: [],
  members: null,
  roles: null,
  rolesList: null,
  usersList: null,
  error: "",
  status: "pending",
};
const proxy = new ServiceProxy()
//organization unit
export const fetchOrganizationTrees = createAsyncThunk(
  "OrganizationTree/fetchOrganizationTrees",
async  () => {
     return proxy.all2(undefined).then(
      (result:any)=>{
        return result
      }
    ); 
  }
);
export const addOrganizationUnit = createAsyncThunk(
  "OrganizationTree/addOrganizationUnit",
  async (dto: any) => {
     const result = await proxy.organizationUnitsPOST(dto);
    return result;
  }
);
export const editOrganizationUnit = createAsyncThunk(
  "OrganizationTree/editOrganizationUnit",
  async ({ id, dTo }: { id: any; dTo: any }) => {
    const result = await proxy.organizationUnitsPUT(id, dTo);
    return result;
  }
);
export const deleteOrganizationUnit = createAsyncThunk(
  "OrganizationTree/deleteOrganizationUnit",
  async (id: any) => {
    const result = await proxy.organizationUnitsDELETE(id);
    return result;
  }
);
//member actions
export const fetchMemberOrganizationTrees = createAsyncThunk(
  "OrganizationTree/fetchMemberOrganizationTrees",
async(id:any) => {
     return proxy.membersGET(id,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,0,1000).then(
      (result:any)=>{
        return result.items
      }
    ); 
  }
);
export const deleteMemberOrganizationUnit = createAsyncThunk(
  "OrganizationTree/deleteMemberOrganizationUnit",
  async ({id,memberId}:{id: any,memberId:any}) => {
    const result = await proxy.membersDELETE(id, memberId);
    return result;
  }
);
export const editMemberOrganizationUnit = createAsyncThunk(
  "OrganizationTree/editMemberOrganizationUnit",
  async ({ id, dTo }: { id: any; dTo: any }) => {
    const result = await proxy.membersPUT(id, dTo);
    return result;
  }
);
export const FetchUsersOrganizationUnit = createAsyncThunk(
  "OrganizationTree/FetchUsersOrganizationUnit",
  async () => {
    const result = await proxy.usersGET2(undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,0,1000);
    return result.items;
  }
);
//Roles actions
export const fetchRolesOrganizationTrees = createAsyncThunk(
  "OrganizationTree/fetchRolesOrganizationTrees",
async(id:any) => {
     return proxy.rolesGET(id,undefined,0,1000).then(
      (result:any)=>{
        return result.items
      }
    ); 
  }
);
export const deleteRolesOrganizationUnit = createAsyncThunk(
  "OrganizationTree/deleteRolesOrganizationUnit",
  async ({id,roleId}:{id: any,roleId:any}) => {
    const result = await proxy.rolesDELETE(id, roleId);
    return result;
  }
);
export const editRolesOrganizationUnit = createAsyncThunk(
  "OrganizationTree/editRolesOrganizationUnit",
  async ({ id, dTo }: { id: any; dTo: any }) => {
    const result = await proxy.rolesPUT(id, dTo);
    return result;
  }
);
export const FetchRoleListOrganizationUnit = createAsyncThunk(
  "OrganizationTree/FetchRoleListOrganizationUnit",
  async () => {
    const result = await proxy.rolesGET3(undefined,undefined,0,1000);
    return result.items;
  }
);

//api/identity/roles
const OrganizationTreeSlice = createSlice({
  name: "OrganizationTree",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
    //organization unit reducer
    builder.addCase(fetchOrganizationTrees.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchOrganizationTrees.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.organizationUnitTree = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchOrganizationTrees.rejected, (state, action) => {
      state.status = "error";
      state.organizationUnitTree = [];
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(deleteOrganizationUnit.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      deleteOrganizationUnit.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.organizationUnitTree = action.payload;
        state.error = "";
      }
    );
    builder.addCase(deleteOrganizationUnit.rejected, (state, action) => {
      state.status = "error";
      state.organizationUnitTree = [];
      state.error = action.error.message || "Something Went Wrong";
    });
    builder.addCase(editOrganizationUnit.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      editOrganizationUnit.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.organizationUnitTree = action.payload;
        state.error = "";
      }
    );
    builder.addCase(editOrganizationUnit.rejected, (state, action) => {
      state.status = "error";
      state.organizationUnitTree = [];
      state.error = action.error.message || "Something Went Wrong";
    });
    
    //Member unit reducer
    builder.addCase(fetchMemberOrganizationTrees.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchMemberOrganizationTrees.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.members = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchMemberOrganizationTrees.rejected, (state, action) => {
      state.status = "error";
      state.members = [];
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(deleteMemberOrganizationUnit.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      deleteMemberOrganizationUnit.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.members = action.payload;
        state.error = "";
      }
    );
    builder.addCase(deleteMemberOrganizationUnit.rejected, (state, action) => {
      state.status = "error";
      state.members = [];
      state.error = action.error.message || "Something Went Wrong";
    });
    builder.addCase(editMemberOrganizationUnit.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      editMemberOrganizationUnit.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.members = "success";
        state.organizationUnitTree = action.payload;
        state.error = "";
      }
    );
    builder.addCase(editMemberOrganizationUnit.rejected, (state, action) => {
      state.status = "error";
      state.members = [];
      state.error = action.error.message || "Something Went Wrong";
    });
    builder.addCase(FetchUsersOrganizationUnit.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      FetchUsersOrganizationUnit.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.usersList = "success";
        state.usersList = action.payload;
        state.error = "";
      }
    );
    builder.addCase(FetchUsersOrganizationUnit.rejected, (state, action) => {
      state.status = "error";
      state.usersList = [];
      state.error = action.error.message || "Something Went Wrong";
    });
   //Member unit reducer
   builder.addCase(fetchRolesOrganizationTrees.pending, (state) => {
    state.status = "loading";
  });
  builder.addCase(
    fetchRolesOrganizationTrees.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.status = "success";
      state.roles = action.payload;
      state.error = "";
    }
  );
  builder.addCase(fetchRolesOrganizationTrees.rejected, (state, action) => {
    state.status = "error";
    state.roles = [];
    state.error = action.error.message || "Something went wrong";
  });
  builder.addCase(deleteRolesOrganizationUnit.pending, (state) => {
    state.status = "loading";
  });
  builder.addCase(
    deleteRolesOrganizationUnit.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.status = "success";
      state.roles = action.payload;
      state.error = "";
    }
  );
  builder.addCase(deleteRolesOrganizationUnit.rejected, (state, action) => {
    state.status = "error";
    state.roles = [];
    state.error = action.error.message || "Something Went Wrong";
  });
  builder.addCase(editRolesOrganizationUnit.pending, (state) => {
    state.status = "loading";
  });
  builder.addCase(
    editRolesOrganizationUnit.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.roles = "success";
      state.organizationUnitTree = action.payload;
      state.error = "";
    }
  );
  builder.addCase(editRolesOrganizationUnit.rejected, (state, action) => {
    state.status = "error";
    state.roles = [];
    state.error = action.error.message || "Something Went Wrong";
  });
  builder.addCase(FetchRoleListOrganizationUnit.pending, (state) => {
    state.status = "loading";
  });
  builder.addCase(
    FetchRoleListOrganizationUnit.fulfilled,
    (state, action: PayloadAction<any>) => {
      state.status = "success";
      state.rolesList = action.payload;
      state.error = "";
    }
  );
  builder.addCase(FetchRoleListOrganizationUnit.rejected, (state, action) => {
    state.status = "error";
    state.rolesList = [];
    state.error = action.error.message || "Something Went Wrong";
  });
  },
});
export default OrganizationTreeSlice.reducer;