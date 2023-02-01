import React, { useState} from "react";
import RdsCompAlertPopup from "../rds-comp-alert-popup/rds-comp-alert-popup";
import { RdsIcon, RdsButton, RdsOffcanvas, RdsInput } from "../rds-elements";
import "./rds-comp-organization-tree.scss";
export interface RdsComporganizationTreeProps {
 counter?: number;
 nodeColor:any[],
 organizationTreeData:any[];
 OrganizationTreeType?:any;
 OrganizationTreeLabeles?:any;
 mutable: boolean;
 onSelectnode ?:(item: any ) => void
 onDeleteNode?:(id: any) => void 
 onNodeEdit?:React.MouseEventHandler<HTMLButtonElement>
 getSelectedParent?:React.MouseEventHandler<HTMLButtonElement>
}

const RdsComporganizationTree = (props: RdsComporganizationTreeProps) => {
  const CancelClick = () => {};
  const [Tdata, setTdata] = useState(props.organizationTreeData);
  const hasChild = props.organizationTreeData.length === 0 ? false : true;
  const [value, setValue] = useState("");
  
  const addNode = (nodeArray:any) => {
   if (nodeArray && nodeArray[0].data) {
    props?.getSelectedParent!==undefined&&props.getSelectedParent(nodeArray[0].data.parentId);
    }
 }

  const TreeNode = ({node,index,listlength}:{ node: any; index:any ;listlength:any}) => {
    const[Edit, setEdit]=useState('')
    const addNestedNode=(node:any)=> {
    if (node && node.data) {
      props?.getSelectedParent!==undefined&&props.getSelectedParent(node.data.id);
    }
    }
  
  const onClickNode=(node: any)=> {
    props.onSelectnode!==undefined && props.onSelectnode({ item: node })
  }
  
  const setStateBasedOnMutable=(props.mutable===false && index===listlength.length-1) ?false:true;
   const CancelClick = () => {};
   const hasChild = node.children ? true : false;
   const getNodeColor=(level: number) =>{
     return props?.nodeColor[(level - 1) % 4];
   }
   const onEdit =(node: any)=>{
    props.onNodeEdit!==undefined&&props.onNodeEdit(node);
  }
  const  deleteConfirmation=(nodekey:any)=> {
  props.onDeleteNode!==undefined&&props.onDeleteNode(nodekey);
  }
   return (
     <>
       {node &&( <>
          <div style={{ height: "8px" }}></div>
           <li key={node.data.id}>
             <div className="position-relative">
           {setStateBasedOnMutable&&<div  className="vertical"></div>} 
           
           
               <div className="d-flex align-items-center unitName">
                 <div
               className="node_dot" style={{backgroundColor:getNodeColor(node.level)}}>
                   <div
                 className={`${
                  node ? `${node.level === 1 ? " " : "horizontal"}` : ""
                 }`}
               ></div> </div>
               <span className="mt-1 ms-2 node-label d-flex"> <span onClick={()=>onClickNode(node)}
               >{node.data.displayName}</span>
                  <span className="node-icon">
                   <a 
                    className="pl-3 mx-2"
                     type="button"   
                     data-bs-toggle="offcanvas"
                     data-bs-target={`#a${node.data.id}`}
                     onClick={()=>setEdit('')}
                     >
                     <RdsIcon
                       name={"plus"}
                       height="15px"
                       width="15px"
                       stroke={true}
                     ></RdsIcon>
                    </a>
                   <a
                    className="mx-2"
                     type="button"
                     data-bs-toggle="offcanvas"
                     data-bs-target={`#b${node.data.id}`}
                    onClick={()=>setEdit(node.label)}
                     >
                      <RdsIcon
                       name={"pencil"}
                       width="15px"
                       height="15px"
                       stroke={true}
                     ></RdsIcon>
                   </a>
                      
                   <a
                    className="mx-2"
                     type="button"   
                     data-bs-toggle="modal"
                     data-bs-target={`#deleteTreeNode${node.data.id}`}
                     >
                     <RdsIcon 
                       name={"delete"}
                       height="16px"
                       width="20px"
                       stroke={true}
                     ></RdsIcon>
                   </a>
                   </span></span>
               </div>
             { node.data.displayName&& 
             <span className="member-count text-muted fs-6" >
              ({node.data.memberCount} Member{node.data.memberCount>1?'s':''})</span>}
        
               {hasChild && (
                 <div>
                   <ul key={node.data.id} className='unitName'>
                     <RdsComporganizationTree
                       organizationTreeData={node.children}
                       key={node.data.id}
                       mutable={props.mutable}
                       nodeColor={props.nodeColor}
                     ></RdsComporganizationTree>
                   </ul>
                 </div>
               )}
             </div>
           </li>
                      <RdsOffcanvas
                         placement="end"
                         canvasTitle="New Organization Unit"
                         offcanvaswidth={500}
                         offId={`a${node.data.id}`}
                         backDrop={false}
                         scrolling={false}
                         preventEscapeKey={false}
                       >
                         <RdsInput
                           label='Name'
                           labelPositon="top"
                           id={node.data.id}
                           redAsteriskPresent={true}
                           size="medium"
                           name={Edit}
                           value={Edit}
                           onChange={(e)=>setEdit(e.target.value)}
                         ></RdsInput>
                         <div
                           className="d-flex"
                           style={{ position: "absolute", bottom: "15%" }}
                         >
                           <div className="me-3">
                             <RdsButton
                               type={"button"}
                               label="cancel"
                               isOutline={true}
                               colorVariant="primary"
                               onClick={CancelClick}
                               databsdismiss="offcanvas"
                               databstoggle="offcanvas"
                               databstarget={`#a${node.data.id}`}
                             ></RdsButton>
                           </div>
                           <RdsButton
                             type={"button"}
                             label="save"
                             isDisabled={Edit===''}
                             colorVariant="primary"
                             onClick={()=>addNestedNode(node)}
                             databsdismiss="offcanvas"
                             databstoggle="offcanvas"
                             databstarget={`#a${node.data.id}`}
                           ></RdsButton>
                         </div>
                       </RdsOffcanvas>
                  
                     <RdsOffcanvas
                       placement="end"
                       canvasTitle="Edit Organization Unit"
                       offcanvaswidth={500}
                       offId={`b${node.data.id}`}
                       backDrop={false}
                       scrolling={false}
                       preventEscapeKey={false}
                     >
                      <RdsInput
                         inputType="text"
                         label='Name'
                         labelPositon="top"
                         id={node.data.id}
                         redAsteriskPresent={true}
                         name={Edit}
                         value={Edit}
                         size="medium"
                         onChange={(e)=>setEdit(e.target.value)}
                       ></RdsInput>
                       <div
                         className="d-flex"
                         style={{ position: "absolute", bottom: "15%" }}
                       >
                         <div className="me-3">
                           <RdsButton
                             type={"button"}
                             label="cancel"
                             isOutline={true}
                             colorVariant="primary"
                             onClick={CancelClick}
                             databsdismiss="offcanvas"
                             databstoggle="offcanvas"
                             databstarget={`#b${node.data.id}`}
                           ></RdsButton>
                         </div>
                         <RdsButton
                           type={"button"}
                           label="save"
                           isDisabled={Edit===''}
                           colorVariant="primary"
                           onClick={() => onEdit(node.data.id)}
                           databsdismiss="offcanvas"
                           databstoggle="offcanvas"
                           databstarget={`#b${node.data.id}`}
                         ></RdsButton>
                       </div>
                     </RdsOffcanvas>
                     <RdsCompAlertPopup
                       alertID={`deleteTreeNode${node.data.id}`}
                       onSuccess={() => deleteConfirmation(node.data.id)}
                     ></RdsCompAlertPopup>
           </>
       )}
     </>
   );
  };
  
  return (
    <>
      <ul className="position-relative mb-0" style={{ listStyle:"none" }}>
       {Tdata.map((tree,index) => (
          <div key={tree.key}>
            <TreeNode
              node={tree}
              index={index}
              listlength={Tdata}
            ></TreeNode>
         </div>
        ))}
        {hasChild && <div style={{ height:"18px" }}></div>}
      </ul>

      {hasChild&&props.mutable === true && (
        <div>
          <div className="mb-2 ms-4">
           {Tdata[0].length !== 0 && (
              <div className='unitName'>
                {Tdata[Tdata.length - 1] && (
                  <RdsOffcanvas
                  placement="end"
                  canvasTitle="Add Organiztion Sub-Unit"
                  offcanvaswidth={500}
                  offcanvasbutton={
                    <RdsButton
                    iconHeight="10px"
                    iconWidth="10px"
                    iconColorVariant="dark"
                    type={"button"}
                    icon={"Plus"}
                    size={"small"}
                    colorVariant={"primary"}
                    label={`${Tdata[0].level===1?'NEW-ROOT-UNIT':'SUB-UNIT'}`}
                  ></RdsButton>
                  }
                  backDrop={false}
                  scrolling={false}
                  preventEscapeKey={false}
                  offId={`d${Tdata[Tdata.length - 1].key}`}
                  >
                  <RdsInput
                    label={"Add Organization name"}
                    labelPositon="top"
                    redAsteriskPresent={true}
                    size="medium"
                    onChange={(e)=>setValue(e.target.value)}
                    value={value}
                  ></RdsInput>
                  <div
                    className="d-flex"
                    style={{ position: "absolute", bottom: "15%" }}
                  >
                    <div className="me-3">
                      <RdsButton
                        type={"button"}
                        label="cancel"
                        colorVariant="primary"
                        isOutline={true}
                        databsdismiss="offcanvas"
                        databstoggle="offcanvas"
                        databstarget={`#d${Tdata[Tdata.length - 1].key}`}
                        onClick={CancelClick}
                      ></RdsButton>
                    </div>
                    <RdsButton
                      type={"button"}
                      label="save"
                      isDisabled={value===''}
                      colorVariant="primary"
                      databsdismiss="offcanvas"
                      databstoggle="offcanvas"
                      databstarget={`#d${Tdata[Tdata.length - 1].key}`}
                      onClick={()=>addNode(Tdata)}
                    ></RdsButton>
                    </div>
                  </RdsOffcanvas>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default RdsComporganizationTree;
