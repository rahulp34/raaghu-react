import React, { useState, useEffect } from "react";
import {
  RdsButton,
  RdsAlert,
  RdsInput,
  RdsLabel,
  RdsOffcanvas,
  RdsSelectList,
  RdsTextArea,
} from "../../../../../raaghu-elements/src";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
// import { RdsButton, RdsLabel, RdsOffcanvas, RdsSelectList, RdsTextArea } from "../rds-elements";
import { RdsCompAlertPopup, RdsCompDatatable } from "../../../rds-components";
import {
  createTag,
  deleteTag,
  getAllTags,
  getTagById,
  updateTag,
} from "../../../../libs/state-management/tags/tags-slice";

const Tags = () => {
  // Use States ================
  const [tableData, setTableData] = useState([]);
  const [Alert, setAlert] = useState({ show: false, message: "", color: "" });
  const [canvasTitle, setCanvasTitle] = useState("Create New tags");
  const [tagsObj, setTagsObj] = useState({
    id: "",
    entityType: "",
    name: "",
    concurrencyStamp: "",
  });
  const [tagsId, setTagsId] = useState("");
  const [entityTypeList, setEntityTypeList] = useState([
    { id: 1, value: "BlogPost", option: "BlogPost" },
  ]);
  const [isEdit, setIsEdit] = useState(false);
  // Constants / Variables =============
  const tableHeaders = [
    {
      displayName: "Entity Type",
      key: "entityType",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "Name",
      key: "name",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
  ];
  const actions = [
    { id: "edit", displayName: "Edit", offId: "tag-edit-off" },
    { id: "delete", displayName: "Delete", modalId: "tag-delete-off" },
  ];
  const recordsPerPage: number = 10;

  const getAllParameters = {
    filter: undefined,
    sorting: undefined,
    skipCount: 0,
    maxResultCount: 1000,
  };

  // dispatch and selectores for API calling ===============
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.persistedReducer.tags);

  // Use Effects ==================
  useEffect(() => {
    dispatch(getAllTags(getAllParameters));
  }, [dispatch]);

  useEffect(() => {
    if (tags.allTags.items) {
      const data = tags.allTags.items.map((tag: any) => ({
        id: tag.id,
        entityType: tag.entityType,
        name: tag.name,
        concurrencyStamp: tag.concurrencyStamp,
      }));
      setTableData(data);
    }
  }, [tags.allTags]);

  useEffect(() => {
    if (tags.tag) {
      setTagsObj({
        id: tags.tag.id,
        name: tags.tag.name,
        entityType: tags.tag.entityType,
        concurrencyStamp: tags.tag.concurrencyStamp,
      });
    }
  }, [tags.tag]);

  // Functions ================
  // Create new tags
  function createTagFn(event: any) {
    setIsEdit(false);
    setTagsObj({ id: "", entityType: "", name: "", concurrencyStamp: "" });
    setCanvasTitle("New");
  }

  // On action selection from data table
  function onActionSelection(data: any, actionId: any) {
    setTagsId(data.id);
    if (actionId === "edit") {
      setIsEdit(true);
      setCanvasTitle("Edit");
      dispatch(getTagById({ id: data.id }));
    }
  }

  // Save / Update tags
  function saveUpdateTags(event: any) {
    event.preventDefault();
    isEdit
      ? dispatch(
          updateTag({
            id: tagsObj.id,
            body: { name: tagsObj.name },
          })
        ).then((res: any) => {
          if (res.type == "Tags/UpdateTag/rejected") {
            setAlert({
              ...Alert,
              show: true,
              message: "your request has been denied",
              color: "danger",
            });
          } else {
            setAlert({
              ...Alert,
              show: true,
              message: "Tag updated Successfully",
              color: "success",
            });
          }
          dispatch(getAllTags(getAllParameters));
        })
      : dispatch(
          createTag({
            body: {
              entityType: tagsObj.entityType,
              name: tagsObj.name,
            },
          })
        ).then((res: any) => {
          if (res.type == "Tags/createTag/rejected") {
            setAlert({
              ...Alert,
              show: true,
              message: "your request has been denied",
              color: "danger",
            });
          } else {
            setAlert({
              ...Alert,
              show: true,
              message: "Tag added Successfully",
              color: "success",
            });
          }
          dispatch(getAllTags(getAllParameters));
        });
    setTagsObj({ id: "", entityType: "", name: "", concurrencyStamp: "" });
    setTagsId("");
    setCanvasTitle("");
    setIsEdit(false);
  }

  // Delete tags confirmation popup
  function confirmDelete() {
    const item = { id: tagsId };
    dispatch(deleteTag(item)).then((res: any) => {
      if (res.type == "Tags/deleteTag/rejected") {
        setAlert({
          ...Alert,
          show: true,
          message: "your request has been denied",
          color: "danger",
        });
      } else {
        setAlert({
          ...Alert,
          show: true,
          message: "Tag deleted Successfully",
          color: "success",
        });
      }
      dispatch(getAllTags(getAllParameters));
    });
    setIsEdit(false);
  }
  useEffect(() => {
    // Set a 2-second timer to update the state
    const timer = setTimeout(() => {
      setAlert({ ...Alert, show: false });
    }, 2000);

    // Clean up the timer when the component unmounts or when the state changes
    return () => clearTimeout(timer);
  }, [tags]);
  // DOM
  return (
    <div className="container- fluid p-0 m-0">
    <div className="row">
      <div className="col-md-12 mb-3 ">
        <div className="row ">
          <div className="col-md-4">
            {Alert.show && (
              <RdsAlert
                alertmessage={Alert.message}
                colorVariant={Alert.color}
              ></RdsAlert>
            )}
          </div>
          <div className="col-md-8 d-flex justify-content-end ">
            <RdsOffcanvas
              canvasTitle={canvasTitle}
              placement="end"
              offcanvaswidth={650}
              onClose={() =>
                setTagsObj({
                  id: "",
                  entityType: "",
                  name: "",
                  concurrencyStamp: "",
                })
              }
              offcanvasbutton={
                <div className="d-flex justify-content-end my-1">
                  <RdsButton
                    icon="plus"
                    label={"New Tag"}
                    iconColorVariant="light"
                    iconHeight="15px"
                    iconWidth="15px"
                    iconFill={false}
                    iconStroke={true}
                    block={false}
                    size="small"
                    type="button"
                    colorVariant="primary"
                    showLoadingSpinner={true}
                    onClick={createTagFn}
                  ></RdsButton>
                </div>
              }
              backDrop={true}
              scrolling={false}
              preventEscapeKey={false}
              offId="tag-edit-off"
            >
              <form>
                {!isEdit && (
                  <div className="form-group mb-3">
                    <div className="mb-2">
                      <RdsLabel label={"Enitity Type"}></RdsLabel>
                    </div>
                    <RdsSelectList
                      label={"Entity Type"}
                      placeholder={"Entity Type"}
                      selectItems={entityTypeList}
                      selectedValue={tagsObj.entityType}
                      onSelectListChange={(value: any) =>
                        setTagsObj({ ...tagsObj, entityType: value })
                      }
                    ></RdsSelectList>
                  </div>
                )}
                <div className="form-group">
                  <RdsInput
                    inputType="text"
                    required={true}
                    label={"Name"}
                    value={tagsObj.name}
                    placeholder={"Enter Name"}
                    onChange={(event) =>
                      setTagsObj({ ...tagsObj, name: event.target.value })
                    }
                  ></RdsInput>
                </div>
                <div className="footer-buttons mb-2 d-flex">
                  <RdsButton
                    class="me-2"
                    tooltipTitle={""}
                    type={"button"}
                    label="Cancel"
                    colorVariant="outline-primary"
                    size="small"
                    databsdismiss="offcanvas"
                    onClick={() =>
                      setTagsObj({
                        id: "",
                        entityType: "",
                        name: "",
                        concurrencyStamp: "",
                      })
                    }
                  ></RdsButton>
                  <RdsButton
                    class="me-2"
                    isDisabled={!tagsObj.name}
                    label={!isEdit ? "Save" : "Update"}
                    size="small"
                    colorVariant="primary"
                    tooltipTitle={""}
                    type={"submit"}
                    databsdismiss="offcanvas"
                    onClick={(event) => saveUpdateTags(event)}
                  ></RdsButton>
                </div>
              </form>
            </RdsOffcanvas>
          </div>
        </div>
      </div>

      <div className="col-md-12">
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
          <RdsCompDatatable
          actionPosition="right"
            tableHeaders={tableHeaders}
            tableData={tableData}
            pagination={tableHeaders.length > recordsPerPage}
            actions={actions}
            onActionSelection={onActionSelection}
            classes="table"
            recordsPerPageSelectListOption={true}
            recordsPerPage={recordsPerPage}
            noDataTitle={"No Tags Available"}
          ></RdsCompDatatable>
          <RdsCompAlertPopup
            alertID="tag-delete-off"
            onSuccess={confirmDelete} //cancelButtonColor="danger" deleteButtonColor="danger"
          />
        </div>
      </div>
    </div></div>
  );
};

export default Tags;
