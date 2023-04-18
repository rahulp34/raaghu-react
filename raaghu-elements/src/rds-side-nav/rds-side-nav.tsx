import React, { useState } from "react";
import "./rds-side-nav-new.scss";
import RdsSideNavChild from "./rds-side-nav-child";
import RdsIcon from "../rds-icon/rds-icon";

export interface RdsSideNavProps {
  sideNavItems: any[];
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  toggleTheme?: React.MouseEventHandler<HTMLInputElement>;
  collapse: boolean;
}

const RdsSideNav = (props: RdsSideNavProps) => {
  const [dataFromChild, setDataFromChild] = useState("");
  const [collapse, setcollapse] = useState(false);

  const handleChildData = (data: any) => {
    console.log(data);
    setDataFromChild(data);
  };

  const onDivCollapse = () => {
    
    // callback(!collapse);
    console.log(collapse)
    setcollapse(!collapse);

    
  }
  return (
    <>
      <nav
        id="sidebar"
        className={`bd-links min-vh-100 ps-2 p-3 position-relative sidebar  ${ 
          dataFromChild ? "toggle toggle-sidebar-menu" : ""
        }`}
      >
        <RdsSideNavChild
          callback={handleChildData}
          data={props.sideNavItems}
          onClickHandler={props.onClick}
          toggleTheme={props.toggleTheme}
        ></RdsSideNavChild>
      </nav>
    </>
  );
};

export default RdsSideNav;
