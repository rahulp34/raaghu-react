import { RdsButton, RdsIcon, RdsInput } from 'raaghu-react-elements';
import React, { useState } from 'react';
import RdsCompDatatable from '../rds-comp-data-table';


interface RdsCompPollsOptionProps {}

const RdsCompPollsOption = (props:RdsCompPollsOptionProps) => {
  const [tableData, setTableData] = useState<any>([]);
  const [optionData, setoptionData] = useState<any>({
    option: '',
  });
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("hello handleSubmit", optionData)
  }
  function optionChange(value: any) {
    debugger
    setoptionData({ ...optionData, option: value });
  }
  const actions = [
    { id: "editOption", displayName: "Edit" },
    { id: "delete", displayName: "Delete",modalId:'nomodal'},
  ];
  const tableHeaders = [
    {
      displayName: "Text",
      key: "option",
      datatype: "text",
      sortable: true,
    },
    
  ];
  const style = { marginTop: '29px' }
  const handleAddItem = () => {
    let newTempData: any;
    newTempData = {
      option: optionData.option,
     
    };
    setTableData((prev: any) => [...prev, newTempData]);
    setoptionData({option : ''})
  };
  function onDelete(key: any) {
    console.log("hello")
    debugger
    let tempPropertyData = tableData.filter((el: any) => (el.key != key))
    setTableData(tempPropertyData)
  }
  function onActionSelection(rowData:any , actionId:any) {
    debugger
if(actionId == 'delete'){
  let count = true;
  let tempPropertyData:any[] = [];
   tableData.map(((el: any) =>{
    if(count && el.option == rowData.option){
      count = false;
    }
    else{
      tempPropertyData.push(el);
    }
  } 
  ))
  setTableData(tempPropertyData)
}
  }
  return(
     <>
     <form onSubmit={handleSubmit}>
        <div className=" row mt-3" >
          <div className="col-md-5  mb-2">
            <RdsInput
              label="New Option"
              placeholder=""
              inputType="text"
              onChange={(e: any) => {
                optionChange(e.target.value);
              }}
              value={optionData.option}
            ></RdsInput>
          </div>
         
          <div className="col-md-3 " style={style}>
            <RdsButton
              label="Add New"
              colorVariant="primary"
              block={true}
              icon={'plus'}
              iconHeight={'10px'}
              iconWidth={'10px'}
              onClick={handleAddItem}
              tooltipTitle={""}
              type="submit"
            />
          </div>
        </div>
        <div className="mt-3">
          <RdsCompDatatable
            tableHeaders={tableHeaders}
            tableData={tableData}
            pagination={false}
            actions={actions}
            onActionSelection={onActionSelection}
          ></RdsCompDatatable>
        </div>
        <div className="row mt-5 footer-buttons bottom-0 mx-0 ">
          <div className="col-2 mx-2">
            <RdsButton
              label="Cancel"
              colorVariant="primary"
              block={true}
              size="small"
              tooltipTitle={""}
              type="button"
              isOutline={true}
            />
          </div>
          <div className="col-2">
            <RdsButton
              label="Save"
              size="small"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="submit"
            />
          </div>
        </div>
      </form>
    </>
     
  )
}

export default RdsCompPollsOption;
