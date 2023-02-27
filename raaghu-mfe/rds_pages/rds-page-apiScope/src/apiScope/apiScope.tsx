import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  RdsCompApiScopeBasicResource,
  RdsCompTenantSettings,
  RdsCompDatatable,
  RdsCompAlertPopup
} from "../../../rds-components";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../libs/state-management/hooks";
import { RdsButton, RdsOffcanvas, RdsLabel, RdsInput, RdsTextArea, RdsAlert, RdsModal } from "../../../rds-elements";
import { fetchScopesData, deleteScopesData, getScopesData, updateScopesData, editScopesData } from "../../../../libs/state-management/apiScope/apiScope-slice"
//import { entityChangesWithUsername } from "../../../../libs/state-management/audit-logs/audit-log-slice";
interface RdsPageScopeProps { }

const ApiScope = (props: RdsPageScopeProps) => {
  const { t } = useTranslation();
  const scopeuser = useAppSelector((state) => state.persistedReducer.scopes);
  const scopehistory = useAppSelector((state) => state.persistedReducer.auditLog);
  const [scopeData, setScopeData] = useState<any[]>([{}]);

  const [editscopeData, setEditScopeData] = useState({
    id: "",
    name: "",
    displayName: "",
    description: "",
    resources: [""],
  });
  const [showalert, setShowAlert] = useState({
    color:true,
    show:false,
    message:'',
  })


  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchScopesData() as any);
  }, [dispatch]);

  useEffect(() => {
    if (scopeuser.users?.items) {
      const setData1 = scopeuser.users.items.map((scope: any) => {
        return {
          id: scope.id,
          name: scope.name,
          displayName: scope.displayName,
          description: scope.description,
          
        }
      })
      setScopeData(setData1)
    }
  }, [scopeuser.users]);


  useEffect(() => {
    if (scopeuser.editScope?.id != null) {
      setEditScopeData({
        id: scopeuser.editScope.id,
        name: scopeuser.editScope.name,
        displayName: scopeuser.editScope.displayName,
        description: scopeuser.editScope.description,
        resources: scopeuser.editScope.resources
      })
    }
  }
    , [scopeuser.editScope]);
  
  useEffect(() => { 
			const timer = setTimeout(() => {
        setShowAlert({
          color: true,
          show: false,
          message :""
        })
			}, 3000);


      return ()=>clearTimeout(timer)
		}
    , [showalert]);

  const [tableDataid, setTableDataRowId] = useState(0);

  const scopeSelection = (
    clickEvent: any,
    tableDataRow: any,
    tableDataRowIndex: number,
    action: { displayName: string; id: string }
  ) => {
    setTableDataRowId(tableDataRowIndex)
 
    dispatch(editScopesData(tableDataRow.id) as any);

  };

  const success = () => {
    dispatch(deleteScopesData(tableDataid) as any).then((res: any) => { dispatch(fetchScopesData() as any); });
    setShowAlert({color:true,show:true,message:"Scope Deleted Successfully"})
  };


  const submit = (data: any) => {
    const newDto = {
      name: data.email,
      displayName: data.fullname,
      description: data.message,
      resources : data.resources,
    };
    dispatch(getScopesData(newDto) as any).then((res: any) => { dispatch(fetchScopesData() as any); });
    setShowAlert({color:true,show:true,message:"Scope added Successfully"})
  }


  const edit = (data: any) => {
    const editDto = {
      name: data.email,
      displayName: data.fullname,
      description: data.message,

    };
    dispatch(updateScopesData({ id: tableDataid, updateScopeDto: editDto }) as any).then((res: any) => { dispatch(fetchScopesData() as any); });
    setShowAlert({color:true,show:true,message:"Scope Edited Successfully"})
  }
  const tableHeaders = [
    {
      displayName: t("Name"),
      key: "name",
      datatype: "text",
      sortable: false,
    },
    {
      displayName: t("Display Name"),
      key: "displayName",
      datatype: "text",
      sortable: false,
    },
    {
      displayName: t("Description"),
      key: "description",
      datatype: "text",
      sortable: false,
    },
  ];

  const actions = [
    { id: "edit", displayName: "Edit", offId: "entity-edit-off" },
    { id: "history", displayName: "Change History", modalId: "change_history" },
    { id: "delete", displayName: "Delete", modalId: "dynamic_delete_off" },
  ];

  const offCanvasHandler = () => { };

  return (
    <div>
      { showalert.show  && <RdsAlert alertmessage={showalert.message} colorVariant={showalert.color? "success":""} />}

      <div className="card card-full-stretch mt-3 p-3 ">
        <div className="d-flex justify-content-between">
        <div className="h5">Scopes</div>
          <div>
            <RdsOffcanvas
              canvasTitle={t("New Scope")}
              onclick={offCanvasHandler}
              placement="end"
              offcanvaswidth={550}
              offcanvasbutton={
                <div>
                  <RdsButton
                    icon="plus"
                    label={t("New Scope") || ""}
                    iconColorVariant="light"
                    iconHeight="15px"
                    iconWidth="15px"
                    iconFill={false}
                    iconStroke={true}
                    block={false}
                    size="small"
                    type="button"
                    colorVariant="primary"
                  ></RdsButton>
                </div>
              }
              backDrop={false}
              scrolling={false}
              preventEscapeKey={false}
              offId={"apiScope"}
            >

              <RdsCompApiScopeBasicResource
                onSuccess={submit} email={""} fullname={""} message={""} />

            </RdsOffcanvas>
          </div>

        </div>
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
          <RdsCompDatatable
            tableHeaders={tableHeaders}
            actions={actions}
            tableData={scopeData}
            pagination={true}
            recordsPerPage={10}
            recordsPerPageSelectListOption={true}
            onActionSelection={scopeSelection}
          ></RdsCompDatatable>
          <RdsOffcanvas
            backDrop={true}
            preventEscapeKey={true}
            scrolling={false}
            offId="entity-edit-off"
            placement="end"
            canvasTitle="Edit"
            offcanvaswidth={550}
            children={
              <RdsCompApiScopeBasicResource
                onSuccess={edit} email={editscopeData.name} fullname={editscopeData.displayName} message={editscopeData.description} />
            }
          ></RdsOffcanvas>
          <RdsModal
            modalId="change_history"
            modalTitle="Volo.Abp.OpenIddict.Scopes.OpenIddictScope" 
            modalAnimation="modal fade"
            showModalHeader={true}
          >
       
            <p>({editscopeData.id})</p>
            <p className="text-center" >No Change(s)</p>
            <div className="text-end">

              <RdsButton type={"button"} colorVariant="primary" label="Close" databsdismiss="modal" databstarget="change_history"></RdsButton>
            </div>
           
          </RdsModal>
          <RdsCompAlertPopup
            alertID="dynamic_delete_off"
            messageAlert="The selected Resource will be Deleted Permanently "
            alertConfirmation="Are you sure"
            deleteButtonLabel="Yes"
            onSuccess={success}
          />
        </div>
      </div>
    </div>
  );
};

export default ApiScope;
