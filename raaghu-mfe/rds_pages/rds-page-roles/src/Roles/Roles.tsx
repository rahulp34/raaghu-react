import React, { useState , useEffect } from "react";
import {
  RdsBadge,
  RdsInput,
  RdsButton,
  RdsOffcanvas,
  RdsNavtabs,
  RdsTextArea,
  RdsCheckbox,
} from "../../../../../raaghu-elements/src";

import { RdsCompDatatable, RdsCompOrganizationTree } from "../../../rds-components"; 
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../libs/state-management/hooks";
import {
  fetchRoles
} from "../../../../libs/state-management/roles/roles-slice";

interface RdsPageRolesProps {}

const Roles = (props: RdsPageRolesProps) => {
  const [activeTab, setActiveTab] = useState("basic");
  const [roles, setRoles] = useState([]);

  const enablecheckboxselection = true;
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.persistedReducer.roles) as any;

  useEffect(() => {
    dispatch(fetchRoles() as any);

  }, [dispatch]);
  useEffect(() => {
    console.log(data.roles)
    if(data.roles){
      const tempData = data.roles.map((curr:any)=>{
        return{
          id:curr.id,
          name: (<> <div>
            {curr.name}
           {curr.isDefault && <RdsBadge label="Default" size="medium" colorVariant="success" ></RdsBadge>  }
           {curr.isPublic && <RdsBadge label="Public" size="medium" colorVariant="primary" ></RdsBadge>  } 
            </div></> ),
        }
      })
      setRoles(tempData)
    }
   
  }, [data.roles]);

  const handleractiveNavtabOrder = (id: any) => {
   
    setActiveTab(id);
  };
  const tableHeader = [
    {
      displayName: "Role Name",
      key: "name",
      datatype: "children",
      sortable: true,
    },
  ];
  let actions: any = [
    { id: "delete", displayName: "Delete", offId: "rolesD" },
    { id: "edit", displayName: "Edit", offId: "newRole" },
  ];
  const handlerActions =()=>{

  }
  return (
    <>
    <div className="d-flex justify-content-between">
        <h4 >Roles </h4>
        <div className="d-flex justify-content-end">
                <RdsButton
                  icon="plus"
                  label="New Role"
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
                  databstarget='#newRole'
                ></RdsButton>
        
        </div>
      </div>
       <div className="card p-3 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <RdsCompDatatable
          classes="table__userTable"
          tableHeaders={tableHeader}
          tableData={roles}
          pagination={roles?.length > 5 ? true : false}
          recordsPerPage={10}
          noDataTitle="Currently you do not have Role"
          actions={actions}
          onActionSelection={handlerActions}
          recordsPerPageSelectListOption={true}
        ></RdsCompDatatable>
      <RdsOffcanvas
        placement="end"
        canvasTitle="New Role"
        offcanvaswidth={500}
        offId='newRole'
        backDrop={false}
        scrolling={false}
        preventEscapeKey={false}
      >
         <RdsNavtabs
          type="tabs"
          activeNavtabOrder={handleractiveNavtabOrder}
          fill={false}
          navtabsItems={[
            {
              label: "Basic",
              tablink: "#nav-Operation",
              id: "basic",
            },
            { label: "Permissions",
             tablink: "#nav-Change",
             id: "permissions" },
          ]}
        />
        <div className="mt-2">
{activeTab=='basic'&& <div>  <div className=" mt-3 " >
       
          <RdsInput
          inputType="text"
          label="Role Name"
          labelPositon="top"
          placeholder="Enter Name"
          // id={node.data.id}
          required={true}
          //  name={Edit}
          //  value={Edit}
          size="medium"
          //onChange={(e)=>setEdit(e.target.value)}
        ></RdsInput>
         
         
       
       
        </div>

         <div className="d-flex mt-4">
          <RdsCheckbox label='Default Role' checked={true}></RdsCheckbox>
          <RdsCheckbox label='Default Role' checked={false}></RdsCheckbox>
        </div>
        <div className="d-flex" style={{ position: "absolute", bottom: "2%" }}>
          <div className="me-3">
            <RdsButton
              type={"button"}
              label="cancel"
              isOutline={true}
              colorVariant="primary"
              // onClick={CancelClick}
              databsdismiss="offcanvas"
              databstoggle="offcanvas"
              databstarget='#newRole'
            ></RdsButton>
          </div>
          <RdsButton
            type={"button"}
            label="save"
            //   isDisabled={Edit===''}
            colorVariant="primary"
            //   onClick={() => onEdit(node)}
            databsdismiss="offcanvas"
            databstoggle="offcanvas"
            databstarget='#newRole'
          ></RdsButton>
        </div></div>}
{activeTab!=='basic'&&<div>

  </div>}
        </div>
      
      </RdsOffcanvas>
      </div>
    </>
  );
};

export default Roles;
