import React, { useState, useEffect } from "react";
import { RdsButton, RdsInput, RdsLabel, RdsOffcanvas, RdsSelectList, RdsTextArea } from "../../../../../raaghu-elements/src";
import { useAppDispatch, useAppSelector } from "../../../../libs/state-management/hooks";
// import { RdsButton, RdsLabel, RdsOffcanvas, RdsSelectList, RdsTextArea } from "../rds-elements";
import { RdsCompAlertPopup, RdsCompDatatable } from "../../../rds-components";
import { createTag, deleteTag, getAllTags, getTagById, updateTag } from "../../../../libs/state-management/tags/tags-slice";

const Tags = () => {

  // Constants / Variables =============
  const tableHeaders = [
    { displayName: "Entity Type", key: "entityType", datatype: "text", dataLength: 30, required: true, sortable: false },
    { displayName: "Name", key: "name", datatype: "text", dataLength: 30, required: true, sortable: false },
  ];
  const actions = [
    { id: "edit", displayName: "Edit", offId: "tags" },
    { id: "delete", displayName: "Delete", modalId: "delete" },
  ];
  const recordsPerPage: number = 10;

  // Use States ================
  const [tableData, setTableData] = useState([]);
  const [canvasTitle, setCanvasTitle] = useState('Create New tags');
  const [tagsObj, setTagsObj] = useState({
    id: '',
    entityType: '',
    name: '',
    concurrencyStamp: ''
  });
  const [tagsId, setTagsId] = useState('');
  const [entityTypeList, setEntityTypeList] = useState([
    { id: 1, value: 'BlogPost', option: 'BlogPost' },
  ]);
  const [isEdit, setIsEdit] = useState(false);

  const getAllParameters = {
    filter: undefined,
    sorting: undefined,
    skipCount: 0,
    maxResultCount: 1000
  }

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
        concurrencyStamp: tag.concurrencyStamp
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
        concurrencyStamp: tags.tag.concurrencyStamp
      });
    }
  }, [tags.tag]);


  // Functions ================
  // Create new tags
  function createTagFn(event: any) {
    setIsEdit(false);
    setTagsObj({ id: '', entityType: '', name: '', concurrencyStamp: '' });
    setCanvasTitle('New');
  }

  // On action selection from data table
  function onActionSelection(data: any, actionId: any) {
    setTagsId(data.id);
    if (actionId === 'edit') {
      setIsEdit(true);
      setCanvasTitle('Edit');
      dispatch(getTagById({ id: data.id }));
    }
  }

  // Save / Update tags
  function saveUpdateTags(event: any) {
    event.preventDefault();
    isEdit ? dispatch(updateTag({
      id: tagsObj.id,
      body: { name: tagsObj.name }
    })).then(() => dispatch(getAllTags(getAllParameters)))
      : dispatch(createTag({
        body: {
          entityType: tagsObj.entityType,
          name: tagsObj.name,
        }
      })).then(() => dispatch(getAllTags(getAllParameters)))
    setTagsObj({ id: '', entityType: '', name: '', concurrencyStamp: '' });
    setTagsId('');
    setCanvasTitle('');
    setIsEdit(false);
  }

  // Delete tags confirmation popup
  function confirmDelete() {
    const item = { id: tagsId };
    dispatch(deleteTag(item)).then(() => dispatch(getAllTags(getAllParameters)));
    setIsEdit(false);
  }

  // DOM
  return (
    <>
      <div className="row">
        <div className="d-flex justify-content-end ">
          <RdsOffcanvas canvasTitle={canvasTitle} placement="end" offcanvaswidth={650} onClose={() => setTagsObj({ id: '', entityType: '', name: '', concurrencyStamp: '' })}
            offcanvasbutton={
              <div className="d-flex justify-content-end">
                <RdsButton icon="plus" label={"New Tag"} iconColorVariant="light" iconHeight="15px" iconWidth="15px"
                  iconFill={false} iconStroke={true} block={false} size="small" type="button" colorVariant="primary" onClick={createTagFn}>
                </RdsButton>
              </div>
            }
            backDrop={false} scrolling={false} preventEscapeKey={false} offId={"tags"}>
            <form>
              {
                !isEdit &&
                <div className="form-group mb-3">
                  <div className="mb-2">
                    <RdsLabel label={'Enitity Type'}></RdsLabel>
                  </div>
                  <RdsSelectList label={"Entity Type"} placeholder={"Entity Type"} selectItems={entityTypeList} selectedValue={tagsObj.entityType}
                    onSelectListChange={(value: any) => setTagsObj({ ...tagsObj, entityType: value })} ></RdsSelectList>
                </div>
              }
              <div className="form-group">
                <RdsInput inputType="text" required={true} label={"Name"} value={tagsObj.name}
                  placeholder={"Enter Name"} onChange={(event) => setTagsObj({ ...tagsObj, name: event.target.value })}
                ></RdsInput>
              </div>
              <div className="footer-buttons mb-2 d-flex">
                <RdsButton class="me-2" tooltipTitle={""} type={"button"} label="Cancel" colorVariant="outline-primary"
                  size="small" databsdismiss="offcanvas" onClick={() => setTagsObj({ id: '', entityType: '', name: '', concurrencyStamp: '' })}
                ></RdsButton>
                <RdsButton class="me-2" isDisabled={!tagsObj.name} label={!isEdit ? 'Save' : 'Update'} size="small"
                  colorVariant="primary" tooltipTitle={""} type={"submit"} databsdismiss="offcanvas"
                  onClick={(event) => saveUpdateTags(event)}
                ></RdsButton>
              </div>
            </form>
          </RdsOffcanvas>
        </div>
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
          <RdsCompDatatable tableHeaders={tableHeaders} tableData={tableData} pagination={tableHeaders.length > recordsPerPage} actions={actions}
            onActionSelection={onActionSelection} classes="table" recordsPerPageSelectListOption={true}
            recordsPerPage={recordsPerPage} noDataTitle={'No Tags Available'}></RdsCompDatatable>
        </div>
      </div>
      <RdsCompAlertPopup 
      alertID="delete" 
      onSuccess={confirmDelete} 
      // cancelButtonColor="danger" 
      // deleteButtonColor="danger" 
      />
    </>
  );
};

export default Tags;
