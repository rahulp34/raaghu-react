import React from "react";
import { useTranslation } from "react-i18next";
import { Directory } from "../../../../../raaghu-components/src/rds-comp-directory-list/rds-comp-directory-list";
import { RdsButton, RdsOffcanvas } from "../../../../../raaghu-elements/src";

import { RdsCompDirectoryList } from "../../../rds-components";

const directories: Directory[] = [
  {
    name: "Parent 1",
    children: [
      {
        name: "Child 1.1",
      },
      {
        name: "Child 1.2",
        children: [
          {
            name: "Grandchild 1.2.1",
          },
          {
            name: "Grandchild 1.2.2",
          },
        ],
      },
    ],
  },
  {
    name: "Parent 2",
    children: [
      {
        name: "Child 2.1",
      },
      {
        name: "Child 2.2",
        children: [
          {
            name: "Grandchild 2.2.1",
          },
        ],
      },
    ],
  },
];
const FileManagement = () => {
  const { t } = useTranslation();


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

        <div className="col-md-3 pt-3">
          <RdsCompDirectoryList directory={directories}></RdsCompDirectoryList>
        </div>
      </div>
    </div>



    
  );
};

export default FileManagement;
