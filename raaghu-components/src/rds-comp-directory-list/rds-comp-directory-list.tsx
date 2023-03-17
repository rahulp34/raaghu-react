import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RdsIcon } from "../rds-elements";

export interface RdsCompDirectoryListProps {
  directory: any[];
  path: any;
}

const RdsCompDirectoryList = (props: RdsCompDirectoryListProps) => {
  const [expanded, setExpanded] = useState(false);
  const [directory, setDirectory] = useState(props.directory);

  const handleExpand = (e: any) => {
    debugger;
    setExpanded(!expanded);
    props.path(e);
  };

  useEffect(() => {
    setDirectory(props.directory);
  }, [props.directory]);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            {directory.map((dir) => (
              <div key={dir.name}>
                <div className="d-flex align-items-center ">
                  {dir.hasChildren && (
                    <button className="ms-2 me-2 border-0 bg-white">
                      {expanded ? (
                        <RdsIcon
                          name="chevron_down"
                          height="8px"
                          width="6px"
                          fill={false}
                          stroke={true}
                        ></RdsIcon>
                      ) : (
                        <RdsIcon
                          name="chevron_right"
                          height="8px"
                          width="6px"
                          fill={false}
                          stroke={true}
                        ></RdsIcon>
                      )}
                    </button>
                  )}
                  <span className="me-2 ms-1">
                    <RdsIcon
                      name="folder"
                      height="15px"
                      width="15px"
                      fill={false}
                      stroke={true}
                      colorVariant="primary"
                    />
                  </span>
                  <span
                    onClick={() => {
                      handleExpand({ name: dir.name, id: dir.id });
                    }}
                  >
                    {dir.name}
                  </span>
                  {dir.children && (
                    <span className="ms-2 mt-2">
                      &nbsp;({dir.children.length})
                    </span>
                  )}
                </div>
                {dir.children && expanded && (
                  <RdsCompDirectoryList
                    directory={dir.children}
                    path={props.path}
                  />
                )}
              </div>
            ))}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default RdsCompDirectoryList;
