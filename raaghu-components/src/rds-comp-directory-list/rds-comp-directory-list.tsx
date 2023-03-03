import React,{useState} from "react";
import { RdsIcon } from "../rds-elements";

export interface RdsDirectoryListProps {
  directory: Directory[];
}

export interface Directory {
  name: string;
  children?: Directory[];
}

const RdsDirectoryList = ({ directory }: RdsDirectoryListProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <ul>
      {directory.map((dir) => (
        <div key={dir.name}>
          <div className="d-flex align-items-center">
            {dir.children && (
              <button className="me-2 border-0 bg-white" onClick={handleExpand}>
                {expanded ? <RdsIcon name="chevron_down" height="8px" width="6px"  fill={false} stroke={true}></RdsIcon> : <RdsIcon name="chevron_right" height="8px" width="6px" fill={false} stroke={true}></RdsIcon>}
              </button>
            )}
            <span className="me-2 ms-1">
            <RdsIcon name="folder" height="15px" width="15px" fill={false} stroke={true} colorVariant="primary"  />
            </span>
            <span>{dir.name}</span>
            {dir.children && <span className="ms-2 mt-2">&nbsp;({dir.children.length})</span>}
          </div>
          {dir.children && expanded && (
            <RdsDirectoryList directory={dir.children} />
          )}
        </div>
      ))}
    </ul>
  );
};

export default RdsDirectoryList;

