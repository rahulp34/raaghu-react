import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  createTenant,
  deleteTenant,
  editTenant,
  fetchEdition,
  fetchTenant,
  tenantFeaturesGet,
  tenantPut,
} from "../../../../libs/state-management/tenant/tenant-slice";
import { useAppDispatch } from "../../../../libs/state-management/hooks";

import {
  RdsCompTenantList,
  RdsCompTenantInformation,
  RdsCompAlertPopup,
} from "../../../rds-components";
import { RdsButton, RdsOffcanvas, RdsNavtabs } from "../../../rds-elements";
import { useAppSelector } from "../../../../libs/state-management/hooks";
import {
  SaasTenantUpdateDto,
} from "../../../../libs/shared/service-proxy";
import RdsCompFeatures from "../../../../../raaghu-components/src/rds-comp-new-features/rds-comp-new-features";
interface RdsPageTenantProps {}

const actions = [
  { id: "edit", displayName: "Edit", offId: "Edit" },
  { id: "delete", displayName: "Delete", modalId: "Del" },
];
let editionData1: any[];
let id: string = "";
const checkboxlabel = [
  {
    id: "1",
    label: "Shared Database",
    checked: false,
    name: "shared database",
  },
  {
    id: "2",
    label: "Separated Database",
    checked: false,
    name: "separated database",
  },
];

