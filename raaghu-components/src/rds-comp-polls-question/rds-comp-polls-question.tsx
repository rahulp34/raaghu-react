import {
  RdsButton,
  RdsCheckbox,
  RdsInput,
  RdsLabel,
  RdsSelectList,
  RdsDatePicker
} from '../rds-elements';
import React, { useEffect, useState } from "react";

export interface RdsCompPollsQuestion {
  widgetList: any[];
  getPollsQuestion: any;
}

function RdsCompPollsQuestion(props: any) {
  const [QuestionData, setQuestionData] = useState(props.questionData);
  const questionFormData = (event: any) => {
    event.preventDefault();
    console.log("Check poll data", QuestionData);
  };
  useEffect(() => {
    if (props.questionData) {
      console.log(props.questionData);
      setQuestionData(props.questionData);
    }
  }, [props.questionData]);
  const handlerChangeValues =(key:any, value: any)=>{
    setQuestionData({ ...QuestionData, [key]: value });
    props.getPollsQuestion&&props.getPollsQuestion({ ...QuestionData, [key]: value });
  }
function dateFormateConvert(data:any){
  // const year = data.getFullYear();
  // const month = String(data.getMonth() + 1).padStart(2, '0');
  // const day = String(data.getDate()).padStart(2, '0');
  // // const hours = String(data.getHours()).padStart(2, '0');
  // // const minutes = String(data.getMinutes()).padStart(2, '0');
  // // const meridiem = parseInt(hours) >= 12 ? 'PM' : 'AM';    
  // const formattedDate = `${year}-${month}-${day} 00:00 AM`;
  return data.toISOString()
}
  function handlerStartDate(data: any) {
    let date= dateFormateConvert(data)
    setQuestionData({ ...QuestionData, startDate: date });
    props.getPollsQuestion&&props.getPollsQuestion({ ...QuestionData, startDate: date });
  }
  function handleEndDate(data: any) {
    let date= dateFormateConvert(data)
    setQuestionData({ ...QuestionData, endDate: date });
    props.getPollsQuestion&&props.getPollsQuestion({ ...QuestionData, endDate: date });
  }
  function handleResultDatepickerData(data: any) {
    let date= dateFormateConvert(data)
    setQuestionData({ ...QuestionData, resultShowingEndDate: date });
    props.getPollsQuestion&&props.getPollsQuestion({ ...QuestionData, resultShowingEndDate: date });
  }

  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="row mt-3">
          <div className="col-md-6">
            <RdsInput
              required={true}
              label="Question"
              placeholder=""
              inputType="text"
              value={QuestionData.question}
              onChange={(e: any) => {
                handlerChangeValues("question",e.target.value);
              }}
              dataTestId="question"
            ></RdsInput>
          </div>

          <div className="col-md-6 ">
            <RdsInput
              label="Code"
              placeholder=""
              inputType="text"
              required={true}
              value={QuestionData.code}
              onChange={(e: any) => {
                handlerChangeValues("code",e.target.value);
              }}
              dataTestId="code"
            ></RdsInput>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4">
            <RdsInput
              label="Name"
              placeholder=""
              inputType="text"
              required={false}
              value={QuestionData.name}
              onChange={(e: any) => {
                handlerChangeValues("name",e.target.value);
               }}
              dataTestId="name"
            ></RdsInput>
          </div>

          <div className="col-md-6 mb-4">
            <RdsLabel class="mb-2" label="Widget" size="14px"></RdsLabel>
            <RdsSelectList
              label="Select Roles"
              selectItems={props.widgetList}
              onSelectListChange={(e: any) => 
                handlerChangeValues("name",e.target.value)
              }
            ></RdsSelectList>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <RdsDatePicker
              onDatePicker={handlerStartDate}
              DatePickerLabel="Start Date"
              type="default"
            />
          </div>
          <div className="col-md-6 mb-3">
            <RdsDatePicker
              onDatePicker={handleEndDate}
              DatePickerLabel="End Date"
              type="default"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-4">
            <RdsCheckbox
              id="0"
              label="Show remaining time"
              checked={QuestionData.showHoursLeft}
              onChange={(e: any) => {
                handlerChangeValues("showHoursLeft",e.target.value)
                }}
              dataTestId="remaining-time"
            ></RdsCheckbox>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-3">
            <RdsDatePicker
              onDatePicker={handleResultDatepickerData}
              DatePickerLabel="Result Showing End Date"
              type="default"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-2">
            <RdsCheckbox
              id="0"
              label="Allow multiple voting"
              checked={QuestionData.allowMultipleVote}
              onChange={(e: any) => {
                handlerChangeValues("allowMultipleVote",e.target.value)
              }}
              dataTestId="multiple-voting"
            ></RdsCheckbox>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 mb-2">
            <RdsCheckbox
              id="0"
              label="Show vote count"
              checked={QuestionData.showVoteCount}
              onChange={(e: any) => {
                handlerChangeValues("showVoteCount",e.target.value)
              }}
              dataTestId="vote-count"
            ></RdsCheckbox>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mb-2">
            <RdsCheckbox
              id="0"
              label="Show result without giving vote"
              checked={QuestionData.showResultWithoutGivingVote}
              onChange={(e: any) => {
                handlerChangeValues("showResultWithoutGivingVote",e.target.value)
             }}
              dataTestId="result-without-vote"
            ></RdsCheckbox>
          </div>
        </div>
        {/* <div className="mt-3 d-flex footer-buttons">
            <RdsButton
              class="me-2"
              tooltipTitle={""}
              type={"button"}
              label={"Cancel" || ""}
              colorVariant="outline-primary"
              size="small"
              databsdismiss="offcanvas"
            ></RdsButton>
            <RdsButton
              class="me-2"
              label={"Save" || ""}
              size="small"
              colorVariant="primary"
              tooltipTitle={""}
              type={"submit"}
              databsdismiss="offcanvas"
            ></RdsButton>
          </div> */}
      </div>
    </>
  );
}
export default RdsCompPollsQuestion;
