import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import RdsCompDataTable from "../../../../../raaghu-components/src/rds-comp-data-table";
import RdsCompDirectoryList  from "../../../../../raaghu-components/src/rds-comp-directory-list/rds-comp-directory-list";
import RdsCompFileUploader from "../../../../../raaghu-components/src/rds-comp-fileUploader/rds-comp-fileUploader";
import {
  RdsBreadcrumb,
  RdsButton,
  RdsInput,
  RdsOffcanvas,
  RdsSearch,
} from "../../../../../raaghu-elements/src";
import { fetchSubDirectory, useAppDispatch } from "../../../../libs/public.api";
import { useAppSelector } from "../../../../libs/state-management/hooks";

const FileManagement = () => {
const { t } = useTranslation();
const dispatch = useAppDispatch();
const file = useAppSelector((state) => state.persistedReducer.fileManagement);

const[path,setPath]=useState("");
const [name,setName]=useState("")

  const [directories, setDirectories] = useState<any[]>([
    {
      name: "All",
      path: "/all",
      id: null,
      hasChildren:false,
      children: [
      ],
    },
  ])
  
  const items = [
    {
      label: "Home",
      id: 1,
      disabled: false,
      icon: "home",
      iconFill: false,
      iconstroke: true,
      iconWidth: "15px",
      iconHeight: "15px",
      iconColor: "primary",
      active: false,
    },
  ];

  const tableHeaders = [
    {
      displayName: "Name",
      key: "name",
      datatype: "avatarTitleInfo",
      sortable: true,
    },
    {
      displayName: "Size",
      key: "size",
      datatype: "text",
      sortable: true,
    },
  ];

  const [tableData, setTableData] = useState<any[]>([
    {
      id: 1,
      name: "RDS.ppt",
      size: "987.66KB, ",
    },
    {
      id: 2,
      name: "RDS-Logo.png",
      size: "512KB",
    },
    {
      id: 2,
      name: "RDS-elements.xd",
      size: "1MB",
    },
  ]);

  const tableData1 = [
    {
      id: 1,
      name: "khghjfvghv.ppt",
      size: "987.66KB, ",
    },
    {
      id: 2,
      name: "RDS-Lojbhjvgo.png",
      size: "512KB",
    },
    {
      id: 2,
      name: "RDS-elemekjbjhgnts.xd",
      size: "1MB",
    },
  ];
  const tableData2 = [
    {
      id: 1,
      name: "RDSjghfyugb.ppt",
      size: "987.66KB, ",
    },
    {
      id: 2,
      name: "RDS-Logkjyfuttycvo.png",
      size: "512KB",
    },
    {
      id: 2,
      name: "RDS-elekhygfyifments.xd",
      size: "1MB",
    },
  ];
  const actions = [
    { id: "rename", displayName: "Rename" },
    { id: "delete", displayName: "Delete" },
    { id: "move", displayName: "Move" },
  ];

  const breadItems = [
    {
      label: "All",
      id: 1,
      //route: "#",
      disabled: false,
      icon: "home",
      iconFill: false,
      iconstroke: true,
      iconWidth: "12px",
      iconHeight: "12px",
      iconColor: "primary",
      active: false,
    },
    {
      label: "Parent 1",
      id: 2,
      //route: "",
      disabled: false,
      icon: "",
      iconFill: false,
      iconstroke: true,
      iconWidth: "7px",
      iconHeight: "7px",
      iconColor: "primary",
      active: false,
    },
    {
      label: "child 1",
      id: 3,
      active: false,
      disabled: true,
      icon: "",
      iconFill: false,
      iconstroke: true,
      iconWidth: "7px",
      iconHeight: "7px",
      iconColor: "primary",
    },
  ];

  function recursiveFunctionAddData(directories:any, data:any){
    return directories.map((el:any)=>{
      if(data.parentId == el.id){
        let flag = 0;
        el.children.map((e:any)=>{
          if(e.id == data.id){
            flag = 1;
          }
        })
        if(!flag){
          el.hasChildren = true;
          el.children.push(data);
        }
        return el;
      }
      else{
        return el;
      }
    })
  }

  useEffect(()=>{
    dispatch(fetchSubDirectory(undefined) as any);
  },[dispatch])

  useEffect(()=>{
    debugger
    if(file.subDirectories){
      file.subDirectories.items.map((el:any)=>{
        let tempData = recursiveFunctionAddData(directories, el);
        debugger
        setDirectories(tempData);
      })
    }

  },[file.subDirectories])

  // useEffect(() => {
  //   if(path=="All"){
  //     setTableData(tableData1)
  //   }
  //   if(path=="Parent 1"){
  //     setTableData(tableData2)
  //   }
  // console.log(path,"bredCrumbs Path");
  // },[path])

  function setPathValue(event:any){
    dispatch(fetchSubDirectory(event.id) as any);

    
  }

  // useEffect(() => {
  //   if (path == "All") {
  //     setTableData(tableData1);
  //   }
  //   if (path == "Parent 1") {
  //     setTableData(tableData2);
  //   }
  //   console.log(path, "bredCrumbs Path");
  // }, [path]);

  function setValue(value: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="New Folder">
      <div className="d-flex justify-content-end">
        <RdsOffcanvas
          canvasTitle={"CREATE FOLDER"}
          placement="end"
          offcanvaswidth={650}
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
          offId={"Folder"}
          offcanvasbutton={
            <div className="d-flex justify-content-end">
              <RdsButton
                icon="plus"
                label={"Create New Folder"}
                iconColorVariant="light"
                iconHeight="15px"
                iconWidth="15px"
                iconFill={false}
                iconStroke={true}
                block={false}
                size="small"
                type="button"
                colorVariant="primary"
              ></RdsButton>
            </div>
          }
        >
          <div>
            <div className="pt-3">
              <RdsInput
                size="medium"
                inputType="text"
                placeholder="Enter Name"
                label="Folder Name"
                labelPositon="top"
                id=""
                value={name}
                required={true}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></RdsInput>
              <div className="d-flex footer-buttons">
                <RdsButton
                  label="CANCEL"
                  databsdismiss="offcanvas"
                  type={"button"}
                  size="small"
                  isOutline={true}
                  colorVariant="primary"
                  class="me-2"
                ></RdsButton>
                <RdsButton
                  label="SAVE"
                  type={"button"}
                  size="small"
                  databsdismiss="offcanvas"
                  isDisabled={name === ""}
                  colorVariant="primary"
                  class="me-2"
                  //onClick={addDataHandler}
                ></RdsButton>
              </div>
            </div>
          </div>
        </RdsOffcanvas>

        <RdsOffcanvas
          canvasTitle={"Upload Files"}
          placement="end"
          offcanvaswidth={650}
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
          offId={"Files"}
          offcanvasbutton={
            <div className="d-flex justify-content-end ms-3">
              <RdsButton
                icon="upload_data"
                label={"UPLOAD FILES"}
                iconColorVariant="primary"
                iconHeight="15px"
                iconWidth="15px"
                iconFill={false}
                iconStroke={true}
                block={false}
                size="small"
                type="button"
                colorVariant="primary"
                isOutline={true}
              ></RdsButton>
            </div>
          }
         
        >
          <RdsCompFileUploader></RdsCompFileUploader>
        </RdsOffcanvas>
      </div>
      <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3 ">
        <div className="row">
          <div className="col-md-3 pt-3">
            <RdsCompDirectoryList
              directory={directories}
              path={setPathValue}
            ></RdsCompDirectoryList>
          </div>

          <div className="col-md-9 border-start">
            <div className="row mt-3 ms-3">
              <div className="col-md-4 d-flex justify-comtent-start">
                {/* <RdsBreadcrumb breadItems={directories}/> */}
                <RdsBreadcrumb
                  breadItems={breadItems}
                  role="advance"
                ></RdsBreadcrumb>
              </div>

              <div className="col md-4 d-flex "></div>

              <div className="col md-4 d-flex justify-content-end">
                <RdsSearch placeholder={"Search"} size={"5px"}></RdsSearch>
              </div>
            </div>

            <div className="row mt-3 ms-3">
              <RdsCompDataTable
                tableHeaders={tableHeaders}
                tableData={tableData}
                pagination={false}
                actions={actions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileManagement;

{
  /* <div className="col-md-9">
<div className="row">
  <div className="col-md-3 d-flex justify-content-start">
    hi
  </div>
</div>
</div> */
}
