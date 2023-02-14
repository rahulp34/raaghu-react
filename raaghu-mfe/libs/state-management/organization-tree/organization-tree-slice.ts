import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import axios from "axios";

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
var credentials = localStorage.getItem("LoginCredential");
if (credentials) {
  var parsedCredentials = JSON.parse(credentials);
}
export const fetchOrganizationTrees = createAsyncThunk(
  "OrganizationTree/fetchOrganizationTrees",
  () => {
    return axios
      .get(
        "https://abpdemoapi.raaghu.io/api/identity/organization-units",
        {
          headers: {
            Authorization: "Bearer " + parsedCredentials.token, //the token is a variable which holds the token
          },
        }
      )
      .then((response) => {
        console.log("response from api ", response.data.result);
        return response.data.result;
      });
  }
);
// export const updateUnitTree = createAsyncThunk(
//   "OrganizationTree/updateUnitTree",
//   (payload) => {
//     return axios
//       .put(
//         "https://anzdemoapi.raaghu.io/api/services/app/OrganizationUnit/PutOrganizationUnits",
//         {
//           "displayName": 'saniya',
//           "parentId": "57"
//         },
//         {
//           headers: {
//             Authorization: "Bearer " + parsedCredentials.token, //the token is a variable which holds the token
//           },
//         }
//       );
//       // axios.post(
//       //   '/bezkoder.com/tutorials',
//       //   {
//       //     title: title,
//       //     description: description,
//       //   }
//       // );
//       // .then((response) => {
//       //   console.log("response from api on update ", response.data.result);
//       //   return response.data.result;
//       // });
//   }
//   // async (id:any,data:any ) => {
//   //   const res = await TutorialDataService.update(id, data);
//   //   return res.data;
//   // }
// );
const OrganizationTreeSlice = createSlice({
  name: "OrganizationTree",
  initialState,
  reducers:{},
  extraReducers: (builder) => {
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
    // builder.addCase(updateUnitTree.pending, (state) => {
    //   state.status = "loading";
    // });
    // builder.addCase(
    //   updateUnitTree.fulfilled,
    //   (state, action: PayloadAction<any>) => {
    //     state.status = "success";
    //     state.organizationUnitTree = action.payload;
    //     state.error = "";
    //   }
    // );
    // builder.addCase(updateUnitTree.rejected, (state, action) => {
    //   state.status = "error";
    //   state.organizationUnitTree = [];
    //   state.error = action.error.message || "Something went wrong";
    // });

  },
});
export default OrganizationTreeSlice.reducer;
// export const {
//   addRolesToOrganizationUnit,
//   addUsersToOrganizationUnit,
//   createTreeUnit,
//   deleteMemberFromOrgUnit,
//   deleteRoleFromOrgUnit,
//   deleteRoles,
//   deleteUnitTree,
//   getOrganizationUnitMembers,
//   getOrganizationUnitRoles,
//   getOrganizationUnitRolesList,
//   getOrganizationUnitTree,
//   getOrganizationUnitUsersList,
//   updateUnitTree,
// } = OrganizationTreeSlice.actions;
//   reducers: {
//     addRolesToOrganizationUnit: (state: any) => {},
//     addUsersToOrganizationUnit: (state: any) => {},
//     createTreeUnit:(state, action) => {
//       console.log("action payload ", action.payload);
//       console.log('parentId',action.payload.data.nodeData.data.parentId)
//     },
//     deleteMemberFromOrgUnit: (state: any) => {},
//     deleteRoleFromOrgUnit: (state: any) => {},
//     deleteRoles: (state: any) => {},
//     deleteUnitTree: (state: any) => {},
//     getOrganizationUnitMembers: (state: any) => {},
//     getOrganizationUnitRoles: (state: any) => {},
//     getOrganizationUnitRolesList: (state: any) => {},
//     getOrganizationUnitTree: (state: any) => {},
//     getOrganizationUnitUsersList: (state: any) => {},
//     updateUnitTree: (state, action) => {
//       console.log('wanted to edit value')
//       console.log("pid", action.payload.pId, ' id ', action.payload.id);
//       console.log('state', state)
//       // payload = {
//       //   value: value,
//       //   node: node
//       // }
//       //Find index of specific object using findIndex method.    
// // const objIndex = state.organizationUnitTree?.findIndex(((obj:any) => obj.data.id ===action.payload.id && obj.data.parentId===action.payload.pId));

// // //Log object to Console.
// // console.log("Before update: ", state.organizationUnitTree[objIndex])

// // //Update object's name property.
// // state.organizationUnitTree[objIndex].data.displayName = action.payload.value

// // //Log object to console again.
// // console.log("After update: ", state.organizationUnitTree[objIndex])
//     },
//   },
// export const getOrganizationUnitTreeSuccess = createAction(
//   '[Organization Unit Page] Get Organization Unit Tree Success',
//   props<{ organizationUnitTree: ListResultDtoOfOrganizationUnitDto }>()
// );

// export const getOrganizationUnitTreeFailure = createAction(
//   '[Organization Unit Page] Get Organization Unit Tree Failure',
//   props<{ error: string }>()
// );

// export const getOrganizationUnitMembers = createAction(
//   '[Organization Unit Page] Get Organization Unit Members',
//   (id: number) => ({ id })
//   );

// export const getOrganizationUnitMembersSuccess = createAction(
//   '[Organization Unit Page] Get Organization Unit Members Success',
//   props<{ organizationUnitMembers: PagedResultDtoOfOrganizationUnitUserListDto  }>()
// );

