import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RdsCompDataTable from "../../../../../raaghu-components/src/rds-comp-data-table";
import { Directory } from "../../../../../raaghu-components/src/rds-comp-directory-list/rds-comp-directory-list";
import {
  RdsBreadcrumb,
  RdsButton,
  RdsOffcanvas,
  RdsSearch,
} from "../../../../../raaghu-elements/src";

import { RdsCompDirectoryList } from "../../../rds-components";

const FileManagement = () => {
  const[path,setPath]=useState("/");

  const directories: Directory[] = [
    {
      name: "All",
      path: "/all",
      children: [
        {
          name: "Parent 1",
          path: "/parent",
          children: [
            {
              name: "child 1",
              path: "/child1",
              children: [
                {
                  name: "GChild",
                  path: "/GChild",
                },
              ],
            },
          ],
        },
        // {
        //   name: "Parent 2",
        //   children: [
        //     {
        //       name: "Grandchild 1.2.1",
        //     },
        //     {
        //       name: "Grandchild 1.2.2",
        //     },
        //   ],
        // },
      ],
    },
    // {
    //   name: "Parent 2",
    //   children: [
    //     {
    //       name: "Child 2.1",
    //     },
    //     {
    //       name: "Child 2.2",
    //       children: [
    //         {
    //           name: "Grandchild 2.2.1",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];
  
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
    {
      displayName: "Action",
      key: "action",
      datatype: "text",
      sortable: true,
    },
  ];
  
  const [tableData , setTableData]  = useState<any[]>([
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
  ])
  
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
  
  useEffect(() => {
    if(path=="All"){
      setTableData(tableData1)
    }
    if(path=="Parent 1"){
      setTableData(tableData2)
    }
  console.log(path,"bredCrumbs PAth");
  },[path])

  function setPathValue(event:any){
    debugger
    setPath(event)

  }

  return (
    <div className="New Folder">
      <div className="d-flex justify-content-end">
        <RdsOffcanvas
          canvasTitle={"New Folder"}
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
        ></RdsOffcanvas>

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
                label={"Upload Files"}
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
        ></RdsOffcanvas>
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
              <RdsBreadcrumb breadItems={directories}/>
                
              
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
