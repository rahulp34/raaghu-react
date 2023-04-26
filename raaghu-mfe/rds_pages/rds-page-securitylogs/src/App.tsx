import React, { Suspense, useEffect, useState } from "react";
import SecurityLogs from "./security-logs/SecurityLogs";
import { RdsLabel, RdsButton, RdsInput, RdsDatePicker } from "../../../../raaghu-elements/src";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../libs/state-management/hooks";
import { useDispatch, useSelector } from "react-redux";
import { fetchSecurityLogs } from "../../../libs/state-management/security-logs/security-logs-slice";
import { RdsCompAlertPopup } from "../../rds-components";
import { useTranslation } from "react-i18next";

// import { CSVLink } from "react-csv";
import { format } from 'date-fns'


const SecurityLogsPage = () => {
  const { t } = useTranslation();
  const data = useAppSelector((state) => state.persistedReducer.securityLogs);
  const [securityLogsData, setData] = useState<any>([]);

  const tableHeadersForExcel = [
    "Time",
    "Actions",
    "IP Address",
    "Browser/Os",
    "Application",
    "Identity",
    "Users",
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


  const [selectFilterValue, setSelectFilterValue] = useState({
    applicationName: "",
    browserInfo: "",
    action: "",
    identity: "",
    clientIpAddress: "",
    userName: "",
    id: "",
    userId: "",
    startDate:'',
    endDate:''
  });


  function downloadcsv() {
    const dataToDownload = securityLogsData.map((item: any) => {
      return [
        item?.creationTime,
        item?.time,
        item?.action,
        item?.clientIpAddress,
        item?.browserIcon,
        item?.applicationName,
        item?.identity,
        item?.userName,
      ];
    });

    const securityLogsSheet = [
      tableHeadersForExcel + "\r\n" + [...dataToDownload],
    ];
    var re = securityLogsSheet;
    var csvStrings = re;
    var a = document.createElement("a");
    a.href = "data:attachment/csv," + csvStrings;
    a.target = "_Blank";
    a.download = "scurityLogs.csv";
    document.body.appendChild(a);
    a.click();
  }

  const dispatch = useAppDispatch();

  const securityLogs = () => {
    
    const securityLogsParamsData = {
      action: selectFilterValue.action,
      identity: selectFilterValue.identity,
      browserInfo: selectFilterValue.browserInfo,
      userName: selectFilterValue.userName,
      applicationName: selectFilterValue.applicationName,
      clientIpAddress: selectFilterValue.clientIpAddress,
      startDate:selectFilterValue.startDate,
      endDate:selectFilterValue.endDate

    }
    dispatch(fetchSecurityLogs(securityLogsParamsData) as any);
    if (data.securityLogs) {
      const tableDataShow = data.securityLogs.items.map((item: any) => {
        const date = new Date(item.creationTime);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let currentTime = date.toLocaleString("en-IN", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          hour12: true,
        });
        let currentDate = `${year}/${month}/${day}` + '\n' + `${currentTime}`;
        return {
          id: item?.id,
          creationTime: currentDate,
          action: item?.action,
          clientIpAddress: item?.clientIpAddress,
          browserInfo: item?.browserInfo,
          applicationName: item?.applicationName,
          identity: item?.identity,
          userName: item?.userName,
        };
      }, []);
      setData(tableDataShow);
    }
  }

  useEffect(() => {
    securityLogs();
  }, []);

  const onActionFilter = (event: any) => {
    setSelectFilterValue({
      ...selectFilterValue,
      action: event?.target?.value,
    });
    return securityLogsData;
  }
  const onIdentityFilter = (event: any) => {
    setSelectFilterValue({
      ...selectFilterValue,
      identity: event?.target?.value,
    });
    return securityLogsData;
  }

  const onApplicationNameFilter = (event: any) => {
    setSelectFilterValue({
      ...selectFilterValue,
      applicationName:event?.target?.value,
    });
  }

  const onUserNameFilter = (event: any) => {
    setSelectFilterValue({
      ...selectFilterValue,
      userName: event?.target?.value,
    });
    return securityLogsData;
  }

  // function onDatePicker(start: any, end: any): void {
  //   throw new Error("Function not implemented.");
  // }
  // function handleStartDate(data:any){
  //   let date1 = data.toISOString();
  //   setQuestionData({ ...QuestionData, startDate:date1  }); 
  //   props.getPollsQuestion({ ...QuestionData, startDate:date1  })
  // }
  function onDatePicker  (startEndDate:any) {
    
    const [start, end] = startEndDate;
    setSelectFilterValue({
      ...selectFilterValue,
      startDate:start.toISOString(),
      endDate:end.toISOString(),
    }); 

  };

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
              icon="export_data"
              iconHeight="15px"
              iconFill={false}
              iconStroke={true}
              iconWidth="15px"
              iconColorVariant="light"
              onClick={downloadcsv}
            />
            <RdsCompAlertPopup
              alertConfirmation="Download Security Log Files ?"
              alertID="alert_popup"
              cancelButtonLabel="Cancel"
              colorVariant="success"
              deleteButtonLabel="Yes"
              messageAlert=" "
              iconUrl="download"
              data-bs-target="#alert_popup"
              data-bs-toggle="modal"
            />
          </div>
        </div>

        <div className="mb-2">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-3">
                  <RdsDatePicker
                    DatePickerLabel="Select Date"  
                    onDatePicker={(s:any)=>onDatePicker(s)}
                    type="advanced"
                    selectedDate={selectFilterValue.startDate}
                    customDate={onDatePicker}
                  ></RdsDatePicker>
                </div>
                <div className="col-3">
                  <RdsInput
                    label="Application Name"
                    placeholder="Application Name"
                    value={selectFilterValue.applicationName}
                    onChange={onApplicationNameFilter}></RdsInput>
                </div>
                <div className="col-3">
                  <RdsInput
                    label="Identity"
                    placeholder="Identity"
                    onChange={onIdentityFilter}
                    value={selectFilterValue.identity}
                  ></RdsInput>
                </div>
                <div className="col-3">
                  <RdsInput label="Username"
                    placeholder="Username"
                    value={selectFilterValue.userName}
                    onChange={onUserNameFilter}></RdsInput>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-3">
                  <RdsInput
                    label="Actions"
                    placeholder="Actions"
                    value={selectFilterValue.action}
                    onChange={onActionFilter}
                  ></RdsInput>
                </div>
                <div className="col-3 d-flex mt-auto align-items-center ">
                  <RdsButton
                    type="button"
                    colorVariant="primary"
                    label="Search"
                    isOutline={false}
                    icon="search"
                    iconHeight="15px"
                    iconFill={false}
                    iconStroke={true}
                    iconWidth="15px"
                    iconColorVariant="light"
                    onClick={securityLogs}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-full-stretch">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <SecurityLogs
                  securityLogsTableHeaders={tableHeaders}
                  securityLogsTableData={securityLogsData}
                  securityLogsTablePagination={true}
                  securityLogsTableRecords={10}
                ></SecurityLogs>
              </div>
            </div>
          </div>
        </div>
      </div>
      <></>
    </Suspense>
  );
};

export default SecurityLogsPage;
