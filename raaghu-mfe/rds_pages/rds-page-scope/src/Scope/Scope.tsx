import React, { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";

// import {
//   RdsCompScopeBasicResource,
//   RdsCompDatatable,
//   RdsCompAlertPopup
// } from "../../../rds-components";
// import {
//   useAppSelector,
//   useAppDispatch,
// } from "../../../../libs/state-management/hooks";
// import { RdsButton, RdsOffcanvas, RdsAlert, RdsModal } from "../../../rds-elements";
// import { deleteScopeshData, editScopeshData, fetchScopeshData, saveScopesData, updateScopeshData } from "../../../../libs/state-management/scope/scope-slice";
interface RdsPageScopeProps { }

const Scope = (props: RdsPageScopeProps) => {
  // const { t } = useTranslation();
  // const scopeuser = useAppSelector((state) => state.persistedReducer.scopesH);
  
  // const [scopeData, setScopeData] = useState<any[]>([{}]);

  // const [editscopeData, setEditScopeData] = useState({
  //   id:"",
  //   name: "",
  //   description: "",
  //   displayName: "",
  //   enabled: false,
  //   required: false,
  //   emphasize: false,
  //   showInDiscoveryDocument: false,
  //   userClaims: [
  //     {
  //       apiScopeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //       type: "string"
  //     }
  //   ],
  //   properties: [
  //     {
  //       apiScopeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //       key: "string",
  //       value: "string"
  //     }
  //   ]
  // });

  // const [showalert, setShowAlert] = useState({
  //   color:true,
  //   show:false,
  //   message:'',
  // })
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(fetchScopeshData() as any);
  // }, [dispatch]);

  // useEffect(() => {
  //   if (scopeuser.scopes?.items) {
  //     const setData1 = scopeuser.scopes.items.map((scope: any) => {
  //       return {
  //         id: scope.id,
  //         name: scope.name,
  //         description: scope.description,
  //         displayName:scope.displayName,
  //         enabled: scope.enabled,
  //         required: scope.required,
  //         emphasize: scope.emphasize,
  //         showInDiscoveryDocument: scope.showInDiscoveryDocument
  //       }
  //     })
  //     setScopeData(setData1)
  //   }
  // }, [scopeuser.scopes]);


  // useEffect(() => {
  //   if (scopeuser.editScope?.id != null) {
  //     setEditScopeData({
  //       id: scopeuser.editScope.id,
  //       name: scopeuser.editScope.name,
  //       description: scopeuser.editScope.description,
  //       displayName:scopeuser.editScope.displayName,
  //       enabled: scopeuser.editScope.enabled,
  //       required: scopeuser.editScope.required,
  //       emphasize: scopeuser.editScope.emphasize,
  //       showInDiscoveryDocument: scopeuser.editScope.showInDiscoveryDocument,
  //       userClaims:scopeuser.editScope.userClaims,
  //       properties:scopeuser.editScope.properties
  //     })
  //   }
  // }
  // ,[scopeuser.editScope]);
  
  // useEffect(() => { 
	// 		const timer = setTimeout(() => {  
  //       setShowAlert({
  //         color: true,
  //         show: false,
  //         message :""
  //       })
	// 		}, 3000);


  //     return ()=>clearTimeout(timer)
	// 	}
  //   , [scopeuser.scopes]);

  // const [tableDataid, setTableDataRowId] = useState(0);

  // const scopeSelection = (rowData: any, actionId: any) => {
  //   setTableDataRowId(rowData.id)
  //   dispatch(editScopeshData(rowData.id) as any);
  // };

  // const success = () => {
  //   dispatch(deleteScopeshData(tableDataid) as any).then((res: any) => { dispatch(fetchScopeshData() as any); });
  //   setShowAlert({color:true,show:true,message:"Scope Deleted Successfully"})
  // };


  // const updateScope = (data: any) => {
  //   dispatch(updateScopeshData({ id: tableDataid, body: data }) as any).then((res: any) => { dispatch(fetchScopeshData() as any); });
  //   setShowAlert({color:true,show:true,message:"Scope Edited Successfully"})
  // }
  // const tableHeaders = [
  //   {
  //     displayName: t("Name"),
  //     key: "name",
  //     datatype: "text",
  //     sortable: false,
  //   },
  //   {
  //     displayName: t("Display Name"),
  //     key: "displayName",
  //     datatype: "text",
  //     sortable: false,
  //   },
  //   {
  //     displayName: t("Description"),
  //     key: "description",
  //     datatype: "text",
  //     sortable: false,
  //   },
  // ];

  // const actions = [
  //   { id: "edit", displayName: "Edit", offId: "entity-edit-off" },
  //   { id: "history", displayName: "Change History", modalId: "change_history" },
  //   { id: "delete", displayName: "Delete", modalId: "dynamic_delete_off" },
  // ];

  // const offCanvasHandler = () => { 
    
  // };
  // function saveApiScopeData(data:any){
  //   dispatch(saveScopesData(data) as any).then((res: any) => { 
  //     dispatch(fetchScopeshData() as any); 
  //     setShowAlert({color:true,show:true,message:"Scope added Successfully"})
  //   });
  // }

  // return (
  //   <div>
  //      <div className="row align-items-center">
  //       <div className="col-lg-9 col-md-9">
  //     { showalert.show && <RdsAlert alertmessage={showalert.message} colorVariant={showalert.color? "success":""} />}
  //       </div>

  //       {/* <div className="d-flex justify-content-between"> */}
  //       <div className="col-lg-3 col-md-3 mb-2 d-flex justify-content-end">
  //           <RdsOffcanvas
  //             canvasTitle={t("New Scope")}
  //             onclick={offCanvasHandler}
  //             placement="end"
  //             offcanvaswidth={550}
  //             offcanvasbutton={
  //               <div>
  //                 <RdsButton
  //                   icon="plus"
  //                   label={t("New Api Scope") || ""}
  //                   iconColorVariant="light"
  //                   iconHeight="15px"
  //                   iconWidth="15px"
  //                   iconFill={false}
  //                   iconStroke={true}
  //                   block={false}
  //                   size="small"
  //                   type="button"
  //                   colorVariant="primary"
  //                 ></RdsButton>
  //               </div>
  //             }
  //             backDrop={false}
  //             scrolling={false}
  //             preventEscapeKey={false}
  //             offId={"apiScope"}
  //           >

  //             <RdsCompScopeBasicResource saveApiScopeData={(data:any)=>{saveApiScopeData(data)}}/>

  //           </RdsOffcanvas>
  //         </div>

  //       </div>
  //       <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
  //         {/* <h5 className="m-2" >Scopes</h5> */}
  //         <RdsCompDatatable
  //           tableHeaders={tableHeaders}
  //           actions={actions}
  //           tableData={scopeData}
  //           pagination={true}
  //           recordsPerPage={10}
  //           recordsPerPageSelectListOption={true}
  //           onActionSelection={scopeSelection}
  //         ></RdsCompDatatable>

  //         <RdsOffcanvas
  //           backDrop={true}
  //           preventEscapeKey={true}
  //           scrolling={false}
  //           offId="entity-edit-off"
  //           placement="end"
  //           canvasTitle="Edit"
  //           offcanvaswidth={550}
  //           children={
  //             <RdsCompScopeBasicResource saveApiScopeData={(data:any)=>{updateScope(data)}} />
  //           }
  //         ></RdsOffcanvas>
  //         <RdsModal
  //           modalId="change_history"
  //           modalTitle="Volo.Abp.OpenIddict.Scopes.OpenIddictScope" 
  //           modalAnimation="modal fade"
  //           showModalHeader={true}
  //         >
       
  //           <p>({editscopeData.id})</p>
  //           <p className="text-center" >No Change(s)</p>
  //           <div className="text-end">

  //             <RdsButton type={"button"} colorVariant="primary" label="Close" databsdismiss="modal" databstarget="change_history"></RdsButton>
  //           </div>
           
  //         </RdsModal>
  //         <RdsCompAlertPopup
  //           alertID="dynamic_delete_off"
  //           messageAlert="The selected Resource will be Deleted Permanently "
  //           alertConfirmation="Are you sure"
  //           deleteButtonLabel="Yes"
  //           onSuccess={success}
  //         />
  //       </div>
      
  //   </div>
  // );
};

export default Scope;
