import React, { useEffect, useState } from "react";
import { RdsCheckbox } from "../rds-elements";

function TreeNode(props:any) {

  const hasChildren = props.node.children && props.node.children.length > 0;
       const[checked, SetChecked] = useState(props.node.selected)
  return (
    <div className="mt-1">
      <div className="my-3">
        <RdsCheckbox
          label ={props.node.label}
          checked={checked}

          onChange={(e) =>{ props.onCheckboxChange(props.node, e.target.checked)
          SetChecked(e.target.checked)}}
        />
      </div>
     
      {hasChildren && (
        <div className="mx-4">
          {props.node.children.map((child:any) => (
            <TreeNode
              key={child.data?.id}
              node={child}
              onCheckboxChange={props.onCheckboxChange}
            />
          ))}
        </div>
      )}
    </div>
  );
}
 

function RdsCompPermissionTreeNew(props:any) {
  const [treeData, setTreeData]=useState(props.treeData)
  useEffect(()=>{
       setTreeData(props.treeData)
  },[props])
  return (
    <div>
      {treeData?.map((node:any) => (
        <TreeNode
          key={node.data?.id}
          node={node}
          onCheckboxChange={props.onCheckboxChange}
        />
      ))}
    </div>
  );
}

export default RdsCompPermissionTreeNew;

