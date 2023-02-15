
import React  from 'react'
import{RdsCompDatatable, RdsCompSecurityLogs} from "../../../rds-components";
import { useTranslation } from "react-i18next";

export interface RdsPageSecurityLogsProps {
  securityLogsTableHeaders: any;
  securityLogsTableData: any;
}

// const tableData = [
//   {
//     id: 1,
//     time:"12/02/2021",
//     actions:"Login Successful",
//     ipAddress:"103.201.265.1",
//     browserIcon:"",
//     application:"Software 1.0",
//     identity:"kol324i",
//     users:"Robin Clay"    
//   }
// ];




const SecurityLogs = (props: RdsPageSecurityLogsProps) => {
  const { t } = useTranslation();

  // const securityLogsTableHeaders = [
  //   {
  //     displayName: t("Time"),
  //     key: "time",
  //     datatype: "text",
  //     sortable: true,
  //   },
  //   {
  //     displayName: t("Actions"),
  //     key: "actions",
  //     datatype: "text",
  //     sortable: true,
  //   },
  //   {
  //     displayName: t("IP Address"),
  //     key: "ipAddress",
  //     datatype: "text",
  //     sortable: true,
  //   },
  //   {
  //     displayName: t("Browser/Os"),
  //     key: "browserIcon",
  //     datatype: "text",
  //     sortable: true,
  //   },
  //   {
  //     displayName: t("Application"),
  //     key: "application",
  //     datatype: "text",
  //     sortable: true,
  //   },
  //   {
  //     displayName: t("Identity"),
  //     key: "identity",
  //     datatype: "text",
  //     sortable: true,
  //   },
  //   {
  //     displayName: t("Users"),
  //     key: "users",
  //     datatype: "text",
  //     sortable: true,
  //   },
  // ];

    return (
        <RdsCompSecurityLogs
         tableHeaders={props.securityLogsTableHeaders}
         tableData={props.securityLogsTableData}
         pagination={true}
         recordsPerPage={10}
         recordsPerPageSelectListOption={true}></RdsCompSecurityLogs>            
      );
}

export default SecurityLogs;
