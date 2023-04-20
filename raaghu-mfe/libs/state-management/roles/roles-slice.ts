import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import { RoleService } from "../../proxy/services/RoleService";

import { PermissionsService } from "../../proxy";

type InitialState = {
  roles: any;
  permission: any;
  allClaims: any;
  claims: any;
  error: string;
  status: "pending" | "loading" | "error" | "success";
};
export const rolesInitialState: InitialState = {
  roles: [],
  permission: [],
  allClaims: null,
  claims: null,
  error: "",
  status: "pending",
};

//Roles unit
export const fetchRolesInRoles = createAsyncThunk(
  "Roles/fetchRolesInRoles",
  async () => {
    const result = await RoleService.getRoles1({
      filter: undefined,
      sorting: "id DESC",
      skipCount: 0,
      maxResultCount: 1000,
    });
    return result.items;
  }
);

export const fetchAllClaims = createAsyncThunk("Roles/fetchAllClaims", () => {
  RoleService.getRolesAllClaimTypes().then((result: any) => {
    return result;
  });
});

export const fetchClaims = createAsyncThunk(
  "Roles/fetchClaims",
  (data: any) => {
    RoleService.getRolesClaims({ id: data.id }).then((result: any) => {
      return result;
    });
  }
);

export const putClaims = createAsyncThunk("Roles/putClaims", (data: any) => {
  RoleService.putRolesClaims({ id: data.id, requestBody: data.body }).then(
    (result: any) => {
      return result;
    }
  );
});

export const addRolesUnit = createAsyncThunk(
  "Roles/addRolesUnit",
  (dto: any) => {
    const result = RoleService.postRoles({ requestBody: dto });
    return result;
  }
);
export const editRoles = createAsyncThunk(
  "Roles/editRoles",
  ({ id, dTo }: { id: any; dTo: any }) => {
    console.log("dTo from slice ", dTo);
    const result = RoleService.putRoles({ id: id, requestBody: dTo });
    return result;
  }
);

export const deleteRoles = createAsyncThunk("Roles/deleteRoles", (id: any) => {
  const result = RoleService.deleteRoles({ id: id });
  return result;
});

//permissionsGET
export const fetchPermission = createAsyncThunk(
  "Roles/fetchPermission",
  (key: any) => {
    PermissionsService.getPermissions({
      providerName: "R",
      providerKey: key,
    }).then((result: any) => {
      console.log("fetched data , ", result);
      return result.groups;
    });
  }
);

//permissionsPUT
export const editPermisstion = createAsyncThunk(
  "Roles/editPermisstion",
  ({ key, dTo }: { key: any; dTo: any }) => {
    const result = PermissionsService.putPermissions({
      providerName: "R",
      providerKey: key,
      requestBody: dTo,
    });
    return result;
  }
);
const RolesSlice = createSlice({
  name: "Roles",
  initialState: rolesInitialState,
  reducers: {},
  extraReducers: (builder) => {
    //Roles unit reducer
    builder.addCase(fetchRolesInRoles.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchRolesInRoles.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.roles = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchRolesInRoles.rejected, (state, action) => {
      state.status = "error";
      state.roles = [];
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(fetchAllClaims.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchAllClaims.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.allClaims = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchAllClaims.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(fetchClaims.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchClaims.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.claims = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchClaims.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(deleteRoles.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      deleteRoles.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.roles = action.payload;
        state.error = "";
      }
    );
    builder.addCase(deleteRoles.rejected, (state, action) => {
      state.status = "error";
      state.roles = [];
      state.error = action.error.message || "Something Went Wrong";
    });
    builder.addCase(editRoles.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      editRoles.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.roles = action.payload;
        state.error = "";
      }
    );
    builder.addCase(editRoles.rejected, (state, action) => {
      state.status = "error";
      state.roles = [];
      state.error = action.error.message || "Something Went Wrong";
    });
    //permission
    builder.addCase(fetchPermission.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      fetchPermission.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.permission = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchPermission.rejected, (state, action) => {
      state.status = "error";
      state.permission = [];
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(editPermisstion.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      editPermisstion.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.permission = action.payload;
        state.error = "";
      }
    );
    builder.addCase(editPermisstion.rejected, (state, action) => {
      state.status = "error";
      state.permission = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(putClaims.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(
      putClaims.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.status = "success";
        state.error = "";
      }
    );
  },
});
export default RolesSlice.reducer;