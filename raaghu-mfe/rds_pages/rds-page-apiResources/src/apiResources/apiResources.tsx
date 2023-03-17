import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { RdsCompDatatable, RdsCompApiResourceBasic, RdsCompClaim } from "../../../rds-components";
import {
    RdsBadge,
    RdsInput,
    RdsButton,
    RdsOffcanvas,
    RdsNavtabs,
} from "../../../../../raaghu-elements/src";

interface RdsPageResourcesProps { }

const ApiResources = (props: RdsPageResourcesProps) => {
    const { t } = useTranslation();
    //const [resourceData, setResourceData] = useState<any[]>([{}]);
    const [newResourceData, setnewResourceData] = useState({
        name: "",
        displayName: "",
        description: "",
        accessTokenSigningAlgorithm: ""
      });

    const [tableDataid, setTableDataRowId] = useState(0);
    const [activeNavTabId, setActiveNavTabId] = useState();
    const [activeNavTabIdEdit, setActiveNavTabIdEdit] = useState();

    const scopeSelection = (rowData: any, actionId: any) => {
        setTableDataRowId(rowData.id)
        //dispatch(editScopeshData(rowData.id) as any);
    };

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

    const navtabsItems = [
        { label: "Basics", tablink: "#nav-home", id: 0 },
        { label: "Claims", tablink: "#nav-role", id: 1 },
    ];


    const resourceData = [
        {
          "id": 1,
          "name": "Standard",
          "displayName": 60,
          "description": 5
        },
        {
          "id": 2,
          "name": "Basic",
          "displayName": 120,
          "description": 10
        },
        {
          "id": 3,
          "name": "Premium",
          "displayName": 250,
          "description": 5
        },
        
      ]

     const resources = [
        {
          id: 1,
          displayName: "A - E",
          selected: false,
          children: [
            {
              id: 1,
              p_id: 1,
              displayName: "Availability",
              selected: false,
            },
            {
              id: 2,
              p_id: 1,
              displayName: "Apiopolis",
              selected: false,
            },
            {
              id: 3,
              p_id: 1,
              displayName: "Apigenix",
              selected: false,
            },
            {
              id: 4,
              p_id: 1,
              displayName: "Best Selector",
              selected: false,
            },
            {
              id: 5,
              p_id: 1,
              displayName: "Best Selector",
              selected: false,
            },
            {
              id: 6,
              p_id: 1,
              displayName: "Creative",
              selected: false,
            },
            {
              id: 7,
              p_id: 1,
              displayName: "ALT Genix Api",
              selected: false,
            },
            {
              id: 8,
              p_id: 1,
              displayName: "Dev Support Api",
              selected: false,
            },
          ],
        },
        {
          id: 2,
          displayName: "F - O",
          selected: false,
          children: [
            {
              id: 1,
              p_id: 2,
              displayName: "Availability",
              selected: false,
            },
            {
              id: 2,
              p_id: 2,
              displayName: "Apiopolis",
              selected: false,
            },
            {
              id: 3,
              p_id: 2,
              displayName: "Apigenix",
              selected: false,
            },
            {
              id: 4,
              p_id: 2,
              displayName: "Best Selector",
              selected: false,
            },
            {
              id: 5,
              p_id: 2,
              displayName: "Best Selector",
              selected: false,
            },
            {
              id: 6,
              p_id: 2,
              displayName: "Creative",
              selected: false,
            },
            {
              id: 7,
              p_id: 2,
              displayName: "ALT Genix Api",
              selected: false,
            },
            {
              id: 8,
              p_id: 2,
              displayName: "Dev Support Api",
              selected: false,
            },
          ],
        },
        {
          id: 3,
          displayName: "P - Z",
          selected: false,
          children: [
            {
              id: 1,
              p_id: 3,
              displayName: "Availability",
              selected: false,
            },
            {
              id: 2,
              p_id: 3,
              displayName: "Apiopolis",
              selected: false,
            },
            {
              id: 3,
              p_id: 3,
              displayName: "Apigenix",
              selected: false,
            },
            {
              id: 4,
              p_id: 3,
              displayName: "Best Selector",
              selected: false,
            },
            {
              id: 5,
              p_id: 3,
              displayName: "Best Selector",
              selected: false,
            },
            {
              id: 6,
              p_id: 3,
              displayName: "Creative",
              selected: false,
            },
            {
              id: 7,
              p_id: 3,
              displayName: "ALT Genix Api",
              selected: false,
            },
            {
              id: 8,
              p_id: 3,
              displayName: "Dev Support Api",
              selected: false,
            },
          ],
        },
      ]

    const offCanvasHandler = () => {

    };

    return (
        <div>

            <div className="row align-items-center">
                <div className="d-flex justify-content-between">
                    <h4>Api Resource List </h4>
                    <div className="d-flex justify-content-end">
                        <RdsOffcanvas
                            canvasTitle={("New Api Resource")}
                            onclick={offCanvasHandler}
                            placement="end"
                            offcanvaswidth={550}
                            offcanvasbutton={
                                <div>
                                    <RdsButton
                                        icon="plus"
                                        label={("New Resource") || ""}
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
                            offId={"client"}
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
                                    <>
                                      <RdsCompApiResourceBasic email={newResourceData.name} fullname={newResourceData.displayName} message={newResourceData.description} accessTokenSigningAlgorithm={newResourceData.accessTokenSigningAlgorithm}  />
                                    </>
                                )}
                                {activeNavTabId == 1 && (
                                    <>
                                        <RdsCompClaim resources={resources} onCreate={function (State: any): void {
                                            throw new Error("Function not implemented.");
                                        } } onCancel={function (State: any): void {
                                            throw new Error("Function not implemented.");
                                        } }></RdsCompClaim>
                                    </>
                                )}
                            </RdsNavtabs>
                        </RdsOffcanvas>
                    </div>
                </div>

            </div>
            <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
                <RdsCompDatatable
                    tableHeaders={tableHeaders}
                    actions={actions}
                    tableData={resourceData}
                    pagination={true}
                    recordsPerPage={10}
                    recordsPerPageSelectListOption={true}
                    onActionSelection={scopeSelection}
                ></RdsCompDatatable>

                {/* <RdsOffcanvas
             backDrop={true}
             preventEscapeKey={true}
             scrolling={false}
             offId="entity-edit-off"
             placement="end"
             canvasTitle="Edit"
             offcanvaswidth={550}
             children={
               <RdsCompScopeBasicResource saveApiScopeData={(data:any)=>{updateScope(data)}} />
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
           /> */}
            </div>

        </div>
    );
};

export default ApiResources;
