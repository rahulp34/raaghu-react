import React, { useState, useEffect } from "react";
import {
  RdsButton,
  RdsInput,
  RdsAlert,
  RdsOffcanvas,
  RdsTextArea,
} from "../../../../../raaghu-elements/src";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
// import { RdsButton, RdsLabel, RdsOffcanvas, RdsSelectList, RdsTextArea } from "../rds-elements";
import {
  clearCache,
  createNewBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../../../../libs/state-management/blogger/blogger-slice";
import { RdsCompAlertPopup, RdsCompDatatable } from "../../../rds-components";
import { format } from "date-fns";

// Constants / Variables =============
const tableHeaders = [
  {
    displayName: "Name",
    key: "name",
    datatype: "text",
    dataLength: 30,
    required: true,
    sortable: false,
  },
  {
    displayName: "Short Name",
    key: "shortName",
    datatype: "text",
    dataLength: 30,
    required: true,
    sortable: false,
  },
  {
    displayName: "Description",
    key: "description",
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
const actions = [
  { id: "edit", displayName: "Edit", offId: "blogger-edit-off" },
  { id: "delete", displayName: "Delete", modalId: "blogger-delete-off" },
  {
    id: "clearCache",
    displayName: "Clear Cache",
    modalId: "blogger-clear-off",
  },
];
const Blogger = () => {
  // Use States ================
  const [Alert, setAlert] = useState({ show: false, message: "", color: "" });
  const [tableData, setTableData] = useState([]);
  const [canvasTitle, setCanvasTitle] = useState("Create New Blog");
  const [blogObj, setBlogObj] = useState({
    name: "",
    shortName: "",
    description: "",
    concurrencyStamp: "",
  });
  const [blogId, setBlogId] = useState("");

  // dispatch and selectores for API calling ===============
  const dispatch = useAppDispatch();
  const blogs = useAppSelector((state) => state.persistedReducer.blogger);

  // Use Effects ==================
  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  const isShortNameValid = (password: any) => {
    if (!password || password.length === 0) {
      return false;
    }
    return true;
  };

  const isNameValid = (name: any) => {
    if (!name || name.length === 0) {
      return false;
    }
    return true;
  };
  const isFormValid =
    isShortNameValid(blogObj.shortName) && isNameValid(blogObj.name);
  // Get all alogs API
  useEffect(() => {
    if (blogs.allblogs.items) {
      const allData = blogs.allblogs.items.map((blog: any) => ({
        id: blog.id,
        name: blog.name,
        shortName: blog.shortName,
        description: blog.description,
        creationTime: format(
          new Date(blog.creationTime),
          "yyyy/dd/MM, HH:MM a"
        ),
        concurrencyStamp: blog.concurrencyStamp.toString(),
      }));
      setTableData(allData);
    }
  }, [blogs.allblogs]);

  // Get selected blog API
  useEffect(() => {
    if (blogs.blog) {
      setBlogObj({
        name: blogs.blog.name,
        shortName: blogs.blog.shortName,
        description: blogs.blog.description,
        concurrencyStamp: blogs.blog.concurrencyStamp,
      });
    }
  }, [blogs.blog]);

  // Functions ================
  // Create new blog
  function createBlogFn(event: any) {
    setBlogObj({
      name: "",
      shortName: "",
      description: "",
      concurrencyStamp: "",
    });
    setCanvasTitle("Create New Blog");
  }

  // On action selection from data table
  function onActionSelection(data: any, actionId: any) {
    setBlogId(data.id);
    if (actionId === "edit") {
      setCanvasTitle("Edit Blog");
      setBlogId(data.id);
      const item = { id: data.id };
      dispatch(getBlogById(item));
    }
  }

  // Save / Update blog
  function saveUpdateBlog(event: any) {
    event.preventDefault();
    if (canvasTitle === "Create New Blog") {
      const data = {
        data: {
          name: blogObj.name,
          shortName: blogObj.shortName,
          description: blogObj.description,
        },
      };
      dispatch(createNewBlog(data)).then((res) => {
       if (res.type == "Blogs/Create/rejected") {
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
            message: "Blog created Succesfully",
            color: "success",
          });
        }
        dispatch(getAllBlogs());
      });
    } else if (canvasTitle === "Edit Blog") {
      const data = {
        id: blogId,
        data: blogObj,
      };
      dispatch(updateBlog(data)).then((res) => {
        if (res.type == "Blogs/Update/rejected") {
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
            message: "Blog updated Succesfully",
            color: "success",
          });
         }
        dispatch(getAllBlogs());
      });
    }
    setBlogObj({
      name: "",
      shortName: "",
      description: "",
      concurrencyStamp: "",
    });
    setBlogId("");
    setCanvasTitle("");
  }

  // Delete blog confirmation popup
  function confirmDelete() {
    const item = { id: blogId };
    dispatch(deleteBlog(item)).then((res) => {
      if (res.type == "Blogs/Delete/rejected") {
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
          message: "Blog deleted Succesfully",
          color: "success",
        });
       } 
      dispatch(getAllBlogs());
    });
  }

  // Clear Cache
  function clearCacheFn() {
    const item = { id: blogId };
    dispatch(clearCache(item)).then(() => dispatch(getAllBlogs()));
  }
  useEffect(() => {
    // Set a 3-second timer to update the state
    const timer = setTimeout(() => {
      setAlert({ ...Alert, show: false });
    }, 3000);

    // Clean up the timer when the component unmounts or when the state changes
    return () => clearTimeout(timer);
  }, [blogs.allblogs]);
  // DOM
  return (
    <>
      <div className="container-fluid p-0 m-0">
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
                  onClose={(event) =>
                    setBlogObj({
                      name: "",
                      shortName: "",
                      description: "",
                      concurrencyStamp: "",
                    })
                  }
                  offcanvasbutton={
                    <div className="d-flex justify-content-end">
                      <RdsButton
                        icon="plus"
                        label={"Create a new blog"}
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
                        onClick={createBlogFn}
                      ></RdsButton>
                    </div>
                  }
                  backDrop={true}
                  scrolling={false}
                  preventEscapeKey={false}
                  offId={"blogger-edit-off"}
                >
                  <form>
                    <div className="form-group">
                      <RdsInput
                        inputType="text"
                        required={true}
                        label={"Name"}
                        value={blogObj.name}
                        placeholder={"Enter Name"}
                        onChange={(event) =>
                          setBlogObj({ ...blogObj, name: event.target.value })
                        }
                      ></RdsInput>
                    </div>
                    <div className="form-group">
                      <RdsInput
                        inputType="text"
                        required={true}
                        label={"Short Name"}
                        value={blogObj.shortName}
                        placeholder={"Enter Short Name"}
                        onChange={(event) =>
                          setBlogObj({
                            ...blogObj,
                            shortName: event.target.value,
                          })
                        }
                      ></RdsInput>
                    </div>
                    <div className="form-group">
                      <RdsTextArea
                        placeholder={"Enter Description"}
                        label={"Description"}
                        isRequired={true}
                        required={false}
                        rows={4}
                        value={blogObj.description}
                        onChange={(event) =>
                          setBlogObj({
                            ...blogObj,
                            description: event.target.value,
                          })
                        }
                      ></RdsTextArea>
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
                          setBlogObj({
                            name: "",
                            shortName: "",
                            description: "",
                            concurrencyStamp: "",
                          })
                        }
                      ></RdsButton>
                      <RdsButton
                        class="me-2"
                        label={
                          canvasTitle === "Create New Blog" ? "Save" : "Update"
                        }
                        size="small"
                        isDisabled={!isFormValid}
                        colorVariant="primary"
                        tooltipTitle={""}
                        type={"submit"}
                        databsdismiss="offcanvas"
                        showLoadingSpinner={true}
                        onClick={(event) => saveUpdateBlog(event)}
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
                pagination={false}
                actions={actions}
                onActionSelection={onActionSelection}
                classes="table"
                recordsPerPageSelectListOption={true}
                recordsPerPage={5}
                noDataTitle={"No Blogs Available"}
              ></RdsCompDatatable>
              <RdsCompAlertPopup
                alertID="blogger-delete-off"
                onSuccess={confirmDelete}
                deleteButtonColor="danger"
                cancelButtonColor="danger"
              />
              <RdsCompAlertPopup
                alertID="blogger-clear-off"
                onSuccess={clearCacheFn}
                deleteButtonLabel={"Clear Cache"}
                alertConfirmation={"Are you sure to Clear Cache"}
                messageAlert={"Cache will be cleared"}
                iconUrl={""}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogger;
