import React, { useState } from "react";
import RdsCompAlertPopup from "../rds-comp-alert-popup/rds-comp-alert-popup";
import {
  RdsIcon,
  RdsButton,
} from "../rds-elements";
import "./rds-comp-organization-tree.css";
export interface RdsCompOrganizationTreeProps {
  counter?: number;
  nodeColor: any[];
  organizationTreeData: any[];
  OrganizationTreeType?: any;
  OrganizationTreeLabeles?: any;
  mutable: boolean;
  offId?: any;
  onSelectNode?: (item: any) => void;
  onDeleteNode?: (id: any) => void;
  onNodeEdit?: (data: any) => void;
  onCreateNode?: (node: any) => void;
  onCreateSubUnit?: (node: any) => void;
}

const RdsCompOrganizationTree = (props: RdsCompOrganizationTreeProps) => {
  const handlerExtraBackdrop =()=>{
    const allBackdrops = document.querySelectorAll('.offcanvas-backdrop')
    if (allBackdrops.length > 1) {
      for (let i = 0; i < allBackdrops.length - 1; i++) {
        allBackdrops[i].remove();
      }
    }}
  const TreeNode = ({
    node,
    index,
    listlength,
  }: {
    node: any;
    index: any;
    listlength: any;
  }) => {
    const setStateBasedOnMutable =
      props.mutable === false && index === listlength ? false : true;
    const getNodeColor = (level: number) => {
      return props?.nodeColor[(level - 1) % 4];
    };

    
    return (
      <>
        {node && (
          <>
            <div style={{ height: "8px" }}></div>
            <li key={node.data.id}>
              <div className="position-relative">
                {setStateBasedOnMutable && <div className="vertical"></div>}

                <div className="d-flex align-items-center unitName">
                  <div
                    className="node_dot"
                    style={{ backgroundColor: getNodeColor(node.level) }}
                  >
                    <div
                      className={`${
                        node ? `${node?.level === 1 ? " " : "horizontal"}` : ""
                      }`}
                    ></div>
                  </div>
                  <span className="mt-1 ms-2 node-label d-flex">
                    {" "}
                    <span
                      className="cursor-pointer"
                      onClick={() =>{
                        props.onSelectNode && props.onSelectNode(node)}
                      }
                    >
                      {node.data.displayName}
                    </span>
                    <span className="node-icon1">
                      <a
                        className="pl-3 mx-2"
                          href={`#a${props.offId}`}
                          role="button"
                          aria-controls={`a${props.offId}`}
                          data-bs-toggle="offcanvas"
                          onClick={() => {
                            handlerExtraBackdrop()
                            props.onCreateNode && props.onCreateNode(node.data)}}
                      >
                        <RdsIcon
                          name={"plus"}
                          height="15px"
                          width="15px"
                          stroke={true}
                          dataTestId="add-icon"
                        ></RdsIcon>
                      </a>
                      <a
                        className="mx-2"
                        href={`#b${props.offId}`}
                        role="button"
                        aria-controls={`b${props.offId}`}
                        data-bs-toggle="offcanvas"
                        onClick={() =>
                          {
                            handlerExtraBackdrop()
                          props.onNodeEdit && props.onNodeEdit(node.data)
                        }}
                      >
                        <RdsIcon
                          name={"pencil"}
                          width="15px"
                          height="15px"
                          stroke={true}
                          dataTestId="edit-icon"
                        ></RdsIcon>
                      </a>

                      <a
                        className="mx-2"
                        href={`#deleteTreeNode`}
                        role="button"
                        aria-controls="deleteTreeNode"
                        data-bs-toggle="modal"
                        onClick={() =>
                          props.onDeleteNode && props.onDeleteNode(node.data.id)
                        }
                      >
                        <RdsIcon
                          name={"delete"}
                          height="16px"
                          width="20px"
                          stroke={true}
                          dataTestId="delete-icon"
                        ></RdsIcon>
                      </a>
                    </span>
                  </span>
                </div>
                {node.data.displayName && (
                  <span className="member-count text-muted fs-6">
                    ({node.data.memberCount} Member
                    {node.data.memberCount > 1 ? "s" : ""})
                  </span>
                )}

                {node.children?.length != 0 && (
                  <div>
                    <ul key={node.data.id} className="unitName">
                      <ul
                        className="position-relative mb-0"
                        style={{ listStyle: "none" }}
                      >
                        {node.children.map((tree: any, index: any) => (
                          <div key={tree.data.id}>
                            <TreeNode
                              node={tree}
                              index={index}
                              listlength={props.organizationTreeData}
                            ></TreeNode>
                          </div>
                        ))}
                        {node.children?.length != 0 && (
                          <div style={{ height: "18px" }}></div>
                        )}
                      </ul>

                      <div>
                        <div className="mb-2 ms-5">
                          {node.children?.length !== 0 && (
                            <div className="unitName">
                              {node.children[node.children?.length - 1] && (
                                <RdsButton
                                  iconHeight="10px"
                                  iconWidth="10px"
                                  iconColorVariant="dark"
                                  type={"button"}
                                  icon={"Plus"}
                                  size={"small"}
                                  colorVariant={"primary"}
                                  label={`${
                                    node.children[0].level === 1
                                      ? "NEW-ROOT-UNIT"
                                      : "SUB-UNIT"
                                  }`}
                                  // data-bs-dismiss="offcanvas"
                                  databstoggle="offcanvas"
                                  databstarget={`#c${props.offId}`}
                                  ariacontrols={`c${props.offId}`}
                                  onClick={() => {
                                    handlerExtraBackdrop()
                                    props.onCreateSubUnit &&
                                    props.onCreateSubUnit(node.data)
                                  }}
                                  dataTestId="new-sub-unit"
                                />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </>
        )}
      </>
    );
  };

  return (
    <>
      <ul className="position-relative mb-0 ms-3" style={{ listStyle: "none" }}>
        {props.organizationTreeData.map((tree, index) => (
          <div key={tree.data.id}>
            <TreeNode
              node={tree}
              index={index}
              listlength={props.organizationTreeData?.length - 1}
            ></TreeNode>
          </div>
        ))}
        {props.organizationTreeData?.length !== 0 && (
          <div style={{ height: "18px" }}></div>
        )}
      </ul>

      {props.mutable === true && (
        <div>
          <div className="mb-2 ms-4">
            <div className="unitName">
              <RdsButton
                iconHeight="10px"
                iconWidth="10px"
                iconColorVariant="dark"
                type={"button"}
                icon={"Plus"}
                size={"small"}
                colorVariant={"primary"}
                label="NEW-ROOT-UNIT"
                data-bs-dismiss="offcanvas"
                databstoggle="offcanvas"
                databstarget={`#d${props.offId}`}
                ariacontrols={`d${props.offId}`}
                onClick={handlerExtraBackdrop}
                dataTestId="new-root-unit"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RdsCompOrganizationTree;
