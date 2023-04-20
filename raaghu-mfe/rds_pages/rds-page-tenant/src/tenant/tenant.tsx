import React, { useState, useEffect } from "react";
import {
  createTenant,
  deleteTenant,
  editTenant,
  fetchEdition,
  fetchTenant,
  restoreToDefaultFeaturesEdition,
  saveFeaturesEdition,
  tenantFeaturesGet,
  tenantPut,
} from "../../../../libs/state-management/tenant/tenant-slice";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../libs/state-management/hooks";

import {
  RdsCompTenantList,
  RdsCompTenantInformation,
  RdsCompAlertPopup,
} from "../../../rds-components";
import {
  RdsButton,
  RdsOffcanvas,
  RdsNavtabs,
  RdsAlert,
} from "../../../rds-elements";
import RdsCompFeatures from "../../../../../raaghu-components/src/rds-comp-new-features/rds-comp-new-features";
import { useTranslation } from "react-i18next";

interface RdsPageTenantProps {}

const actions = [
  { id: "editTenant", displayName: "Edit", offId: "tenant-edit-off" },
  { id: "delete", displayName: "Delete", modalId: "tenant-delete-off" },
];


const Tenant = (props: RdsPageTenantProps) => {
  const [Alert, setAlert] = useState({ show: false, message: "", color: "" });
  const data = useAppSelector((state) => state.persistedReducer.tenant);
  const { t } = useTranslation();

  const [featuresData, setFeaturesData] = useState<any>([]);
  const dispatch = useAppDispatch();
  const [tableData, setTableData] = useState<any>([]);
  const [editionList, setEditionList] = useState<any>([]);
  const [featureIdentitySettingsData, setFeatureIdentitySettingsData] =
    useState<any>([
      { value: "Optional" },
      { value: 3 },
      { value: true },
      { value: true },
      { value: true },
      { value: true },
      { value: true },
      { value: true },
      { value: true },
      { value: true },
    ]);
  const [tenantId, setTenantid] = useState<any>("");
  const [tenantInformationData, setTenantInformationData] = useState<any>({
    editionId: "",
    name: "",
    activationEndDate: null,
    adminPassword: "",
    activationState: 0,
    adminEmailAddress: "",
    connectionStrings: { id: "", default: null, databases: [] },
  });
  const [basicTenantInformation, setBasicTenantInformation] = useState<any>({
    editionId: "",
    name: "",
    activationEndDate: null,
    adminPassword: "",
    activationState: 0,
    adminEmailAddress: "",
    connectionStrings: { id: "", default: null, databases: [] },
  });
  const tableHeaders = [
    {
      displayName: "Tenant",
      key: "tenant",
      datatype: "avatarTitleInfo",
      sortable: true,
    },
    {
      displayName: "Edition",
      key: "editionName",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Status",
      key: "status",
      datatype: "badge",
      sortable: true,
    },
  ];

  const navtabsItems = [
    { label: "Basics", tablink: "#nav-home", id: 0 },
    { label: "Features", tablink: "#nav-profile", id: 1 },
  ];

  const [emittedFeaturesData, setEmittedFeaturesData] = useState([])

  const [tableDataRowid, setTableDataRowId] = useState(0);

  const onActionHandler = (rowData: any, actionId: any) => {
    let id = rowData.id;
    setTableDataRowId(rowData.id);
    setActionId(actionId);
    if (actionId == "editTenant") {
      dispatch(editTenant(id) as any).then((res: any) => {
        dispatch(fetchEdition() as any);
        dispatch(fetchTenant as any);
      });
      dispatch(tenantFeaturesGet(rowData) as any);
    } else if (actionId === "delete") setTenantid(rowData.id);
  };
  const [showTenantSettings, setShowTenantSettings] = useState(false);
  const [activeNavTabIdEdit, setActiveNavTabIdEdit] = useState(0);
  const [actionId, setActionId] = useState("new");

  const [emittedDataTenantData, setEmittedDataTenantData] = useState<any>([]);

  useEffect(() => {
    dispatch(fetchTenant() as any);
    dispatch(fetchEdition() as any);
  }, [dispatch]);

  useEffect(() => {
    if (data.tenants.length) {
      const tempData = data.tenants.map((tenant: any) => {
        return {
          id: tenant.id,
          tenant: {
            avatar:
              "https://media-exp1.licdn.com/dms/image/C4E0BAQE_SFGM1PgQQA/company-logo_200_200/0/1519889670567?e=2147483647&v=beta&t=a7t0VCUvkgkiicBZVFWj7be8pApofE4mjjuHSmaZgbg",
            title: tenant.name,
            info: "software",
          },
          editionName: tenant.editionName,
          status: tenant.activationState == 1 ? "Active" : "Inactive",
          expiry: tenant.editionEndDateUtc,
        };
      });
      setTableData(tempData);
    }
  }, [data.tenants]);

  useEffect(() => {
    if (data.feature) {
      // setFeaturesData(data.feature.groups);
      const sample = data.feature.groups.map((x: any) => {
        return {
          name: x.name,
          displayName: x.displayName,
          features: x.features.map((f: any) => {
            return {
              ...f,
              valueType: {
                name: f.valueType.name,
                validator: f.valueType.validator,
                itemSource: f.valueType.itemSource,
              },
            };
          }),
        };
      });
      setFeaturesData(sample);
    }
  }, [data.feature]);

  useEffect(() => {
    if (featuresData.length > 0) {
      console.log("FeaturesData", featuresData);
    }
  }, [featuresData]);

  useEffect(() => {
    if (data.edition)
      if (data.edition?.length) {
        let editionData1: any[] = [];
        data.edition.map((item: any) => {
          const newItem = {
            option: item.displayName,
            value: item.id,
          };
          editionData1.push(newItem);
        });
        setEditionList(editionData1);
      }
  }, [data.edition]);

  useEffect(() => {
    if (data.editTenant) {
      setTenantInformationData(data.editTenant);
    }
  }, [data.editTenant]);

  function saveTenant(data: any) {
    
    const updateitem = { id: data.id, body: data };
    const createItem = { data: data };
    if (actionId === "editTenant") {
      dispatch(tenantPut(updateitem) as any).then((res: any) => {
        if (res.type == "tenant/tenantPut/rejected") {
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
            message: "Tenant edited Successfully",
            color: "success",
          });
        }
        dispatch(fetchEdition() as any);
        dispatch(fetchTenant() as any);
      });
      if (emittedFeaturesData.length > 0) {
        const features = {
          id: data.id,
          body: {
            features: emittedFeaturesData,
          },
        };
        dispatch(saveFeaturesEdition(features));
      }
    } else {
      dispatch(createTenant(createItem.data) as any).then((res: any) => {
        if (res.type == "tenant/createTenant/rejected") {
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
            message: "Tenant added Successfully",
            color: "success",
          });
        }
        dispatch(fetchEdition() as any);
        dispatch(fetchTenant() as any);
      });
    }
    setBasicTenantInformation({
      editionId: "",
      name: "",
      activationEndDate: null,
      adminPassword: "",
      activationState: 0,
      adminEmailAddress: "",
      connectionStrings: { id: "", default: null, databases: [] },
    });
    setTenantInformationData({
      editionId: "",
      name: "",
      activationEndDate: null,
      adminPassword: "",
      activationState: 0,
      adminEmailAddress: "",
      connectionStrings: { id: "", default: null, databases: [] },
    });
  }
  const onDeleteHandler = () => {
    dispatch(deleteTenant(tenantId) as any).then((res: any) => {
      if (res.type == "tenant/deleteTenant/rejected") {
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
          message: "Tenant deleted Successfully",
          color: "success",
        });
      }
      dispatch(fetchTenant() as any);
    });
  };

  function saveFeature(data: any) {
    console.log("This is data ", data);
    const tempData: any[] = [];
    data.map((e: any) => {
      const item = {
        value: String(e.value),
        name: e.name,
      };
      tempData.push(item);
    });
    const data1 = {
      id: tableDataRowid,
      body: { features: tempData },
    };
    console.log("This is temp Data ", tempData);
    dispatch(saveFeaturesEdition(data1) as any);
  }
  function restoreFeatures(data: any) {
    dispatch(restoreToDefaultFeaturesEdition(tableDataRowid) as any).then(
      (res: any) => {}
    );
  }

  function createNewCanvasFn(event: any) {
    event.preventDefault();
    setActionId("new");
  }

  function onFeatureSelection(data: any) {
    setEmittedFeaturesData(data);
  }

  function getTenantData(data: any) {
    setEmittedDataTenantData(data);
  }
  useEffect(() => {
    // Set a 3-second timer to update the state
    const timer = setTimeout(() => {
      setAlert({ ...Alert, show: false });
    }, 3000);

    // Clean up the timer when the component unmounts or when the state changes
    return () => clearTimeout(timer);
  }, [data.tenants]);

  return (
    <>
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
            <div className="col-md-8 d-flex justify-content-end ">
              <RdsOffcanvas
                canvasTitle={"New Tenant"}
                placement="end"
                offcanvasbutton={
                  <div className="d-flex justify-content-end my-1 ">
                    <RdsButton
                      icon="plus"
                      label={"New Tenant"}
                      iconColorVariant="light"
                      iconHeight="15px"
                      iconWidth="15px"
                      iconFill={false}
                      iconStroke={true}
                      block={false}
                      size="small"
                      type="button"
                      colorVariant="primary"
                      onClick={(e: any) => createNewCanvasFn(e)}
                    ></RdsButton>
                  </div>
                }
                backDrop={true}
                scrolling={false}
                preventEscapeKey={false}
                offId={"tenant-new-off"}
              >
                <div className="mt-3">
                  <RdsCompTenantInformation
                    editions={editionList}
                    onSaveHandler={(e: any) => saveTenant(e)}
                    tenantInformationData1={basicTenantInformation}
                    emittedDataTenantData={getTenantData}
                  />
                </div>
              </RdsOffcanvas>
            </div>
          </div>
        </div>

        <div className="col-md-12">
          <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
            <RdsCompTenantList
              tableHeaders={tableHeaders}
              tableData={tableData}
              actions={actions}
              onActionSelection={onActionHandler}
              pagination={true}
              recordsPerPage={10}
              recordsPerPageSelectListOption={true}
            />

            <RdsOffcanvas
              canvasTitle={"Edit Tenant"}
              placement="end"
              backDrop={true}
              scrolling={false}
              preventEscapeKey={false}
              offId={"tenant-edit-off"}
            >
              <RdsNavtabs
                navtabsItems={navtabsItems}
                type="tabs"
                isNextPressed={showTenantSettings}
                activeNavTabId={activeNavTabIdEdit}
                activeNavtabOrder={(activeNavTabIdEdit) => {
                  setActiveNavTabIdEdit(activeNavTabIdEdit),
                    setShowTenantSettings(false);
                }}
              />
              {activeNavTabIdEdit == 0 && showTenantSettings === false && (
                <div className="mt-3">
                  <RdsCompTenantInformation
                    editions={editionList}
                    tenantInformationData1={tenantInformationData}
                    onSaveHandler={(e: any) => {
                      saveTenant(e);
                    }}
                    emittedDataTenantData={getTenantData}
                  />
                </div>
              )}
              {(activeNavTabIdEdit == 1 || showTenantSettings === true) && (
                <div className="mt-3">
                  <RdsCompFeatures
                    featuresData={featuresData}
                    onFeatureSelection={onFeatureSelection}
                  />
                  <RdsButton
                    class="me-2"
                    tooltipTitle={""}
                    type={"button"}
                    label="Restore to default"
                    colorVariant="outline-primary"
                    size="small"
                    databsdismiss="offcanvas"
                    onClick={restoreFeatures}
                  ></RdsButton>
                  <RdsButton
                    class="me-2"
                    tooltipTitle={""}
                    type={"button"}
                    label="Cancel"
                    colorVariant="outline-primary"
                    size="small"
                    databsdismiss="offcanvas"
                  ></RdsButton>
                  <RdsButton
                    class="me-2"
                    label="Create"
                    size="small"
                    colorVariant="primary"
                    tooltipTitle={""}
                    type={"submit"}
                    databsdismiss="offcanvas"
                    onClick={() => saveTenant(emittedDataTenantData)}
                  ></RdsButton>
                </div>
              )}
            </RdsOffcanvas>
          </div>
          <RdsCompAlertPopup alertID="tenant-delete-off" onSuccess={onDeleteHandler} />
        </div>

      </div>
    </>
  );
};

export default Tenant;
