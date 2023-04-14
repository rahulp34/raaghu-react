import React, { useEffect, useState } from "react";
import { filter as _filter, forEach as _forEach } from "lodash-es";

import {
  RdsCompAlertPopup,
  RdsCompDatatable,
  RdsCompPermissionTree,
  RdsCompPermissionTreeNew,
  RdsCompUserBasics,
  RdsCompUserRoles,
} from "../../../rds-components";
import { RdsCompFileUploader } from "../../../../../raaghu-components/src/index";
import {
  RdsBadge,
  RdsButton,
  RdsIcon,
  RdsInput,
  RdsAlert,
  RdsInputGroup,
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

  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.persistedReducer.user);
  const [userId, setUserId] = useState("");
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
  const [userRolesData, setUseRolesData] = useState<any>();
  const [editRolesData, setEditRoleData] = useState<any>();
  const [userPermission, setUserPermission] = useState<any>([]);
  const [tableData, setTableData] = useState<any[]>([]);
  const [Alert, setAlert] = useState({ show: false, message: "", color: "" });
//    {userName:"abc", name:"abc", roles:"admin dsd", emailAddress: "asdf@abc.abc"}]);

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
      displayName: "Email Address",
      key: "emailAddress",
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
      displayName: "Phone Number",
      key: "phoneNumber",
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
      displayName: "Surname",
      key: "surname",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    }, 
    {
      displayName: "Active",
      key: "isActive",
      datatype: "text",
    },
    {
      displayName: "Account Lockout",
      key: "lockoutEnabled",
      datatype: "text",
    },
    {
      displayName: "Creation Time",
      key: "creationTime",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Last Modification Time",
      key: "lastModification",
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
    { label: "Set Password", tablink: "#set-password", id: 4 },
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
  const canvasTitle = "New User";
  const [roleNames, setRoleNames] = useState<any>();
  const [selectedPermissionListData, setSelectedPermissionListData] = useState<any>([]);
  const [editOrganizationUnit, setEditOrganizationUnit] = useState<any[]>([]);
  const [permissionKeyName, setPermissionKeyName] = useState(0);
  
  
  useEffect(() => {
    dispatch(fetchUsers() as any);
    dispatch(fetchOrganizationUnits() as any);
    dispatch(fetchRoles() as any);
  }, [dispatch]);


  useEffect(() => {
    if (data.users) {
      
      let tempTableData: any[] = [];
      data?.users?.items?.map((item: any) => {
        let rolesNames: string = "";
        item?.roleNames?.map((res: any) => {
          rolesNames = rolesNames + `${res} `;
        });
        
        const date = new Date(item.creationTime);
        const creationDate = `${("0" + date.getDate()).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}, ${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)} ${date.getHours() >= 12 ? "PM" : "AM"}`;
        let updatedDate = '';
        if (item.lastModificationTime) {
          const lastDate = new Date(item.lastModificationTime);
          updatedDate = `${("0" + lastDate.getDate()).slice(-2)}/${("0" + (lastDate.getMonth() + 1)).slice(-2)}/${lastDate.getFullYear()}, ${("0" + lastDate.getHours()).slice(-2)}:${("0" + lastDate.getMinutes()).slice(-2)} ${lastDate.getHours() >= 12 ? "PM" : "AM"}`;
        }
        else {
          updatedDate = '--'
        }
        const data = {
          id: item.id,
          userName: item.userName,
          name: item.name,
          roles: rolesNames,
          emailAddress: item.email,
          phoneNumber:item.phoneNumber,
          surname:item.surname,
          creationTime:creationDate,
          lastModification:updatedDate,
          isActive :(
            <>
              {item.isActive == true ? (
                <div style={{ strokeWidth: "2px" }}>
                  <RdsIcon
                    name="check"
                    height="17px"
                    width="15px"
                    colorVariant="success"
                  />
                </div>
              ) : (
                <div style={{ strokeWidth: "2px" }}>
                  <RdsIcon
                    name="cancel"
                    height="17px"
                    width="15px"
                    colorVariant="danger"
                  />
                </div>
              )}
            </>
          ),
          lockoutEnabled :(
            <>
              {item.lockoutEnabled == true ? (
                <div style={{ strokeWidth: "2px" }}>
                  <RdsIcon
                    name="check"
                    height="17px"
                    width="15px"
                    colorVariant="success"
                  />
                </div>
              ) : (
                <div style={{ strokeWidth: "2px" }}>
                  <RdsIcon
                    name="cancel"
                    height="17px"
                    width="15px"
                    colorVariant="danger"
                  />
                </div>
              )}
            </>
          ),

        };
        tempTableData.push(data);
      });
      setTableData(tempTableData);
    }
    setUserData({
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      twoFactorEnabled: false,
      userName: "",
      password: "",
    });
  }, [data.users]);

  useEffect(() => {
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
    if (data.editUser) {
      setUserData(data.editUser);
    }
  }, [data.editUser]);

  useEffect(() => {
    let tempRoleData: any[] = [];
    if (data.roles) {
      data?.roles?.items?.map((el: any) => {
        const data3 = {
          name: el.name,
          isChecked: false,
        };
        tempRoleData.push(data3);
      });
    }
    setUseRolesData(tempRoleData);
  }, [data.roles]);

  useEffect(() => {
    let editRolesUserData: any[] = [];
    if (data.editUserRoles) {
      if (userRolesData) {
        userRolesData?.map((el: any) => {
          let isChecked = false;
          data.editUserRoles.items.forEach((item: any) => {
            if (item.name == el.name) {
              isChecked = true;
            }
          });
          const data1 = {
            name: el.name,
            isChecked: isChecked,
          };
          editRolesUserData.push(data1);
        });
      }
    }
    setEditRoleData(editRolesUserData);
  }, [data.editUserRoles]);

  useEffect(() => {
    if (data.editorganizationUnit) {
      let tempEditOrgData: any[] = recursionFunction(
        organizationUnit,
        data.editorganizationUnit
      );
      setEditOrganizationUnit(tempEditOrgData);
      console.log(tempEditOrgData);
    } else {
      setEditOrganizationUnit(organizationUnit);
    }
  }, [data.editorganizationUnit]);

  useEffect(() => {
    if (data.permission) {
      setUserPermission(data.permission.groups);
    }
  }, [data.permission]);



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
        selected: false,
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

  function handleSelectesPermission() {
    const permissions: any = {
      key: permissionKeyName,
      permissions: {
        permissions: selectedPermissionListData,
      },
    };
    dispatch(updatePermission(permissions) as any);
  }

  function handleRoleNamesData(event: any) {
    let rolesNames: any[] = [];
    event.forEach((element: any) => {
      if (element.isChecked) rolesNames.push(element.name);
    });
    setRoleNames(rolesNames);
  }

  function handleOrganizationUnit(event: any, selected: boolean) {
    const orgData = orgUnitIds.includes(event.data.id);
    let temporgUnit = orgUnitIds.filter((element: any) => {
      if (element != event.data.id) {
        return element;
      }
    });

    if (!orgData) {
      temporgUnit.push(event.data.id);
    }
    setOrgUnitIds(temporgUnit);
  }

  function SelectesPermissions(permissionsData: any) {
    setSelectedPermissionListData(permissionsData);
  }

  function onActionSelection(rowData: any, actionId: any){
    setPermissionKeyName(rowData.id);
    setUserId(rowData.id);
    dispatch(fetchEditUser(String(rowData.id)) as any);
    dispatch(getPermission(rowData.id) as any);
    dispatch(fetchEditUserRoles(rowData.id) as any);
    dispatch(getSelectedOrgUnit(rowData.id) as any);
    setActiveNavTabIdEdit(0);
  };

  function getSelectedPermissions(data: any) {
    console.log("Granted Permissions", data);
  }

  function getUserData(data: any) {
    setGetUserData(data);
  }

  function createNewUser(data: any) {
    const tempData = {
      ...getUser,
      roleNames: roleNames,
      organizationUnitIds: orgUnitIds,
    };
    dispatch(createUser(tempData) as any).then((res: any) => {
      if (res.type == "user/createuser/rejected") {
        setAlert({
          ...Alert,
          show: true,
          message: "your request has been denied",
          color: "danger",
        });
      } else {
        setAlert({
          ...Alert,
          show: true,
          message: "User created Successfully",
          color: "success",
        });
      }
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

  function offcanvasClose() {
    setUserData({
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      twoFactorEnabled: false,
      userName: "",
      password: "",
    });
    setUseRolesData(userRolesData);
    setOrganizationUnit(organizationUnit);
  }

  function updateUserData(data: any) {
    let updateData: any = {};
    if (getUser.name) {
      updateData = {
        ...getUser,
        roleNames: roleNames,
        organizationUnitIds: orgUnitIds,
      };
    } else {
      updateData = {
        ...userData,
        roleNames: roleNames,
        organizationUnitIds: orgUnitIds,
      };
    }
    dispatch(updateUser({ id: userId, body: updateData }) as any).then(
      (res: any) => {
        if (res.type == "user/updateUser/rejected") {
          setAlert({
            ...Alert,
            show: true,
            message: "your request has been denied",
            color: "danger",
          });
        } else {
          setAlert({
            ...Alert,
            show: true,
            message: "User updated Successfully",
            color: "success",
          });
        }
        dispatch(fetchUsers() as any);
      }
    );
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

  function recursionFunction(organizationUnit: any, selectedOrgUnit: any) {
    return organizationUnit?.map((el: any) => {
      selectedOrgUnit?.map((e: any) => {
        if (el.data.id == e.id) {
          el.selected = true;
        }
      });
      if (el.children.length) {
        el.children = recursionFunction(el.children, selectedOrgUnit);
        return el;
      } else {
        return el;
      }
    });
  }

  function deleteHandler(data: any) {
    console.log(data);
    dispatch(deleteUser(userId) as any).then((res: any) => {
      if (res.type == "user/deleteUser/rejected") {
        setAlert({
          ...Alert,
          show: true,
          message: "your request has been denied",
          color: "danger",
        });
      } else {
        setAlert({
          ...Alert,
          show: true,
          message: "User deleted Successfully",
          color: "success",
        });
      }
      dispatch(fetchUsers() as any);
    });
  }
  useEffect(() => {
    // Set a 2-second timer to update the state
    const timer = setTimeout(() => {
      setAlert({ ...Alert, show: false });
    }, 2000);
  function inputValueFn(){

  }

    // Clean up the timer when the component unmounts or when the state changes
    return () => clearTimeout(timer);
  }, [data.users]);
  return (
    <div className="row">
    <div className="col-md-12 mb-3 ">
      <div className="row ">
        <div className="col-md-4">
          {Alert.show && (
            <RdsAlert
              alertmessage={Alert.message}
              colorVariant={Alert.color}
            ></RdsAlert>
          )}
        </div>
        <div className="col-md-8 d-flex justify-content-end my-1">
        <RdsButton
            label="New User"
            showLoadingSpinner={false}
            databstoggle="offcanvas"
            databstarget="#userOffcanvas"
            icon={"plus"}
            iconColorVariant="light"
            iconHeight="15px"
            iconWidth="15px"
            iconFill={false}
            iconStroke={true}
            block={false}
            size="small"
            type="button"
            colorVariant="primary"
          ></RdsButton>
        </div>
      </div>
    </div>

    <div className="col-md-12">
      <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
      <RdsCompDatatable
          tableHeaders={tableHeaders}
          actions={actions}
          tableData={tableData}
          pagination={true}
          recordsPerPage={10}
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
        backDrop={true}
        scrolling={true}
        preventEscapeKey={false}
        canvasTitle={canvasTitle}
        offId="userOffcanvas"
        placement={"end"}
        onClose={(e) => {
          offcanvasClose();
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
              <RdsCompPermissionTreeNew
                treeData={organizationUnit}
                onCheckboxChange={handleOrganizationUnit}
              />
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
            size="small"
            colorVariant="primary"
          ></RdsButton>
          <RdsButton
            class="me-2"
            label="SAVE"
            type="button"
            size="small"
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
        backDrop={false}
        scrolling={false}
        onClose={(e) => {
          offcanvasClose();
        }}
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
          {activeNavTabIdEdit == 0 && 
             <RdsCompUserBasics
             organizationUnit={organizationUnit}
             userData={userData}
             isEdit={true}
             createUser={(e: any) => {
               getUserData(e);
             }}
           />
          }

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
              <RdsCompPermissionTreeNew
                treeData={editOrganizationUnit}
                onCheckboxChange={handleOrganizationUnit}
              />
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
          {/* {activeNavTabIdEdit == 4 && (
            <>
            <div className="row">
              <div className="col-md-5 mt-2 h-68  ">
                <RdsInputGroup 
                  buttonColorVariant="primary"
                  inputGroupLabel="Source"
                  icon="refresh_sync" 
                  iconHeight="15px"
                  iconWidth="15px"
                  iconFill={false}
                  iconStroke={true}
                  iconColorVariant="light"
                  inputValue={inputValueFn}
                  outline={false}
                  placeholder="Source"
                />
                </div>
              </div>
            </>
          )} */}
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
  </div>
  );
};

export default Users;