// export const getOrganizationUnitMembersFailure = createAction(
//   '[Organization Unit Page] Get Organization Unit Members Failure',
//   props<{ error: string }>()
// );

// export const getOrganizationUnitRoles = createAction(
//   '[Organization Unit Page] Get Organization Unit Roles',
//   (id: number) => ({ id })
//   );

// export const getOrganizationUnitRolesSuccess = createAction(
//   '[Organization Unit Page] Get Organization Unit Roles Success',
//   props<{ organizationUnitRoles: PagedResultDtoOfOrganizationUnitRoleListDto  }>()
// );

// export const getOrganizationUnitRolesFailure = createAction(
//   '[Organization Unit Page] Get Organization Unit Roles Failure',
//   props<{ error: string }>()
// );
// export const deleteUsers = createAction(
//   '[Organization Unit Page] Delete Users',
//   (userid: number) => ({ userid })
// );
// export const deleteRoles = createAction(
//   '[Organization Unit Page] Delete Roles',
//   (roleid: number) => ({ roleid })
// );

// export const getOrganizationUnitUsersList = createAction(
//   '[Organization Unit Page] Get Organization Unit Users list',
//   (input: FindOrganizationUnitUsersInput) => ({ input })
//   );

// export const getOrganizationUnitUsersListSuccess = createAction(
//   '[Organization Unit Page] Get Organization Unit Users list Success',
//   props<{ organizationUnitUsersList: PagedResultDtoOfNameValueDto  }>()
// );

// export const getOrganizationUnitUsersListFailure = createAction(
//   '[Organization Unit Page] Get Organization Unit Users list Failure',
//   props<{ error: string }>()
// );
// export const getOrganizationUnitRolesList = createAction(
//   '[Organization Unit Page] Get Organization Unit Roles List',
//   (input: FindOrganizationUnitRolesInput) => ({ input })
//   );

// export const getOrganizationUnitRolesListSuccess = createAction(
//   '[Organization Unit Page] Get Organization Unit Roles List Success',
//   props<{ organizationUnitRolesList: PagedResultDtoOfNameValueDto  }>()
// );

// export const getOrganizationUnitRolesListFailure = createAction(
//   '[Organization Unit Page] Get Organization Unit Roles List Failure',
//   props<{ error: string }>()
// );

// export const createTreeUnit = createAction(
//   '[Organization Unit Page] create Organization Unit Tree',
//   (data) => ( data )
//   );

// export const createTreeUnitSuccess = createAction(
//   '[Organization Unit Page] create Organization Unit Tree Success',
// );

// export const createTreeUnitFailure = createAction(
//   '[Organization Unit Page] create Organization Unit Tree Failure',
//   props<{ error: string }>()
// );

// export const updateUnitTree = createAction(
//   '[Organization Unit Page] Update Organization Unit Tree',
//   (data) => ( data )
//   );

// export const updateUnitTreeSuccess = createAction(
//   '[Organization Unit Page] update Organization Unit Tree Success',
// );

// export const updateUnitTreeFailure = createAction(
//   '[Organization Unit Page] update Organization Unit Tree Failure',
//   props<{ error: string }>()
// );

// export const deleteUnitTree = createAction(
//   '[Organization Unit Page] delete Organization Unit Tree',
//   (data) => ( data )
//   );

// export const deleteUnitTreeSuccess = createAction(
//   '[Organization Unit Page] delete Organization Unit Tree Success',
// );

// export const deleteUnitTreeFailure = createAction(
//   '[Organization Unit Page] delete Organization Unit Tree Failure',
//   props<{ error: string }>()
// );

// export const addUsersToOrganizationUnit = createAction(
//   '[Organization Unit Page] Add Member Organization Unit Tree',
//   (data) => ( data )
//   );

// export const addUsersToOrganizationUnitSuccess = createAction(
//   '[Organization Unit Page] Add Member Organization Unit Tree Success',
// );

// export const addUsersToOrganizationUnitFailure = createAction(
//   '[Organization Unit Page] Add Member Organization Unit Tree Failure',
//   props<{ error: string }>()
// );

// export const addRolesToOrganizationUnit = createAction(
//   '[Organization Unit Page] Add Role Organization Unit Tree',
//   (data) => ( data )
//   );

// export const addRolesToOrganizationUnitSuccess = createAction(
//   '[Organization Unit Page] Add Role Organization Unit Tree Success',
// );

// export const addRolesToOrganizationUnitFailure = createAction(
//   '[Organization Unit Page] Add Role Organization Unit Tree Failure',
//   props<{ error: string }>()
// );

// export const deleteMemberFromOrgUnit = createAction(
//   '[Organization Unit Page] Delete Member Organization Unit Tree',
//   (data) => ( data )
//   );

// export const deleteMemberFromOrgUnitSuccess = createAction(
//   '[Organization Unit Page] Delete Member Organization Unit Tree Success',
// );

// export const deleteMemberFromOrgUnitFailure = createAction(
//   '[Organization Unit Page] Delete Member Organization Unit Tree Failure',
//   props<{ error: string }>()
// );

// export const deleteRoleFromOrgUnit = createAction(
//   '[Organization Unit Page] Delete Role Organization Unit Tree',
//   (data) => ( data )
//   );

// export const deleteRoleFromOrgUnitSuccess = createAction(
//   '[Organization Unit Page] Delete Role Organization Unit Tree Success',
// );

// export const deleteRoleFromOrgUnitFailure = createAction(
//   '[Organization Unit Page] Delete Role Organization Unit Tree Failure',
//   props<{ error: string }>()
// );
