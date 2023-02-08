import React, { useEffect, useState } from "react";
import { RdsButton, RdsOffcanvas } from "../../../rds-elements";
import axios from "axios";
import {
  RdsCompAlertPopup,
  RdsCompDatatable,
  RdsCompNewLanguage,
} from "../../../rds-components";
import { Item } from "@storybook/api/dist/ts3.9/lib/stories";

export interface LanguageProps {
  languagetableHeaders: any;
  languagetableData: any;
  actions?: any;
  onActionSelection?(arg: any): void;
  languageName: any[];
  flags: any[];
}

const Language = (props: LanguageProps) => {
  return (
    <>
      <div className="row">
        <div className="col-md-9"></div>
        <div className=" col-md-3  pb-3 d-flex justify-content-end">
          <RdsOffcanvas
            offcanvasbutton={
              <RdsButton
                type={"button"}
                label="New Language"
                iconColorVariant="light"
                size="small"
                colorVariant="primary"
                icon="plus"
                iconFill={false}
                iconStroke={true}
                iconHeight="12px"
                iconWidth="12px"
              ></RdsButton>
            }
            placement={"end"}
            backDrop={true}
            scrolling={false}
            preventEscapeKey={false}
            offId={"Language"}
            canvasTitle={"New Language"}
            offcanvaswidth={550}
          >
            {" "}
            <RdsCompNewLanguage
              languageNames={[]}
              flags={[]}
            ></RdsCompNewLanguage>
          </RdsOffcanvas>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
            <div>
              <RdsCompDatatable
                classes="table__userTable"
                tableHeaders={props.languagetableHeaders}
                pagination={true}
                tableData={props.languagetableData}
                actions={props.actions}
                onActionSelection={props.onActionSelection!}
                recordsPerPage={5}
                recordsPerPageSelectListOption={true}
              ></RdsCompDatatable>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-btn position-absolute bottom-0 end-0 my-4 mx-5"></div>

      <RdsOffcanvas
        placement={"end"}
        backDrop={true}
        scrolling={false}
        preventEscapeKey={false}
        offId={"editCanvas"}
        canvasTitle={"New Language"}
        offcanvaswidth={550}
      >
        {" "}
        <RdsCompNewLanguage
          languageNames={props.languageName}
          flags={props.flags}
        ></RdsCompNewLanguage>
      </RdsOffcanvas>
      <RdsCompAlertPopup
        alertID="deleteModal"
        onSuccess={() => {
          console.log("bahiya yeh delete hogaya");
        }}
      />
    </>
  );
};

export default Language;
