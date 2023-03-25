import React, { useEffect, useState } from "react"; import {
  RdsButton,
  RdsNavtabs,
  RdsOffcanvas,
} from "../../../rds-elements";
import {
  RdsCompAlertPopup,
  RdsCompDatatable, RdsCompFormsBasic, RdsCompFormsQuestion, RdsCompFormsSettings, RdsCompQuestions,
} from "../../../rds-components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import { deleteForms, fetchForms, getForms, Saveforms, SaveformsQuestions, updateForms } from "../../../../libs/state-management/forms/forms-slice";
const Forms = () => {
  const dispatch = useAppDispatch();
  const forms = useAppSelector((state) => state.persistedReducer.forms);


  useEffect(() => {
    dispatch(fetchForms() as any);
  }, [dispatch]);

  useEffect(() => {

    let tempData: any[] = [];
    if (forms.forms) {

      forms.forms.items.map((e: any) => {
        const date = new Date(e.creationTime);
        const creationDate = `${("0" + date.getDate()).slice(-2)}/${("0" + (date.getMonth() + 1)).slice(-2)}/${date.getFullYear()}, ${("0" + date.getHours()).slice(-2)}:${("0" + date.getMinutes()).slice(-2)} ${date.getHours() >= 12 ? "PM" : "AM"}`;
        let updatedDate = '';
        if (e.lastModificationTime) {
          const lastDate = new Date(e.lastModificationTime);
          updatedDate = `${("0" + lastDate.getDate()).slice(-2)}/${("0" + (lastDate.getMonth() + 1)).slice(-2)}/${lastDate.getFullYear()}, ${("0" + lastDate.getHours()).slice(-2)}:${("0" + lastDate.getMinutes()).slice(-2)} ${lastDate.getHours() >= 12 ? "PM" : "AM"}`;
        }


        const item = {
          title: e.title,
          description: e.description,
          creationTime: creationDate,
          id: e.id,
          lastModificationTime: updatedDate
        }
        tempData.push(item);
      })
      setFormsData(tempData)
    }
  }, [forms.forms]);

  //edit View
  const [basicEditFormData, setbasicEditFormData] = useState<any>();
  const [tempEditFormData, setTempEditFormData] = useState<any>();
  const [tempQuestionsData, setTempQuestionsData] = useState<any>([]);

  function getEditDataFromQuestionComponent(data: any) {
    
    setTempEditFormData(data);
  }
  // const [tempQuestionFormId, setTempQuestionFormId] = useState<any>("");

  function getQuestionsEditDataFromQuestionComp(data: any) {
    debugger
    // const modifiedData = {
    //   ...data,
    //   // ...data[0]
    //   // formId: tableRowId
    // };
    setTempQuestionsData(data);
  }
  useEffect(() => {
    if (forms.editForms) {
      debugger
      const tempData = { ...forms.editForms }
      setbasicEditFormData(tempData)
      setTempEditFormData(tempData);
    }
  }, [forms.editForms]);
  function handleEditQuestion() {
    debugger
    const forms = {
      id: tableRowId,
      body: tempEditFormData
    }

    dispatch(updateForms(forms) as any).then((res: any) => {
      dispatch(fetchForms() as any);
    })
    debugger
    const formsQuestions = {
      id: tableRowId,
      body: tempQuestionsData
    }
    
    dispatch(SaveformsQuestions(formsQuestions) as any).then((res: any) => {
      dispatch(fetchForms() as any);
    })
  }

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
      key: "lastModificationTime",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Created At",
      key: "creationTime",
      datatype: "text",
      dataLength: 90,
      required: true,
      sortable: true,
    }
  ];

  const [formsData, setFormsData] = useState<any>([])
  const [tableRowId, setTableRowId] = useState('');
  const [tableRowAction, setTableRowAction] = useState("");
  const [formSettingData, setFormSettingData] = useState({
    responses: '', email: '', quiz: '', login: '', hasLimit: '', edit: ''
  });
  const scopeSelection = (rowData: any, actionId: any) => {

    const rowDataString = String(rowData.id)
    setTableRowId(rowDataString);
    setTableRowAction(actionId);
    dispatch(getForms(rowDataString) as any);
  };
  function onDeleteHandler(e: any) {

    dispatch(deleteForms(tableRowId) as any).then((res: any) => {
      dispatch(fetchForms() as any);
    });
  }

  const actions = [
    { id: "view", displayName: "View", offId: "View" },
    { id: "send", displayName: "Send", offId: "Send" },
    { id: "delete", displayName: "Delete", modalId: "Delete" },
  ];


  const [saveNewFormData, setSaveNewFormData] = useState();
  const [basicFormData, setBasicFormData] = useState({
    title: '', description: ''
  });
  function handleNewFormData() {

    dispatch(Saveforms(saveNewFormData) as any).then((res: any) => {
      dispatch(fetchForms() as any);
    })
  }

  function handleGetFormData(data: any) {
    setSaveNewFormData(data)
  }
  const navtabsEditItems = [
    { label: "Quetions", tablink: "#nav-home", id: 0 },
    { label: "Settings", tablink: "#nav-settings", id: 1 },
    { label: "Responses", tablink: "#nav-responses", id: 2 },


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
              <RdsCompFormsBasic basicInfo={basicFormData} handleNewFormData={(data: any) => handleGetFormData(data)} />
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
                        onClick={() => handleNewFormData()}
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
                    <div>


                      <RdsCompQuestions basicEditFormData={basicEditFormData} formQuestionsData={tempQuestionsData} getBasicEditDataFromQuestionComp={(data: any) => { getEditDataFromQuestionComponent(data) }} getQuestionsEditDataFromQuestionComp={(data: any) => { getQuestionsEditDataFromQuestionComp(data) }}></RdsCompQuestions>
                      <div className=" d-flex align-items-center">
                        <RdsButton
                          label="Cancel"
                          type="button"
                          colorVariant="primary"
                          size="small"
                          databsdismiss="offcanvas"
                          isOutline={true}
                        ></RdsButton>
                        <RdsButton
                          label="SAVE"
                          type="button"
                          isOutline={false}
                          size="small"
                          colorVariant="primary"
                          onClick={handleEditQuestion}
                          class="ms-3"
                        ></RdsButton>
                      </div>
                    </div>
                  </>
                )}
                {activeNavTabEditId == 1 && showNextTab === false && (
                  <>
                    <RdsCompFormsSettings handleFormSettings={() => { }} formsSettingData={formSettingData}></RdsCompFormsSettings>
                  </>)}
                {activeNavTabEditId == 2 && showNextTab === false && (
                  <></>)}
              </div>
              :
              <>
                <div>
                  <RdsCompDatatable
                    tableHeaders={tableHeaders}
                    tableData={formsData}
                    actions={actions}
                    pagination={true}
                    recordsPerPage={5}
                    recordsPerPageSelectListOption={true}
                    onActionSelection={scopeSelection}
                  ></RdsCompDatatable>
                </div>
                <RdsCompAlertPopup alertID="Delete" onSuccess={onDeleteHandler} />
              </>

            }

          </div>
        </div>
      </div>

    </>
  );
};

export default Forms;
