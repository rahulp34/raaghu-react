import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  RdsCompApiScopeBasicResource,
  RdsCompTenantSettings,
  RdsCompDatatable,
  RdsCompAlertPopup,
  RdsCompIdentiyResourcseBasic,
  RdsCompPropertiesNew
} from "../../../rds-components";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../libs/state-management/hooks";
import { RdsButton, RdsOffcanvas, RdsLabel, RdsInput, RdsTextArea, RdsAlert, RdsModal, RdsNavtabs } from "../../../rds-elements";
import { fetchScopesData, deleteScopesData, getScopesData, updateScopesData, editScopesData } from "../../../../libs/state-management/apiScope/apiScope-slice"
//import { entityChangesWithUsername } from "../../../../libs/state-management/audit-logs/audit-log-slice";
interface IdentityResourcesProps { }

const IdentityResources = (props: IdentityResourcesProps) => {
  const { t } = useTranslation();
  const scopeuser = useAppSelector((state) => state.persistedReducer.scopes);
  const [activeNavTabId, setActiveNavTabId] = useState();
  const [scopeData, setScopeData] = useState<any[]>([{
    name:"Admin",
    displayName:"admin",
    description:"test"
  },
  {
    name:"Demo",
    displayName:"demo",
    description:"dd"
  },
]);
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
  const navtabsItems = [
    { label: "Basics", tablink: "#nav-basics", id: 0 },
    { label: "Claims", tablink: "#nav-claims", id: 1 },
    { label: "Properties", tablink: "#nav-claims", id: 2 },
  ];
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
    { id: "edit", displayName: "Edit", offId: "idenReso-edit-off" },
    { id: "history", displayName: "Change History", modalId: "idenReso-history-offc" },
    { id: "delete", displayName: "Delete", modalId: "idenReso-delete-off" },
  ];

  const offCanvasHandler = () => { 
    
  };

  return (
    <div>
       <div className="row">
      
        <div className="col-md-12 text-end pb-3 desktop-btn">
          <RdsButton
            label="New Scope"
            type="button"
            size="medium"
            colorVariant="primary"
            showLoadingSpinner={false}
            databstoggle="offcanvas"
            databstarget="#IdentiRes-new-off"
            icon={"plus"}
            iconWidth={"12px"}
            iconHeight={"12px"}
          ></RdsButton>
        </div>
        {/* <div className="d-flex justify-content-between"> */}
        <div className="col-lg-3 col-md-3 mb-2 d-flex justify-content-end">
            <RdsOffcanvas
             backDrop={false}
             scrolling={true}
             preventEscapeKey={false}
             offId="IdentiRes-new-off"
             canvasTitle={t("New Scope")}
             placement="end"
              
            >
               <RdsNavtabs
          navtabsItems={navtabsItems}
          type={"tabs"}
          activeNavTabId={activeNavTabId}
          activeNavtabOrder={(activeNavTabId) => {
            setActiveNavTabId(activeNavTabId);
          }}
          justified={false}
        >
          {activeNavTabId == 0 && (
               <RdsCompIdentiyResourcseBasic ></RdsCompIdentiyResourcseBasic>
          )}
              {/* <RdsCompApiScopeBasicResource
                onSuccess={submit} email={newScopeData.name} fullname={newScopeData.displayName} message={newScopeData.description} /> */}
                {activeNavTabId == 1 && (
               <span>Claims</span>
          )}

            {activeNavTabId == 2 && (
             <RdsCompPropertiesNew></RdsCompPropertiesNew>
          )} 
          </RdsNavtabs>
            </RdsOffcanvas>
          </div>

        </div>
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
          {/* <h5 className="m-2" >Scopes</h5> */}
          <RdsCompDatatable
           actionPosition="right"
            tableHeaders={tableHeaders}
            actions={actions}
            tableData={scopeData}
            pagination={true}
            recordsPerPage={10}
            recordsPerPageSelectListOption={true}
            onActionSelection={scopeSelection}
          ></RdsCompDatatable>
       
        
        </div>
      
    </div>
  );
};

export default IdentityResources;
