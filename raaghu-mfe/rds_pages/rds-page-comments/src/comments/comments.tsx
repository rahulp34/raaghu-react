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
    { id: "edit", displayName: "Edit", offId: "paymentPlans" },
    { id: "delete", displayName: "Delete", modalId: "delete" },
  ]);

  // Use States ================
  const [tableData, setTableData] = useState([
    {
      username: "Test",
      entityType: "test entity",
      text: "test Text",
      creationTime: "21/03/2023",
    },
  ]);
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
      comments.allComments.items.map((res: any) => ({
        id: res.id,
        username: res.author.username,
        entityType: res.entityType,
        text: res.text,
        creationTime: res.creationTime.toString(),
      }));
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
      <div className="row">
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
          <form>
            <div className="d-flex justify-content-between">
              <div className="form-group me-2">
                <RdsDatepicker
                  DatePickerLabel="Select Start Date"
                  type="advanced"
                  onDatePicker={onStartDateSelection}
                ></RdsDatepicker>
              </div>
              <div className="form-group me-2">
                <RdsDatepicker
                  DatePickerLabel="Select End Date"
                  type="advanced"
                  onDatePicker={onEndDateSelection}
                ></RdsDatepicker>
              </div>
              <div className="form-group me-2">
                <RdsInput
                  inputType="text"
                  label={"Username"}
                  value={filterUserName}
                  placeholder={"Enter Username"}
                  onChange={(event) => onFilterUsername(event)}
                ></RdsInput>
              </div>
              <div className="form-group me-2">
                <RdsInput
                  inputType="text"
                  label={"Entity Type"}
                  value={filterEntityType}
                  placeholder={"Enter Entity Type"}
                  onChange={(event) => onFilterEntityType(event)}
                ></RdsInput>
              </div>
              <div className="form-group d-flex align-items-end">
                <div>
                  <RdsButton
                    colorVariant="primary"
                    icon={"search"}
                    type={"submit"}
                    iconWidth={"16px"}
                    iconHeight={"20px"}
                    onClick={(event) => searchByInputValues(event)}
                  ></RdsButton>
                </div>
              </div>
            </div>
          </form>
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
