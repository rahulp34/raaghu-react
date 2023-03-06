import React,{useState} from "react";
import { Link } from "react-router-dom";
import { RdsIcon } from "../rds-elements";

export interface RdsCompDirectoryListProps {
  directory: Directory[];
  path:any;
}

export interface Directory {
  name: string;
  children?: Directory[];
  path : any;
}

const RdsCompDirectoryList = (props: RdsCompDirectoryListProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = (e:any) => {
    setExpanded(!expanded);
    props.path(e)
  };

  return (
    <>
    <nav  aria-label="breadcrumb">
  <ul className="breadcrumb">
    <li className="breadcrumb-item"> 
    {props.directory.map((dir) => (
        <div key={dir.name}>
          <div className="d-flex align-items-center ">
            {dir.children && (
              <button className="ms-2 me-2 border-0 bg-white" onClick={()=>{handleExpand(dir.name)}}>
                {expanded ? <RdsIcon name="chevron_down" height="8px" width="6px"  fill={false} stroke={true} ></RdsIcon> : <RdsIcon name="chevron_right" height="8px" width="6px" fill={false} stroke={true}></RdsIcon>}
              </button>
            )}
            <span className="me-2 ms-1">
            <RdsIcon name="folder" height="15px" width="15px" fill={false} stroke={true} colorVariant="primary"  />
            </span>
            <span>{dir.name}</span>
            {dir.children && <span className="ms-2 mt-2">&nbsp;({dir.children.length})</span>}
          </div>
          {dir.children && expanded && (
            <RdsCompDirectoryList directory={dir.children} path={props.path} />
          )}
        </div>
      ))}</li>
  </ul>
</nav>
    </>
    


  );
};

export default RdsCompDirectoryList;

