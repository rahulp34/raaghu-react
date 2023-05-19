import { RdsButton, RdsIcon, RdsInput } from "../rds-elements";
import React, { useEffect, useState } from "react";
import RdsCompDatatable from "../rds-comp-data-table";

interface RdsCompPollsOptionProps {
  getPollsOptionData?: any;
  optionsData?: any;
}

const RdsCompPollsOption = (props: RdsCompPollsOptionProps) => {
  const [tableData, setTableData] = useState<any>(props.optionsData);
  const [optionData, setoptionData] = useState<any>({
    option: "",
  });

  useEffect(() => {
    if (props.optionsData) {
      setTableData(props.optionsData);
    }
  }, [props.optionsData]);

  function optionChange(value: any) {
    setoptionData({ ...optionData, option: value });
  }

  const tableHeaders = [
    {
      displayName: "Text",
      key: "text",
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
  // const style = { marginTop: "29px" };
  const [areWeEditing, setAreWeEditing] = useState(false);
  const [dataId, setDataId] = useState("");

  function handleEdit(data: any) {
    setAreWeEditing(true);
    setDataId(data);
    let editData = tableData.find((element: any) => element.id == data);
    setoptionData({ ...optionData, option: editData.text });
  }
  function handleDelete(data: any) {
    let tempTableData1: any[] = [];
    tableData.map((res: any) => {
      if (res.id != data) {
        tempTableData1.push(res);
      }
    });
    setTableData(tempTableData1);
    setUpdateTable(!updateTable);
  }

  function generateUniqueID() {
    const randomNumber = Math.floor(Math.random() * 1000000);
    const timestamp = Date.now();
    const uniqueID = `${randomNumber}-${timestamp}`;
    return uniqueID;
  }

  // const handleSwap = (index1:any, index2:any) => {
  //   const newData = [...tableData];
  //   [newData[index1-1], newData[index2-1]] = [newData[index2-1], newData[index1-1]];
  //   newData[index1-1].order = index2;
  //   newData[index2-1].order = index1;
  //   setTableData(newData);
  //   setUpdateTable(!updateTable);
  // };
  function getSwappedData(data: any) {
    setTableData(data);
  }
  const [updateTable, setUpdateTable] = useState(false);

  function handleAddItem(event: any) {
    event.preventDefault();
    if (areWeEditing) {
      setAreWeEditing(false);
      let tempTableData2: any[] = [];
      tableData.map((res: any) => {
        if (res.id == dataId) {
          res.text = optionData.option;
        }
        tempTableData2.push(res);
      });
      setTableData(tempTableData2);
    } else {
      let tempTableData3 = tableData.map((res: any) => {
        const item = {
          id: res.id,
          text: res.text,
          order: res.order,
          voteCount: 0,
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
                    onClick={() => {
                      handleEdit(res.id);
                    }}
                    dataTestId="edit"
                  ></RdsIcon>
                </div>
                <RdsIcon
                  width="17px"
                  height="17px"
                  name="delete"
                  stroke={true}
                  colorVariant="danger"
                  onClick={() => {
                    handleDelete(res.id);
                  }}
                  dataTestId="delete"
                ></RdsIcon>
              </div>
            </>
          ),
        };
        return item;
      });
      let id = generateUniqueID();
      let newTempData: any = {
        id: id,
        text: optionData.option,
        order: tableData.length + 1,
        voteCount: 0,
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
                  onClick={() => {
                    handleEdit(id);
                  }}
                  dataTestId="edit"
                ></RdsIcon>
              </div>
              <RdsIcon
                width="17px"
                height="17px"
                name="delete"
                stroke={true}
                colorVariant="danger"
                onClick={() => {
                  handleDelete(id);
                }}
                dataTestId="delete"
              ></RdsIcon>
            </div>
          </>
        ),
      };
      tempTableData3.push(newTempData);
      setTableData(tempTableData3);
    }
    setoptionData({ option: "" });
    setUpdateTable(!updateTable);
  }

  useEffect(() => {
    let tempTableData4 = tableData.map((res: any) => {
      const item = {
        id: res.id,
        text: res.text,
        order: res.order,
        voteCount: res.voteCount,
        actions: (
          <>
            <div className="d-flex justify-content-center">
              <div className="mx-3">
                <RdsIcon
                  width="17px"
                  height="17px"
                  name="pencil"
                  stroke={true}
                  colorVariant="primary"
                  onClick={() => {
                    handleEdit(res.id);
                  }}
                  dataTestId="edit"
                ></RdsIcon>
              </div>
              <RdsIcon
                width="17px"
                height="17px"
                name="delete"
                stroke={true}
                colorVariant="danger"
                onClick={() => {
                  handleDelete(res.id);
                }}
                dataTestId="delete"
              ></RdsIcon>
            </div>
          </>
        ),
      };
      return item;
    });
    setTableData(tempTableData4);
    props.getPollsOptionData(tempTableData4);
  }, [updateTable]);

  return (
    <>
      <div className="container-fluid m-0 p-0">
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
              dataTestId="option"
            ></RdsInput>
          </div>
          <div className="col-md-3">
           <div> <label className="form-label"> &nbsp;</label></div>
            <RdsButton
              label="Add"
              colorVariant="primary"
              icon={"plus"}
              iconHeight={"10px"}
              iconWidth={"10px"}
              onClick={handleAddItem}
              tooltipTitle={""}
              type="button"
              dataTestId="add"
            />
          </div>
        </div>
        <div className="mt-3">
          <RdsCompDatatable
            actionPosition="right"
            tableHeaders={tableHeaders}
            tableData={tableData}
            pagination={false}
            isSwap={true}
            swapRows={(data: any) => {
              getSwappedData(data);
            }}
          ></RdsCompDatatable>
        </div>
      </div>
    </>
  );
};

export default RdsCompPollsOption;
