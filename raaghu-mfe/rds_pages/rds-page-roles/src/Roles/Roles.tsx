import React, { useState, useEffect } from "react";
import {
  RdsBadge,
  RdsInput,
  RdsButton,
  RdsOffcanvas,
  RdsNavtabs,
  RdsAlert
} from "../../../../../raaghu-elements/src";

import {
  RdsCompDatatable,
  RdsCompPermissionTree,
  RdsCompAlertPopup,
  RdsCompClaims,
} from "../../../rds-components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import {
  fetchRolesInRoles,
  addRolesUnit,
  editRoles,
  deleteRoles,
  fetchPermission,
  editPermisstion,
  fetchAllClaims,
  fetchClaims,
} from "../../../../libs/state-management/roles/roles-slice";
import { useTranslation } from "react-i18next";

interface RdsPageRolesProps {}

const Roles = (props: RdsPageRolesProps) => {
  const [activeTab, setActiveTab] = useState("basic");
  const [Alert, setAlert] = useState({ show: false, message: "", color: "" });
  const [data, setData] = useState({
    roles: [],
    permission: [],
  });
  const [val, setVal] = useState("");
  const [id, setId] = useState(0);
  const [checked, setChecked] = useState({
    default: false,
    public: false,
  });
  const enablecheckboxselection = true;
  const dispatch = useAppDispatch();
  const Data = useAppSelector((state) => state.persistedReducer.roles) as any;
  const { t } = useTranslation();
  const [claimsTable, setClaimsTableData] = useState<any[]>([])

  
  useEffect(() => {
    dispatch(fetchRolesInRoles() as any);
    dispatch(fetchAllClaims() as any);
  }, [dispatch]);
  useEffect(() => {
    if (Array.isArray(Data.roles)) {
      const tempData = Data.roles?.map((curr: any) => {
        return {
          provideKey: curr.name,
          isDefault: curr.isDefault,
          isPublic: curr.isPublic,
          id: curr.id,
          concurrencyStamp: curr.concurrencyStamp,
          extraProperties: curr.extraProperties,
          name: (
            <>
              {" "}
              <div>
                {curr.name}
                {curr.isDefault && (
                  <RdsBadge
                    label="Default"
                    size="medium"
                    colorVariant="success"
                  ></RdsBadge>
                )}
                {curr.isPublic && (
                  <RdsBadge
                    label="Public"
                    size="medium"
                    colorVariant="primary"
                  ></RdsBadge>
                )}
              </div>
            </>
          ),
        };
      });
      setData({ ...data, roles: tempData });
    }
  }, [Data.roles]);

  const handleractiveNavtabOrder = (id: any) => {
    setActiveTab(id);
  };
  const handlerSelectedPermission = (data: any) => {
    const newElements = data.filter((newItem: any) => {
      return data.permission?.some(
        (prevItem: any) =>
          prevItem.name == newItem.name &&
          prevItem.isGranted == !newItem.isGranted
      );
    });
  };
  const handlerDeleteConfirm = () => {
    dispatch(deleteRoles(id) as any).then((res:any) => {
      if (res.type == "Roles/deleteRoles/rejected") {
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
          message: "Role deleted Successfully",
          color: "success",
        });
      }
      dispatch(fetchRolesInRoles() as any);
    });
  };
  useEffect(() => {
    // Set a 3-second timer to update the state
    const timer = setTimeout(() => {
      setAlert({ ...Alert, show: false });
    }, 3000);

    // Clean up the timer when the component unmounts or when the state changes
    return () => clearTimeout(timer);
  }, [data.roles]);

  const tableHeader = [
    {
      displayName: "Role Name",
      key: "name",
      datatype: "children",
      sortable: true,
    },
  ];
  let actions: any = [
    { id: "delete", displayName: "Delete", modalId: "role-delete-off" },
    { id: "edit", displayName: "Edit", offId: "role-edit-off" },
  ];
  const handlerActions = (rowData: any, actionId: any) => {
    setId(rowData.id);

    if (actionId === "edit") {
      setVal(rowData.provideKey);
      setChecked({
        ...checked,
        default: rowData.isDefault,
        public: rowData.isPublic,
      });
      dispatch(fetchClaims(rowData.id) as any)
      dispatch(fetchPermission(rowData.provideKey) as any);
    }
  };

  const [allClaimsArray, setAllClaimsArray] = useState<any[]>([]);

  useEffect(()=>{
    if(Data.allClaims){
      let tempAllClaimsArray:any[] = [];
      Data.allClaims.map((res:any)=>{
        const item = {
          option:res.name,
          value: res.name
        }
        tempAllClaimsArray.push(item);
      })
      setAllClaimsArray(tempAllClaimsArray);
    }
  },[Data.allClaims])

  useEffect(() => {
    if(Data.claims){
      setClaimsTableData(Data.claims)
    }
  }, [Data.claims]);
  
  useEffect(() => {
    setData({ ...data, permission: Data.permission });
  }, [Data.permission]);

  const handlerAddRole = () => {
    const dto = {
      isDefault: checked.default,
      isPublic: checked.public,
      name: val,
    };
    dispatch(addRolesUnit(dto) as any).then((res: any) => {
      if (res.type == "Roles/addRolesUnit/rejected") {
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
          message: "Role added Successfully",
          color: "success",
        });
      }
      dispatch(fetchRolesInRoles() as any);
    });
  };
  const handlerEditRole = () => {
    const dto = {
      name: val,
      isDefault: checked.default,
      isPublic: checked.public,
      concurrencyStamp: undefined,
      extraProperties: {},
    };
    dispatch(editRoles({ id: id, dTo: dto }) as any).then((res:any) => {
      if (res.type == "Roles/editRoles/rejected") {
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
          message: "Role edited Successfully",
          color: "success",
        });
      }
      dispatch(fetchRolesInRoles() as any);
    });
  };
  const handlerNewRole = () => {
    setVal("");
    setChecked({ ...checked, default: false, public: false });
  };
  return (
    <>
    <div className="container-fluid p-0 m-0">
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
            icon="plus"
            label="New Role"
            iconColorVariant="light"
            iconHeight="15px"
            iconWidth="15px"
            iconFill={false}
            iconStroke={true}
            block={false}
            size="small"
            type="button"
            colorVariant="primary"
            databstoggle="offcanvas"
            databstarget="#newRole"
            showLoadingSpinner={true}
            onClick={handlerNewRole}
          ></RdsButton>
                  </div>
               
            </div>
            </div>
    
      <div className="card p-3 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <RdsCompDatatable
         actionPosition="right"
          classes="table__userTable"
          tableHeaders={tableHeader}
          tableData={data?.roles}
          pagination={data?.roles?.length > 5 ? true : false}
          recordsPerPage={10}
          noDataTitle="Currently you do not have Role"
          actions={actions}
          onActionSelection={handlerActions}
          recordsPerPageSelectListOption={true}
        ></RdsCompDatatable>
        <RdsOffcanvas
          placement="end"
          canvasTitle="New Role"
          
          offId="newRole"
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
        >
          <div className="mt-2">
            <div>
              <div className=" mt-4 mb-2 ">
                <RdsInput
                  inputType="text"
                  label="Role Name"
                  labelPositon="top"
                  placeholder="Enter Role"
                  required={true}
                  value={val}
                  size="medium"
                  onChange={(e:any) => setVal(e.target.value)}
                ></RdsInput>
              </div>
              <div className="d-flex mt-4 me-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    checked={checked.default}
                    onChange={(e:any) => {
                      setChecked({ ...checked, default: !checked.default });
                    }}
                    id="flexCheckDefaultrole"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaultrole"
                  >
                    Default Role
                  </label>
                </div>
                <div className="ms-4 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefaultpublic"
                    checked={checked.public}
                    onChange={(e:any) => {
                      setChecked({ ...checked, public: !checked.public });
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefaultpublic"
                  >
                    Available For Public
                  </label>
                </div>
              </div>
            </div>

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
                              databstoggle="offcanvas"
                              databstarget="#newRole"
                              onClick={handlerAddRole}
                            ></RdsButton>
                          </div>
                        </div>
                      </div>
                    </div>
          </div>
        </RdsOffcanvas>
        <RdsOffcanvas
          placement="end"
          canvasTitle="Edit Role"
          
          offId="role-edit-off"
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
        >
          <RdsNavtabs
            type="tabs"
            activeNavtabOrder={handleractiveNavtabOrder}
            fill={false}
            navtabsItems={[
              {
                label: "Basic",
                tablink: "#nav-Operation",
                id: "basic",
              },
              {
                label: "Permissions",
                tablink: "#nav-Change",
                id: "permissions",
              },
              {
                label: "Claims",
                tablink: "#nav-Claims",
                id: "claims",
              },
            ]}
          />
          <div className="mt-2">
            {activeTab == "basic" && (
              <div>
                {" "}
                <div className=" mt-3 ">
                  <RdsInput
                    inputType="text"
                    label="Role Name"
                    labelPositon="top"
                    placeholder="Enter Name"
                    // id={node.data.id}
                    required={true}
                    //  name={Edit}
                    value={val}
                    size="medium"
                    onChange={(e:any) => setVal(e.target.value)}
                  ></RdsInput>
                </div>
                <div className="d-flex mt-4 me-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked={checked.default}
                      onChange={(e:any) => {
                        setChecked({ ...checked, default: !checked.default });
                      }}
                      id="flexCheckDefaultrole"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefaultrole"
                    >
                      Default Role
                    </label>
                  </div>
                  <div className="ms-4 form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefaultpublic"
                      checked={checked.public}
                      onChange={(e:any) => {
                        setChecked({ ...checked, public: !checked.public });
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefaultpublic"
                    >
                      Available For Public
                    </label>
                  </div>
                </div>
              </div>
            )}
            {activeTab == "permissions" && (
              <div>
                <RdsCompPermissionTree
                  permissions={data.permission}
                  selectedPermissions={handlerSelectedPermission}
                ></RdsCompPermissionTree>
              </div>
            )}
            {activeTab == "claims" && (
              <div>
                <RdsCompClaims allClaimsArray={allClaimsArray} claimsTable={claimsTable} id={id}  ></RdsCompClaims>
              </div>
            )}
            <div
              className="d-flex position-absolute">
              <div className="me-3">
                <RdsButton
                  type={"button"}
                  label="cancel"
                  isOutline={true}
                  colorVariant="primary"
                  databsdismiss="offcanvas"
                  databstoggle="offcanvas"
                  databstarget="#role-edit-off"
                ></RdsButton>
              </div>
              <RdsButton
                type={"button"}
                label="save"
                isDisabled={val === ""}
                colorVariant="primary"
                onClick={handlerEditRole}
                databsdismiss="offcanvas"
                databstoggle="offcanvas"
                databstarget="#role-edit-off"
              ></RdsButton>
            </div>
          </div>
        </RdsOffcanvas>
        <RdsCompAlertPopup
          alertID="role-delete-off"
          onSuccess={handlerDeleteConfirm}
        ></RdsCompAlertPopup>
      </div>
    </>
  );
};

export default Roles;