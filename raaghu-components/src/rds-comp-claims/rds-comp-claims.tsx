import React, { useState, useEffect, Children, useReducer } from "react";
import RdsCompAlertPopup from "../rds-comp-alert-popup";
import RdsCompDatatable from "../rds-comp-data-table";
import RdsCompDataTable from "../rds-comp-data-table";
import { RdsButton, RdsIcon, RdsInput, RdsLabel, RdsSelectList } from "../rds-elements";
import "./rds-comp-claims.scss";

export interface RdsCompClaimsProps {
  TypeList: any[];
}

export interface SelectedItem {
  type: string;
  value: string;
}

const RdsCompClaims = (props: RdsCompClaimsProps) => {
  const [selectedData, setSelectedData] = useState<any>({
    id:0,
    claimType:'',
    claimValue:''
  });
  const [tableData ,setTableData  ] = useState<any>([])
  // useEffect(() => {
  //   setTableData(selectedData)
  // },[tableData])
  // const [value, setValue] = useState(props.selectValue);
  // useEffect(() => {
  //   setValue(props.selectValue);
  // }, [props.selectValue]);

  // const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const handleAddItem = () => {
  
    let newTempData: any;
    newTempData = {
      id: selectedData.id,
      claimType: selectedData.claimType,
      claimValue: selectedData.claimValue,
      delete: (<>
       <a
                    className="mx-2"
                     type="button"   
                     data-bs-toggle="modal"
                     data-bs-target={`#deleteTreeNode`}
                     onClick={HandlerDelete}
                     >
                     <RdsIcon 
                       name={"delete"}
                       height="16px"
                       width="20px"
                       stroke={true}
                     ></RdsIcon>
                   </a>
      </>),
    };
    setTableData((prev: any) => [...prev, newTempData]);
setSelectedData({...selectedData, id: selectedData.id +1})
};

const HandlerDelete =()=>{
  console.log(' yes bhai you clicked me !!')
}
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
    },   {
      displayName: "Action",
      key: "delete",
      datatype: "children",
      sortable: true,
    },
  ];
  const onDeleteHandler=(()=>{
    let tempdata:any[]=[];
    tableData.forEach((element:any)=>{
      if(element.value!= tableData.value){
        tempdata.push(tableData);
      }
    })
    

  })

  return (
    <>
      <div className="form">
        <div className="col md-1">
          <label htmlFor="claims">Claims</label>
        </div>

        <div className="row">
          <div className="col-md-5 mt-3">
          <RdsLabel label="Claims Type" class="pb-2" />
            <RdsSelectList
              label="Select"
              selectItems={[
                { option: "optional", value: "Optional" },
                { option: "forced", value: "Forced" },
                { option: "disable", value: "Disable" },
              ]}
              selectedValue={selectedData.claimType}
              onSelectListChange={(e: any) => {setSelectedData({ ...selectedData, claimType:e });
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
              onChange={(event) => setSelectedData({...selectedData, claimValue:event.target.value})}
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
            recordsPerPageSelectListOption={true}
           // onActionSelection={onActionSelection}
          ></RdsCompDatatable>
          {/* <RdsCompAlertPopup alertID="Del" onSuccess={onDeleteHandler} /> */}

        </div>

        <div className="footer-buttons mb-2 d-flex">
          <RdsButton
            class="me-2"
            tooltipTitle={""}
            type={"button"}
            label="Cancel"
            colorVariant="outline-primary"
            size="small"
            databsdismiss="offcanvas"
          ></RdsButton>
          <RdsButton
            class="me-2"
            label="Create"
            size="small"
            colorVariant="primary"
            tooltipTitle={""}
            type={"submit"}
            databsdismiss="offcanvas"
          ></RdsButton>
        </div>
      </div>
    </>
  );
};

export default RdsCompClaims;
