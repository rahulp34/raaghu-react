import React, { useState } from "react";
import {
  RdsCompDatatable,
} from "../../../rds-components";
import {
  RdsButton,
  RdsCheckbox,
  RdsNavtabs,
  RdsOffcanvas,
} from "../../../rds-elements";

const TextTemplate = () => {

  const tableHeaders = [
    { displayName: "Template Name", key: "name", datatype: "text", dataLength: 30, required: true, sortable: true },
    { displayName: "Inline Localized", key: "isInlineLocalized", datatype: "text", dataLength: 30, required: true, sortable: true },
    { displayName: "Layout Status", key: "isLayout", datatype: "text", dataLength: 30, required: true, sortable: true },
    { displayName: "Layout Details", key: "layout", datatype: "text", dataLength: 30, required: true, sortable: true },
    { displayName: "Default Culture Name", key: "defaultCultureName", datatype: "text", dataLength: 30, required: true, sortable: true },
  ];

  const actions = [
    { id: "edit", displayName: "Edit" },
  ];

  const tableData = [
    { defaultCultureName: null, displayName: "Default email layout template", isInlineLocalized: true, isLayout: true, layout: null, name: "Abp.StandardEmailTemplates.Layout" }
  ];


  return (
    <div className="row">
      <div className="col-md-12 mb-3">
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
          <RdsCompDatatable tableHeaders={tableHeaders} tableData={tableData} pagination={false} actions={actions}></RdsCompDatatable>
        </div>
      </div>
    </div>
  );
};

export default TextTemplate;
