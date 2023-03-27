import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
 import {
  RdsButton,
  RdsNavtabs,
  RdsOffcanvas,
} from "../../../rds-elements";

import {
  RdsCompFormsSettings, RdsCompQuestions,
} from "../../../rds-components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import { fetchForms, SaveformsQuestions, updateForms, getAll2FormsQuestions, updateFormsQuestions, deleteFormsQuestions } from "../../../../libs/state-management/forms/forms-slice";
import { useNavigate } from "react-router-dom";
const FormsView = (props: any) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const forms = useAppSelector((state) => state.persistedReducer.forms);


  useEffect(() => {
    dispatch(fetchForms() as any);
  }, [dispatch]);

  const [basicEditFormData1, setbasicEditFormData] = useState<any>();
  const [tempEditFormData, setTempEditFormData] = useState<any>();
  const [tempQuestionsData, setTempQuestionsData] = useState<any>([]);
  const [tempSaveQuestionsData, setTempSaveQuestionsData] = useState<any>([]);
  function getEditDataFromQuestionComponent(data: any) {
    setTempEditFormData(data);
  }

  function getQuestionsEditDataFromQuestionComp(data: any) {
    setTempSaveQuestionsData(data);
  }

  useEffect(() => {
    if (forms.formQuestionEdit) {

      setTempQuestionsData(forms.formQuestionEdit);
    }
  }, [forms.formQuestionEdit]);

  useEffect(() => {
    if (forms.editForms) {
      const tempData = { ...forms.editForms }
      setbasicEditFormData(tempData)
      setTempEditFormData(tempData);
    }
  }, [forms.editForms]);
  function handleEditQuestion() {
    const { description, title } = tempEditFormData;
    const forms = {
      id: props.id,
      body: { description, title }
    }

    dispatch(updateForms(forms) as any).then((res: any) => {
      tempSaveQuestionsData.map((res: any) => {
        if (res.id) {

          if (res.isEdit) {
            const data = {
              id: res.id,
              body: { ...res, formId: props.id }
            }
            dispatch(updateFormsQuestions(data) as any)
          }

        }
        else {
          const data = {
            id: props.id,
            body: { ...res, formId: props.id }
          }

          dispatch(SaveformsQuestions(data) as any)
        }
      })
      dispatch(getAll2FormsQuestions(props.id) as any);
    })
  }

  function deleteQuestion(data: any) {
    dispatch(deleteFormsQuestions(data.id) as any).then((res: any) => {
      dispatch(getAll2FormsQuestions(props.id) as any);
    })

  }
 function handlePreview(id:any){
  // navigate(`/formsPreview`);
  // const url = `/formsPreview/${id}`;
  // window.open(url, "_blank");
  debugger
  // const location = useLocation();
  // const query = location.search(id);
     navigate(`/formsPreview/${id}`);


 }
  const offCanvasHandler = () => { };

  const [formSettingData, setFormSettingData] = useState({
    responses: '', email: '', quiz: '', login: '', hasLimit: '', edit: ''
  });
  const navtabsEditItems = [
    { label: "Questions", tablink: "#nav-home", id: 0 },
    { label: "Responses", tablink: "#nav-responses", id: 1 },
  ];
  const [showNextTab, setShowNextTab] = useState(false);
  const [activeNavTabEditId, setActiveNavTabEditId] = useState(0);

  return (
    <>
      <div className="row">

        <div className="col d-flex justify-content-end mb-3">
        <RdsButton
            type={"button"}
            size="small"
            label="PREVIEW"
            icon="eye"
            iconColorVariant="light"
            iconFill={false}
            iconStroke={true}
            iconHeight="15px"
            iconWidth="15px"
            colorVariant="primary"
            isOutline={true}
            onClick={() => handlePreview(props.id)}
            class="me-2"
          ></RdsButton>
          <RdsOffcanvas
            canvasTitle={"VIEW FORM"}
            onclick={offCanvasHandler}
            placement="end"
            offcanvaswidth={650}
            offcanvasbutton={
              <div className="d-flex justify-content-end">
                <RdsButton
                  type={"button"}
                  size="small"
                  label="Settings"
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
            offId="viewForm"
          >
            <>
              <div className="row ps-4">
                <RdsCompFormsSettings handleFormSettings={() => { }} formsSettingData={formSettingData}></RdsCompFormsSettings>
              </div>
            </>
          </RdsOffcanvas>
         
        </div>

        <div className="col-md-12 mb-3">
          <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">

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
                    <RdsCompQuestions basicEditFormData={basicEditFormData1} formQuestionsData={tempQuestionsData} getBasicEditDataFromQuestionComp={(data: any) => { getEditDataFromQuestionComponent(data) }} getQuestionsEditDataFromQuestionComp={(data: any) => { getQuestionsEditDataFromQuestionComp(data) }} deleteQuestion={(data: any) => { deleteQuestion(data) }}></RdsCompQuestions>
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
            </div>


          </div>
        </div>
      </div>

    </>
  );
};

export default FormsView;
