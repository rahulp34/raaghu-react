import React, { useState, useEffect } from "react";
import { RdsButton, RdsInput, RdsLabel, RdsOffcanvas, RdsTextArea } from "../../../../../raaghu-elements/src";
import { useAppDispatch, useAppSelector } from "../../../../libs/state-management/hooks";
// import { RdsButton, RdsLabel, RdsOffcanvas, RdsSelectList, RdsTextArea } from "../rds-elements";
import { getAllBlogs } from "../../../../libs/state-management/blogger/blogger-slice";
import { RdsCompDatatable } from "../../../rds-components";

const Blogger = () => {
  const tableHeaders = [
    { displayName: "Name", key: "name", datatype: "text", dataLength: 30, required: true, sortable: false },
    { displayName: "Short Name", key: "shortName", datatype: "text", dataLength: 30, required: true, sortable: false },
    { displayName: "Description", key: "description", datatype: "text", dataLength: 30, required: true, sortable: false },
    { displayName: "Creation Time", key: "creationTime", datatype: "text", dataLength: 30, required: true, sortable: false },
  ];
  const actions = [
    { id: "edit", displayName: "Edit", offId: "blog" },
    { id: "delete", displayName: "Delete", offId: "Delete" },
  ];

  const [tableData, setTableData] = useState([
    { id: 1, name: 'Test', shortName: 'Test Short', description: 'Description text', creationTime: '01/01/2023' }
  ]);

  const [canvasTitle, setCanvasTitle] = useState('Create New Blog');
  const [saveBtnLabel, setSaveBtnLabel] = useState('Save');

  const dispatch = useAppDispatch();
  const blogs = useAppSelector((state) => state.persistedReducer.blogger);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  useEffect(() => {
    if (blogs.allblogs.items) {
      setTableData(blogs.allblogs.items);
    }
  }, [blogs])



  function createBlogFn(event: any) {
    setCanvasTitle('Create New Blog');
    setSaveBtnLabel('Save');
  }

  function onActionSelection(data: any, actionId: any) {
    if (actionId === 'edit') {
      setCanvasTitle('Edit Blog');
      setSaveBtnLabel('Update');
    } else {

    }
  }

  return (
    <>
      <div className="row">
        <div className="d-flex justify-content-end ">
          <RdsOffcanvas canvasTitle={canvasTitle} placement="end" offcanvaswidth={650}
            offcanvasbutton={
              <div className="d-flex justify-content-end">
                <RdsButton icon="plus" label={"Create a new blog"} iconColorVariant="light" iconHeight="15px" iconWidth="15px"
                  iconFill={false} iconStroke={true} block={false} size="small" type="button" colorVariant="primary" onClick={createBlogFn}>
                </RdsButton>
              </div>
            }
            backDrop={false} scrolling={false} preventEscapeKey={false} offId={"blog"}>
            <form>
              <div className="form-group">
                <RdsInput
                  inputType="text"
                  required={true}
                  label={"Name"}
                  value={''}
                  placeholder={"Enter Name"}
                ></RdsInput>
              </div>
              <div className="form-group">
                <RdsInput
                  inputType="text"
                  required={true}
                  label={"Short Name"}
                  value={''}
                  placeholder={"Enter Short Name"}
                ></RdsInput>
              </div>
              <div className="form-group">
                <RdsTextArea placeholder={"Enter Description"} label={'Description'} isRequired={true} required={true}
                  rows={4}></RdsTextArea>
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
                ></RdsButton>
                <RdsButton
                  class="me-2"
                  label={saveBtnLabel}
                  size="small"
                  colorVariant="primary"
                  tooltipTitle={""}
                  type={"submit"}
                  databsdismiss="offcanvas"
                ></RdsButton>
              </div>
            </form>
          </RdsOffcanvas>
        </div>
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
          <RdsCompDatatable tableHeaders={tableHeaders} tableData={tableData} pagination={false} actions={actions}
            onActionSelection={onActionSelection} classes="table" recordsPerPageSelectListOption={true}
            recordsPerPage={5} noDataTitle={'No Blogs Available'}></RdsCompDatatable>
        </div>
      </div>
    </>




  );
};

export default Blogger;
