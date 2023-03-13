import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import { filter as _filter, forEach as _forEach } from "lodash-es";

import {
  RdsCompAlertPopup,
  RdsCompDatatable,
  RdsCompPermissionTree,
  RdsCompPermissionTreeNew,
  RdsCompUserBasics,
  RdsCompUserRoles,
} from "../../../rds-components";
import {
  RdsBadge,
  RdsButton,
  RdsInput,
  RdsNavtabs,
  RdsOffcanvas,
} from "../../../rds-elements";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../libs/state-management/hooks";

import {
  createUser,
  deleteUser,
  fetchEditUser,
  fetchEditUserRoles,
  fetchOrganizationUnits,
  fetchOrgUnit,
  fetchRoles,
  fetchUsers,
  getPermission,
  getSelectedOrgUnit,
  updatePermission,
  updateUser,
} from "../../../../libs/state-management/user/user-slice";
import { useTranslation } from "react-i18next";

const Users = () => {
  const { t } = useTranslation();

  const tempRolesData = [
    { isChecked: false, name: "select all" },
    { isChecked: false, name: "Admin" },
    { isChecked: false, name: "User" },
    { isChecked: false, name: "Tenant" },
  ];

  function createTree(
    array: any[],
    parentIdProperty: any,
    idProperty: any,
    parentIdValue: any,
    childrenProperty: string,
    fieldMappings: any,
    level: any
  ): any {
    let tree: any[] = [];

    let nodes = _filter(array, [parentIdProperty, parentIdValue]);

    _forEach(nodes, (node) => {
      let newNode: any = {
        data: node,
        level: level,
        selected: false
      };

      mapFields(node, newNode, fieldMappings);

      newNode[childrenProperty] = createTree(
        array,
        parentIdProperty,
        idProperty,
        node[idProperty],
        childrenProperty,
        fieldMappings,
        level + 1
      );

      tree.push(newNode);
    });

    return tree;
  }

  function mapFields(node: any, newNode: any, fieldMappings: any): void {
    _forEach(fieldMappings, (fieldMapping: any) => {
      if (!fieldMapping["target"]) {
        return;
      }

      if (fieldMapping.hasOwnProperty("value")) {
        newNode[fieldMapping["target"]] = fieldMapping["value"];
      } else if (fieldMapping["source"]) {
        newNode[fieldMapping["target"]] = node[fieldMapping["source"]];
      } else if (fieldMapping["targetFunction"]) {
        newNode[fieldMapping["target"]] = fieldMapping["targetFunction"](node);
      }
    });
  }

  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.persistedReducer.user);
  // const userRoles = useAppSelector((state) => state.persistedReducer.user)
  const [userId, setUserId] = useState("");
  const [userRolesData, setUseRolesData] = useState<any>();
  const [editRolesData, setEditRoleData]= useState<any>();
  const [userData, setUserData] = useState<any>({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    lockoutEnabled: true,
    isActive: true,
    userName: "",
    password: "",
  });
  const [userPermission, setUserPermission] = useState<any>([]);
  const [tableData, setTableData] = useState<any[]>([ ]);

  const tableHeaders = [
    {
      displayName: "User Name",
      key: "userName",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Name",
      key: "name",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Roles",
      key: "roles",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Email Address",
      key: "emaiAddress",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Email Confirm",
      key: "emailConfirm",
      datatype: "badge",
      dataLength: 5,
      required: true,
      sortable: true,
    },
    {
      displayName: "Status",
      key: "status",
      datatype: "badge",
      dataLength: 20,
      required: true,
      sortable: true,
    },
    {
      displayName: "Creation Time",
      key: "creationTime",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
  ];

  const actions = [
    { id: "user_edit_offcanvas", displayName: "Edit", offId: "user-edit-off" },
    { id: "user_delete", displayName: "Delete", modalId: "user_delete_off" },
    {
      id: "set_password",
      displayName: "Set Password",
      modalId: "set_password",
    },
  ];


  const navtabsItemsEdit = [
    { label: "Basics", tablink: "#nav-home", id: 0 },
    { label: "Roles", tablink: "#nav-role", id: 1 },
    { label: "Organization Units", tablink: "#nav-org", id: 2 },
    { label: "Permissions", tablink: "#nav-profile", id: 3 },
  ];
  const navtabsItems = [
    { label: "Basics", tablink: "#nav-home", id: 0 },
    { label: "Roles", tablink: "#nav-role", id: 1 },
    { label: "Organization Units", tablink: "#nav-org", id: 2 },
  ];

  const offCanvasHandler = () => {};
  const [getUser, setGetUserData] = useState<any>({});
  const [activeNavTabId, setActiveNavTabId] = useState();
  const [activeNavTabIdEdit, setActiveNavTabIdEdit] = useState<any>(0);

  const [organizationUnit, setOrganizationUnit] = useState<any[]>([]);
  const [orgUnitIds, setOrgUnitIds] = useState<any[]>([]);
  const [roles, setRoles] = useState([
    { option: "t", value: "tt" },
    { option: "r", value: "rr" },
    { option: "w", value: "ww" },
    { option: "q", value: "qq" },
  ]);
  const canvasTitle = "New User";
  function onSelectMenu(event: any) {
    console.log(event);
    
  }
  const [roleNames, setRoleNames] = useState<any>();
  const [selectedPermissionListData, setSelectedPermissionListData] =
    useState<any>([]);
 const [editOrganizationUnit,setEditOrganizationUnit]=useState<any[]>([]);
  const [permissionKeyName, setPermissionKeyName] = useState(0);
  function handleSelectesPermission() {
    const permissions: any = {
      key: permissionKeyName,
      permissions: {
        permissions: selectedPermissionListData,
      },
    };
    dispatch(updatePermission(permissions) as any);
  }

  function handleRoleNamesData(data: any) {
    let rolesNames: any[] = [];
    debugger;
    data.forEach((element: any) => {
      if (element.isChecked) rolesNames.push(element.name);
    });
    setRoleNames(rolesNames);
  }

  function handleOrganizationUnit(data: any, selected:boolean) {
    debugger
    const orgData=orgUnitIds.includes(data.data.id)

    let temporgUnit = orgUnitIds.filter((element: any) => {
      if(element != data.data.id){
        return element;
      }
  });

    if(!orgData){
      temporgUnit.push(data.data.id)
    }
    debugger
    setOrgUnitIds(temporgUnit);
  }

  function SelectesPermissions(permissionsData: any
    ) {
    setSelectedPermissionListData(permissionsData);
  }

  const onActionSelection = (rowData: any, actionId: any) => {
    debugger
    setPermissionKeyName(rowData.id);
    setUserId(rowData.id); 
    dispatch(fetchEditUser(String(rowData.id)) as any);
    dispatch(getPermission(rowData.id) as any);
    dispatch(fetchEditUserRoles(rowData.id) as any);
    dispatch(getSelectedOrgUnit(rowData.id)as any);
    setActiveNavTabIdEdit(0)
  };

  function getSelectedPermissions(data: any) {
    console.log("Granted Permissions", data);
  }
  function getSelectedNavTab(event: any) {
    console.log(event);
  }

  const exportToExcel = () => {
    // create an empty excel workbook
    const wb = XLSX.utils.book_new();

    // create the headers and data arrays
    const headers = tableHeaders.map((header) => header.displayName);
    type DataRow = { [key: string]: any };
    const data = tableData.map((row: any) => {
      let dataRow: DataRow = {};
      tableHeaders.forEach((header) => {
        dataRow[header.displayName] = row[header.key];
      });
      return dataRow;
    });

    // create a worksheet and add the headers and data
    const ws = XLSX.utils.json_to_sheet([headers, ...data]);

    // add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // write the workbook to a file
    XLSX.writeFile(wb, "data.xlsx");
  };

  function getUserData(data: any) {
    setGetUserData(data);
  }

  function createNewUser(data: any) {
    debugger
    const tempData = { ...getUser, roleNames: roleNames, organizationUnitIds:orgUnitIds };
    dispatch(createUser(tempData) as any).then((res: any) => {

      dispatch(fetchUsers() as any);
    });
    setUserData({
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      twoFactorEnabled: false,
      userName: "",
      password: "",
    });
  }
 function offcanvasClose(){
    setUserData({
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      twoFactorEnabled: false,
      userName: "",
      password: "",
    })
    setUseRolesData(userRolesData);
    setOrganizationUnit(organizationUnit)

 }
  function updateUserData(data: any) {
    debugger
    let updateData:any = {}
    if(getUser.name){
       updateData = { ...getUser, roleNames: roleNames, organizationUnitIds:orgUnitIds };
    }
    else{
       updateData = { ...userData, roleNames: roleNames,organizationUnitIds:orgUnitIds };
    }
    dispatch(updateUser({id:userId, body:updateData}) as any).then((res: any) => {
      dispatch(fetchUsers() as any);
    });
    setUserData({
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      twoFactorEnabled: false,
      userName: "",
      password: "",
    });
  }
  useEffect(() => {
    debugger;
    dispatch(fetchUsers() as any);
    dispatch(fetchOrganizationUnits() as any);
    dispatch(fetchRoles() as any);
    //dispatch(fetchEditUser("d58fa786-41a6-b110-d3e4-3a0922833270") as any)
  }, [dispatch]);

  useEffect(() => {
    debugger;
    let tempRoleData: any[] = [];
    debugger
    if (data.roles){
      data.roles.items.map((el: any) => {
        const data3 = {
          name: el.name,
          isChecked: false,
        };
        tempRoleData.push(data3);
      });
    setUseRolesData(tempRoleData);
    }
  }, [data.roles]);

  useEffect(()=>{
    debugger;
    if(data.editUserRoles){
      let editRolesUserData:any[] = [];
      if(userRolesData){
      userRolesData.map((el: any) => {
        let isChecked = false;
        data.editUserRoles.items.forEach((item:any)=>{
          if(item.name == el.name){
            isChecked = true;
          }
        })
        const data1 = {
          name: el.name,
          isChecked: isChecked,
        };
        editRolesUserData.push(data1);
      });
    }
      console.log(editRolesUserData)
      setEditRoleData(editRolesUserData);
  }


  },[data.editUserRoles]) 

   
  function recursionFunction(organizationUnit:any, selectedOrgUnit:any){
    debugger
    return organizationUnit.map((el:any)=>{
      selectedOrgUnit.map((e:any)=>{
        if(el.data.id == e.id){
          el.selected = true;
        }
      })
      if(el.children.length){
        el.children = recursionFunction(el.children, selectedOrgUnit);
        return el;
      }
      else{ 
        return el;
      }
     }) 
  } 

  useEffect(()=>{
    debugger
    if(data.editorganizationUnit?.length){
      let tempEditOrgData:any[] = recursionFunction(organizationUnit,data.editorganizationUnit)
      setEditOrganizationUnit(tempEditOrgData)
      console.log(tempEditOrgData)
    }
    else{
      setEditOrganizationUnit(organizationUnit)
    }
  },[data.editorganizationUnit])

  
  function deleteHandler(data: any) {
    console.log(data);
    dispatch(deleteUser(userId) as any).then((result: any) => {
      dispatch(fetchUsers() as any);
    });
  }

  useEffect(() => {
    debugger;
    if (data.permission) {
      
      setUserPermission(data.permission.groups);
    }
  }, [data.permission]);

  useEffect(() => {
    debugger;
    if (data.users) {
      let tempTableData: any[] = [];
      data.users.items.map((item: any) => {
        const data = {
          id: item.id,
          userName: item.userName,
          name: item.name,
          roles: item.roleNames,
          emaiAddress: item.email,
          emailConfirm: { badgeColorVariant: "primary", content: "Yes" },
          status: { badgeColorVariant: "success", content: "Active" },
          creationTime: "01/04/2023, 09:20:51 AM",
        };
        tempTableData.push(data);
      });
      setTableData(tempTableData);
    }
  }, [data.users]);
  function abc(...prop: any[]) {
    console.log(prop);
    return prop;
  }

  useEffect(() => {
    debugger;
    let tempOrgData: any[] = [];
    if (data.organizationUnit) {
     console.log(data.organizationUnit);
      const treeData1 = createTree(
        data.organizationUnit.items,
        "parentId",
        "id",
        null,
        "children",
        [
          {
            target: "label",
            source: "displayName",
          },
          {
            target: "expandedIcon",
            value: "fa fa-folder-open text-warning",
          },
          {
            target: "collapsedIcon",
            value: "fa fa-folder text-warning",
          },
          {
            target: "expanded",
            value: true,
          },
        ],
        1
      );

      tempOrgData = treeData1;
    }
    setOrganizationUnit(tempOrgData);
  }, [data.organizationUnit]);



  useEffect(() => {
    debugger;
    if (data.editUser) {
      debugger;
      setUserData(data.editUser);
    }
  }, [data.editUser]);


  return (
    <>
      <div className="row">
        <div className="col-md-12 text-end pb-3 desktop-btn">
          <RdsButton
            label="New User"
            type="button"
            size="medium"
            colorVariant="primary"
            showLoadingSpinner={false}
            databstoggle="offcanvas"
            databstarget="#userOffcanvas"
            icon={"plus"}
            iconWidth={"12px"}
            iconHeight={"12px"}
          ></RdsButton>
        </div>
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
          <RdsCompDatatable
            tableData={tableData}
            tableHeaders={tableHeaders}
            actions={actions}
            noDataTitle={"Currently you do not have user"}
            classes="table__userTable"
            pagination={true}
            onActionSelection={onActionSelection}
            recordsPerPageSelectListOption={true}
          ></RdsCompDatatable>
          <RdsCompAlertPopup
            alertID="user_delete_off"
            onSuccess={deleteHandler}
          />
        </div>
      </div>

      <RdsOffcanvas
        backDrop={false}
        scrolling={true}
        preventEscapeKey={false}
        canvasTitle={canvasTitle}
        offId="userOffcanvas"
        offcanvaswidth={650}
        placement={"end"}
        onClose={(e) => {
        offcanvasClose()
        }}
      >
        <RdsNavtabs
          navtabsItems={navtabsItems}
          type={"tabs"}
          activeNavTabId={activeNavTabId}
          activeNavtabOrder={(activeNavTabId) => {
            setActiveNavTabId(activeNavTabId);
          }}
          justified={false}
        >
          {activeNavTabId == 0 && (
            <RdsCompUserBasics
              userData={userData}
              createUser={(e: any) => {
                getUserData(e);
              }}
            />
          )}
          {activeNavTabId == 1 && (
            <>
              <RdsCompUserRoles
                usersRole={userRolesData}
                changedData={(data: any) => {
                  handleRoleNamesData(data);
                }}
              ></RdsCompUserRoles>
              
            </>
          )}
          {activeNavTabId == 2 && (
            <>
              <RdsCompPermissionTreeNew treeData={organizationUnit} onCheckboxChange={handleOrganizationUnit} />
              
            </>
          )}

        </RdsNavtabs>
        <div className="footer-buttons justify-content-end bottom-0 pt-0">
                <RdsButton
                  class="me-2"
                  label="CANCEL"
                  type="button"
                  databsdismiss="offcanvas"
                  isOutline={true}
                  colorVariant="primary"
                ></RdsButton>
                <RdsButton
                  class="me-2"
                  label="SAVE"
                  type="button"
                  isOutline={false}
                  colorVariant="primary"
                  onClick={createNewUser}
                  databsdismiss="offcanvas"
                ></RdsButton>
              </div>
      </RdsOffcanvas>

      <RdsOffcanvas
        canvasTitle="Edit User"
        onclick={offCanvasHandler}
        placement="end"
        offId="user-edit-off"
        offcanvaswidth={650}
        backDrop={false}
        scrolling={false}
        onClose={(e) => {
          offcanvasClose()}
        }
        preventEscapeKey={false}
      >
        <RdsNavtabs
          navtabsItems={navtabsItemsEdit}
          type={"tabs"}
          activeNavTabId={activeNavTabIdEdit}
          activeNavtabOrder={(activeNavTabIdEdit) => {
            setActiveNavTabIdEdit(activeNavTabIdEdit);
          }}
          justified={false}
        >
          {activeNavTabIdEdit == 0 && (
            <RdsCompUserBasics
              organizationUnit={organizationUnit}
              roles={roles}
              userData={userData}
              isEdit={true}
              createUser={(e: any) => {
                getUserData(e);
              }}
            />
          )}

           {activeNavTabIdEdit == 1 && (
            <>
              <RdsCompUserRoles
                usersRole={editRolesData}
                changedData={(data: any) => {
                  handleRoleNamesData(data);
                }}
              ></RdsCompUserRoles>
              
            </>
          )}
          
          {activeNavTabIdEdit == 2 && (
            <>
             <RdsCompPermissionTreeNew treeData={editOrganizationUnit}
              onCheckboxChange={handleOrganizationUnit} />
              
            </>
          )}
          
          {activeNavTabIdEdit == 3 && (
            <>
              <RdsCompPermissionTree
                permissions={userPermission}
                selectedPermissions={(SelectesPermission: any) => {
                  SelectesPermissions(SelectesPermission);
                }}
              ></RdsCompPermissionTree>
              <div className="footer-buttons my-2">
                <div className="row">
                  <div className="col-md-12 d-flex">
                    <div>
                      <RdsButton
                        label="Cancel"
                        type="button"
                        colorVariant="primary"
                        size="small"
                        databsdismiss="offcanvas"
                        isOutline={true}
                      ></RdsButton>
                    </div>
                    <div>
                      <RdsButton
                        label="Save"
                        type="button"
                        size="small"
                        // isDisabled={formValid}
                        class="ms-2"
                        colorVariant="primary"
                        databsdismiss="offcanvas"
                        onClick={handleSelectesPermission}
                      ></RdsButton>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

           


        </RdsNavtabs>

        <div className="footer-buttons justify-content-end bottom-0 pt-0">
                <RdsButton
                  class="me-2"
                  label="CANCEL"
                  type="button"
                  databsdismiss="offcanvas"
                  isOutline={true}
                  colorVariant="primary"
                ></RdsButton>
                <RdsButton
                  class="me-2"
                  label="SAVE"
                  type="button"
                  isOutline={false}
                  colorVariant="primary"
                  onClick={updateUserData}
                  databsdismiss="offcanvas"
                ></RdsButton>
              </div>
      </RdsOffcanvas>
    </>
  );
};

export default Users;
