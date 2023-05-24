import React, { useState } from "react";
import {
  RdsButton,
  RdsDropdownList,
  RdsLabel,
  RdsSelectList,
} from "../rds-elements";

import "./rds-comp-theme-new.css";

export interface RdsCompThemeNewProps {
  StyleList: any;
  WebList: any;
  MenuList: any;
  StatusList: any;
}

const RdsCompThemeNew = (props: RdsCompThemeNewProps) => {
  const [formData, setFormData] = useState({
    styleList: "",
    webList: "",
    menuList: "",
    StatusList: "",
  });
  const handleStyleListChange = (event: any) => {
    setFormData({ ...formData, styleList: event.target.value });
  };
  const webStyleListChange = (event: any) => {
    setFormData({ ...formData, webList: event.target.value });
  };
  const menuListChange = (event: any) => {
    setFormData({ ...formData, menuList: event.target.value });
  };
  const statusListChange = (event: any) => {
    setFormData({ ...formData, StatusList: event.target.value });
  };
  function submitData(event: any) {

    event.preventDefault();
    console.log(formData);
  }
  return (
    <>
      <form data-testid="form" onSubmit={submitData}>
        <div className="row mb-3 pt-4">
          <div className="col-lg-6 col-md-6 form-group">
            <RdsLabel
              label="Style"
              class="form-label"
              children={<span className="text-danger">*</span>}
            ></RdsLabel>
            <RdsSelectList
              label="Select"
              selectItems={props.StyleList}
              size="small"
              onSelectListChange={(e: any) => {
                handleStyleListChange(e);
              }}
              dataTestId="style-select-list"
            ></RdsSelectList>
          </div>
          <div className="col-lg-6 col-md-6">
            <RdsLabel
              label="Public Website Style"
              class="form-label"
              children={<span className="text-danger">*</span>}
            ></RdsLabel>
            <RdsSelectList
              label="Select"
              selectItems={props.WebList}
              size="small"
              onSelectListChange={(e: any) => {
                webStyleListChange(e);
              }}
              dataTestId="web-select-list"
            ></RdsSelectList>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 form-group">
            <RdsLabel
              label="Menu Placement"
              class="form-label"
              children={<span className="text-danger">*</span>}
            ></RdsLabel>
            <RdsSelectList
              label="Select"
              selectItems={props.MenuList}
              size="small"
              onSelectListChange={(e: any) => {
                menuListChange(e);
              }}
              dataTestId="menu-select-list"
            ></RdsSelectList>
          </div>
          <div className="col-lg-6 col-md-6">
            <RdsLabel
              label="Menu Status"
              class="form-label"
              children={<span className="text-danger">*</span>}
            ></RdsLabel>
            <RdsSelectList
              label="Select"
              selectItems={props.StatusList}
              size="small"
              onSelectListChange={(e: any) => {
                statusListChange(e);
              }}
              dataTestId="status-select-list"
            ></RdsSelectList>
          </div>
        </div>
        <div className="footer-buttons justify-content-end d-flex bottom-0 pt-0" >
          <RdsButton
            class="me-2"
            label="CANCEL"
            type="button"
            isOutline={true}
            colorVariant="primary"
            size="small"
            dataTestId="cancel"
          ></RdsButton>
          <RdsButton
            class="me-2"
            label="SAVE"
            type="submit"
            isOutline={false}
            colorVariant="primary"
            size="small"
            dataTestId="save"
          ></RdsButton>
        </div>
      </form>
    </>
  );
};

export default RdsCompThemeNew;
