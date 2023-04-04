import moment from "moment";
import { RdsIcon, RdsToggle, } from "raaghu-react-elements";
import React, { useEffect, useState } from "react";
import { RdsButton, RdsInput, RdsLabel, RdsSelectList, RdsTextArea } from "../rds-elements";

export interface RdsCompFormsQuestionProps {
    formQuestionsData?: any;
    handleQuestions?: any;
    deleteQuestion?: any;
}

const RdsCompFormsQuestions = (props: RdsCompFormsQuestionProps) => {

    const [questions, setQuestions] = useState<any>(props.formQuestionsData);
    const questionsTypeList = [
        { option: "Short answer", value: 1 },
        { option: "multiple choice", value: 3 },
        { option: "checkboxes", value: 4 },
        { option: "dropdown", value: 5 }]
    function setIsRequired(index: number, value: boolean) {
        const tempquestions = questions.map((res: any) => {
            return res;
        });
        tempquestions[index].isEdit = true;
        tempquestions[index].isRequired = value;
        setQuestions(tempquestions);
        props.handleQuestions(tempquestions);
    }
    function setTitle(index: number, value: any) {
        const tempquestions = questions.map((res: any) => {
            return res;
        });
        tempquestions[index].isEdit = true;
        tempquestions[index].title = value;
        setQuestions(tempquestions);
        props.handleQuestions(tempquestions);
    }

    function setDescription(index: number, value: any) {
        const tempquestions = questions.map((res: any) => {
            return res;
        });
        tempquestions[index].isEdit = true;
        tempquestions[index].description = value;
        setQuestions(tempquestions);
        props.handleQuestions(tempquestions);
    }
    function setSelectedOption(index: number, value: any) {

        let number = parseInt(value);
        const tempquestions = questions.map((res: any) => {
            return res;
        });
        tempquestions[index].isEdit = true;
        tempquestions[index].questionType = number;
        if (!tempquestions[index].choices.length && number > 2) {
            tempquestions[index].choices.push({ value: 'Option' })
        }

        if (tempquestions[index].questionType === 5) {
            const otherIndex = tempquestions[index].choices.findIndex((choice: any) => choice.value === "Other...");
            if (otherIndex !== -1) {
                tempquestions[index].choices.splice(otherIndex, 1);
            }
        }
        setQuestions(tempquestions);
        props.handleQuestions(tempquestions);
    }


    function setOption(index: number, choiceIndex: number, value: any) {
        const tempquestions = questions.map((res: any) => {
            return res;
        });
        tempquestions[index].isEdit = true;
        tempquestions[index].choices[choiceIndex].value = value;
        if (tempquestions[index].choices[choiceIndex].value === 'Other...') {
            tempquestions[index].choices[choiceIndex].readOnly = true;
            setReadOnly(true);
        }
        setQuestions(tempquestions);
        props.handleQuestions(tempquestions);
    }


    function handleAddMorequestions() {
        let tempquestions = questions.map((e: any) => {
            return e;
        })
        const ind = tempquestions.length <= 0 ? 1 : tempquestions.length + 1;
        tempquestions.push({
            index: ind,
            title: `${"Question " + ind}`,
            description: "",
            questionType: 1,
            choices: [],
        });

        setQuestions(tempquestions);
    }

    function handleDelete(index: number, choiceIndex: number) {
        const tempQuestions = [...questions];
        const tempChoices = tempQuestions[index].choices.filter((choice: any, j: number) => {
            if (choice.value === "Other..." && tempQuestions[index].hasOtherOption) {
                tempQuestions[index].hasOtherOption = false
            }
            return j !== choiceIndex;

        });
        tempQuestions[index].choices = tempChoices;
        setQuestions(tempQuestions);
    }

    function handleAddMoreChoices(index: any) {
        const tempquestions = questions.map((res: any) => {
            return res;
        });
        setReadOnly(false);
        // tempquestions[index].choices.push({ value: 'Option' })
        tempquestions[index].choices.splice(-1, 0, { value: 'Option' })
        setQuestions(tempquestions);
    }
    const [readOnly, setReadOnly] = useState(false);

    function handleAddOtherChoices(index: any) {
        const tempquestions = questions.map((res: any) => {
            return res;
        });
        if (!tempquestions[index].hasOtherOption) {
            tempquestions[index].choices.push({ value: "Other...", readOnly: true });
            tempquestions[index].hasOtherOption = true;
        }
        setReadOnly(true);
        setQuestions(tempquestions);
    }

    useEffect(() => {
        debugger
        setQuestions(props.formQuestionsData?.map((res: any) => {
            const choices = res.choices?.map((choice: any, i: any) => {
                    if (choice.value === "Other...") {
                        return { ...choice, readOnly: true };
                    } else {
                        return { ...choice, readOnly: false };
                    }
                })
            return { ...res,choices,isEdit: false };
        }))
    }, [props.formQuestionsData])

    return (
        <>
            <div className="row ">
                {questions?.length && questions?.map((element: any, i: number) => (<>
                    <form className="mb-5">
                        <div className="row">
                            <div className="col-6 mb-1">
                                <h5 className="fw-bold">Question {i + 1}</h5>
                                {element.lastModificationTime ? <>
                                    <span className="opacity-25" >Modified at {moment(element.lastModificationTime).format('YYYY-MM-DD HH:mm:ss')}</span>
                                </> : ' '}
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <div className="d-flex px-3">
                                <RdsToggle iconOnUncheck={"false"} iconOnCheck={"true"} onClick={(e: any) => setIsRequired(i, e?.target?.checked)} ></RdsToggle>
                                <RdsLabel label="Required"></RdsLabel>
                                </div> 
                                <RdsIcon
                                    width="17px"
                                    height="17px"
                                    name="delete"
                                    stroke={true}
                                    colorVariant="danger"
                                    onClick={() => { props.deleteQuestion(element) }}
                                    classes="cursor-pointer"
                                ></RdsIcon>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <RdsInput
                                    label="Title"
                                    placeholder="Title"
                                    inputType="text"
                                    onChange={(e: any) => setTitle(i, e.target.value)}
                                    value={element.title}
                                    name={"title"}
                                ></RdsInput>
                            </div>
                            <div className="col-6">
                                <RdsTextArea
                                    label="Description"
                                    placeholder="Enter description"
                                    onChange={e => setDescription(i, e.target.value)}
                                    value={element.description}
                                    rows={1}
                                />
                            </div>
                        </div>
                        <div className="row pb-1">
                            <div className="col-3 mt-2 pe-0">
                                <RdsLabel label="Type" class="pb-2" />
                                <RdsSelectList
                                    label={"Type"}
                                    selectItems={questionsTypeList}
                                    selectedValue={element.questionType}
                                    onSelectListChange={(selectedOption: any) => setSelectedOption(i, selectedOption)}
                                ></RdsSelectList>
                            </div>
                            {element.questionType !== 1 && (
                                <>
                                    {element && element.choices && element?.choices?.map((elements: any, idx: number) => (<>
                                        <div className="col-3 pt-2 mt-4 pe-0">
                                            <div className="d-flex pt-1 ">
                                                <div className="input-group">
                                                    <div className="input-group-text rounded-0" id="basic-addon1">
                                                        {element.questionType == 3 ? <>
                                                            <input type="radio" height="22px" disabled={true} />
                                                        </> : element.questionType == 4 ? <>
                                                            <input type="checkbox" height="22px" disabled={true} />
                                                        </> : element.questionType == 5 ? <>
                                                            <span>{idx + 1}</span>
                                                        </> : ''
                                                        }
                                                    </div>
                                                    <RdsInput
                                                        placeholder="Option"
                                                        inputType="text"
                                                        onChange={(e: any) => setOption(i, idx, e.target.value)}
                                                        value={elements.value}
                                                        name={"option"}
                                                        readonly={elements.readOnly}
                                                    ></RdsInput>
                                                    {element.choices.length > 1 && (
                                                        <RdsIcon
                                                            classes={"input-group-text bg-transparent border-0 cursor-pointer"}
                                                            width="17px"
                                                            height="17px"
                                                            name="delete"
                                                            stroke={true}
                                                            colorVariant="danger"
                                                            onClick={() => handleDelete(i, idx)}
                                                        ></RdsIcon>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    ))}
                                    <div className="col-3 pe-0 pt-1 d-flex align-items-center ">
                                        <div className="input-group  pt-2 mt-4">
                                            <div className="input-group-text rounded-0" id="basic-addon1">
                                                {element.questionType == 3 ? <>
                                                    <input type="radio" height="22px" disabled={true} />
                                                </> : element.questionType == 4 ? <>
                                                    <input type="checkbox" height="22px" disabled={true} />
                                                </> :
                                                    <input type="radio" height="22px" disabled={true} />
                                                }
                                            </div>
                                            <div className="form-control">
                                                <span onClick={() => { handleAddMoreChoices(i) }}  className="cursor-pointer">
                                                    Add More
                                                </span>
                                                {element.questionType !== 5 && !element.hasOtherOption && (<>
                                                    <span onClick={() => { handleAddOtherChoices(i) }}  className="cursor-pointer">
                                                        / Add Other
                                                    </span>
                                                </>)}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </form>
                </>
                ))}
                <div className="row ">
                    <div className="d-flex justify-content-end mt-4 ">
                        <RdsButton
                            type={"button"}
                            size="small"
                            label={"NEW QUESTIONS"}
                            icon="plus"
                            iconColorVariant="light"
                            iconFill={false}
                            iconStroke={true}
                            iconHeight="15px"
                            iconWidth="15px"
                            colorVariant="primary"
                            onClick={handleAddMorequestions}
                        ></RdsButton>
                    </div>
                </div>
            </div>
        </>
    );
};
export default RdsCompFormsQuestions;
