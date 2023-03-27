import { RdsButton, RdsIcon, RdsInput } from "raaghu-react-elements";
import React, { useState } from "react";
import RdsCompDatatable from "../rds-comp-data-table";

interface RdsCompPollsOptionProps {}

const RdsCompPollsOption = (props: RdsCompPollsOptionProps) => {
  const [tableData, setTableData] = useState<any>([]);
  const [ErrorFreeData, setErrorFreeData] =useState<any[]>([]);
  const [optionData, setoptionData] = useState<any>({
    option: "",
  });
  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("hello handleSubmit", optionData);
  }
  function optionChange(value: any) {
    debugger;
    setoptionData({ ...optionData, option: value });
  }

  const tableHeaders = [
    {
      displayName: "Text",
      key: "option",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Action",
      key: "actions",
      datatype: "children",
      sortable: true,
    },
  ];
  const style = { marginTop: "29px" };
  const[areWeEditing, setAreWeEditing] = useState(false);
  const[dataId, setDataId] =useState("");
  function handleEdit(data:any){
    setAreWeEditing(true);
    setDataId(data);
    let editData = ErrorFreeData.find((element:any)=>element.id == data)
    setoptionData({ ...optionData, option: editData.option });
  }
  function handleDelete(data:any){
    let tempTableData :any[] =[];
    tableData.map((res:any)=>{
      if(res.id != data){
        tempTableData.push(res);
      }
    })
    setTableData(tempTableData);
    setErrorFreeData(tempTableData)
  }

  function generateUniqueID() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const timestamp = Date.now();
    const uniqueID = `${randomNumber}-${timestamp}`;
    return uniqueID;
  }
  

  function handleAddItem(){
    debugger
    if(areWeEditing){
      setAreWeEditing(false);
      let tempTableData :any[] =[];
      tableData.map((res:any)=>{
        if(res.option == dataId){
          res.option = optionData.option;
        }
        tempTableData.push(res);
      })
      setTableData(tempTableData);
      setErrorFreeData(tempTableData);
    }
    else{
      let newTempData: any;
      let id= generateUniqueID();
      newTempData = {
        id:id,
        option: optionData.option,
        actions: (
          <>
            <div className="d-flex justify-content-center">
              <div className="mx-2">
              <RdsIcon
                width="17px"
                height="17px"
                name="edit"
                stroke={true}
                colorVariant="primary"
                onClick={()=>{handleEdit(id)}}
              ></RdsIcon>
               </div>
                <RdsIcon
                width="17px"
                height="17px"
                name="delete"
                stroke={true}
                colorVariant="danger"
                onClick={()=>{handleDelete(id)}}
              ></RdsIcon>
  
            </div>
          </>
        ),
      };
      let tempTableData = tableData.concat([newTempData])
      debugger
      setTableData(tempTableData);
      setErrorFreeData(tempTableData)
    }
    setoptionData({ option: "" });
  };
  // function onDelete(key: any) {
  //   console.log("hello");
  //   debugger;
  //   let tempPropertyData = tableData.filter((el: any) => el.key != key);
  //   setTableData(tempPropertyData);
  // }
  function onActionSelection(rowData: any, actionId: any) {
    debugger;
    if (actionId == "delete") {
      let count = true;
      let tempPropertyData: any[] = [];
      tableData.map((el: any) => {
        if (count && el.option == rowData.option) {
          count = false;
        } else {
          tempPropertyData.push(el);
        }
      });
      setTableData(tempPropertyData);
    }
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" row mt-3">
          <div className="col-md-5  mb-2">
            <RdsInput
              label="Option"
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
              label="Add"
              colorVariant="primary"
              block={true}
              icon={"plus"}
              iconHeight={"10px"}
              iconWidth={"10px"}
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
  );
};

export default RdsCompPollsOption;