const Tenant = (props: RdsPageTenantProps) => {
  const data = useAppSelector((state) => state.persistedReducer.tenant);

  const dispatch = useAppDispatch();
  


  const OnUpdateTenant = new SaasTenantUpdateDto();
  const onEditHandler = (data: { editTenantData:{
    activationEndDate: any;
    activationState: any;
    concurrencyStamp: any;
    editionEndDateUtc: any;
    editionId: any;
    editionName: any;
    extraProperties: any;
    hasDefaultConnectionString: any;
    id: any;
    name: any;
  }}) => {
    console.log("datajahi", data.editTenantData.name);
    OnUpdateTenant.name = data.editTenantData.name;
    OnUpdateTenant.editionId = data.editTenantData.editionId;
    dispatch(tenantPut({ id: id, body: OnUpdateTenant }) as any).then(
      (res: any) => {
        dispatch(fetchTenant() as any);
      }
    );
  };

  const [tableData, setTableData] = useState<any>([]);
  const [editionList, setEditionList] = useState<any>([]);
  const [featureIdentitySettingsData, setFeatureIdentitySettingsData] = useState<any>([{value:"Optional"},{value:3},{value:true},{value:true},{value:true},{value:true},{value:true},{value:true},{value:true},{value:true}]);
  
  const [editTenantData, setEditTenantData] = useState<any>({
    name:"" ,
    hasDefaultConnectionString: false,
    editionName: "",
  });

  

  

  

  const { t } = useTranslation();

  const tableHeaders = [
    {
      displayName: t("Tenant"),
      key: "tenant",
      datatype: "avatarTitleInfo",
      sortable: true,
    },
    {
      displayName: t("Edition"),
      key: "editionName",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: t("Status"),
      key: "status",
      datatype: "badge",
      sortable: true,
    },
    {
      displayName: t("Subscription End Date"),
      key: "expiry",
      datatype: "text",
      sortable: true,
    },
  ];

  const navtabsItems = [
    { label: t("Basics"), tablink: "#nav-home", id: 0 },
    { label: t("Features"), tablink: "#nav-profile", id: 1 },
  ];

  const treeData: any[] = [];
  const offCanvasHandler = () => {
    // dispatch(fetchEdition() as any);
  };
  const onActionHandler = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: {
      displayName: string;
      id: string;
      offId?: string;
      modalId?: string;
    }
  ) => {
    console.log(tableDataRow);
    id = tableDataRow.id;

    if (action.displayName == "Edit") {
      dispatch(editTenant(id) as any).then((res:any)=>{
        dispatch(fetchEdition() as any);
        dispatch(fetchTenant as any);
      })
    if(id)
    dispatch(tenantFeaturesGet(id) as any);

    }

  };
  const onDeleteHandler = () => {
    console.log("id", id);
    dispatch(deleteTenant(id) as any).then((res:any)=>{
      dispatch(fetchTenant() as any);
    });
    
  };

  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [showTenantSettings, setShowTenantSettings] = useState(false);

  const [activeNavTabIdEdit, setActiveNavTabIdEdit] = useState(0);

  //  const tag = [{ label: t("Features"), tablink: "#Admin-Features", id: 0 }];
  // const offCanvasButton =
  //   '<RdsButton icon = "plus" iconColorVariant="light" size = "medium" type = "button" colorVariant = "primary" label = "NEW TENANT"/>';
  
  
  
  
    useEffect(() => {
      dispatch(fetchTenant() as any);
      dispatch(fetchEdition() as any);
    }, [dispatch]);

    useEffect(()=>{
      if(data.tenants.length){
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
    },[data.tenants])

    useEffect(()=>{
      if(data.feature){
        let tempFeatureData :any[] = [];
        data.feature.groups.map((item:any)=>{
          item.features.map((items:any)=>{
            let data = {}
            if(items.value == "True" || items.value == "true"){
              data = { value:true }
            }
            else if(items.value == "True" || items.value == "true"){
              data = { value:false}
            }
            else{
              data = { value:items.value }
            }
            tempFeatureData.push({...data, name:items.name});
          })
        })
        setFeatureIdentitySettingsData(tempFeatureData)
      }
  
    },[data.feature])

    useEffect(() => {
      if (data.edition.items.length) {
        editionData1 = [];
        data.edition.items.map((item: any) => {
          const newItem = {
            option: item.displayName,
            value: item.id,
          };
          editionData1.push(newItem);
        });
        setEditionList(editionData1);
      }
    }, [data.edition]);


    function saveTenant(data:any){
      dispatch(createTenant(data) as any).then((res:any)=>{
        dispatch(fetchEdition() as any);
        dispatch(fetchTenant() as any);
      })
    }
  
  
  return (
    <div className="tenant">
      <div className="d-flex justify-content-end">
        <RdsOffcanvas
          canvasTitle={t("Manage Host Admin Features")}
          onclick={offCanvasHandler}
          placement="end"
          offcanvaswidth={650}
          offcanvasbutton={
            <div className="d-flex justify-content-end ms-2 ">
              <a className="link-primary fw-bold me-2 px-4 mt-1" href="#">
                Manage Host admin Features
              </a>
            </div>
          }
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
          offId={"tenant12"}
        >
          {/* <RdsCompNewFeatures></RdsCompNewFeatures> */}
        </RdsOffcanvas>

        <RdsOffcanvas
          canvasTitle={t("New Tenant")}
          onclick={offCanvasHandler}
          placement="end"
          offcanvaswidth={650}
          offcanvasbutton={
            <div className="d-flex justify-content-end">
              <RdsButton
                icon="plus"
                label={t("New Tenant") || ""}
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
          }
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
          offId={"tenant"}
        >
          <RdsNavtabs
            navtabsItems={navtabsItems}
            type="tabs"
            isNextPressed={showTenantSettings}
            activeNavTabId={activeNavTabId}
            activeNavtabOrder={(activeNavTabId) => {
              setActiveNavTabId(activeNavTabId), setShowTenantSettings(false);
            }}
          />
          {activeNavTabId == 0 && showTenantSettings === false && (
            <RdsCompTenantInformation onSaveHandler={(e:any)=>saveTenant(e)} />
          )}
        </RdsOffcanvas>
      </div>
      <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3 ">
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
          canvasTitle={t("Edit Tenant")}
          onclick={offCanvasHandler}
          placement="end"
          offcanvaswidth={650}
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
          offId={"Edit"}
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
            <RdsCompTenantInformation editionList={editionList} onSaveHandler={(e:any)=>{saveTenant(e)}} />
          )}

          {(activeNavTabIdEdit == 1 || showTenantSettings == false) && (
            <RdsCompFeatures featureIdentitySettingsData={featureIdentitySettingsData}></RdsCompFeatures>
          )}
        </RdsOffcanvas>
      </div>
      <RdsCompAlertPopup alertID="Del" onSuccess={onDeleteHandler} />
    </div>
  );
};

export default Tenant;
