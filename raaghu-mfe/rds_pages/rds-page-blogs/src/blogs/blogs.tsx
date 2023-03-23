import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RdsCompDatatable, RdsCompApiResourceBasic, RdsCompClaim, RdsCompAlertPopup } from "../../../rds-components";
import {
  RdsBadge,
  RdsInput,
  RdsButton,
  RdsOffcanvas,
  RdsNavtabs,
  RdsSearch,
  RdsCheckbox,
} from "../../../../../raaghu-elements/src";

interface RdsPageResourcesProps { }

const Blogs = (props: RdsPageResourcesProps) => {
  const { t } = useTranslation();
  //const [resourceData, setResourceData] = useState<any[]>([{}]);
  const [newResourceData, setnewResourceData] = useState({
    name: "",
    displayName: "",
    description: "",
    accessTokenSigningAlgorithm: ""
  });

  const [tableDataid, setTableDataRowId] = useState(0);
  const [activeNavTabId, setActiveNavTabId] = useState();
  const [activeNavTabIdEdit, setActiveNavTabIdEdit] = useState();

  const scopeSelection = (rowData: any, actionId: any) => {
    setTableDataRowId(rowData.id)
    //dispatch(editScopeshData(rowData.id) as any);
  };

  const tableHeaders = [
    {
      displayName: t("Name"),
      key: "name",
      datatype: "text",
      sortable: false,
    },
    {
      displayName: t("Slug"),
      key: "slug",
      datatype: "text",
      sortable: false,
    },
  ];

  const actions = [
    { id: "edit", displayName: "Edit", offId: "blogs-edit-off" },
    { id: "features", displayName: "Features", offId: "features" },
    { id: "delete", displayName: "Delete", modalId: "blogs_delete_off" },
  ];

  const resourceData = [
    {
      "id": 1,
      "name": "Standard",
      "slug": "test123",
    },
    {
      "id": 2,
      "name": "Basic",
      "slug": "test89",
    },
    {
      "id": 3,
      "name": "Premium",
      "slug": "test652",
    },

  ]

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    displayName: "",
    enabled: false,
    required: false,
    emphasize: false,
    showInDiscoveryDocument: false,
  });

  const offCanvasHandler = () => {

  };

  const success = () => {
    // dispatch(deleteScopeshData(tableDataid) as any).then((res: any) => { dispatch(fetchScopeshData() as any); });
    // setShowAlert({color:true,show:true,message:"Scope Deleted Successfully"})
  };

  function handleEnabled(event: any) {
    setFormData({ ...formData, enabled: event });
  }
  function handleRequired(event:any){
	setFormData({ ...formData, required: event });
  }
  function handleEmphasize(event:any){
	setFormData({ ...formData, emphasize: event });
  }
  function handleShowInDiscovery(event:any){
	setFormData({ ...formData, showInDiscoveryDocument: event });
  }


  return (
    <div>

      <div className="row align-items-center">
        <div className="d-flex justify-content-between">
          <h4>Blogs</h4>
          <div className="d-flex justify-content-end">
            <RdsOffcanvas
              canvasTitle={("New Blog")}
              onclick={offCanvasHandler}
              placement="end"
              offcanvaswidth={550}
              offcanvasbutton={
                <div>
                  <RdsButton
                    icon="plus"
                    label={("New Blog") || ""}
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
              offId={"client"}
            >
              <div>
                <div className="pt-3">
                  <RdsInput
                    size="medium"
                    inputType="text"
                    placeholder="Add Name"
                    label="Name"
                    labelPositon="top"
                    id=""
                    //value={value}
                    required={true}
                  // onChange={(e) => {
                  //   setValue(e.target.value);
                  // }}
                  ></RdsInput>
                  <RdsInput
                    size="medium"
                    inputType="text"
                    placeholder="Add Slug"
                    label="Slug"
                    labelPositon="top"
                    id=""
                    //value={value}
                    required={true}
                  // onChange={(e) => {
                  //   setValue(e.target.value);
                  // }}
                  ></RdsInput>
                  <div className="d-flex footer-buttons mb-3">
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
                      //isDisabled={value === ""}
                      colorVariant="primary"
                      class="me-2"
                    //onClick={addDataHandler}
                    ></RdsButton>
                  </div>
                </div>
              </div>
            </RdsOffcanvas>
          </div>
        </div>

      </div>
      <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <RdsCompDatatable
          tableHeaders={tableHeaders}
          actions={actions}
          tableData={resourceData}
          pagination={true}
          recordsPerPage={10}
          recordsPerPageSelectListOption={true}
          onActionSelection={scopeSelection}
        ></RdsCompDatatable>


        <RdsOffcanvas
          backDrop={true}
          preventEscapeKey={true}
          scrolling={false}
          offId="blogs-edit-off"
          placement="end"
          canvasTitle="Edit Blog"
          offcanvaswidth={550}
          children={
            <>
              <RdsInput
                    size="medium"
                    inputType="text"
                    placeholder="Add Name"
                    label="Name"
                    labelPositon="top"
                    id=""
                    //value={value}
                    required={true}
                  // onChange={(e) => {
                  //   setValue(e.target.value);
                  // }}
                  ></RdsInput>
                  <RdsInput
                    size="medium"
                    inputType="text"
                    placeholder="Add Slug"
                    label="Slug"
                    labelPositon="top"
                    id=""
                    //value={value}
                    required={true}
                  // onChange={(e) => {
                  //   setValue(e.target.value);
                  // }}
                  ></RdsInput>
                  
                  <div className="d-flex footer-buttons mb-3">
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
                      //isDisabled={value === ""}
                      colorVariant="primary"
                      class="me-2"
                    //onClick={addDataHandler}
                    ></RdsButton>
                  </div>
            </>
          }
        ></RdsOffcanvas>

        <RdsOffcanvas
          backDrop={true}
          preventEscapeKey={true}
          scrolling={false}
          offId="features"
          placement="end"
          canvasTitle="Features"
          offcanvaswidth={550}
          children={
            <>
              <div className=" mb-4">
            <RdsCheckbox
              id="0"
              label="Comments"
              checked={formData.enabled}
              onChange={(e) => {
                handleEnabled(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
		  <div className=" mb-4">
            <RdsCheckbox
              id="1"
              label="Reactions"
              checked={formData.required}
              onChange={(e) => {
                handleRequired(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
		  <div className=" mb-4">
            <RdsCheckbox
              id="2"
              label="Ratings"
              checked={formData.emphasize}
              onChange={(e) => {
                handleEmphasize(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
		  <div className=" mb-4">
            <RdsCheckbox
              id="3"
              label="Tags"
              checked={formData.showInDiscoveryDocument}
              onChange={(e) => {
                handleShowInDiscovery(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
          <div className=" mb-4">
            <RdsCheckbox
              id="4"
              label="Quick navigation bar in blog posts"
              checked={formData.showInDiscoveryDocument}
              onChange={(e) => {
                handleShowInDiscovery(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
          <div className="d-flex footer-buttons mb-3">
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
                      //isDisabled={value === ""}
                      colorVariant="primary"
                      class="me-2"
                    //onClick={addDataHandler}
                    ></RdsButton>
                  </div>
            </>
          }
        ></RdsOffcanvas>

        <RdsCompAlertPopup
          alertID="blogs_delete_off"
          messageAlert="The selected Resource will be Deleted Permanently "
          alertConfirmation="Are you sure"
          deleteButtonLabel="Yes"
          onSuccess={success}
        />


        {/* <RdsOffcanvas
            backDrop={true}
            preventEscapeKey={true}
            scrolling={false}
            offId="features"
            placement="end"
            canvasTitle="Edit"
            offcanvaswidth={550}
            children={
              <>
              hii
              </>
            }></RdsOffcanvas> */}


      </div>

    </div>
  );
};

export default Blogs;
