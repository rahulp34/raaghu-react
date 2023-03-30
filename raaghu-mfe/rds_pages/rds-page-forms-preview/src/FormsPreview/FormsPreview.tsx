import React, { useEffect, useState } from "react"; import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../../libs/public.api";
import { getAll2FormsQuestions } from "../../../../libs/state-management/forms/forms-slice";
import { useAppSelector } from "../../../../libs/state-management/hooks";
import {
  RdsButton,
  RdsCheckbox,
  RdsDropdown,
  RdsInput,
  RdsLabel,
  RdsNavtabs,
  RdsOffcanvas,
  RdsRadioButton,
  RdsSelectList,
  RdsTextArea,
} from "../../../rds-elements";

const FormsPreview = (props: any) => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const forms = useAppSelector((state) => state.persistedReducer.forms);
  useEffect(() => {
    dispatch(getAll2FormsQuestions(props.id) as any);
  }, [dispatch])

  const [formPreview, setFormPreview] = useState<any>([])
  useEffect(() => {
    if (forms.formQuestionEdit) {
      setFormPreview(forms.formQuestionEdit);
    }
  }, [forms.formQuestionEdit]);

  const [multipleChoice, setMultipleChoice] = useState<any>([]);
  useEffect(() => {
    const temp: any[] = []
    if (formPreview.length) {
      formPreview.map((ele: any) => {
        if (ele.questionType === 3 && ele.choices && ele.choices.length) {
          ele.choices.map((eles: any) => {
            const item = {
              id: eles.id,
              label: eles.value
            }
            temp.push(item)
          })
          setMultipleChoice(temp)
        }
      })
    }
  }, [formPreview])
  const [dropDownList, setDropDownList] = useState<any>([]);
  useEffect(() => {
    const temp: any[] = []
    if (formPreview.length) {
      formPreview.map((ele: any) => {
        if (ele.questionType === 5 && ele.choices && ele.choices.length) {
          ele.choices.map((eles: any) => {
            const item = {
              id: eles.id,
              option: eles.value
            }
            temp.push(item)
          })
          setDropDownList(temp)
        }
      })
    }
  }, [formPreview])


  return (
    <>
      <p>{id}</p>
      <div className="row">
        <div className="col-md-12 mb-3">
          <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
            <div className="container-fluid">
              <div className="text-center">
                <h3>Form Title</h3>
                <h6 className="opacity-25">Created this form for testing purpose</h6>
              </div>
              {formPreview.length && formPreview.map((ele: any, i: number) => (
                <>
                  {ele.questionType === 1 ? <>
                    <div className="my-4">
                      <div className="d-flex">
                        <RdsLabel class="pe-4" label={ele.title}></RdsLabel>
                        <RdsLabel class="opacity-25" label={ele.description}></RdsLabel>
                      </div>
                      <RdsTextArea placeholder={""} rows={1}></RdsTextArea>
                    </div>
                  </> : ele.questionType === 3 ? <>
                    <div className="my-4">
                      <div className="d-flex">
                        <RdsLabel class="pe-4" label={ele.title}></RdsLabel>
                        <RdsLabel class="opacity-25" label={ele.description}></RdsLabel>
                      </div>
                      <RdsRadioButton itemList={multipleChoice} inline={true}></RdsRadioButton>

                    </div>
                  </> : ele.questionType === 4 ? <>
                    <div className="my-4">
                      <div className="d-flex">
                        <RdsLabel class="pe-4" label={ele.title}></RdsLabel>
                        <RdsLabel class="opacity-25" label={ele.description}></RdsLabel>
                      </div>
                      {ele.choices && ele.choices.length && ele.choices.map((eles: any) => (
                        <RdsCheckbox label={eles.value} checked={undefined} ></RdsCheckbox>
                      ))
                      }
                    </div>
                  </> : ele.questionType === 5 ? <>
                    <div className="my-4">
                      <div className="d-flex">
                        <RdsLabel class="pe-4" label={ele.title}></RdsLabel>
                        <RdsLabel class="opacity-25" label={ele.description}></RdsLabel>
                      </div>
                      <RdsSelectList label={""} selectItems={dropDownList}></RdsSelectList>
                    </div>
                  </> : ''}

                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormsPreview;
