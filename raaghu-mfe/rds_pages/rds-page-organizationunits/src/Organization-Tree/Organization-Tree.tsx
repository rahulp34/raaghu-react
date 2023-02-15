import React, { useState, useEffect } from "react";
import {
  RdsAlert,
  RdsButton,
  RdsOffcanvas,
  RdsInput,
  RdsNavtabs,
} from "../../../rds-elements";
import {
  RdsCompOrganizationTree,
  RdsCompDatatable,
} from "../../../rds-components";
import  {createTree}  from '../../../../libs/shared/array-to-tree-converter';
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
//import { updateUnitTree } from "../../../../libs/state-management/organization-tree/organization-tree-slice";
//import  {addRolesToOrganizationUnit, addUsersToOrganizationUnit, createTreeUnit, deleteMemberFromOrgUnit, deleteRoleFromOrgUnit, deleteRoles, deleteUnitTree, getOrganizationUnitMembers, getOrganizationUnitRoles, getOrganizationUnitRolesList, getOrganizationUnitTree, getOrganizationUnitUsersList, updateUnitTree  } from "../../../../libs/state-management/organization-tree/organization-tree-slice";

//import { addRolesToOrganizationUnit, addUsersToOrganizationUnit, createTreeUnit, deleteMemberFromOrgUnit, deleteRoleFromOrgUnit, deleteRoles, deleteUnitTree, getOrganizationUnitMembers, getOrganizationUnitRoles, getOrganizationUnitRolesList, getOrganizationUnitTree, getOrganizationUnitUsersList, updateUnitTree } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.actions';
//import { selectOrganizationUnitMembers, selectOrganizationUnitRoles, selectOrganizationUnitRolesList, selectOrganizationUnitTree, selectOrganizationUnitUsersList } from 'projects/libs/state-management/src/lib/state/organization-unit/organization-unit.selector';
export interface OrganizationTreeProps {
  organizationTreeData: any;
  onActionSelection?(arg: any): void;
}
const OrganizationTree = (props:OrganizationTreeProps) => {
  const dispatch = useAppDispatch();
  const [activeTab, setActiveTab] = useState("member");
  let organizationName: string = "";
  let isAnimation: boolean = true;
  let selectedRoles: any = [];
  let selectedUsers: any = [];
  let selectedTabIndex: any = 0;
  let viewCanvas: boolean = false;
  //let nodeForm: FormGroup
  let viewCreateOrganisationCanvas: boolean = false;
  let usercanvasTitle: string = "Select User";
  let rolecanvasTitle: string = "Select Role";
  let selectedTreeNode: number = 0;
  let tableHeadersForMember: any[] = [
    {
      displayName: "Users",
      key: "userName",
      dataType: "text",
      dataLength: 30,
      filterable: true,
      required: true,
      sortable: true,
    },
    {
      displayName: "Addition Time",
      key: "additionTime",
      dataType: "text",
      dataLength: 5,
      required: true,
      sortable: true,
    },
  ];
  let tableDataForMember: any[] = [];
  let tableHeadersForRoles: any[] = [
    {
      displayName: "Role",
      key: "roles",
      dataType: "text",
      dataLength: 5,
      required: false,
      filterable: true,
      sortable: true,
    },
    {
      displayName: "Addition Time",
      key: "additionTime",
      dataType: "date",
      dataLength: 5,
      required: true,
      sortable: true,
    },
  ];
  let tableDataForRoles: any[] = [];
  let tableHeadersForRolesAdd :any[]= [
    {
      displayName: "Roles",
      key: "displayName",
      dataType: "text",
      dataLength: 5,
      required: false,
      filterable: true,
      sortable: true,
      checkbox: true,
    },
  ];
  let tableDataForRolesAdd :any[]= [];
  let tableHeadersForUserAdd: any[] = [
    {
      displayName: "Users",
      key: "name",
      dataType: "text",
      dataLength: 5,
      required: false,
      filterable: true,
      sortable: true,
      checkbox: true,
    },
  ];
  let tableDataForUserAdd: any[] = [];
  let tableDataForRoleAdd = [];
  let actions: any = [{ id: "delete", displayName: "Delete" }];
  let nodeColor = ["#6E4D9F", "#0D79AE", "#14A94B", "#FBA919"];
  const [Data ,setData]=useState([])
  const navtabsItems: any = [
    {
      label: "Members",
      tablink: "#Members",
      ariacontrols: "Members",
      id: "member",
    },
    {
      label: "Roles",
      tablink: "#Roles",
      ariacontrols: "Roles",
      id: "role",
    },
  ];
  const onDeleteNode = () => {};
  const onCreateNode = (node:any,value:any) => {
    console.log('Want to create a Nested Unit ')
     const data: any = { data: { nodeData: node, displayName: value } }
     //dispatch(createTreeUnit(data));
  };
  const onCreateSubUnit=(node:any,value:any) => {
    console.log('Want to create a subUnit ')
    const data: any = { data: { nodeData: node, displayName: value } }
    //dispatch(createTreeUnit(data));
  }

  const onNodeEdit = (node:any,value:any) => {
    console.log('value ', value," node ",node)
    let payload = {
      value: value,
      pId: node.data.parentId,
      id:node.data.id
    }
    //dispatch(updateUnitTree(payload)as any)
  };
  const onSelectNode = (onSelectNodeevent: any) => {
    console.log()
    selectedTreeNode = onSelectNodeevent.item.data.id;
    organizationName = onSelectNodeevent.item.data.displayName;
   // dispatch(updateUnitTree(onSelectNodeevent) as any)
    //this.store.dispatch(getOrganizationUnitRoles(selectedTreeNode));
    //	this.store.dispatch(getOrganizationUnitMembers(selectedTreeNode))
  };
  const newUser = () => {};
  const newRole = () => {};
  const pushUser = () => {};
  const activeNavtabOrder = (id: any) => {
    setActiveTab(id);
  };
  const onMemberActionSelection = (event: any) => {
    if (event.actionId === "delete") {
      // this.store.dispatch(deleteMemberFromOrgUnit({ userId: event.selectedData.id, organizationUnitId: selectedTreeNode }))
    }
  };
  const onRoleActionSelection = (event: any) => {
    if (event.actionId === "delete") {
      //this.store.dispatch(deleteRoleFromOrgUnit({ roleId: event.selectedData.id, organizationUnitId: this.selectedTreeNode }))
    }
  };
  const updateOrganizationTree=()=> {
    
     let data= createTree(
			  props.organizationTreeData.items,
			  'parentId',
			  'id',
			  null,
			  'children',
			  [
				{
				  target: 'label',
				  source: 'displayName',
				},
				{
				  target: 'expandedIcon',
				  value: 'fa fa-folder-open text-warning',
				},
				{
				  target: 'collapsedIcon',
				  value: 'fa fa-folder text-warning',
				},
				{
				  target: 'expanded',
				  value: true,
				},
			  ],
			  1
			)
      setData(data)
		  }
      console.log('Data ', Data)
      useEffect(()=>{updateOrganizationTree()},[props.organizationTreeData])
	  // const updateMembersTable=()=> {
		// this.store.select(selectOrganizationUnitMembers).subscribe((res) => {
		//   this.isAnimation = false;
		//   this.tableDataForMember = [];
		//   if (res && res.items.length > 0) {
		// 	res.items.forEach((element: any) => {
		// 	  const item: any = {
		// 		id: element.id,
		// 		userName: element.name,
		// 		additionTime: this.datepipe.transform(new Date(element.addedTime), 'MM/dd/yyyy, hh:mm:ss a'),
		// 		name: element.name.trim()
		// 	  }
		// 	  this.tableDataForMember.push(item);
		// 	});
		//   }
		// })
	  // }
	
	  // const  updateRolesTable=()=> {
		// this.store.select(selectOrganizationUnitRoles).subscribe((res) => {
		//   this.isAnimation = false;
		//   this.tableDataForRoles = [];
		//   if (res && res.items.length > 0) {
		// 	res.items.forEach((element: any) => {
		// 	  const item: any = {
		// 		id: element.id,
		// 		roles: element.displayName,
		// 		additionTime: this.datepipe.transform(new Date(element.addedTime), 'MM/dd/yyyy, hh:mm:ss a'),
		// 		name: element.displayName.trim()
		// 	  }
		// 	  this.tableDataForRoles.push(item);
		// 	});
		//   }
		// })
	  // }
	
	  // const updateUsersListTable=()=> {
		// this.store.select(selectOrganizationUnitUsersList).subscribe((res) => {
		//   this.isAnimation = false;
		//   if (res && res.items.length > 0) {
		// 	this.tableDataForUserAdd = [];
		// 	res.items.forEach((element: any) => {
		// 	  const item: any = {
		// 		id: element.value,
		// 		name: element.name,
		// 	  }
		// 	  this.tableDataForUserAdd.push(item);
		// 	});
		//   }
		// })
	  // }
	
	// const  updateRolesListTable=()=> {
	// 	this.store.select(selectOrganizationUnitRolesList).subscribe((res) => {
	// 	  this.isAnimation = false;
	// 	  if (res && res.items.length > 0) {
	// 		this.tableDataForRoleAdd = [];
	// 		res.items.forEach((element: any) => {
	// 		  const item: any = {
	// 			id: element.value,
	// 			displayName: element.name,
	// 			name: element.name.trim()
	// 		  }
	// 		  this.tableDataForRoleAdd.push(item);
	// 		});
	// 	  }
	// 	})
	//   }
  return (
    <div>
      {/* <ng-container *ngIf="currentAlerts&&currentAlerts.length>0"
		>
		
  <rds-comp-alert [currentAlerts]="currentAlerts" (onAlertHide)="onAlertHide($event)"></rds-comp-alert>
</ng-container> */}
      <RdsAlert
        alertmessage="This is close alert"
        dismisable={false}
        delay={3000}
        icon="information"
        iconFill={false}
        colorVariant="primary"
        iconStroke={true}
        iconHeight="20px"
        iconWidth="20px"
        position="top"
      ></RdsAlert>
      <div // [@fadeAnimation]="isAnimation ? 'fadeAnimation' : ''"
      >
        <div
          className="row" // [class.card-body]="selectedTreeNode==0"
        >
          <div className="col-md-6 gutter-b">
            <div>
              <div
                className="card p-2 vh-88 rounded-0 border-0" // [@fadeAnimation]="isAnimation ? 'fadeAnimation' : ''
              >
                <div className="card-header bg-transparent">
                  <h5 className="card-title">Organization Tree</h5>
                </div>
                <div className="card-body overflow-auto vh-75">
                  <RdsCompOrganizationTree
                    organizationTreeData={Data}
                    onDeleteNode={onDeleteNode}
                    onCreateNode={onCreateNode}
                    onCreateSubUnit={onCreateSubUnit}
                    onSelectNode={onSelectNode}
                    onNodeEdit={onNodeEdit}
                    nodeColor={nodeColor}
                    mutable={true}
                  ></RdsCompOrganizationTree>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 gutter-b">
            <div className="card p-2  vh-88 rounded-0 border-0">
              <div
                className="card-header bg-transparent" // *ngIf="selectedTreeNode == 0"
              >
                <h5 className="card-title">
                  Select an organization unit to see members
                </h5>
              </div>
              <div //[@fadeAnimation]="isAnimation ? 'fadeAnimation' : ''"
              >
                <div className="">
                  <div //</div>*ngIf="selectedTreeNode != 0"
                  >
                    <div className="card-header d-flex justify-content-between bg-transparent align-items-center">
                      <h5 className="card-title text-primary">
                        {organizationName}
                      </h5>
                      {activeTab === "member" && (
                        <RdsButton
                          label="New Member"
                          size="small"
                          id=""
                          icon="plus"
                          iconHeight="12px"
                          iconWidth="12px"
                          iconFill={false}
                          colorVariant="primary"
                          type="button"
                          onClick={newUser}
                          data-bs-dismiss="offcanvas"
                          databstoggle="offcanvas"
                          databstarget="#addUserModal"
                          ariacontrols="addUserModal"
                        ></RdsButton>
                      )}
                      {activeTab === "role" && (
                        <RdsButton
                          label="New Role"
                          size="small"
                          icon="plus"
                          iconHeight="12px"
                          iconWidth="12px"
                          iconFill={false}
                          colorVariant="primary"
                          type="button"
						  data-bs-dismiss="offcanvas"
                          databstoggle="offcanvas"
                          databstarget="#addRoleModal"
                          ariacontrols="addRoleModal"
                          onClick={newRole}
                          //className="px-2"
                        ></RdsButton>
                      )}
                    </div>
                    <div className="card-body pt-2">
                      <div className="col-md-12 mb-2">
                        <RdsNavtabs
                          type="tabs"
                          activeNavtabOrder={activeNavtabOrder}
                          fill={false}
                          navtabsItems={navtabsItems}
                        />
                      </div>
                      <div
                        className="row tab-content"
                        id="nav-tabContent" // naveContent
                      >
                        {activeTab === "member" && (
                          <div className="row">
                            <RdsCompDatatable
                              classes="table__userTable"
                              tableHeaders={tableHeadersForMember}
                              tableData={tableDataForMember}
                              pagination={
                                tableDataForMember.length > 5 ? true : false
                              }
                              recordsPerPage={10}
                              noDataTitle="Currently you do not have member"
                              actions={actions}
                              onActionSelection={onMemberActionSelection}
                              recordsPerPageSelectListOption={true}
                            ></RdsCompDatatable>
                          </div>
                        )}
                        {activeTab === "role" && (
                          <div className="row">
                            <RdsCompDatatable
                              classes="table__userTable"
                              tableHeaders={tableHeadersForRoles}
                              tableData={tableDataForRoles}
                              pagination={
                                tableDataForRoles.length > 5 ? true : false
                              }
                              recordsPerPage={10}
                              noDataTitle="Currently you do not have role"
                              actions={actions}
                              onActionSelection={onRoleActionSelection}
                              recordsPerPageSelectListOption={true}
                            ></RdsCompDatatable>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RdsOffcanvas
        placement="end"
        canvasTitle="Select Member"
        offcanvaswidth={500}
        offId="addUserModal"
        backDrop={false}
        scrolling={false}
        preventEscapeKey={false}
      >
        <div className="row form-style">
          <form>
            <div className="tab-content">
              <div className="form-group mb-3">
                <div className="col-md-12  mt-2">
                  <RdsCompDatatable
                    classes="table__userTable"
                    tableHeaders={tableHeadersForUserAdd}
                    tableData={tableDataForUserAdd}
                    pagination={tableDataForUserAdd.length > 5 ? true : false}
                    recordsPerPage={10}
                    enablecheckboxselection={true}
                    noDataTitle="Currently you do not have users"
                    //actions={actions}   (getAllCheckedItems)="getAllCheckedItems($event,true)"
                    recordsPerPageSelectListOption={true}
                  ></RdsCompDatatable>
                </div>
              </div>
            </div>
            <div className="footer-buttons my-2">
              <div className="row">
                <div className="col-md-12 d-flex flex-row">
                  <div>
                    <RdsButton
                      type={"button"}
                      label="cancel"
                      size="small"
                      isOutline={true}
                      colorVariant="primary"
                      databsdismiss="offcanvas"
                      databstoggle="offcanvas"
                      databstarget="#addUserModal"
                    ></RdsButton>
                  </div>
                  <div className="px-2">
                    <RdsButton
                      type={"button"}
                      size="small"
                      label="Save"
                      isDisabled={!selectedUsers || selectedUsers.length == 0}
                      colorVariant="primary"
                      onClick={pushUser}
                      databsdismiss="offcanvas"
                      databstoggle="offcanvas"
                      databstarget="#addUserModal"
                    ></RdsButton>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </RdsOffcanvas>
	  <RdsOffcanvas
        placement="end"
        canvasTitle="Select Roles"
        offcanvaswidth={500}
        offId="addRoleModal"
        backDrop={false}
        scrolling={false}
        preventEscapeKey={false}
      >
        <div className="row form-style">
          <form>
            <div className="tab-content">
              <div className="form-group mb-3">
                <div className="col-md-12  mt-2">
                  <RdsCompDatatable
                    classes="table__userTable"
                    tableHeaders={tableHeadersForRolesAdd}
                    tableData={tableDataForRolesAdd}
                    pagination={tableDataForRolesAdd.length > 5 ? true : false}
                    recordsPerPage={10}
                    enablecheckboxselection={true}
                    noDataTitle="Currently you do not have role"
                    //actions={actions}   (getAllCheckedItems)="getAllCheckedItems($event,true)"
                    recordsPerPageSelectListOption={true}
                  ></RdsCompDatatable>
                </div>
              </div>
            </div>
            <div className="footer-buttons my-2">
              <div className="row">
                <div className="col-md-12 d-flex flex-row">
                  <div>
                    <RdsButton
                      type={"button"}
                      label="cancel"
                      size="small"
                      isOutline={true}
                      colorVariant="primary"
                      databsdismiss="offcanvas"
                      databstoggle="offcanvas"
                      databstarget="#addRoleModal"
                    ></RdsButton>
                  </div>
                  <div className="px-2">
                    <RdsButton
                      type={"button"}
                      size="small"
                      label="Save"
                      isDisabled={!selectedRoles || selectedRoles.length == 0}
                      colorVariant="primary"
                      onClick={pushUser}
                      databsdismiss="offcanvas"
                      databstoggle="offcanvas"
                      databstarget="#addRoleModal"
                    ></RdsButton>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </RdsOffcanvas>
	  <RdsOffcanvas
        placement="end"
        canvasTitle="Select Roles"
        offcanvaswidth={500}
        offId="addRoleModal"
        backDrop={false}
        scrolling={false}
        preventEscapeKey={false}
      >
        <div className="row form-style">
          <form>
            <div className="tab-content">
              <div className="form-group mb-3">
                <div className="col-md-12  mt-2">
                  <RdsCompDatatable
                    classes="table__userTable"
                    tableHeaders={tableHeadersForRolesAdd}
                    tableData={tableDataForRolesAdd}
                    pagination={tableDataForRolesAdd.length > 5 ? true : false}
                    recordsPerPage={10}
                    enablecheckboxselection={true}
                    noDataTitle="Currently you do not have role"
                    //actions={actions}   (getAllCheckedItems)="getAllCheckedItems($event,true)"
                    recordsPerPageSelectListOption={true}
                  ></RdsCompDatatable>
                </div>
              </div>
            </div>
            <div className="footer-buttons my-2">
              <div className="row">
                <div className="col-md-12 d-flex flex-row">
                  <div>
                    <RdsButton
                      type={"button"}
                      label="cancel"
                      size="small"
                      isOutline={true}
                      colorVariant="primary"
                      databsdismiss="offcanvas"
                      databstoggle="offcanvas"
                      databstarget="#addRoleModal"
                    ></RdsButton>
                  </div>
                  <div className="px-2">
                    <RdsButton
                      type={"button"}
                      size="small"
                      label="Save"
                      isDisabled={!selectedRoles || selectedRoles.length == 0}
                      colorVariant="primary"
                      onClick={pushUser}
                      databsdismiss="offcanvas"
                      databstoggle="offcanvas"
                      databstarget="#addRoleModal"
                    ></RdsButton>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </RdsOffcanvas>
	  
    </div>
  );
};
export default OrganizationTree;