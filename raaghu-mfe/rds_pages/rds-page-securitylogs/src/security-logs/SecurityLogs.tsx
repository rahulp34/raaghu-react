
import React  from 'react'
import{ RdsCompSecurityLogs} from "../../../rds-components";
import { useTranslation } from "react-i18next";

export interface RdsPageSecurityLogsProps {
  securityLogsTableHeaders: any;
  securityLogsTableData: any;
  securityLogsTablePagination:boolean
  securityLogsTableRecords:any

}

const SecurityLogs = (props: RdsPageSecurityLogsProps) => {  
    return (
        <RdsCompSecurityLogs
         tableHeaders={props.securityLogsTableHeaders}
         tableData={props.securityLogsTableData}
         pagination={true}
         recordsPerPage={10}
         recordsPerPageSelectListOption={true}
         ></RdsCompSecurityLogs>            
      );
}

export default SecurityLogs;
