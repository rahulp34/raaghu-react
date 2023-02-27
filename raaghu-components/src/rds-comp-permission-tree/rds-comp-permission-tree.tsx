import "./rds-comp-permission-tree.scss";
import React, { useState, useEffect} from "react";
import { RdsCheckbox } from "raaghu-react-elements";

export interface RdsCompPermissionTreeProps {
  permissions: any[];
  selectedPermissions: (data: any) => any;
}

const RdsCompPermissionTree = (props: RdsCompPermissionTreeProps) => {

  // UseStates
  const finalPermissionData = props.permissions.map((x: any) => ({
    ...x, isChecked: false, isIntermediate: false, permissions: x.permissions.map((m: any) => (
      { ...m, isIntermediate: false }
    ))
  }));

  const [treeData, setTreeData] = useState(finalPermissionData);
  const [selectAll, setSelectAll] = useState(false);
  const [selectAllInter, setSelectAllInter] = useState(false);  

  useEffect(() => {
    for (let i = 0; i < treeData.length; i++) {
      const grantedPermissions = treeData[i].permissions.filter((x: any) => x.isGranted);
      if (grantedPermissions.length > 0) {
        for (let childIndex = 0; childIndex < grantedPermissions.length; childIndex++) {
          if (grantedPermissions[childIndex].isGranted) selectChild(grantedPermissions[childIndex].isGranted, grantedPermissions[childIndex], i);
        }
      }
    }
  }, []);

  // Select All Permissions
  function selectAllFn(event: any) {
    const allCheck = treeData.map(item => (
      {
        ...item, isChecked: event, isIntermediate: false,
        permissions: item.permissions.map((permItems: any) => ({ ...permItems, isGranted: event, isIntermediate: false }))
      }
    ));
    setSelectAll(event);
    setSelectAllInter(false);
    setTreeData(allCheck);
    emitData(allCheck);
  };

  // select Particluar Parent
  function selectParentFn(event: any, checkData: any) {
    checkData.isChecked = event;
    const selectAllChild = treeData.map((parent: any) => {
      return {
        ...parent, isChecked: checkData.name === parent.name ? event : parent.isChecked,
        isIntermediate: checkData.name === parent.name ? false : parent.isIntermediate, permissions: parent.permissions.map((child: any) => (
          {
            ...child, isGranted: checkData.name === parent.name ? event : child.isGranted,
            isIntermediate: checkData.name === parent.name ? false : child.isIntermediate
          }
        ))
      }
    });
    setTreeData(selectAllChild);
    setAll(selectAllChild);
    emitData(selectAllChild);
  }

  // Select Children
  function selectChild(event: any, checkData: any, mainParentIndex: any) {
    checkData.isGranted = event;
    const data = treeData.map(parent => {
      return {
        ...parent, permissions: parent.permissions.map((child: any) => {
          if (parent.permissions.length > 0) {
            if (checkData.parentName !== null) {
              if (checkData.name === child.name) return { ...child, isGranted: event, isIntermediate: false };
              const childCheckLength = parent.permissions.filter((x: any) => x.parentName === child.name && x.parentName !== null && x.isGranted).length;
              const childLength = parent.permissions.filter((x: any) => x.parentName === child.name).length;
              return checkData.parentName === child.name ? {
                ...child, isGranted: childCheckLength > 0 && childCheckLength < childLength ? true : childCheckLength === childLength ? true : false,
                isIntermediate: childCheckLength > 0 && childCheckLength < childLength ? true : false
              } : { ...child };
            } else if (checkData.parentName === null) {
              const childrenLength = parent.permissions.filter((x: any) => x.parentName === checkData.name).length;
              return childrenLength > 0 ? {
                ...child, isGranted: child.parentName === checkData.name || child.name === checkData.name ? event : child.isGranted,
                isIntermediate: child.name === checkData.name ? false : child.isIntermediate
              } : { ...child, isGranted: child.name === checkData.name ? event : child.isGranted, isIntermediate: child.name === checkData.name ? false : child.isIntermediate };
            };
          };
        })
      };
    });
    const parents = data[mainParentIndex].permissions.filter((x: any) => x.parentName === null);
    const grantedParentLength = parents.filter((x: any) => x.isGranted).length;
    const interParentLength = parents.filter((x: any) => x.isIntermediate).length;
    const itemData = data.map((main, i) => (grantedParentLength === parents.length ? { ...main, isChecked: mainParentIndex === i ? true : main.isChecked, isIntermediate: interParentLength > 0 ? true : false } :
      grantedParentLength > 0 && grantedParentLength < data.length ? { ...main, isChecked: mainParentIndex === i ? true : main.isChecked, isIntermediate: true } :
        { ...main, isChecked: mainParentIndex === i ? false : main.isChecked, isIntermediate: false }));
    setAll(itemData);
    setTreeData(itemData);
    emitData(itemData);
  }

  // Emit Selected Data
  function emitData(data: any[]) {
    const emitPermissions: any = [];
    for (let i = 0; i < data.length; i++) {
      data[i].permissions.filter((x: any) => x.isGranted).forEach((ele: any) => {
        const item = { name: ele.name, isGranted: ele.isGranted };
        emitPermissions.push(item);
      });
    }
    props.selectedPermissions(emitPermissions);
  }

  // Show Vertical Line
  function showVerticalLine(node: any, mainParentIndex: number) {
    const per = finalPermissionData[mainParentIndex].permissions;
    const data = per.length;
    const lastElementName = per[per.length - 1].name;
    return data > 0 && data <= 1 ? false : lastElementName === node.name ? false : true;
  }

  // Set SelectAll Main Checkbox
  function setAll(data: any) {
    const getGrantedLength = data.filter((x: any) => x.isChecked).length;
    const getInterLength = data.filter((x: any) => x.isIntermediate).length;
    setSelectAllInter(getGrantedLength === data.length ? (getInterLength > 0 ? true : false) : getGrantedLength > 0 && getGrantedLength < data.length ? true : false);
    setSelectAll(getGrantedLength === data.length || (getGrantedLength > 0 && getGrantedLength < data.length) ? true : false);
  }

  // Custom height of vertical line for parent
  function customHeightParent(node: any): string {
    const lastElement = finalPermissionData[finalPermissionData.length - 1];
    return lastElement.name == node.name ? (lastElement.permissions.length * 50).toString() + '%' : '100%';
  }

  // Custom height of vertical line for child
  function customHeightChild(node: any, mainParentIndex: number) {
    const lastChildElement = finalPermissionData[mainParentIndex].permissions[finalPermissionData[mainParentIndex].permissions.length - 1];
    if (lastChildElement.name === node.name) return '0%'
    return '100%';
  }

  return (
    <>
      <div className="checkedstyle dottedstyle">
        <div className="position-relative">
          <div className="vertical-dotted-line-select-all"></div>
          <RdsCheckbox label={"Select All"} checked={selectAll} onChange={(e) => selectAllFn(e.target.checked)} state={selectAllInter ? 'Indeterminate' : 'Checkbox'} />
        </div>
        {treeData.map((mainParent, mainParentIndex) => (
          <div className="ms-4 position-relative">
            <div className="vertical-dotted-line" style={{ 'height': customHeightParent(mainParent) }} ></div>
            <div className="position-relative pt-4">
              <RdsCheckbox label={mainParent.displayName} checked={mainParent.isChecked} state={mainParent.isIntermediate ? 'Indeterminate' : 'Checkbox'} onChange={(e) => selectParentFn(e.target.checked, mainParent)} />
              <div className="horizontal-dotted-line dottedstyle"></div>
            </div>
            {mainParent.permissions.map((parent: any, i: number) => (
              <div className="ms-4 position-relative">
                <div className={'vertical-dotted-line ' + `${!showVerticalLine(parent, mainParentIndex) ? 'd-none' : ''}`}
                  style={{ 'height': customHeightChild(parent, mainParentIndex) }} ></div>
                <div className={'position-relative pt-4 ' + `${parent.parentName === null ? '' : 'ms-4'}`}>
                  <RdsCheckbox label={parent.displayName} state={parent.isIntermediate ? 'Indeterminate' : 'Checkbox'} checked={parent.isGranted} onChange={(e) => selectChild(e.target.checked, parent, mainParentIndex)} />
                  <div className="horizontal-dotted-line dottedstyle"></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default RdsCompPermissionTree;