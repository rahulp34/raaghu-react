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
  console.log("ApiScope  HHHHHHHHHHHHHHHHHHHHH", process.env.REACT_APP_API_URL)
  const { t } = useTranslation();
  const scopeuser = useAppSelector((state) => state.persistedReducer.scopes);
  
  const [scopeData, setScopeData] = useState<any[]>([{}]);
  const [newScopeData, setnewScopeData] = useState({
    name: "",
    displayName: "",
    description: "",
  });
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
      setnewScopeData({
            name: '',
            displayName:'',
            description:''   
        })
     }, [scopeuser.users]);
  
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
    , [scopeuser.users]);

  const [tableDataid, setTableDataRowId] = useState(0);

  const scopeSelection = (rowData: any, actionId: any) => {
    setTableDataRowId(rowData.id)
 
    dispatch(editScopesData(rowData.id) as any);

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

  const offCanvasHandler = () => { 
    
  };

  return (
    <div>
       <div className="row align-items-center">
        <div className="col-lg-9 col-md-9">
      { showalert.show && <RdsAlert alertmessage={showalert.message} colorVariant={showalert.color? "success":""} />}
        </div>

        {/* <div className="d-flex justify-content-between"> */}
        <div className="col-lg-3 col-md-3 mb-2 d-flex justify-content-end">
            <RdsOffcanvas
              canvasTitle={t("New Scope")}
              onclick={offCanvasHandler}
              placement="end"
              
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
                onSuccess={submit} email={newScopeData.name} fullname={newScopeData.displayName} message={newScopeData.description} />

            </RdsOffcanvas>
          </div>

        </div>
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
          {/* <h5 className="m-2" >Scopes</h5> */}
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
  );
};

export default ApiScope;
