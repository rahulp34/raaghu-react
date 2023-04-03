import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RdsCompLinkedAccount from "../rds-comp-linked-account/rds-comp-linked-account";
import RdsCompProfile from "../rds-comp-profile/rds-comp-profile";
import {
	
	RdsIcon,
	RdsNotification,
	RdsOffcanvas,
	RdsAvatar,
} from "raaghu-react-elements";
import RdsDropdownList from '../../../raaghu-elements/src/rds-dropdown-list/index'

export interface RdsCompTopNavigationProps {
  onClick?: (event: React.MouseEvent<HTMLLIElement>,  val: string) => void;
  onChatClickHandler?:(event: React.MouseEvent<HTMLAnchorElement>) => void;
  toggleTheme?: React.MouseEventHandler<HTMLInputElement>;
  notifications?: any[];
  languageItems: any[];
  toggleItems: any[];
  componentsList: any[];
  navbarTitle?: string;
  navbarSubTitle?: string;
  brandName?: string;
  profileTitle?: string;
  profileName?: string;
  logo?:string, 
  languageLable:string;
  languageIcon:string;
  onLogout?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RdsCompTopNavigation = (props: RdsCompTopNavigationProps) => {
  const [LinkAccount, setLinkAccount] = useState(false);
  const navigate = useNavigate();
  const navtabItems = [
    {
      label: "Linked Accounts",
      icon: "manage_linked",
      subText: "Manage accounts linked to your account",
      id: "nav-LinkAccount",
    },
    {
      label: "My Account",
      icon: "manage_authority",
      subText: "Manage authority accounts",
      id: "nav-MyAccount",
    },
    {
      label: "Security Logs",
      icon: "login_attempts",
      subText: "See recent login attempts for your account",
      id: "nav-SecuityLogs",
    },
    {
      label: "Personal Data",
      icon: "my_settings",
      subText: "Change your account settings",
      id: "nav-PersonalData",
    },
  ];

  const ChangeId = (e: any) => {
    setLinkAccount(true);
  };

  const onClickHandler =(e: any, val: any) =>{
    if (props.onClick) {
      props.onClick(e,val);
    }
  }

  return (
    <div>
      <nav
        className={`navbar d-flex justify-content-between p-0 ps-2 pe-3 fixed-top`}
      >
        <div className="d-flex align-items-center">
          <span className="navbar-brand p-0 m-0" onClick={() => { navigate("/dashboard") }}>
            <img
              className="ms-1 cursor-pointer"
              src={props?.logo}
              alt="logo"
            // width="70"
            ></img>
            
          </span>
          <div>
            <div className="text-bold fs-6"
            >
              {props.navbarTitle}
            </div>
            <div
              className="text-muted fs-6"
            >
              {props.navbarSubTitle}
            </div>
          </div>
        </div>
              <div className="d-flex me-2 align-items-center">
                  <div className="px-2 cursor-pointer position-relative border-end">
                      <RdsDropdownList
                          placeholder="Components"
                          listItems={props.componentsList}
                      // onClick={props.toggleTheme}
                      ></RdsDropdownList>
                  </div>
          <div className="px-2 cursor-pointer position-relative border-end">
          <RdsDropdownList
           placeholder={props.toggleItems[0].label}
           icon =  "sun"
           iconFill = {false }
           iconStroke ={true}
          listItems={props.toggleItems}
            id={"toggleItem"}
            // onClick={props.toggleTheme}
            ></RdsDropdownList>
          </div>

          <div className="px-2 position-relative border-end">
          <RdsDropdownList
           placeholder={props.languageLable}
           icon =  {props.languageIcon}
           iconFill = {false }
           iconStroke ={ true}
           id={"languageDropdown"}
           listItems={props.languageItems}
           onClick={onClickHandler}
          ></RdsDropdownList>
          </div>
          <div className="me-3 ms-3 position-relative">
            <a
              data-bs-toggle="dropdown"
              aria-expanded="false"
              role='button'
              tabIndex={0}
              className="text-decoration-none"
            >
              <RdsIcon
                name="notification"
                height="20px"
                width="20px"
                fill={false}
                stroke={true}
              ></RdsIcon>
            </a>
            <div
              className="dropdown-menu fab-dropdown border-0 shadow p-0 position-absolute  ">
              <RdsNotification
                notifications={props.notifications!}
                colorVariant="primary"
                footerText="2 days ago"
              ></RdsNotification>
            </div>
          </div>
          <div
            className="me-3 px-3 border-start border-end"
            role='button'
            tabIndex={0}
          >
            <RdsIcon
              name="gear"
              height="20px"
              width="20px"
              fill={false}
              stroke={true}
            ></RdsIcon>
          </div>

          <Link to="/chats"
            className="me-3 pe-3 border-end"
            role='button'
            onClick={props.onChatClickHandler}
          >
            <RdsIcon
              name="question_chat"
              height="20px"
              width="20px"
              fill={false}
              stroke={true}
            ></RdsIcon>
          </Link>

          <RdsOffcanvas
            className="pb-0"
            placement="end"
            offcanvaswidth={307}
            offId="Profile"
            offcanvasbutton={
              <div
                className="d-flex align-items-center"
                style={{ cursor: "pointer" }}
              >
                <img className="avatar bg-light avatar-sm rounded rounded-circle mb-0"
                  src="./assets/profile-picture-circle.svg"
                ></img>
                <div className="ms-2 fw-bold fs-6">
                  <div className="text-nowrap">
                    {props.profileTitle}
                  </div>
                  <div
                    className="text-nowrap text-muted"
                  >
                    {props.profileName}
                  </div>
                </div>
                <span className="ms-3">
                  <RdsIcon
                    name="chevron_down"
                    height="12px"
                    width="12px"
                    fill={false}
                    stroke={true}
                  ></RdsIcon>
                </span>
              </div>
            }
            backDrop={true}
            scrolling={false}
            preventEscapeKey={false}
            canvasTitle={""}
          >
            <RdsCompProfile
              navtabItems={navtabItems}
              profilePic={""}
              userName={"Host Admin"}
              userRole={"admin"}
              onLogout={props.onLogout}
            ></RdsCompProfile>
          </RdsOffcanvas>
        </div>
      </nav>
    </div>
  );
};

export default RdsCompTopNavigation;