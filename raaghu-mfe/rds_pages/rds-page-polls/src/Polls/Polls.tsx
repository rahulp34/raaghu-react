import React, { useState, useEffect } from "react";
import {
  RdsButton,
  RdsOffcanvas,
  RdsNavtabs,
  RdsProgressBar,
  RdsLabel,
  RdsAlert,
  RdsIcon,
} from "../../../rds-elements";
import {
  RdsCompAlertPopup,
  RdsCompDatatable,
  RdsCompPollsOption,
  RdsCompPollsQuestion,
} from "../../../rds-components";
import './Polls.scss'
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import {
  deletePolls,
  fetchPollsData,
  GetPolls,
  resultData,
  SavePolls,
  UpdatePollsData,
  Widgets,
} from "../../../../libs/state-management/polls/polls-slice";

const Polls = (props: any) => {
  const dispatch = useAppDispatch();
  const polls = useAppSelector((state) => state.persistedReducer.polls);
  const navtabsItems = [
    { label: "Question", tablink: "#nav-question", id: 0 },
    { label: "Option", tablink: "#nav-option", id: 1 },
  ];

  const navtabsItemsEdit = [
    { label: "Question", tablink: "#nav-questionEdit", id: 0 },
    { label: "Option", tablink: "#nav-optionEdit", id: 1 },
  ];

  const [activeNavTabIdEdit, setActiveNavTabIdEdit] = useState<any>(0);
  const tableHeaders = [
    {
      displayName: "Question",
      key: "question",
      datatype: "text",
      sortable: true,
      required: true,
      dataLength: 30,
    },
    {
      displayName: "Name",
      key: "name",
      datatype: "text",
      sortable: true,
      required: true,
      dataLength: 30,
    },
    {
      displayName: "Code",
      key: "code",
      datatype: "text",
      sortable: true,
      required: true,
      dataLength: 30,
    },
    {
      displayName: "Vote Count",
      key: "votecount",
      datatype: "number",
      sortable: true,
      required: true,
      dataLength: 30,
    },
  ];
  const actions = [
    { id: "edit", displayName: "Edit", offId: "entity-edit-off" },
    { id: "delete", displayName: "Delete", modalId: "dynamic_delete_off" },
    { id: "result", displayName: "Show Result", offId: "show_result" },
    {
      id: "entity-widgetcode-off",
      displayName: "Copy Widget Code",
      offId: "entity-widgetcode-off",
    },
  ];
  const [questionData, setQuestionData] = useState({
    question: '',
    code: '',
    name: '',
    widget:'',
    time: false,
    allowMultipleVote: false,
    voteCount : false,
    result:false,
    startDate:'',
    endDate:'',
    resultEndDate:''
  });
  const [alert, setAlert] = useState({
    showAlert: false,
    message: "",
    success: false,
  });
  const [alertOne, setAlertOne] = useState(false);
  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [getCreateNewPollsOptionData, setGetCreateNewPollsOptionData] = useState<any[]>([]);
 const [pollsOptionsData, setPollsOptionsData]= useState([])
 
  function getPollsOptionData(data: any) {
    setPollsOptionsData(data);
  } 
  function getPollsEditOptionData(data: any) {
    setEditPollsOptionData(data);
  } 
  
  const [editQuestionData, setEditQuestionData] = useState({
    question: '',
    code: '',
    name: '',
    widget:'',
    showHoursLeft: false,
    allowMultipleVote: false,
    voteCount : false,
    result:false,
    startDate:'',
    endDate:'',
    resultEndDate:'',
    pollOptions : []
  })
  const[editPollsOptionData, setEditPollsOptionData] = useState([]);

  useEffect(()=>{
    
    if(polls.fetchPollsEdit){
      setEditQuestionData(polls.fetchPollsEdit);
      let tempOptionsData = polls.fetchPollsEdit.pollOptions.map((res:any)=>{
        const item = {
          id:res.id,
          text:res.text,
          order:res.order,
          voteCount:res.voteCount,
          actions: (
            <>
              <div className="d-flex justify-content-center">
                <div className="mx-3">
                <RdsIcon
                  width="17px"
                  height="17px"
                  name="pencil"
                  stroke={true}
                  colorVariant="primary"
                  onClick={()=>{}}
                ></RdsIcon>
                 </div>
                  <RdsIcon
                  width="17px"
                  height="17px"
                  name="delete"
                  stroke={true}
                  colorVariant="danger"
                  onClick={()=>{}}
                ></RdsIcon>
              </div>
            </>
          ),
        }
        return item;
      })
      setEditPollsOptionData(tempOptionsData)
      // 
    }
  },[polls.fetchPollsEdit])

  
  const [pollsResultData, setPollsResultData]=useState<any>([]);
  useEffect(()=>{
    debugger
    if(polls.resultData){
      // polls.resultData.pollResultDetails.map((res:any)=>{
        setPollsResultData(polls.resultData.pollResultDetails)
    }
  },[polls.resultData])
  const[rowDataId, setRowDataId]= useState<any>()
  function scopeSelection(rowData:any , actionId:any) {
    setRowDataId(rowData.id);
    dispatch(resultData(rowData.id)as any)
    dispatch(fetchPollsData(rowData.id) as any)
    if(actionId === 'entity-widgetcode-off'){
      
      dispatch(Widgets() as any).then((result: any) => {
        dispatch(GetPolls() as any);
        setAlertOne(true);
      }); 
    }
  }
  const editDataHandler = () => {
    
    let removeIdsFromPollsOptions= editPollsOptionData.map((res:any, index:number)=>{
      let item:any;
      if(res.id.length > 30){
        item = {
          id:res.id,
          order:index+1,
          text:res.text,
          voteCount:res.voteCount
        }
      }
      else{
        item = {
          order:index+1,
          text:res.text,
          voteCount:res.voteCount
        }
      }
      return item;
    })
    debugger
    const data = {...editQuestionData, pollOptions: removeIdsFromPollsOptions}
    dispatch(UpdatePollsData({ id: rowDataId,body:data }) as any).then(
      (res: any) => {
        dispatch(GetPolls() as any);
      }
    );
    setAlertOne(true);
  };


  function OnSave() {
    console.log(getCreateNewPollsOptionData, "Polls Data here");
    const allData = {
      ...questionData, pollOptions: getCreateNewPollsOptionData,
    };
    dispatch(SavePolls(allData) as any);
    setAlertOne(true);
  }

  //const [getCreateNewPollQuestion, setGetCreateNewPollQuestion] = useState({});
  
  function getPollsQuestion(data: any) {
    debugger
    setQuestionData(data);
  }

  function deleteHandler(data:any){
    console.log(data);
     dispatch(deletePolls(rowDataId) as any).then((result: any) => {
      dispatch(GetPolls() as any);
      setAlertOne(true);
    });
  }
  
  useEffect(() => {
    dispatch(GetPolls() as any);
  }, [dispatch]);
  const [getDataPolls, setGetDataPolls] = useState<any>([]);

  useEffect(() => {
    let temp: any[] = [];
    if (polls.GetPolls?.items) {
      polls.GetPolls.items?.map((res: any) => {

        const item = {
          question: res.question,
          code: res.code,
          name: res.name,
          votecount: res.voteCount,
          id: res.id
        };
        temp.push(item);
      });
      setGetDataPolls(temp);
    }
  }, [polls.GetPolls]);


  function getEditPollsQuestionData(data:any){ 
    debugger
    setEditQuestionData(data);
  }
  return (
    <div>
      <div className="col-md-12 text-end pb-3 desktop-btn">
        <RdsButton
          label="New poll"
          type="button"
          size="medium"
          colorVariant="primary"
          showLoadingSpinner={false}
          databstoggle="offcanvas"
          databstarget="#pollsOffcanvas"
          icon={"plus"}
          iconWidth={"12px"}
          iconHeight={"12px"}
        ></RdsButton>
      </div>
      <div className=" col-md-10">
          {alert.showAlert && alertOne && (
          <RdsAlert
            alertmessage={alert.message}
            colorVariant={alert.success ? "success" : "danger"}
            style={{ marginBottom: "0" }}
          ></RdsAlert>
        )}
          </div>
      <div className="col-lg-3 col-md-3 mb-2 d-flex justify-content-end">
        <RdsOffcanvas
          backDrop={true}
          scrolling={true}
          preventEscapeKey={false}
          offId="pollsOffcanvas"
          canvasTitle={"New"}
          placement="end"
        >
          <RdsNavtabs
            navtabsItems={navtabsItems}
            type={"tabs"}
            activeNavTabId={activeNavTabId}
            activeNavtabOrder={(activeNavTabId) => {
              setActiveNavTabId(activeNavTabId);
            }}
            justified={false}
          >
            {activeNavTabId == 0 && (
              <RdsCompPollsQuestion
                widgetList={[
                  { option: "a", value: "a" },
                  { option: "b", value: "b" },
                ]}
                getPollsQuestion={(data: any) => getPollsQuestion(data)}
                questionData={questionData}
              ></RdsCompPollsQuestion>
              
            )}
            {activeNavTabId == 1 && (
              <RdsCompPollsOption
                optionsData={pollsOptionsData}
                getPollsOptionData={getPollsOptionData}
              ></RdsCompPollsOption>
            )}
          </RdsNavtabs>
          <div className="row mt-5 footer-buttons bottom-0 mx-0 ">
            <div className="col-2 mx-2">
              <RdsButton
                label="Cancel"
                colorVariant="primary"
                block={true}
                size="small"
                databsdismiss="offcanvas"
                tooltipTitle={""}
                type="button"
                isOutline={true}
              />
            </div>
            <div className="col-2">
              <RdsButton
                label="Save"
                size="small"
                colorVariant="primary"
                block={true}
                databsdismiss="offcanvas"
                tooltipTitle={""}
                type="button"
                onClick={OnSave}
              />
            </div>
          </div>
        </RdsOffcanvas>

        <RdsOffcanvas
          canvasTitle="Edit"
          placement="end"
          offId="entity-edit-off"
          offcanvaswidth={650}
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
        >
          <RdsNavtabs
            navtabsItems={navtabsItemsEdit}
            type={"tabs"}
            activeNavTabId={activeNavTabIdEdit}
            activeNavtabOrder={(activeNavTabIdEdit) => {
              setActiveNavTabIdEdit(activeNavTabIdEdit);
            }}
            justified={false}>

            {activeNavTabIdEdit == 0 && (
              <RdsCompPollsQuestion
                widgetList={[
                  { option: "a", value: "a" },
                  { option: "b", value: "b" },
                ]}
                questionData={editQuestionData}
                getPollsQuestion={getEditPollsQuestionData}
              ></RdsCompPollsQuestion>
            )}

            {activeNavTabIdEdit == 1 && (
              <>
                <RdsCompPollsOption  optionsData={editPollsOptionData}  getPollsOptionData={getPollsEditOptionData}></RdsCompPollsOption>
              </>
            )}
          </RdsNavtabs>

          <div className="footer-buttons justify-content-end bottom-0 pt-0">
            <RdsButton
              class="me-2"
              label="CANCEL"
              type="button"
              databsdismiss="offcanvas"
              isOutline={true}
              colorVariant="primary"
            ></RdsButton>
            <RdsButton
              class="me-2"
              label="SAVE"
              type="button"
              isOutline={false}
              colorVariant="primary"
              databsdismiss="offcanvas"
              onClick={editDataHandler}
            ></RdsButton>
          </div>
        </RdsOffcanvas>
      </div>
      <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <RdsCompDatatable
          tableHeaders={tableHeaders}
          actions={actions}
          tableData={getDataPolls}
          pagination={true}
          recordsPerPage={10}
          recordsPerPageSelectListOption={true}
          onActionSelection={scopeSelection}
        ></RdsCompDatatable>
         <RdsCompAlertPopup
            alertID="dynamic_delete_off"
            onSuccess={deleteHandler}
          />
      </div>

      <div>
        <RdsOffcanvas
          canvasTitle="Results"
          placement="end"
          offId="show_result"
          offcanvaswidth={700}
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
        >
          {pollsResultData.length && pollsResultData.map((e:any)=>(<>
            <div className="row mx-4">
            <RdsLabel  label={e.text} size="16px"></RdsLabel>
          </div>
          {/* <div className="row p-4">
            <RdsProgressBar
              colorVariant="primary"
              displaypercentage
              height={15}
              progressWidth={e.voteCount}
              role="single"
              striped="default"
            />
          </div> */}
          <div className="input-group mb-3">
            <div className="form-control border-0">
            <RdsProgressBar
              colorVariant="primary"
              displaypercentage
              height={15}
              progressWidth={e.voteCount}
              role="single"
              striped="default"
            /> 
            </div>
          <div className="input-group-prepend">
    <span className="input-group-text border-0 bg-transparent" id="basic-addon1">
    <RdsLabel  label={`${e.voteCount}%`} size="16px"></RdsLabel>
    </span>
  </div>
</div>
          </>))}
         
          <div className="footer-buttons justify-content-end bottom-0 pt-0">
            <RdsButton
              class="me-2"
              label="CANCEL"
              type="button"
              databsdismiss="offcanvas"
              isOutline={true}
              colorVariant="primary"
            ></RdsButton>
          </div>
        </RdsOffcanvas>
      </div>
    </div>
  );
};
export default Polls;
