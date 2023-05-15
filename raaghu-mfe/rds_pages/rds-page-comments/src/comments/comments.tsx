import React, { useState, useEffect } from "react";
import { RdsButton, RdsInput } from "../../../../../raaghu-elements/src";
import RdsDatepicker from "../../../../../raaghu-elements/src/rds-datepicker";
import { RdsCompAlertPopup, RdsCompDatatable } from "../../../rds-components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import {
  deleteComment,
  getAllComments,
  getCommentById,
} from "../../../../libs/state-management/comments/comments-slice";

const Comments = () => {
  const tableHeaders = [
    {
      displayName: "Username",
      key: "username",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "Entity Type",
      key: "entityType",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "Text",
      key: "text",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
    {
      displayName: "Creation Time",
      key: "creationTime",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: false,
    },
  ];

  const [actions, setActions] = useState([
    { id: "edit", displayName: "Edit", offId: "comments-edit-off" },
    { id: "delete", displayName: "Delete", modalId: "comments-delete-off" },
  ]);

  // Use States ================
  const [tableData, setTableData] = useState([]);
  const [filterUserName, setFilterUserName] = useState("");
  const [filterEntityType, setFilterEntityType] = useState("");

  // dispatch and selectores for API calling ===============
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.persistedReducer.comments);

  useEffect(() => {
    const data = {
      entityType: undefined,
      test: undefined,
      repliedCommentId: undefined,
      author: undefined,
      creationStartDate: undefined,
      creationEndDate: undefined,
      sorting: undefined,
      skipCount: 0,
      maxResultCount: 1000,
      cancelToken: undefined,
    };
    dispatch(getAllComments(data));
  }, [dispatch]);

  useEffect(() => {
    if (comments.allComments) {
      const newcomments = comments.allComments?.items?.map((res: any) => ({
        id: res.id,
        username: res.author.username,
        entityType: res.entityType,
        text: res.text,
        creationTime: res.creationTime.toString(),
      }));
      setTableData(newcomments);
    }
  }, [comments.allComments]);

  useEffect(() => {
    if (comments.comment) {
    }
  }, [comments.comment]);

  // Functions ========================
  function onActionSelection(data: any, actionId: any): void {
    const item = { id: data.id, cancelToken: undefined };
    actionId === "edit"
      ? dispatch(getCommentById(item))
      : dispatch(deleteComment(item));
  }

  // On Filter Start Date Selection
  function onStartDateSelection(start: any): void {}

  // On Filter Start Date Selection
  function onEndDateSelection(end: any): void {}

  // on Filter UserName
  function onFilterUsername(event: any): void {
    setFilterUserName(event.target.value);
  }

  // on Filter Entity Type
  function onFilterEntityType(event: any) {
    setFilterEntityType(event.target.value);
  }

  // Search
  function searchByInputValues(event: any) {
    event.preventDefault();
  }

  // On Delete Confirmation
  function confirmDelete() {}

  // DOM
  return (
    <>
      <div className="container-fluid m-0 p-0">
        <div className="card p-3 h-100 border-0 rounded-0 card-full-stretch-wthlabel mt-3">
          <div className="row mb-4">
            <div className="col-xxl-11 col-xl-11 col-lg-12 col-12 mb-xxl-0 mb-xl-0 mb-lg-3 mb-0">
              <div className="row">
                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12 mb-3">
                  <RdsDatepicker
                    DatePickerLabel="Select Start Date"
                    type="advanced"
                    onDatePicker={onStartDateSelection}
                  ></RdsDatepicker>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12 mb-3">
                  <RdsDatepicker
                    DatePickerLabel="Select End Date"
                    type="advanced"
                    onDatePicker={onEndDateSelection}
                  ></RdsDatepicker>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12 mb-3">
                  <label className="mb-2">
                    Username
                  </label>
                  <RdsInput
                    inputType="text"
                    value={filterUserName}
                    placeholder={"Enter Username"}
                    onChange={(event) => onFilterUsername(event)}
                  ></RdsInput>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-12 mb-3">
                  <label className="mb-2">
                    Entity Type
                  </label>
                  <RdsInput
                    inputType="text"
                    value={filterEntityType}
                    placeholder={"Enter Entity Type"}
                    onChange={(event) => onFilterEntityType(event)}
                  ></RdsInput>
                </div>
              </div>
            </div>
            <div className="col-xxl-1 col-xl-1 col-lg-6 col-md-6 col-12 d-flex align-items-end mb-3">
              <RdsButton
                colorVariant="primary"
                icon={"search"}
                type={"submit"}
                iconWidth={"16px"}
                iconHeight={"20px"}
                onClick={(event) => searchByInputValues(event)}
                class="btn-icon"
                block={true}
              ></RdsButton>
            </div>
          </div>
          <RdsCompDatatable
            actionPosition="right"
            tableHeaders={tableHeaders}
            tableData={tableData}
            pagination={false}
            actions={actions}
            onActionSelection={onActionSelection}
            classes="table"
            recordsPerPageSelectListOption={true}
            recordsPerPage={5}
            noDataTitle={"No Comments Available"}
          ></RdsCompDatatable>
        </div>
      </div>
      <RdsCompAlertPopup alertID="delete" onSuccess={confirmDelete} />
    </>
  );
};

export default Comments;
