import React, { useEffect, useState } from "react";
import {
  RdsButton,
  RdsCheckbox,
  RdsNavtabs,
  RdsOffcanvas,
  RdsInput
} from "../../../rds-elements";
import {
  RdsCompAlertPopup,
  RdsCompDatatable,
  RdsCompNewClaimType
} from "../../../rds-components";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import { fetchApplications, deleteApplications } from "../../../../libs/state-management/applications/applications-slice";

const Applications = () => {
  const dispatch = useAppDispatch();
  const application = useAppSelector((state) => state.persistedReducer.applications);

  useEffect(() => {
    dispatch(fetchApplications() as any);
  }, [dispatch]);

  useEffect(() => {
    let tempData: any[] = [];
    if(application.applications?.items){
      application.applications.items.map((e: any) => {
        const item = {
          id: e.id,
          clientId: e.clientId,
          displayName: e.displayName,
          type: e.type
        }
        tempData.push(item);
      })
      setApplicationData(tempData)
    }
  

  },[application]);

  const [tableDataId, setTableDataRowId] = useState(0);

  const scopeSelection = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: { displayName: string; id: string }
  ) => {
    setTableDataRowId(tableDataRowIndex);
  };
  function onDeleteHandler(e: any) { 
    const tableDataIndex = String(tableDataId)
    dispatch(deleteApplications(tableDataIndex) as any).then((res:any)=>{
     dispatch(fetchApplications() as any);
    })

    e.preventDefault();
  }

  const tableHeaders = [
    {
      displayName: "Client Id",
      key: "clientId",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Display Name",
      key: "displayName",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Type",
      key: "type",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    }
  ];

  const tableData = [
    {
      id: 1,
      clientId: "Raaghu_App",
      displayName: "Console Test / Angular Applicatio",
      type: "public",
    },
    {
      id: 2,
      clientId: "Raaghu_BlazorServerTiered",
      displayName: "Blazor Server Application",
      type: "confidential",
    },
    {
      id: 3,
      clientId: "Raaghu_Maui",
      displayName: "MAUI Application",
      type: "publicm",
    },
    {
      id: 4,
      clientId: "RaaghuReact_Web_Public",
      displayName: "Web Public Application",
      type: "confidential",
    }
  ];

  const actions = [
    { id: "delete", displayName: "Delete", modalId: "Delete" },
    { id: "edit", displayName: "Edit", offId: "Edit" },
  ];
  const navtabsItems = [
    { label: "Applications Information", tablink: "#nav-home", id: 0 },
    { label: "Permissions", tablink: "#nav-profile", id: 1 },
  ];

  const [applicationData, setApplicationData] = useState<any>(
    {
      id:'',
      clientId: '',
      displayName: '',
      type: '',
    });

  const offCanvasHandler = () => { };
  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [showNextTab, setShowNextTab] = useState(false);

  return (
    <>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-end mb-3">
          <RdsOffcanvas
            canvasTitle={"NEW APPLICATION"}
            onclick={offCanvasHandler}
            placement="end"
            offcanvaswidth={650}
            offcanvasbutton={
              <div className="d-flex justify-content-end">
                <RdsButton
                  type={"button"}
                  size="small"
                  label="NEW APPLICATION"
                  icon="plus"
                  iconColorVariant="light"
                  iconFill={false}
                  iconStroke={true}
                  iconHeight="15px"
                  iconWidth="15px"
                  colorVariant="primary"
                  class="me-2"
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
              isNextPressed={showNextTab}
              activeNavTabId={activeNavTabId}
              activeNavtabOrder={(activeNavTabId) => {
                setActiveNavTabId(activeNavTabId), setShowNextTab(false);
              }}
            />
            {activeNavTabId == 0 && showNextTab === false && (
              <></>
            )}
            {(activeNavTabId == 1 || showNextTab == true) && (
              <RdsCompNewClaimType></RdsCompNewClaimType>
            )}
            {(activeNavTabId == 2 || showNextTab == true) && (<></>)}
          </RdsOffcanvas>
        </div>
        <div className="col-md-12 mb-3">
          <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
            <RdsCompDatatable
              tableHeaders={tableHeaders}
              tableData={applicationData}
              actions={actions}
              pagination={true}
              recordsPerPage={5}
              recordsPerPageSelectListOption={true}
              onActionSelection={scopeSelection}
            // onActionSelection={function (
            //   clickEvent: any,
            //   tableDataRow: any,
            //   tableDataRowIndex: number,
            //   action: {
            //     displayName: string;
            //     id: string;
            //     offId?: string | undefined;
            //   }
            // ): void {
            //   setTableDataRowId(tableDataRowIndex)
            // }}
            ></RdsCompDatatable>
            <RdsCompAlertPopup alertID="Delete" onSuccess={onDeleteHandler} />

          </div>
        </div>
      </div>

    </>
  );
};

export default Applications;

