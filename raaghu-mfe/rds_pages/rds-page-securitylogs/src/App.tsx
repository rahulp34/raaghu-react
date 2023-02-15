import React, { Suspense, useEffect, useState } from "react";
import SecurityLogs from "./security-logs/SecurityLogs";
import { RdsLabel, RdsButton } from "../../../../raaghu-elements/src";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../libs/state-management/hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchSecurityLogs } from "../../../libs/state-management/security-logs/security-logs-slice";
import { RdsCompAlertPopup } from "../../rds-components";
import { useTranslation } from "react-i18next";
// import { CSVLink } from "react-csv";





const App = () => {
  const { t } = useTranslation();
  const data = useAppSelector((state) => state.persistedReducer.securityLogs);
  const [Data, setData] = useState<any>([]);

  
  const tableHeaders = [
    "Time",
    "Actions",
    "IP Address",
    "Browser/Os",
    "Application",
    "Identity",
    "Users"
  ];
  
  
  const tableData = [
    {
      id: 1,
      time:"12/02/2021",
      actions:"Login Successful",
      ipAddress:"103.201.265.1",
      browserIcon:"",
      application:"Software 1.0",
      identity:"kol324i",
      users:"Robin Clay"    
    },
    {
      id: 2,
      time:"12/02/2022",
      actions:"Login Not Valid",
      ipAddress:"103.201.265.1",
      browserIcon:"",
      application:"Software 1.0",
      identity:"kol324i",
      users:"Smith Clay"    
    }
  ];
  
  
  
  function download(){

    const dataToDownload=tableData.map(data=>{
      return [data.id,data.time,data.actions,data.ipAddress,data.browserIcon,data.application,data.identity,data.users]
    })

    const securityLogsSheet=[
      tableHeaders +'\r\n'+
      [...dataToDownload]
    ]

    var re = securityLogsSheet;    
    var csvStrings =re;
    var a = document.createElement("a");
    a.href = "data:attachment/csv," + csvStrings;
    a.target = "_Blank";
    a.download = "scurityLogs.csv";
    document.body.appendChild(a);
    a.click();
  }
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(fetchSecurityLogs() as any);
  // });
  return (
    <Suspense>
      <div className="container">
      <div className="row mb-3">
        <div className="col-md-12 d-flex justify-content-end">
          <a></a>
          
          <RdsButton
            type="button"
            colorVariant="primary"
            label="Download"
            isOutline={true}
            icon=""
            iconHeight="15px"
            iconFill={false}
            iconStroke={true}
            iconWidth="15px"
            iconColorVariant="light"
            databstarget="#alert_popup"
            databstoggle="modal"
          />
          <RdsCompAlertPopup
            alertConfirmation="Download Security Log Files ?"
            alertID="alert_popup"
            cancelButtonLabel="Cancel"
            colorVariant="success"
            deleteButtonLabel="Yes"
            messageAlert=" "
            iconUrl="download"           
            onSuccess={download}/>
        </div>
      </div>
      
        <div className="card card-full-stretch">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <SecurityLogs></SecurityLogs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <> 
</>
    </Suspense>
  );
};

export default App;   
