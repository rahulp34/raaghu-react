import { RdsIcon } from "raaghu-react-elements";
import React, { useEffect, useState } from "react";
import RdsCompDatatable from "../rds-comp-data-table/rds-comp-data-table";
import { RdsButton, RdsCheckbox, RdsDropdownList, RdsInput, RdsLabel, RdsSelectList, RdsTextArea } from "../rds-elements";

export interface RdsCompFormsQuestionProps {
    formQuestionsData?: any;
    handleQuestions?: any;
}

const RdsCompFormsQuestions = (props: RdsCompFormsQuestionProps) => {

    const [questions, setQuestions] = useState<any>(props.formQuestionsData);
    const questionsTypeList = [
        { option: "Short answer", value: 1 },
        { option: "multiple choice", value: 2 },
        { option: "checkboxes", value: 3 },
        { option: "dropdown", value: 4 }]
    const [formQuestionsNumber, setFormQuestionsNumber] = useState(0);
    function setTitle(index: number, value: any) {
        debugger
        const tempquestions = [...questions];
        tempquestions[index].title = value;
        setQuestions(tempquestions);
        props.handleQuestions(tempquestions);
        
        setFormQuestionsNumber(index + 1);

    }
    function setDescription(index: number, value: any) {
        const tempquestions = [...questions];
        tempquestions[index].description = value;
        setQuestions(tempquestions);
        props.handleQuestions(tempquestions);
    }
    function setSelectedOption(index: number, value: any) {
         
        let number = parseInt(value);
        const tempquestions = [...questions];
        tempquestions[index].questionType = number;
        setQuestions(tempquestions);
        props.handleQuestions(tempquestions);
    }


    function setOption(index: number, choiceIndex: number, value: any) {
        debugger
        const tempQuestions = [...questions];
        tempQuestions[index].choices[choiceIndex].value = value;
        setQuestions(tempQuestions);
    }


    function handleAddMorequestions() {
        let tempquestions = questions.map((e: any) => {
            return e;
        })
        tempquestions.push({ 
        title: "Question",
        description: "",
        questionType: "",
        required: false,
        choices: [{value : 'Options'}], })
        setQuestions(tempquestions);
    }
    function handleDelete(el: number) {

        // let tempChoices = choices.filter((e: any, i: any) => {
        //     return el !== i;
        // });
        // setchoices(tempChoices);
    }

    function handleAddMoreChoices(index:any) {
        let tempQuestion = [...questions];
        tempQuestion[index].choices.push({ value: "Options" })
        setQuestions(tempQuestion);
    }

    useEffect(() => {
        setQuestions(props.formQuestionsData)
    }, [props.formQuestionsData])
    return (
        <>
            <div className="row ">
                {questions.length && questions.map((element: any, i: number) => (<>
                    <form onSubmit={props.handleQuestions}>
                        <h5 className="">Question{i+1}</h5>
                        <div className="row">
                            <div className="col-3">
                                <RdsInput
                                    label="Title"
                                    placeholder="Title"
                                    inputType="text"
                                    onChange={(e: any) => setTitle(i, e.target.value)}
                                    value={element.title}
                                    name={"title"}
                                ></RdsInput>
                            </div>
                            <div className="col-3">
                                <RdsLabel label="Type" class="pb-2" />
                                <RdsSelectList
                                    label={"Type"}
                                    selectItems={questionsTypeList}
                                    selectedValue={element.questionType}
                                    onSelectListChange={(selectedOption: any) => setSelectedOption(i, selectedOption)}
                                ></RdsSelectList>
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
                        <div className="row ">
                            {element && element.choices && element?.choices?.map((elements: any, idx: number) => (<>
                                <div className="col-5 py-2 ">
                                    <RdsInput
                                        label="Option"
                                        placeholder="Option"
                                        inputType="text"
                                        onChange={(e: any) => setOption(i, idx, e.target.value)}
                                        value={elements.value}
                                        name={"option"}
                                    ></RdsInput>

                                </div>
                                <div className="col-1 pt-4 align-items-center d-flex">
                                    {element.choices.length > 1 && (
                                        <RdsIcon
                                            width="17px"
                                            height="17px"
                                            name="delete"
                                            stroke={true}
                                            colorVariant="danger"
                                            onClick={() => handleDelete(i)}
                                        ></RdsIcon>
                                    )}
                                </div>
                            </>
                            ))}
                            <div className="col-6 d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    <div >
                                        <RdsIcon
                                            width="17px"
                                            height="17px"
                                            name="plus"
                                            stroke={true}
                                        ></RdsIcon>
                                    </div>
                                    <span
                                        className=""
                                        onClick={()=>{handleAddMoreChoices(i)}}
                                    >
                                        Add More
                                    </span>
                                </div>

                            </div>
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
