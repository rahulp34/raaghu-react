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

  
  const tableHeadersForExcel = [
    "Time",
    "Actions",
    "IP Address",
    "Browser/Os",
    "Application",
    "Identity",
    "Users"
  ];
  
  const tableHeaders = [
    {
      displayName: t("Time"),
      key: "creationTime",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: t("Actions"),
      key: "action",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: t("IP Address"),
      key: "clientIpAddress",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: t("Browser/Os"),
      key: "browserInfo",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: t("Application"),
      key: "applicationName",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: t("Identity"),
      key: "identity",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: t("Users"),
      key: "userName",
      datatype: "text",
      sortable: true,
    },
  ];
  const tableData = [
    {
      id: 1,
      creationTime:"12/02/2021",
      actions:"Login Successful",
      clientIpAddress:"103.201.265.1",
      browserInfo:"",
      applicationName:"Software 1.0",
      identity:"kol324i",
      userName:"Robin Clay"    
    },    
  ];
  
  
  // function download(){

  //   const dataToDownload=tableData.map(data=>{
  //     return [data.id,data.time,data.actions,data.ipAddress,data.browserIcon,data.application,data.identity,data.users]
  //   })

  //   const securityLogsSheet=[
  //     tableHeaders +'\r\n'+
  //     [...dataToDownload]
  //   ]
  //   var re = securityLogsSheet;    
  //   var csvStrings =re;
  //   var a = document.createElement("a");
  //   a.href = "data:attachment/csv," + csvStrings;
  //   a.target = "_Blank";
  //   a.download = "scurityLogs.csv";
  //   document.body.appendChild(a);
  //   a.click();
  // }
  const dispatch = useAppDispatch();
  useEffect(() => {    
    dispatch(fetchSecurityLogs() as any);
    const tableDataShow=data.securityLogs.items.map((item:any)=>{
      console.log(item);
      return{
        id:item.id,
        creationTime:item.currentDate,
        action:item.action,
        clientIpAddress:item.clientIpAddress,
        browserInfo:item.browserInfo,
        applicationName:item.applicationName,
        identity:item.identity,
        userName:item.userName
      }
    });  
    console.log(typeof tableDataShow);
    // setData(tableDataShow);
  },[dispatch]);
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
           />
        </div>
      </div>     
        <div className="card card-full-stretch">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <SecurityLogs
                securityLogsTableHeaders={tableHeaders}
                securityLogsTableData={tableData}></SecurityLogs>
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
