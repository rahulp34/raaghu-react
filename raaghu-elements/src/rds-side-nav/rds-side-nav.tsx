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

  const logo = "./assets/raaghu_logs.png";
  const   afterLogo = "./assets/raaghu_icon.png";

  const images =  {
     logo ,
     afterLogo 
  }
  
  const image = (collapse) ? logo : afterLogo;

  const onDivCollapse = () => {
    
    // callback(!collapse);
    console.log(collapse)
    setcollapse(!collapse);

    
  }
  return (
    <>
      <nav
        id="sidebar"
        className={`bd-links min-vh-100 ps-2 position-relative sidebar overflow-visible ${ 
          dataFromChild ? "toggle toggle-sidebar-menu" : ""
        }`}
      >
         <div className="mb-4 mt-1">
            <span className="navbar-brand p-0 m-0">
              {/* { collapse=== true ? {<img
              className="ms-1 cursor-pointer"
              src={logo}
              alt="logo"
              width="64%"
            ></img>} : {
            <img
            className="ms-1 cursor-pointer"
            src={afterLogo}
            alt="logo"
            width="64%"
          ></img>}} */}
            <img
              className="ms-1 cursor-pointer"
              src={collapse === true ? afterLogo : logo}
              alt="logo"
              width="64%"
            />

            {/* <span className="title fw-bold text-lowercase m-2 cursor-pointer">

              <b >{props.brandName}</b>
            </span> */}
          </span>
    </div>
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
