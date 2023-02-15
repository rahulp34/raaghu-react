import React from "react";
import { RdsCompNewClaimType, RdsCompDatatable, RdsCompAlertPopup } from "../../../rds-components";
import { RdsOffcanvas, RdsButton, RdsIcon } from "../../../rds-elements";
import { useTranslation } from "react-i18next";

const ClaimType = () => {
  const { t } = useTranslation();
  const offCanvasHandler = () => {};

  const tableHeaders = [
    {
      displayName: t("Name"),
      key: "name",
      datatype: "text",
    },
    {
      displayName: t("Value Type"),
      key: "value",
      datatype: "text",
    },
    {
      displayName: t("Description"),
      key: "description",
      datatype: "text",
    },
    {
      displayName: t("Regex"),
      key: "regex",
      datatype: "text",
    },
    {
      displayName: t("Required"),
      key: "icon",
      datatype: "children",
    },
  ];

  const tableData = [
    {
      id: 1,
      name: "User Id",
      value: "Your Id",
      description: "Associate",
      regex: "Test_Employer",
      icon: (
        <div style={{ strokeWidth: "3px" }}>
          <RdsIcon
            name="check"
            height="17px"
            width="15px"
            colorVariant="success"
          />
        </div>
      ),
    },
    {
      id: 2,
      name: "On_Request",
      value: "Boolean",
      description: "Has to request",
      regex: "New_Request",
      icon: (
        <div style={{ strokeWidth: "3px" }}>
          <RdsIcon
            name="check"
            height="17px"
            width="15px"
            colorVariant="success"
          />
        </div>
      ),
    },
    {
      id: 3,
      name: "Family_name",
      value: "String",
      description: "List of names to get",
      regex: "String_Value",
      icon: (
        <div style={{ strokeWidth: "3px" }}>
          <RdsIcon
            name="check"
            height="17px"
            width="15px"
            colorVariant="success"
          />
        </div>
      ),
    },
    {
      id: 4,
      name: "Tree_View",
      value: "String",
      description: "Structure to show parent child",
      regex: "Tree_Value",
      icon: (
        <div style={{ strokeWidth: "3px" }}>
          <RdsIcon
            name="cancel"
            height="17px"
            width="15px"
            colorVariant="danger"
          />
        </div>
      ),
    },
    {
      id: 5,
      name: "On_Request",
      value: "Boolean",
      description: "Has to request",
      regex: "New_Request",
      icon: (
        <div style={{ strokeWidth: "3px" }}>
          <RdsIcon
            name="check"
            height="17px"
            width="15px"
            colorVariant="success"
          />
        </div>
      ),
    },
    {
      id: 6,
      name: "Family_name",
      value: "String",
      description: "List of names to get",
      regex: "String_value",
      icon: (
        <div style={{ strokeWidth: "3px" }}>
          <RdsIcon
            name="check"
            height="17px"
            width="15px"
            colorVariant="success"
          />
        </div>
      ),
    },
    {
      id: 7,
      name: "Tree_View",
      value: "String",
      description: "Structure to show parent child",
      regex: "Tree_Value",
      icon: (
        <div style={{ strokeWidth: "3px" }}>
          <RdsIcon
            name="cancel"
            height="17px"
            width="15px"
            colorVariant="danger"
          />
        </div>
      ),
    },
  ];
  const actions = [
    { id: "delete", displayName: "Delete", modalId: "dynamic_delete_off" },
  ];

  return (
    <div className="card p-3 h-100 border-0 rounded-0 card-full-stretch mt-3">
      <div className="d-flex justify-content-between">
        <div className="h5">Claim Type</div>
        <div>
          <RdsOffcanvas
            canvasTitle={t("New Claim Type")}
            onclick={offCanvasHandler}
            placement="end"
            offcanvaswidth={600}
            offcanvasbutton={
              <div className="d-flex justify-content-end">
                <RdsButton
                  icon="plus"
                  label={t("New Claim Type") || ""}
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
            backDrop={false}
            scrolling={false}
            preventEscapeKey={false}
            offId={"tenant"}
          >
            <RdsCompNewClaimType></RdsCompNewClaimType>
          </RdsOffcanvas>
        </div>
      </div>
      <div>
        <RdsCompDatatable
          tableHeaders={tableHeaders}
          actions={actions}
          tableData={tableData!}
          pagination={true}
          recordsPerPage={10}
          recordsPerPageSelectListOption={true}
        ></RdsCompDatatable>
        <RdsCompAlertPopup
          alertID="dynamic_delete_off"
        />
      </div>
    </div>
  );
};

export default ClaimType;
