import React, { useState, useEffect, Children, useReducer } from "react";
import RdsCompAlertPopup from "../rds-comp-alert-popup";
import RdsCompDatatable from "../rds-comp-data-table";
import RdsCompDataTable from "../rds-comp-data-table";
import {
  RdsButton,
  RdsIcon,
  RdsInput,
  RdsLabel,
  RdsSelectList,
} from "../rds-elements";
import "./rds-comp-claims.scss";

export interface RdsCompClaimsProps {
  allClaimsArray?: any[];
  claimsTable?: any[];
  id?:any;
}

export interface SelectedItem {
  type: string;
  value: string;
}

const RdsCompClaims = (props: RdsCompClaimsProps) => {
  const [allClaimsArray, setAllClaimsArray] = useState<any>(props.allClaimsArray)
  const [selectedData, setSelectedData] = useState<any>({
    id: 0,
    claimType: "",
    claimValue: "",
    roleId: props.id,
  });
  const [tableData, setTableData] = useState<any>(props.claimsTable);
  const actions= [{ id: "delete", displayName: "delete" }];

  const handleAddItem = () => {
    debugger
    let newTempData: any;
    newTempData = {
      id: selectedData.id,
      claimType: selectedData.claimType,
      claimValue: selectedData.claimValue,
      roleId: props.id,
      delete: "Delete",
    };
    setTableData((prev: any) => [...prev, newTempData]);
    setSelectedData({ ...selectedData, id: selectedData.id + 1 });
  };

  const HandlerDelete = () => {
    console.log(" yes bhai you clicked me !!");
  };
  // const handleDeleteItem = (index: number) => {
  //   setSelectedItems(selectedItems.filter((item, i) => i !== index));
  // };
  const tableHeaders = [
    {
      displayName: "claim Type",
      key: "claimType",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "claim Value",
      key: "claimValue",
      datatype: "text",
      sortable: true,
    }
  ];
  
  function onActionSelection(data:any){
    debugger
    console.log(data)
  }

  return (
    <>
      <div className="form">
        <div className="row">
          <div className="col-md-5 mt-3">
            <RdsLabel label="Claims Type" class="pb-2" />
            <RdsSelectList
              label="Select"
              selectItems={allClaimsArray}
              selectedValue={selectedData.claimType}
              onSelectListChange={(e: any) => {
                setSelectedData({ ...selectedData, claimType: e });
              }}
              size="small"
            ></RdsSelectList>
          </div>

          <div className="col-md-5 mt-3">
            <RdsInput
              required={true}
              label={"Value"}
              placeholder="Enter Value"
              name="value"
              value={selectedData.claimValue}
              onChange={(event) =>
                setSelectedData({
                  ...selectedData,
                  claimValue: event.target.value,
                })
              }
            ></RdsInput>
          </div>

          <div className="col-md-2 mt-4 pt-4">
            <RdsButton
              type={"button"}
              label="Add"
              icon="plus"
              iconHeight="15px"
              onClick={handleAddItem}
              class="text-start"
              iconColorVariant="dark"
              colorVariant="primary"
              size="small"
            ></RdsButton>
          </div>
        </div>

        <div className="row mt-3 ">
          <RdsCompDatatable
            tableHeaders={tableHeaders}
            tableData={tableData}
            pagination={true}
            recordsPerPage={10}
            actions={actions}
            recordsPerPageSelectListOption={true}
            onActionSelection={onActionSelection}
          ></RdsCompDatatable>
          {/* <RdsCompAlertPopup alertID="Del" onSuccess={onDeleteHandler} /> */}
        </div>
      </div>
    </>
  );
};

export default RdsCompClaims;
