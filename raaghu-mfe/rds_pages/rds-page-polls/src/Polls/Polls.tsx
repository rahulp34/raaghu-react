import React, { useState, useEffect } from "react";
import {
  RdsButton,
  RdsOffcanvas,
  RdsNavtabs,
  RdsModal,
  RdsProgressBar,
  RdsLabel,
} from "../../../rds-elements";
import {
  RdsCompDatatable,
  RdsCompPollsOption,
  RdsCompPollsQuestion,
} from "../../../rds-components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import { GetPolls, SavePolls } from "../../../../libs/state-management/polls/polls-slice";
const Polls = (props: any) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.persistedReducer.polls);

  const offCanvasHandler = () => {};
  const navtabsItems = [
    { label: "Question", tablink: "#nav-question", id: 0 },
    { label: "Option", tablink: "#nav-option", id: 1 },
  ];
  const navtabsItemsEdit = [
    { label: "Question", tablink: "#nav-question", id: 0 },
    { label: "Option", tablink: "#nav-option", id: 1 },
  ];
  const [activeNavTabIdEdit, setActiveNavTabIdEdit] = useState<any>(0);
  const tableHeaders = [
    {
      displayName: "Question",
      key: "question",
      datatype: "text",
      sortable: false,
    },
    {
      displayName: "Name",
      key: "name",
      datatype: "text",
      sortable: false,
    },
    {
      displayName: "Code",
      key: "code",
      datatype: "text",
      sortable: false,
    },
    {
      displayName: "Vote Count",
      key: "votecount",
      datatype: "number",
      sortable: false,
    },
  ];
  const actions = [
    { id: "edit", displayName: "Edit", offId: "entity-edit-off" },
    { id: "delete", displayName: "Delete", modalId: "dynamic_delete_off" },
    { id: "result", displayName: "Show Result", offId: "show_result" },
    {
      id: "Copy Widget Code",
      displayName: "widgetcode",
      offId: "entity-widgetcode-off",
    },
  ];
  const [pollsData, setpollsData] = useState<any[]>([
    {
      question: "test question",
      name: "question 1",
      code: "3et5rewj",
      votecount: 5,
    },
    {
      question: "test question 2",
      name: "question 2",
      code: "6ry8u434",
      votecount: 2,
    },
  ]);
  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [getCreateNewPollsOptionData, setGetCreateNewPollsOptionData] =
    useState<any[]>([]);

  function getPollsOptionData(data: any) {
    let tempPollsOptionData = data.map((res: any) => {
      const item = {
        id: res.id,
        text: res.text,
        order: res.order,
        voteCount: res.voteCount,
      };
      return item;
    });
    debugger;
    setGetCreateNewPollsOptionData(tempPollsOptionData);
  }
  const[allData , setallData] = useState<any>()
  function OnSave() {
    console.log(getCreateNewPollsOptionData, "Polls Data here");
    debugger
    setallData({...getCreateNewPollQuestion , pollOptions:getCreateNewPollsOptionData})
 dispatch(SavePolls(allData) as any);

  }
  const [showNextTab , setShowNextTab] = useState(false);
  const [getCreateNewPollQuestion, setGetCreateNewPollQuestion] = useState({});
  function getPollsQuestion(data: any) {
    debugger;
    setGetCreateNewPollQuestion(data);
  }
  useEffect(() => {
    debugger;
    dispatch(GetPolls() as any);
  }, [dispatch]);
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
          databstarget="#userOffcanvas"
          icon={"plus"}
          iconWidth={"12px"}
          iconHeight={"12px"}
        ></RdsButton>
      </div>
      <div className="col-lg-3 col-md-3 mb-2 d-flex justify-content-end">
        <RdsOffcanvas
          backDrop={false}
          scrolling={true}
          preventEscapeKey={false}
          offId="userOffcanvas"
          canvasTitle={"New"}
          placement="end"
        >
          <RdsNavtabs
            navtabsItems={navtabsItems}
            type={"tabs"}
            activeNavTabId={activeNavTabId}
            activeNavtabOrder={(activeNavTabId) => {
              setActiveNavTabId(activeNavTabId),
              setShowNextTab(false)
            }}
            justified={false}
            isNextPressed={showNextTab}
          >
            {activeNavTabId == 0 && showNextTab === false &&(
              <RdsCompPollsQuestion
                widgetList={[
                  { option: "a", value: "a" },
                  { option: "b", value: "b" },
                ]}
                getPollsQuestion={(data: any) => getPollsQuestion(data)}
                pollOptions ={getCreateNewPollsOptionData}
              ></RdsCompPollsQuestion>
            )}

            {activeNavTabId == 1 && showNextTab === false &&(
              <RdsCompPollsOption
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
                tooltipTitle={""}
                type="button"
                onClick={OnSave}
              />
            </div>
          </div>
        </RdsOffcanvas>

        <RdsOffcanvas
          canvasTitle="Edit"
          onclick={offCanvasHandler}
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
            justified={false}
          >
            {activeNavTabIdEdit == 0 && (
              <RdsCompPollsQuestion
                widgetList={[
                  { option: "a", value: "a" },
                  { option: "b", value: "b" },
                ]}
              ></RdsCompPollsQuestion>
            )}

            {activeNavTabIdEdit == 1 && (
              <>
                <RdsCompPollsOption></RdsCompPollsOption>
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
            ></RdsButton>
          </div>
        </RdsOffcanvas>
      </div>
      <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <RdsCompDatatable
          tableHeaders={tableHeaders}
          actions={actions}
          tableData={pollsData}
          pagination={true}
          recordsPerPage={10}
          recordsPerPageSelectListOption={true}
        ></RdsCompDatatable>
      </div>

      <div>
        <RdsOffcanvas
          canvasTitle="Results"
          onclick={offCanvasHandler}
          placement="end"
          offId="show_result"
          offcanvaswidth={700}
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
        >
          {" "}
          <div className="row mx-4">
            <RdsLabel label="Result-1" size="16px"></RdsLabel>
          </div>
          <div className="row p-4">
            <RdsProgressBar
              colorVariant="primary"
              displaypercentage
              height={15}
              progressWidth={38}
              role="single"
              striped="default"
            />
          </div>
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
