import { RdsButton, RdsIcon, RdsInput } from '../rds-elements';
import React, { FC, useState } from "react";
import { json } from "react-router-dom";
import { Value } from "sass";
import RdsCompDatatable from "../rds-comp-data-table";

export interface RdsCompPropertiesNewProps {}

const RdsCompPropertiesNew = (props: RdsCompPropertiesNewProps) => {
  const [tableData, setTableData] = useState<any>([]);
  const [propertyData, setPropertyData] = useState<any>({
    key: "",
    PropValue: "",
  });
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("hello handleSubmit", propertyData);
  }
  function headerKeyhandleChange(value: any) {
    setPropertyData({ ...propertyData, key: value });
  }
  function headerValuehandleChange(value: any) {
    setPropertyData({ ...propertyData, PropValue: value });
  }
  const tableHeaders = [
    {
      displayName: "Key",
      key: "key",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Value",
      key: "Value",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Action",
      key: "delete",
      datatype: "children",
      sortable: true,
    },
  ];
   const handleAddItem = () => {
    let newTempData: any;
    newTempData = {
      key: propertyData.key,
      Value: propertyData.PropValue,
      delete: (
        <>
          <a
            className="mx-2"
            type="button"
            data-bs-toggle="modal"
            data-bs-target={`#deleteTreeNode`}
            onClick={() => onDelete(propertyData.key)}
            data-testid="delete"
          >
            <RdsIcon
              name={"delete"}
              height="16px"
              width="20px"
              stroke={true}
            ></RdsIcon>
          </a>
        </>
      ),
    };
    setTableData((prev: any) => [...prev, newTempData]);
  };
  function onDelete(key: any) {
    console.log("hello");

    let tempPropertyData = tableData.filter((el: any) => el.key != key);
    setTableData(tempPropertyData);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <RdsCompDatatable
            actionPosition="right"
            tableHeaders={tableHeaders}
            tableData={tableData}
            pagination={false}
          ></RdsCompDatatable>
        </div>
        <div className=" row mt-3">
          <div className="col-md-5">
            <RdsInput
              label="Key"
              placeholder="Enter a key"
              inputType="text"
              onChange={(e: any) => {
                headerKeyhandleChange(e.target.value);
              }}
              value={propertyData.key}
              dataTestId="key"
            ></RdsInput>
          </div>
          <div className="col-md-5">
            <RdsInput
              label="Value"
              placeholder="Enter a value"
              inputType="text"
              onChange={(e: any) => {
                headerValuehandleChange(e.target.value);
              }}
              value={propertyData.PropValue}
              dataTestId="value"
            ></RdsInput>
          </div>
          <div className="col-md-2 align-items-end d-flex ">
            <RdsButton
              label="ADD"
              colorVariant="primary"
              block={true}
              onClick={handleAddItem}
              tooltipTitle={""}
              type="submit"
              dataTestId="add"
            />
          </div>
        </div>
        <div className="row mt-5 footer-buttons bottom-0 mx-0 ">
          <div className="col-2 mx-2">
            <RdsButton
              label="Cancel"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="button"
              isOutline={true}
              dataTestId="cancel"
            />
          </div>
          <div className="col-2">
            <RdsButton
              label="Save"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="submit"
              dataTestId="submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default RdsCompPropertiesNew;
