import React, { useState } from "react";
import {
  RdsLabel,
  RdsIcon,
  RdsOffcanvas,
  RdsNavtabs,
  RdsButton,
  RdsInput,
  RdsSelectList
} from "../rds-elements";
import RdsCompAlertPopupProps from "../rds-comp-alert-popup/rds-comp-alert-popup"

import "./rds-comp-edition.scss";
export interface RdsCompEditionProps {
  EditionItems: any;
  features: any;
}
const RdsCompEdition = (props: RdsCompEditionProps) => {
  const offCanvasHandler = () => {};

  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [showTenantSettings, setShowTenantSettings] = useState(false);
  const navtabsItems = [
    { label: "Basics", tablink: "#nav-home", id: 0 },
    { label: "Features", tablink: "#nav-profile", id: 1 },
  ];

  return (
    <div className="col-md-2" style={{ width: "170px" }}>
      <div className="card">
        <div className="card-body pt-3 ps-2 pe-2 pb-2">
          <div className="body">
            <div className="row">
              <div className="col-md-12 mb-1" style={{ textAlign: "center" }}>
                <b>{props.EditionItems.EditionName}</b>
                <RdsLabel
                  label={props.EditionItems.EditionTitle}
                  size="10px"
                  multiline={true}
                ></RdsLabel>
              </div>
              <div className="col-md-12" style={{ textAlign: "center" }}>
                <b style={{ color: "#249CF7", fontSize: "18px" }}>$</b>
                <b style={{ color: "#249CF7", fontSize: "25px" }}>
                  {props.EditionItems.Price}
                </b>
                <p
                  className="text-muted"
                  style={{
                    fontSize: "10px",
                    color: "c7c7c7",
                    marginBottom: 0,
                  }}
                >
                  {props.EditionItems.Plan}
                </p>
              </div>
              <div
                className="col-md-12 RdsCompEdition__description-list-inside-card"
                style={{
                  paddingTop: "0px",
                  textAlign: "left",
                  paddingLeft: "26px",
                }}
              >
                <ul style={{ fontSize: "10px", paddingLeft: "11px" }}>
                  {props.features.map((item: any) => (
                    <>
                      <li>{item}</li>
                    </>
                  ))}

                  {/* <li>Test Check feature</li>
                    <li>Test check feature count 2</li> */}
                </ul>
              </div>
              <div className="col-md-12" style={{ textAlign: "left" }}>
                <i className="bi bi-pencil" style={{ color: "#249CF7" }}></i>
                <i className="bi bi-trash m-2" style={{ color: "#F04646" }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 d-flex align-items-center">
          <RdsOffcanvas
            canvasTitle="UPDATE EDITION"
            onclick={offCanvasHandler}
            placement="end"
            offcanvaswidth={830}
            offcanvasbutton={
              <span className="border border-primary rounded-circle p-1 me-2">
                <RdsIcon
                  name="pencil"
                  height="15px"
                  width="15px"
                  fill={false}
                  colorVariant="primary"
                  stroke={true}
                />
              </span>
            }
            backDrop={false}
            scrolling={false}
            preventEscapeKey={false}
            offId={"Edition"}
          >
            <RdsNavtabs
              navtabsItems={navtabsItems}
              type="tabs"
              isNextPressed={showTenantSettings}
              activeNavTabId={activeNavTabId}
              activeNavtabOrder={(activeNavTabId) => {
                setActiveNavTabId(activeNavTabId), setShowTenantSettings(false);
              }}
            />
            {activeNavTabId == 0 && showTenantSettings === false && (
              <>
                <div className="row mt-3">
                  <div className="col-md-6 sm-p-0">
                    <div className="form-group mb-3">
                      <RdsInput
                        redAsteriskPresent={true}
                        inputType="text"
                        label="Edition Name "
                        placeholder="Edition Name "
                        name="editionName"
                        id="editionName"
                      ></RdsInput>
                    </div>
                  </div>
                  <div className="col-md-6 sm-p-0">
                    <div className="form-group mb-3">
                      <label className="mb-2">Plan <span className="text-danger">*</span></label>
                      <RdsSelectList label="Select Plan" selectItems={[]}></RdsSelectList>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
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
                    label="Next"
                    size="small"
                    colorVariant="primary"
                    tooltipTitle={""}
                    type={"submit"}
                  ></RdsButton>
                </div>
              </>
            )}
            {(activeNavTabId == 1 || showTenantSettings == true) && (
              <div></div>
            )}
          </RdsOffcanvas>
          <span className="border border-primary rounded-circle p-1 me-2">
            
            <RdsIcon
              name="delete"
              height="15px"
              width="15px"
              colorVariant="danger"
              fill={false}
              stroke={true}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default RdsCompEdition;
