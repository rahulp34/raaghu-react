import React, { useEffect, useState } from "react"; import {
  RdsButton,
  RdsInput,
  RdsNavtabs,
  RdsOffcanvas,
  RdsTextArea,
} from "../../../rds-elements";
import {
  RdsCompDatatable, RdsCompFormsBasic, RdsCompFormsQuestion, RdsCompFormsSettings, RdsCompQuestions,
} from "../../../rds-components";
const Forms = () => {
  const offCanvasHandler = () => { };
  const tableHeaders = [
    {
      displayName: "Title",
      key: "title",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Description",
      key: "description",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Updated At",
      key: "updatedAt",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Created At",
      key: "createdAt",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    }
  ];
  const tableData = [
    {
      title: "test",
      description: "Form test",
      updatedAt: "Mar 06, 2023, 06:37 AM",
      createdAt: "Mar 06, 2023, 06:36 AM"
    },
    {
      title: "Form",
      description: "Form test1",
      updatedAt: "Mar 04, 2023, 01:20 PM",
      createdAt: "Mar 04, 2023, 01:19 PM"
    }

  ]

  const [tableRowId, setTableRowId] = useState(0);
  const [tableRowAction, setTableRowAction] = useState("");
  const [basicEditFormData, setbasicEditFormData] = useState();
  const [formSettingData , setFormSettingData] = useState({
    responses:'',email: '',quiz: '' ,login: '',hasLimit: '', edit: '' });
  // const [viewtable , setViewtable] = useState(false);
  const scopeSelection = (rowData: any, actionId: any) => {
    setTableRowId(rowData.id);
    setTableRowAction(actionId);
    setbasicEditFormData(rowData)
  };

  const actions = [
    { id: "view", displayName: "View", offId: "View" },
    { id: "send", displayName: "Send", offId: "Send" },
    { id: "delete", displayName: "Delete", modalId: "Delete" },
  ];
  
 
  const [basicFormData, setBasicFormData] = useState({
    title: '', description: ''
  });
  function handleNewFormData(basicInfo: any) {
    
    setBasicFormData({ title: '', description: '' });

  }
  const navtabsEditItems = [
    { label: "Quetions", tablink: "#nav-home", id: 0 },
    { label: "Settings", tablink: "#nav-settings", id: 1 },
    { label: "Responses", tablink: "#nav-responses", id: 2},


  ];
  const [showNextTab, setShowNextTab] = useState(false);
  const [activeNavTabEditId, setActiveNavTabEditId] = useState(0);
 
  return (
    <>
      <div className="row">

        <div className="col d-flex justify-content-end mb-3">
          <RdsOffcanvas
            canvasTitle={"NEW FORM"}
            onclick={offCanvasHandler}
            placement="end"
            offcanvaswidth={650}
            offcanvasbutton={
              <div className="d-flex justify-content-end">
                <RdsButton
                  type={"button"}
                  size="small"
                  label="NEW FORM"
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
            offId="application"
          >
            <>
              <RdsCompFormsBasic basicInfo={basicFormData} />
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
                        class="ms-2"
                        colorVariant="primary"
                        databsdismiss="offcanvas"
                        onClick={() => handleNewFormData(basicFormData)}
                      ></RdsButton>
                    </div>
                  </div>
                </div>
              </div>
            </>

          </RdsOffcanvas>
        </div>

        <div className="col-md-12 mb-3">
          <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">

            {tableRowAction == "view" ?
              <div className="container-fluid">
                <RdsNavtabs
                  navtabsItems={navtabsEditItems}
                  type="tabs"
                  isNextPressed={showNextTab}
                  activeNavTabId={activeNavTabEditId}
                  activeNavtabOrder={(activeNavTabEditId) => {
                    setActiveNavTabEditId(activeNavTabEditId), setShowNextTab(false);
                  }}
                />
                {activeNavTabEditId == 0 && showNextTab === false && (
                <>
                <RdsCompQuestions></RdsCompQuestions>
                </>
                )}
                {activeNavTabEditId == 1 && showNextTab === false && (
                  <>
                  <RdsCompFormsSettings handleFormSettings={() => {}} formsSettingData={formSettingData}></RdsCompFormsSettings>
                  </>)}
                {activeNavTabEditId == 2 && showNextTab === false && (
                  <></>)}
              </div>
              :
              <div>
                <RdsCompDatatable
                  tableHeaders={tableHeaders}
                  tableData={tableData}
                  actions={actions}
                  pagination={true}
                  recordsPerPage={5}
                  recordsPerPageSelectListOption={true}
                  onActionSelection={scopeSelection}
                ></RdsCompDatatable>
              </div>
            }

          </div>
        </div>
      </div>

    </>
  );
};

export default Forms;
