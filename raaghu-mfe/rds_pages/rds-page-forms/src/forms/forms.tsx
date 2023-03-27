import React, { useEffect, useState } from "react"; import {
  RdsButton,
  RdsNavtabs,
  RdsOffcanvas,
} from "../../../rds-elements";

import {
  RdsCompAlertPopup,
  RdsCompDatatable, RdsCompFormsBasic,
} from "../../../rds-components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import { useNavigate } from 'react-router-dom';
import { deleteForms, fetchForms, getForms, Saveforms, getAll2FormsQuestions } from "../../../../libs/state-management/forms/forms-slice";
const Forms = () => {
  const dispatch = useAppDispatch();
  const forms = useAppSelector((state) => state.persistedReducer.forms);
  const navigate = useNavigate();
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

  // const [tempEditFormData, setTempEditFormData] = useState<any>();


  // useEffect(() => {
  //   if (forms.editForms) {
  //     const tempData = { ...forms.editForms }
  //     setTempEditFormData(tempData);
  //   }
  // }, [forms.editForms]);


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
  const scopeSelection = (rowData: any, actionId: any) => {

    const rowDataString = String(rowData.id)
    setTableRowId(rowDataString);
    dispatch(getForms(rowDataString) as any);
    dispatch(getAll2FormsQuestions(rowDataString) as any);
    if(actionId === 'view'){
      navigate(`/formsView/${rowDataString}`);
    }
  

  };
  function onDeleteHandler(e: any) {
    dispatch(deleteForms(tableRowId) as any).then((res: any) => {
      dispatch(fetchForms() as any);
    });

  }

  const actions = [
    { id: "view", displayName: "View", offId: "view" },
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

          </div>
        </div>
      </div>

    </>
  );
};

export default Forms;
