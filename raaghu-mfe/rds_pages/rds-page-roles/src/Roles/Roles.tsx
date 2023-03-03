import React, { useState, useEffect } from "react";
import {
  RdsBadge,
  RdsInput,
  RdsButton,
  RdsOffcanvas,
  RdsNavtabs,
} from "../../../../../raaghu-elements/src";

import {
  RdsCompDatatable,
  RdsCompPermissionTree,
  RdsCompAlertPopup,
} from "../../../rds-components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import {
  fetchRoles,
  addRolesUnit,
  editRoles,
  deleteRoles,
  fetchPermission,
  editPermisstion,
} from "../../../../libs/state-management/roles/roles-slice";

interface RdsPageRolesProps {}

const Roles = (props: RdsPageRolesProps) => {
  const [activeTab, setActiveTab] = useState("basic");
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

  useEffect(() => {
    dispatch(fetchRoles() as any);
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
    dispatch(deleteRoles(id) as any).then(() => {
      dispatch(fetchRoles() as any);
    });
  };

  const tableHeader = [
    {
      displayName: "Role Name",
      key: "name",
      datatype: "children",
      sortable: true,
    },
  ];
  let actions: any = [
    { id: "delete", displayName: "Delete", modalId: "deleteRolesof" },
    { id: "edit", displayName: "Edit", offId: "editRoleof" },
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
      dispatch(fetchPermission(rowData.provideKey) as any);
    }
  };
  useEffect(() => {
    setData({ ...data, permission: Data.permission });
  }, [Data.permission]);

  const handlerAddRole = () => {
    const dto = {
      isDefault: checked.default,
      isPublic: checked.public,
      name: val,
    };
    dispatch(addRolesUnit(dto) as any).then(() => {
      dispatch(fetchRoles() as any);
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
    dispatch(editRoles({ id: id, dTo: dto }) as any).then(() => {
      dispatch(fetchRoles() as any);
    });
  };
  const handlerNewRole = () => {
    setVal("");
    setChecked({ ...checked, default: false, public: false });
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Roles </h4>
        <div className="d-flex justify-content-end">
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
            onClick={handlerNewRole}
          ></RdsButton>
        </div>
      </div>
      <div className="card p-3 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <RdsCompDatatable
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
          offcanvaswidth={500}
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
            <div
              className="d-flex"
              style={{ position: "absolute", bottom: "2%" }}
            >
              <div className="me-3">
                <RdsButton
                  type={"button"}
                  label="cancel"
                  isOutline={true}
                  colorVariant="primary"
                  databsdismiss="offcanvas"
                  databstoggle="offcanvas"
                  databstarget="#newRole"
                ></RdsButton>
              </div>
              <RdsButton
                type={"button"}
                label="save"
                isDisabled={val === ""}
                colorVariant="primary"
                onClick={handlerAddRole}
                databsdismiss="offcanvas"
                databstoggle="offcanvas"
                databstarget="#newRole"
              ></RdsButton>
            </div>
          </div>
        </RdsOffcanvas>
        <RdsOffcanvas
          placement="end"
          canvasTitle="Edit Role"
          offcanvaswidth={500}
          offId="editRoleof"
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
            {activeTab !== "basic" && (
              <div>
                <RdsCompPermissionTree
                  permissions={data.permission}
                  selectedPermissions={handlerSelectedPermission}
                ></RdsCompPermissionTree>
              </div>
            )}
            <div
              className="d-flex"
              style={{ position: "absolute", bottom: "2%" }}
            >
              <div className="me-3">
                <RdsButton
                  type={"button"}
                  label="cancel"
                  isOutline={true}
                  colorVariant="primary"
                  databsdismiss="offcanvas"
                  databstoggle="offcanvas"
                  databstarget="#editRoleof"
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
                databstarget="#editRoleof"
              ></RdsButton>
            </div>
          </div>
        </RdsOffcanvas>
        <RdsCompAlertPopup
          alertID={`deleteRolesof`}
          onSuccess={handlerDeleteConfirm}
        ></RdsCompAlertPopup>
      </div>
    </>
  );
};

export default Roles;
