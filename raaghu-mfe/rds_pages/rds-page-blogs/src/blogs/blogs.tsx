import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RdsCompDatatable, RdsCompAlertPopup } from "../../../rds-components";
import {
  RdsInput,
  RdsButton,
  RdsOffcanvas,
  RdsCheckbox,
  RdsAlert,
} from "../../../rds-elements";
import {
  addBlogsData,
  editBlogsData,
  fetchBlogsData,
} from "../../../../libs/state-management/Blogs/blogs-slice";
import { useAppDispatch } from "../../../../libs/state-management/hooks";

interface RdsPageResourcesProps {}

const Blogs = (props: RdsPageResourcesProps) => {
  const { t } = useTranslation();
  const [blogsData, setResourceData] = useState<any>([]);

  const [value, setValue] = useState("");
  const [alertOne, setAlertOne] = useState(false);
  const [alert, setAlert] = useState({
    showAlert: false,
    message: "",
    success: false,
  });
  const [tableDataRowid, setTableDataRowId] = useState(0);

  const editDataHandler = () => {
    const dTo = {
      displayName: value,
    };
    dispatch(editBlogsData({ id: tableDataRowid, dTo: dTo }) as any).then(
      (res: any) => {
        dispatch(fetchBlogsData() as any);
      }
    );
    setValue("");
    setAlertOne(true);
  };

  const [newResourceData, setnewResourceData] = useState({
    name: "",
    displayName: "",
    description: "",
    accessTokenSigningAlgorithm: "",
  });

  const [activeNavTabId, setActiveNavTabId] = useState();
  const [activeNavTabIdEdit, setActiveNavTabIdEdit] = useState();

  const scopeSelection = (rowData: any, actionId: any) => {
    setTableDataRowId(rowData.id);
    //dispatch(editScopeshData(rowData.id) as any);
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBlogsData() as any);
  }, [dispatch]);

  const onActionSelection = (rowData: any, actionId: any) => {
    setTableDataRowId(rowData.id);
    setValue(rowData.name);
    if (actionId === "edit") {
      dispatch(fetchBlogsData() as any);
    }
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
    { id: "features", displayName: "Features", offId: "blogs-features" },
    { id: "delete", displayName: "Delete", modalId: "blogs-delete-off" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    displayName: "",
    enabled: false,
    required: false,
    emphasize: false,
    showInDiscoveryDocument: false,
  });

  const offCanvasHandler = () => {};

  const success = () => {
    // dispatch(deleteScopeshData(tableDataid) as any).then((res: any) => { dispatch(fetchScopeshData() as any); });
    // setShowAlert({color:true,show:true,message:"Scope Deleted Successfully"})
  };

  const dTo = {
    displayName: value,
  };
  const addDataHandler = () => {
    dispatch(addBlogsData(dTo) as any).then((res: any) => {
      dispatch(fetchBlogsData() as any);
    });
    setValue("");
    setAlertOne(true);
  };

  function handleEnabled(event: any) {
    setFormData({ ...formData, enabled: event });
  }
  function handleRequired(event: any) {
    setFormData({ ...formData, required: event });
  }
  function handleEmphasize(event: any) {
    setFormData({ ...formData, emphasize: event });
  }
  function handleShowInDiscovery(event: any) {
    setFormData({ ...formData, showInDiscoveryDocument: event });
  }

  return (
    <div className="container-fluid p-0 m-0">
      <div className="row"><div className="col-md-12">
        <div className="d-flex justify-content-between">
          <div className="col-lg-8 col-md-8">
            {alert.showAlert && alertOne && (
              <RdsAlert
                alertmessage={alert.message}
                colorVariant={alert.success ? "success" : "danger"}
                style={{ marginBottom: "0" }}
              ></RdsAlert>
            )}
          </div>
          <div className="d-flex justify-content-end">
            <RdsOffcanvas
              canvasTitle={"New Blog"}
              onclick={offCanvasHandler}
              placement="end"
              offcanvasbutton={
                <div>
                  <RdsButton
                    icon="plus"
                    label={"New Blog" || ""}
                    iconColorVariant="light"
                    iconHeight="15px"
                    iconWidth="15px"
                    iconFill={false}
                    iconStroke={true}
                    block={false}
                    size="small"
                    type="button"
                    showLoadingSpinner={false}
                    colorVariant="primary"
                  ></RdsButton>
                </div>
              }
              backDrop={false}
              scrolling={false}
              preventEscapeKey={false}
              offId={"blog-add-off"}
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
                    value={value}
                    required={true}
                    onChange={(e: any) => {
                      setValue(e.target.value);
                    }}
                  ></RdsInput>
                  <RdsInput
                    size="medium"
                    inputType="text"
                    placeholder="Add Slug"
                    label="Slug"
                    labelPositon="top"
                    id=""
                    value={value}
                    required={true}
                    onChange={(e: any) => {
                      setValue(e.target.value);
                    }}
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
                      isDisabled={value === ""}
                      colorVariant="primary"
                      class="me-2"
                      showLoadingSpinner={true}
                      onClick={addDataHandler}
                    ></RdsButton>
                  </div>
                </div>
              </div>
            </RdsOffcanvas>
          </div>
        </div></div>
      </div>
      <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <RdsCompDatatable
          actionPosition="right"
          tableHeaders={tableHeaders}
          actions={actions}
          tableData={blogsData}
          pagination={true}
          recordsPerPage={10}
          recordsPerPageSelectListOption={true}
          onActionSelection={onActionSelection}
        ></RdsCompDatatable>

        <RdsOffcanvas
          backDrop={true}
          preventEscapeKey={true}
          scrolling={false}
          offId="blogs-edit-off"
          placement="end"
          canvasTitle="Edit Blog"
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
                // onChange={(e: any) => {
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
                // onChange={(e: any) => {
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
                  showLoadingSpinner={true}
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
          offId="blogs-features"
          placement="end"
          canvasTitle="Features"
          children={
            <>
              <div className=" mb-4">
                <RdsCheckbox
                  id="0"
                  label="Comments"
                  checked={formData.enabled}
                  onChange={(e: any) => {
                    handleEnabled(e.target.checked);
                  }}
                ></RdsCheckbox>
              </div>
              <div className=" mb-4">
                <RdsCheckbox
                  id="1"
                  label="Reactions"
                  checked={formData.required}
                  onChange={(e: any) => {
                    handleRequired(e.target.checked);
                  }}
                ></RdsCheckbox>
              </div>
              <div className=" mb-4">
                <RdsCheckbox
                  id="2"
                  label="Ratings"
                  checked={formData.emphasize}
                  onChange={(e: any) => {
                    handleEmphasize(e.target.checked);
                  }}
                ></RdsCheckbox>
              </div>
              <div className=" mb-4">
                <RdsCheckbox
                  id="3"
                  label="Tags"
                  checked={formData.showInDiscoveryDocument}
                  onChange={(e: any) => {
                    handleShowInDiscovery(e.target.checked);
                  }}
                ></RdsCheckbox>
              </div>
              <div className=" mb-4">
                <RdsCheckbox
                  id="4"
                  label="Quick navigation bar in blog posts"
                  checked={formData.showInDiscoveryDocument}
                  onChange={(e: any) => {
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
          alertID="blogs-delete-off"
          messageAlert="The selected Resource will be Deleted Permanently "
          alertConfirmation="Are you sure"
          deleteButtonLabel="Yes"
          onSuccess={success}
        />
      </div>
    </div>
  );
};

export default Blogs;
