import React, { useState, useEffect } from "react";
import { RdsButton, RdsOffcanvas, RdsNavtabs } from "../../../rds-elements";
import {

  RdsCompDatatable, RdsCompPollsOption, RdsCompPollsQuestion,

} from "../../../rds-components";
const Polls = (props: any) => {

  const navtabsItems = [
    { label: "Question", tablink: "#nav-question", id: 0 },
    { label: "Option", tablink: "#nav-option", id: 1 },
   
  ];
  const tableHeaders = [
    {
      displayName: ("Question"),
      key: "question",
      datatype: "text",
      sortable: false,
    },
    {
      displayName: ("Name"),
      key: "name",
      datatype: "text",
      sortable: false,
    },
    {
      displayName: ("Code"),
      key: "code",
      datatype: "text",
      sortable: false,
    },
    {
      displayName: ("Vote Count"),
      key: "votecount",
      datatype: "number",
      sortable: false,
    },
  ];
  const actions = [
    { id: "edit", displayName: "Edit", offId: "entity-edit-off" },
    { id: "delete", displayName: "Delete", modalId: "dynamic_delete_off" },
    { id: "Show Result", displayName: "result", offId: "entity-result-off" },
    { id: "Copy Widget Code", displayName: "widgetcode", offId: "entity-widgetcode-off" },
  ];
  const [pollsData, setpollsData] = useState<any[]>([{
    question:"test question",
    name:"question 1",
    code:"3et5rewj",
    votecount:5
  },
  {
    question:"test question 2",
    name:"question 2",
    code:"6ry8u434",
    votecount:2
  },
]);
  const [activeNavTabId, setActiveNavTabId] = useState(0);
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
              offcanvaswidth={550}
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
             <RdsCompPollsQuestion widgetList={[{option:"a", value:"a"},{option:"b", value:"b"}]}></RdsCompPollsQuestion>
          )}
             

            {activeNavTabId == 1 && (
            <RdsCompPollsOption></RdsCompPollsOption>
          )} 
          </RdsNavtabs> 
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
     </div>
  );
};
export default Polls;
