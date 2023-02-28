import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../libs/state-management/hooks";
import { allLanguagesCulture, getAllTemplates, getTemplateContent, restoreToDefault, saveTemplateContent } from "../../../../libs/state-management/text-template/text-template-slice";
import {
  RdsCompDatatable,
} from "../../../rds-components";
import {
  RdsButton,
  RdsCheckbox,
  RdsLabel,
  RdsNavtabs,
  RdsOffcanvas,
  RdsSelectList,
  RdsTextArea,
  RdsTextEditor,
} from "../../../rds-elements";

const TextTemplate = () => {

  const tableHeaders = [
    { displayName: "Template Name", key: "name", datatype: "text", dataLength: 30, required: true, sortable: false },
    { displayName: "Inline Localized", key: "isInlineLocalized", datatype: "iconAvatarTitle", dataLength: 30, required: true, sortable: false },
    { displayName: "Layout Status", key: "isLayout", datatype: "iconAvatarTitle", dataLength: 30, required: true, sortable: false },
    { displayName: "Layout Details", key: "layout", datatype: "text", dataLength: 30, required: true, sortable: false },
    { displayName: "Default Culture Name", key: "defaultCultureName", datatype: "text", dataLength: 30, required: true, sortable: false },
  ];

  const actions = [
    { id: "edit", displayName: "Edit", offId: "Edit" },
    { id: "customizePerCulture", displayName: "Customize Per Culture", offId: "Edit" },
  ];

  const [tableData, setTableData] = useState([]);

  const dispatch = useAppDispatch();
  const textTemplate = useAppSelector((state) => state.persistedReducer.textTemplate);
  const [name, setName] = useState('');
  const [referenceContent, setReferenceContent] = useState('');
  const [targetContent, setTargetContent] = useState('');

  const [offCanvasId, setOffCanvasId] = useState('');
  const [languages, setLanguages] = useState([]);
  const [targetName, setTargetName] = useState('');
  const [selectedList, setSelectedList] = useState('');
  const [selectedDataName, setSelectedDataName] = useState('');

  getAll();
  function getAll() {
    useEffect(() => {
      dispatch(getAllTemplates() as any);
      dispatch(allLanguagesCulture() as any);
    }, [dispatch]);
    useEffect(() => {
      const data: any = [];
      if (textTemplate.textTemplate.items) {
        const tickIcon = { iconName: "tick", iconFill: false, iconStroke: true, iconColor: "success", iconWidth: '16px', iconHeight: '16px' };
        const closeIcon = { iconName: "close", iconFill: false, iconStroke: true, iconColor: "danger", iconWidth: '16px', iconHeight: '16px' };
        textTemplate.textTemplate.items.map((res: any) => {
          const item = {
            defaultCultureName: res.defaultCultureName,
            displayName: res.displayName,
            isInlineLocalized: res.isInlineLocalized ? tickIcon : closeIcon,
            isLayout: res.isLayout ? tickIcon : closeIcon,
            layout: res.layout,
            name: res.name
          }
          data.push(item);
        });
        setTableData(data);
      }

      if (textTemplate.languages.localization.languages !== null || textTemplate.languages.localization.languages !== undefined) {
        const data: any = [];
        textTemplate.languages.localization.languages.forEach((ele: any) => {
          const item = {
            value: ele.cultureName,
            option: ele.cultureName,
            isSelected: ele.cultureName === 'en' ? true : false
          };
          data.push(item);
          setLanguages(data);
        });
      }
    }, [textTemplate]);
  }

  async function onActionSelection(clickEvent: any, selectedData: any, rowIndex: any, action: any) {
    setOffCanvasId(action.displayName);
    setSelectedDataName(selectedData.name);
  };

  useEffect(() => {
    offCanvasId === 'Edit' ? dispatch(getTemplateContent({ template: selectedDataName, culture: undefined }) as any) :
      offCanvasId === 'Customize Per Culture' ? dispatch(getTemplateContent({ template: selectedDataName, culture: undefined }) as any) : null;
  }, [offCanvasId, selectedDataName]);

  function onCloseFn(event: any) {
    event.preventDefault();
    setName('');
    setReferenceContent('');
    setTargetContent('');
    setSelectedList('');
    setOffCanvasId('');
  }

  function restoreDefault() {
    dispatch(restoreToDefault({ templateName: name }) as any);
  }

  function refernceNameFn(event: any) {
    setSelectedList('reference');
    dispatch(getTemplateContent({ template: name, culture: event.target.value }) as any);
  }

  function targetNameFn(event: any) {
    setSelectedList('target');
    dispatch(getTemplateContent({ template: name, culture: event.target.value }) as any);
    setTargetName(event.target.value);
  }

  function onSaveFn(event: any) {
    event.preventDefault();
    dispatch(saveTemplateContent({ templateName: name, cultureName: offCanvasId === 'Edit' ? null : targetName, content: targetContent }) as any);
  }

  useEffect(() => {
    if (textTemplate.templateData) {
      setName(textTemplate.templateData.name);
      if (selectedList === 'target') setTargetContent(textTemplate.templateData.content);
      else if (selectedList === 'reference') setReferenceContent(textTemplate.templateData.content);
      else {
        setTargetContent(textTemplate.templateData.content);
        setReferenceContent(textTemplate.templateData.content);
      }
    }
  }, [textTemplate.templateData, selectedList]);

  return (
    <>
      <div className="row">
        <div className="col-md-12 mb-3">
          <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
            <RdsCompDatatable tableHeaders={tableHeaders} tableData={tableData} pagination={false} actions={actions}
              onActionSelection={onActionSelection} classes="table" recordsPerPageSelectListOption={true}
              recordsPerPage={5} noDataTitle={'No Templates Available'}></RdsCompDatatable>
          </div>
        </div>
      </div>
      <RdsOffcanvas placement={"end"} backDrop={false} scrolling={false} preventEscapeKey={false} offId={"Edit"}
        canvasTitle={"Contents"} offcanvaswidth={650} >
        <form>
          <div className="px-2">
            <div className="form-group mb-4 d-flex">
              <div className="pe-2">
                <RdsLabel label={'Name'} ></RdsLabel>
              </div>
              :
              <div className="ps-2">{name}</div>
            </div>
            {offCanvasId !== 'Edit' ?
              <>
                <div className="form-group mb-2">
                  <RdsLabel label={'Reference Culture Name'}></RdsLabel>
                  <RdsSelectList label={"Reference Culture Name"} selectItems={languages}
                    onSelectListChange={refernceNameFn}></RdsSelectList>
                </div>
                <div className="form-group mb-3">
                  <RdsTextArea placeholder={""} value={referenceContent} onChange={(e) => setReferenceContent(e.target.value)}
                    required={true} readonly={true} isRequired={true} label={'Reference Content'} rows={10}></RdsTextArea>
                </div>
              </> :
              null
            }
            {offCanvasId !== 'Edit' ?
              <>
                <div className="form-group mb-2">
                  <RdsLabel label={'Target Culture Name'}></RdsLabel>
                  <RdsSelectList label={"Target Culture Name"} selectItems={languages}
                    onSelectListChange={targetNameFn}></RdsSelectList>
                </div>
              </> :
              null
            }
            <div className="form-group pb-4">
              <RdsTextArea placeholder={""} value={targetContent} onChange={(e) => setTargetContent(e.target.value)}
                required={true} isRequired={true} label={'Template Content'} rows={10}></RdsTextArea>
            </div>
            <div className="position-absolute bottom-0 py-4 d-flex w-100 bg-white">
              <div>
                <RdsButton size={'small'} colorVariant="primary" type={"button"} label={"Restore To Default"} isOutline={true}
                  onClick={restoreDefault}>
                </RdsButton>
              </div>
              <div className="ms-2">
                <RdsButton size={'small'} colorVariant="primary" type={"button"} label="cancel" isOutline={true}
                  onClick={(e) => onCloseFn(e)} databsdismiss="offcanvas">
                </RdsButton>
              </div>
              <div className="ms-2">
                <RdsButton size={'small'} colorVariant="primary" type={'submit'} label="Save"
                  databsdismiss={'offcanvas'} isDisabled={targetContent === ''} onClick={(e) => onSaveFn(e)}>
                </RdsButton>
              </div>
            </div>
          </div>
        </form>
      </RdsOffcanvas>
    </>
  );
};

export default TextTemplate;
