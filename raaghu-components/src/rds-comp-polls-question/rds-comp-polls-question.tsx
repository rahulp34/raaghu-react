import { RdsButton, RdsCheckbox, RdsInput, RdsLabel, RdsSelectList } from 'raaghu-react-elements';
import React, { useState } from 'react';
import RdsDatepicker from '../../../raaghu-elements/src/rds-datepicker';

export interface RdsCompPollsQuestion{
  widgetList:any[];
}

function RdsCompPollsQuestion(props:any) {
  const [QuestionData, setQuestionData] = useState({
    question: '',
    code: '',
    name: '',
    widget:'',
    time: false,
    multipleVoting: false,
    voteCount : false,
    result:false,
    startDate:'',
    endDate:'',
    resultEndDate:''
  });
 
  const questionFormData = (event: any) => {
    event.preventDefault();
    console.log("dataaa", QuestionData)
  };
 
  function setQuestion(value: any) {
    setQuestionData({ ...QuestionData, question: value });
  }
  function setCode(value: any) {
    setQuestionData({ ...QuestionData, code: value });
  }
  function setName(value: any) {
    setQuestionData({ ...QuestionData, name: value });
  }
  const widgetChange = (event: any) => {

    setQuestionData({
      ...QuestionData,
      widget: event,
    });
  }
    function setShowTime(value: boolean) {
      setQuestionData({ ...QuestionData, time: value });
    }
    function setAllowMultipleVoting(value: boolean) {
      setQuestionData({ ...QuestionData, multipleVoting: value });
    }
    function setShowVoteCount(value: boolean) {
      setQuestionData({ ...QuestionData, voteCount: value });
    }
    function setShowResult(value: boolean) {
      setQuestionData({ ...QuestionData, result: value });
    }
    function handleStartDate(data:any){
      debugger
      let date1 = data.toISOString();
      setQuestionData({ ...QuestionData, startDate:date1  }); 
    }
    function handleEndDate(data:any){
      let date1 = data.toISOString();
      setQuestionData({ ...QuestionData, endDate:date1  }); 
    }
    function handleResultDatepickerData(data:any){
      let date1 = data.toISOString();
      setQuestionData({ ...QuestionData, resultEndDate:date1  }); 
    }

  return(
    <>
    <div>
        <form onSubmit={questionFormData}>
          <div className="row mt-3">
            <div className="col-6">
              <RdsInput
                required={true}
                label="Question"
                placeholder=""
                inputType="text"
                value={QuestionData.question}
               
                onChange={(e: any) => {
                  setQuestion(e.target.value);
                }}
              ></RdsInput>
            </div>

            <div className="col-6 ">
              <RdsInput
                label="Code"
                placeholder=""
                inputType="text"
                required={false}
                value={QuestionData.code}
                onChange={(e: any) => {
                  setCode(e.target.value);
                }}
              ></RdsInput>
            </div>
          </div>
          <div className="row">
            <div className="col-6 mt-1">
            <RdsInput
                label="Name"
                placeholder=""
                inputType="text"
                required={false}
                value={QuestionData.name}
                onChange={(e: any) => {
                  setName(e.target.value);
                }}
              ></RdsInput>
            </div>
            
            <div className="col-6 mt-2">
            <RdsLabel
            class="mb-1"
          label="Widget"
          size="14px"
        ></RdsLabel>
            <RdsSelectList
								label="Select Roles"
								selectItems={props.widgetList}
								onSelectListChange={(e: any) => widgetChange(e.target.value)}
						></RdsSelectList>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
            <RdsDatepicker
            onDatePicker={handleStartDate}
            DatePickerLabel="Start Date"
            type="default"
          />
            </div>
          <div className="col-6">
          <RdsDatepicker
            onDatePicker={handleEndDate}
            DatePickerLabel="End Date"
            type="default"
          />
          </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
            <RdsCheckbox
              id="0"
              label="Show remaining time"
              checked={QuestionData.time}
              onChange={(e: any) => {
                setShowTime(e.target.checked);
              }}
            ></RdsCheckbox>
            </div>
          </div>
           <div className="row mt-2">
            <div className="col-12">
             <RdsDatepicker
             onDatePicker={handleResultDatepickerData}
            DatePickerLabel="Result Showing End Date"
            type="default"
          /> 
            </div>
           </div>
          <div className="row mt-2">
            <div className="col-12">
            <RdsCheckbox
              id="0"
              label="Allow multiple voting"
              checked={QuestionData.multipleVoting}
              onChange={(e: any) => {
                setAllowMultipleVoting(e.target.checked);
              }}
            ></RdsCheckbox>
            </div>
          </div>
         
          <div className="row mt-2">
            <div className="col-12">
            <RdsCheckbox
              id="0"
              label="Show vote count"
              checked={QuestionData.voteCount}
              onChange={(e: any) => {
                setShowVoteCount(e.target.checked);
              }}
            ></RdsCheckbox>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-12">
            <RdsCheckbox
              id="0"
              label="Allow multiple voting"
              checked={QuestionData.result}
              onChange={(e: any) => {
                setShowResult(e.target.checked);
              }}
            ></RdsCheckbox>
            </div>
          </div>
          <div className="mt-3 d-flex footer-buttons">
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
          </div>
        </form>
      </div>
    </>
  );
}
export default RdsCompPollsQuestion;
