import React, { useEffect, useState } from "react";
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
  const [collapse, setcollapse] = useState(true);

  const handleChildData = (data: any) => {
    console.log(data);
    setDataFromChild(data);
  };

  const logo = "./assets/raaghu_logs.png";
  const afterLogo = "./assets/raaghu_icon.png";


  const onDivCollapse = () => {
    // callback(!collapse);
    console.log(collapse)
    setcollapse(!collapse);
  }


  useEffect(() => {
    setcollapse(collapse);
  })
  return (
    <>
      <nav
        id="sidebar"
        className={`bd-links min-vh-100 ps-2 position-relative sidebar overflow-visible ${dataFromChild ? "toggle toggle-sidebar-menu" : ""
          }`}
      >
        {/* <div className="mb-4 mt-1">
          <span className="navbar-brand p-0 m-0">
            <img
              className="ms-1 cursor-pointer"
              src={logo}
              alt="logo"
              style={{ position:'absolute', top: 0, left: 0, width: '115px', height: '40px' }}
           ></img>
          </span>
        </div> */}
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
