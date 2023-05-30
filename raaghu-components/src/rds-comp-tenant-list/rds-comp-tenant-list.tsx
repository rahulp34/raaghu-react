import React, { MouseEvent } from "react";
import RdsCompDatatable from "../rds-comp-data-table/rds-comp-data-table";
export interface RdsCompEditionListProps {
  enablecheckboxselection?: boolean;
  tableHeaders: {
    displayName: string;
    key: string;
    datatype: string;
    dataLength?: number;
    required?: boolean;
    sortable?: boolean;
    colWidth?: string;
    disabled?: boolean;
    isEndUserEditing?: boolean;
  }[];
  actions?: {
    displayName: string;
    id: string;
  }[];
  tableData?: any[];
  pagination?: boolean;
  recordsPerPage?: number;
  recordsPerPageSelectListOption?: boolean;
  onActionSelection?(rowData: any, actionId: any): void;
  onNewTenantClick?(
    event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ): void;
}
const RdsCompEditionList = (props: RdsCompEditionListProps) => {
  return (
    <RdsCompDatatable
      actionPosition="right"
      tableHeaders={props.tableHeaders}
      actions={props.actions}
      tableData={props.tableData!}
      pagination={props.pagination!}
      recordsPerPage={props.recordsPerPage}
      onActionSelection={props.onActionSelection!}
      recordsPerPageSelectListOption={props.recordsPerPageSelectListOption}
      noDataTitle={"No Tenants Available"}
      noDataheaderTitle={"There is no tenants available, Click on New tenants to add."}
    ></RdsCompDatatable>
  );
};
export default RdsCompEditionList;
