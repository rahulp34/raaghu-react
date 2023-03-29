import React, { useEffect, useState } from 'react'
import { RdsButton, RdsOffcanvas, RdsInput, RdsNavtabs } from 'raaghu-react-elements'
import {
  RdsCompDatatable,
  RdsCompAlertPopup,
  RdsCompUrlForwardings,
} from "../../../rds-components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import { useTranslation } from "react-i18next";
import { deleteurlShortingData, editUrlShortingsData, fetchUrlShortingsData, saveUrlShortingData, updateUrlShortingData } from '../../../../libs/public.api';


const UrlForwarding = () => {
  const [data, setData] = useState({
    urlForwardings: [],
  });
  const [id, setId] = useState(0);
 
  const dispatch = useAppDispatch();
  const Data = useAppSelector((state) => state.persistedReducer.urlForwarding);
  const [urlNewData, setUrlNewData] = useState({source:"", target:""});
  const { t } = useTranslation();
  
  useEffect(() => {
    dispatch(fetchUrlShortingsData() as any);
  }, [dispatch]);
  
  useEffect(() => {
    if (Data.urlShortings) {
      const tempData = Data.urlShortings?.items.map((curr: any) => {
        return {
          id: curr.id,
          source: curr.source,
          target: curr.target
        };
      });
      setData({ ...data, urlForwardings: tempData });
    }
  }, [Data.urlShortings]);

  const handlerDeleteConfirm = () => {
    dispatch(deleteurlShortingData(id) as any).then(() => {
      dispatch(fetchUrlShortingsData() as any);
    });
  };

  const tableHeader = [
    {
      displayName: "Source",
      key: "source",
      datatype: "children",
      sortable: true,
    },
    {
      displayName: "Target",
      key: "target",
      datatype: "children",
      sortable: true,
    },
  ];

  let actions: any = [
    { id: "delete", displayName: "Delete", modalId: "deleteUrlForwardingoff" },
    { id: "edit", displayName: "Edit", offId: "editUrlForwardingoff" },
  ];

  const handlerActions = (rowData: any, actionId: any) => {
    setId(rowData.id);
    if (actionId === "edit") {
       dispatch(editUrlShortingsData(rowData.id) as any)
    }
  };

  const[editUrlShortingData, setEditUrlForwardingsData] = useState({source:"",target:""});
  useEffect(()=>{
    debugger
    if(Data.editUrlShortings){
      setEditUrlForwardingsData(Data.editUrlShortings);
    }
  },[Data.editUrlShortings])


  const handlerEditUrlForwardings = () => {
    dispatch(updateUrlShortingData({ id: id, body : newUrlForwardingEditData}) as any).then(() => {
      dispatch(fetchUrlShortingsData() as any);
    });
  };
  const[newUrlForwardingData, setNewUrlForwardingData] = useState({source:"",target:""})
  const[newUrlForwardingEditData, setNewUrlForwardingEditData] = useState({source:"",target:""})

  function getUrlForwardingsData(data:any){
    setNewUrlForwardingData(data)
  }
  
  function getUrlForwardingsDataForEdit(data:any){
    debugger
    setNewUrlForwardingEditData(data)
  }
  const handlerNewUrlForwardings = () => {
    dispatch(saveUrlShortingData(newUrlForwardingData) as any).then(() => {
      dispatch(fetchUrlShortingsData() as any);
    });
  };
  return (
    <>
      <div className="d-flex justify-content-between">
        <h4>Url Forwarding </h4>
        <div className="d-flex justify-content-end">
          <RdsButton
            icon="plus"
            label="Forward an URL"
            iconColorVariant="light"
            iconHeight="15px"
            iconWidth="15px"
            iconFill={false}
            iconStroke={true}
            block={false}
            size="small"
            type="button"
            colorVariant="primary"
            databstoggle="offcanvas"
            databstarget="#newUrlForwarding"
          ></RdsButton>
        </div>
      </div>
      <div className="card p-3 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <RdsCompDatatable
          classes="table__userTable"
          tableHeaders={tableHeader}
          tableData={data?.urlForwardings}
          pagination={data?.urlForwardings?.length > 5 ? true : false}
          recordsPerPage={10}
          noDataTitle="Currently you do not have Url Shortings"
          actions={actions}
          onActionSelection={handlerActions}
          recordsPerPageSelectListOption={true}
        ></RdsCompDatatable>
        <RdsOffcanvas
          placement="end"
          canvasTitle="New Url Forward"
          offId="newUrlForwarding"
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
        >
          <div className="mt-2">
          <RdsCompUrlForwardings  urlForwardingData={urlNewData} emitUrlForwardingData={getUrlForwardingsData}/>
            <div
              className="d-flex"
              style={{ position: "absolute", bottom: "2%" }}
            >
              <div className="me-3">
                <RdsButton
                  type={"button"}
                  label="cancel"
                  isOutline={true}
                  colorVariant="primary"
                  databsdismiss="offcanvas"
                  databstoggle="offcanvas"
                  databstarget="#newUrlForwarding"
                ></RdsButton>
              </div>
              <RdsButton
                type={"button"}
                label="save"
                isDisabled={newUrlForwardingData.source === "" && newUrlForwardingData.target === ""}
                colorVariant="primary"
                onClick={handlerNewUrlForwardings}
                databsdismiss="offcanvas"
                databstoggle="offcanvas"
                databstarget="#newUrlForwarding"
              ></RdsButton>
            </div>
          </div>
        </RdsOffcanvas>
        <RdsOffcanvas
          placement="end"
          canvasTitle="Edit Role"
          offId="editUrlForwardingoff"
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
        >
          <div className="mt-2">
            <RdsCompUrlForwardings urlForwardingData={editUrlShortingData} emitUrlForwardingData={getUrlForwardingsDataForEdit}/>
            <div
              className="d-flex"
              style={{ position: "absolute", bottom: "2%" }}
            >
              <div className="me-3">
                <RdsButton
                  type={"button"}
                  label="cancel"
                  isOutline={true}
                  colorVariant="primary"
                  databsdismiss="offcanvas"
                  databstoggle="offcanvas"
                  databstarget="#editUrlForwardingoff"
                ></RdsButton>
              </div>
              <RdsButton
                type={"button"}
                label="save"
                colorVariant="primary"
                onClick={handlerEditUrlForwardings}
                databsdismiss="offcanvas"
                databstoggle="offcanvas"
                databstarget="#editUrlForwardingoff"
              ></RdsButton>
            </div>
          </div>
        </RdsOffcanvas>
        <RdsCompAlertPopup
          alertID={`deleteUrlForwardingoff`}
          onSuccess={handlerDeleteConfirm}
        ></RdsCompAlertPopup>
      </div>
    </>
  );
}

export default UrlForwarding

