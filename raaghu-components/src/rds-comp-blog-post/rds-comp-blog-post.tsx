import React, { FC } from "react";
import RdsCompDatatable from "../rds-comp-data-table";

interface RdsCompBlogPostProps {
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
}

const tableHeaders = [
   {
      displayName: "Name",
      key: "name",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
   },
   {
      displayName: "Short Name",
      key: "shortName",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
   },
   {
      displayName: "Description",
      key: "description",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
   },
   {
      displayName: "Creation Time",
      key: "creationTime",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
   },
];

const actions = [
   { id: "edit", displayName: "Edit", offId: "blog" },
   { id: "delete", displayName: "Delete", modalId: "delete" },
   { id: "clearCache", displayName: "Clear Cache", modalId: "clearCache" },
];
const tableData = [
   { id: 1, editionName: "Standard", price: 60, trialPeriod: 5 },
   { id: 2, editionName: "Basic", price: 120, trialPeriod: 10 },
   { id: 3, editionName: "Premium", price: 250, trialPeriod: 5 },
   { id: 4, editionName: "Standard", price: 60, trialPeriod: 7 },
   { id: 5, editionName: "Basic", price: 100, trialPeriod: 15 },
   { id: 6, editionName: "Standard", price: 60, trialPeriod: 5 },
   { id: 7, editionName: "Premium", price: 100, trialPeriod: 47 },
   { id: 8, editionName: "Standard", price: 100, trialPeriod: 53 },
   { id: 9, editionName: "Standard", price: 100, trialPeriod: 35 },
   { id: 10, editionName: "Basic", price: 100, trialPeriod: 35 },
   { id: 11, editionName: "Premium", price: 100, trialPeriod: 95 },
   { id: 12, editionName: "Standard", price: 100, trialPeriod: 75 },
   { id: 13, editionName: "Premium", price: 100, trialPeriod: 15 },
   { id: 14, editionName: "Basic", price: 100, trialPeriod: 45 },
   { id: 15, editionName: "Standard", price: 100, trialPeriod: 3 },
   { id: 16, editionName: "Basic", price: 100, trialPeriod: 1 },
];

const RdsCompBlogPost = (props: RdsCompBlogPostProps) => {
   function onActionSelection(rowData: any, actionId: any): void {
      // throw new Error('Function not implemented.');
   }

   return (
      <RdsCompDatatable
         tableHeaders={props.tableHeaders}
         actions={props.actions}
         tableData={props.tableData!}
         pagination={props.pagination!}
         recordsPerPage={props.recordsPerPage}
      ></RdsCompDatatable>
   );
}
export default RdsCompBlogPost;
