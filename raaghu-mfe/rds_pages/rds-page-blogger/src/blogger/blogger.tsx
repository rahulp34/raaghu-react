import React, { useState, useEffect } from "react";
import { RdsButton, RdsInput, RdsLabel, RdsOffcanvas, RdsTextArea } from "../../../../../raaghu-elements/src";
import { useAppDispatch, useAppSelector } from "../../../../libs/state-management/hooks";
// import { RdsButton, RdsLabel, RdsOffcanvas, RdsSelectList, RdsTextArea } from "../rds-elements";
import { clearCache, createNewBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from "../../../../libs/state-management/blogger/blogger-slice";
import { RdsCompAlertPopup, RdsCompDatatable } from "../../../rds-components";

const Blogger = () => {

  // Constants / Variables =============
  const tableHeaders = [
    { displayName: "Name", key: "name", datatype: "text", dataLength: 30, required: true, sortable: false },
    { displayName: "Short Name", key: "shortName", datatype: "text", dataLength: 30, required: true, sortable: false },
    { displayName: "Description", key: "description", datatype: "text", dataLength: 30, required: true, sortable: false },
    { displayName: "Creation Time", key: "creationTime", datatype: "text", dataLength: 30, required: true, sortable: false },
  ];
  const actions = [
    { id: "edit", displayName: "Edit", offId: "blog" },
    { id: "delete", displayName: "Delete", modalId: "delete" },
    { id: "clearCache", displayName: "Clear Cache", modalId: "clearCache" },
  ];

  // Use States ================
  const [tableData, setTableData] = useState([]);
  const [canvasTitle, setCanvasTitle] = useState('Create New Blog');
  const [blogObj, setBlogObj] = useState({
    name: '',
    shortName: '',
    description: '',
    concurrencyStamp: ''
  });
  const [blogId, setBlogId] = useState('');

  // dispatch and selectores for API calling ===============
  const dispatch = useAppDispatch();
  const blogs = useAppSelector((state) => state.persistedReducer.blogger);

  // Use Effects ==================
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  // Get all alogs API
  useEffect(() => {
    if (blogs.allblogs.items) {
      const allData = blogs.allblogs.items.map((blog: any) => {
        const creationTimeFormat = new Date(blog.creationTime);
        const gethours = parseInt(creationTimeFormat.getHours().toString());
        const timeFormat = gethours > 12 ? (gethours - 12).toString() + ':' + creationTimeFormat.getMinutes() + ' PM' :
          gethours.toString() + ':' + creationTimeFormat.getMinutes() + ' AM';
        const getCreationTime = creationTimeFormat.getDate().toString() + '/' + creationTimeFormat.getUTCMonth().toString() + '/' +
          creationTimeFormat.getFullYear().toString() + ', ' + timeFormat;
        return {
          id: blog.id,
          name: blog.name,
          shortName: blog.shortName,
          description: blog.description,
          creationTime: getCreationTime,
          concurrencyStamp: blog.concurrencyStamp.toString()
        }
      });
      setTableData(allData);
    }
  }, [blogs.allblogs])

  // Get selected blog API
  useEffect(() => {
    if (blogs.blog) {
      setBlogObj({
        name: blogs.blog.name,
        shortName: blogs.blog.shortName,
        description: blogs.blog.description,
        concurrencyStamp: blogs.blog.concurrencyStamp
      });
    }
  }, [blogs.blog])

  // Functions ================
  // Create new blog
  function createBlogFn(event: any) {
    setBlogObj({ name: '', shortName: '', description: '', concurrencyStamp: '' });
    setCanvasTitle('Create New Blog');
  }

  // On action selection from data table
  function onActionSelection(data: any, actionId: any) {
    setBlogId(data.id);
    if (actionId === 'edit') {
      setCanvasTitle('Edit Blog');
      setBlogId(data.id);
      const item = { id: data.id };
      dispatch(getBlogById(item));
    }
  }

  // Save / Update blog
  function saveUpdateBlog(event: any) {
    event.preventDefault();
    if (canvasTitle === 'Create New Blog') {
      const data = {
        data: {
          name: blogObj.name,
          shortName: blogObj.shortName,
          description: blogObj.description
        }
      };
      dispatch(createNewBlog(data)).then(() => dispatch(getAllBlogs()));
    } else if (canvasTitle === 'Edit Blog') {
      const data = {
        id: blogId,
        data: blogObj
      };
      dispatch(updateBlog(data)).then(() => dispatch(getAllBlogs()));
    }
    setBlogObj({ name: '', shortName: '', description: '', concurrencyStamp: '' });
    setBlogId('');
    setCanvasTitle('');
  }

  // Delete blog confirmation popup
  function confirmDelete() {
    const item = { id: blogId };
    dispatch(deleteBlog(item)).then(() => dispatch(getAllBlogs()));
  }

  // Clear Cache
  function clearCacheFn() {
    const item = { id: blogId };
    dispatch(clearCache(item)).then(() => dispatch(getAllBlogs()));
  }

  // DOM
  return (
    <>
      <div className="row">
        <div className="d-flex justify-content-end ">
          <RdsOffcanvas canvasTitle={canvasTitle} placement="end" offcanvaswidth={650} onClose={(event) => setBlogObj({ name: '', shortName: '', description: '', concurrencyStamp: '' })}
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
                <RdsInput inputType="text" required={true} label={"Name"} value={blogObj.name} placeholder={"Enter Name"}
                  onChange={(event) => setBlogObj({ ...blogObj, name: event.target.value })}
                ></RdsInput>
              </div>
              <div className="form-group">
                <RdsInput inputType="text" required={true} label={"Short Name"} value={blogObj.shortName}
                  placeholder={"Enter Short Name"} onChange={(event) => setBlogObj({ ...blogObj, shortName: event.target.value })}
                ></RdsInput>
              </div>
              <div className="form-group">
                <RdsTextArea placeholder={"Enter Description"} label={'Description'} isRequired={true} required={true}
                  rows={4} value={blogObj.description} onChange={(event) => setBlogObj({ ...blogObj, description: event.target.value })}></RdsTextArea>
              </div>
              <div className="footer-buttons mb-2 d-flex">
                <RdsButton class="me-2" tooltipTitle={""} type={"button"} label="Cancel" colorVariant="outline-primary"
                  size="small" databsdismiss="offcanvas" onClick={() => setBlogObj({ name: '', shortName: '', description: '', concurrencyStamp: '' })}
                ></RdsButton>
                <RdsButton class="me-2" label={canvasTitle === 'Create New Blog' ? 'Save' : 'Update'} size="small" colorVariant="primary" tooltipTitle={""}
                  type={"submit"} databsdismiss="offcanvas" onClick={(event) => saveUpdateBlog(event)}
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
      <RdsCompAlertPopup alertID="delete" onSuccess={confirmDelete} />
      <RdsCompAlertPopup alertID="clearCache" onSuccess={clearCacheFn} deleteButtonLabel={'Clear Cache'}
        alertConfirmation={'Are you sure to Clear Cache'} messageAlert={'Cache will be cleared'} iconUrl={''} />
    </>
  );
};

export default Blogger;
