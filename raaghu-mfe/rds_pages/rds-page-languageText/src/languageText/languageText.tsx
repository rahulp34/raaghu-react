import React from "react";
// import axios from "axios";
import { RdsCompDatatable, RdsCompNewLanguage } from "../../../rds-components";
import {
  RdsAlert,
  RdsBadge,
  RdsButton,
  RdsCheckbox,
  RdsIcon,
  RdsInput,
  RdsOffcanvas,
} from "../../../rds-elements";

export interface LanguageTextProps {
  languagetableHeaders: any;
  languagetableData: any;
  actions?: any;
  onActionSelection?(arg: any): void;
}


const tableHeaders = [
  {
    displayName: "Key",
    key: "key",
    datatype: "text",
    sortable: true,
  },
  {
    displayName: "Base Value",
    key: "basevalue",
    datatype: "text",
    sortable: true,
  },
  {
    displayName: "Value",
    key: "value",
    datatype: "text",
    sortable: true,
  },
  {
    displayName: "Resource Name",
    key: "resourcename",
    datatype: "text",
    sortable: true,
  },
];
const actions = [
  { id: "edit", displayName: "Edit", offId: "langEdit" },
];

const tableDate = [
  {key:"hello",
  basevalue:"hai",
  value:"new",
  resourcename:"newdata"

}
]
const LanguageText = (props: LanguageTextProps) => {
  return (
    <>
     <div className="row">
        <div className="col-md-12 mb-3 ">
          <div className="row ">
            top part 
          </div>
        </div>

        <div className="col-md-12">
          <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
            <div className="d-flex mt-3">
              <h5 className="col-md-9  ps-2 p-2">All Languages</h5>
            </div>
            <div className="p-2">
              <RdsCompDatatable
                classes="table__userTable"
                tableHeaders={tableHeaders}
                pagination={true}
                tableData={tableDate}
                actions={actions}
                // onActionSelection={onActionSelection}
                recordsPerPage={5}
                recordsPerPageSelectListOption={true}
              ></RdsCompDatatable>
            </div>
            <RdsOffcanvas
              placement={"end"}
              backDrop={true}
              scrolling={false}
              preventEscapeKey={false}
              offId={"langEdit"}
              canvasTitle={"Edit Language"}
              offcanvaswidth={550}
            >
              <form>
        <div className="row">
          
          <div className="col-md-6 mb-3">
            <div className="form-group mt-3">
              <RdsInput
                size="small"
                label="Display Name"
                placeholder="Enter Display Name"
                // value={dataEmit.displayName}
                // onChange={inputChangeHandler}
                required={true}
              ></RdsInput>
            </div>
          </div>
        </div>
      </form>

      <div className="footer-buttons my-2">
        <div className="row">
          <div className="col-md-12 d-flex">
            <div>
              <RdsButton
                label="Cancel"
                type="button"
                colorVariant="primary"
                size="small"
                databsdismiss="offcanvas"
                isOutline={true}
              ></RdsButton>
            </div>
            <div>
              <RdsButton
                label="Save"
                type="button"
                size="small"
                // isDisabled={formValid}
                class="ms-2"
                colorVariant="primary"
                databsdismiss="offcanvas"
                // onClick={() => onEditHandler(dataEmit)}
              ></RdsButton>
            </div>
          </div>
        </div>
      </div>

              
            </RdsOffcanvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageText;
