import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RdsCompProfile from "../rds-comp-profile/rds-comp-profile";

import { RdsNotification, RdsOffcanvas, RdsAvatar } from "../rds-elements";
import RdsDropdownList from "../../../raaghu-elements/src/rds-dropdown-list/index";
import Elements from "../../../raaghu-mfe/rds_pages/rds-page-elements/src/elements/elements";
import RdsBreadcrumb from "../../../raaghu-elements/src/rds-breadcrumb/rds-breadcrumb";
import { RdsIcon } from "../rds-elements";
import elementList from './element-list'

export interface RdsCompTopNavigationProps {
  onClick?: (event: React.MouseEvent<HTMLLIElement>, val: string) => void;
  onChatClickHandler?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  toggleTheme?: React.MouseEventHandler<HTMLInputElement>;
  notifications?: any[];
  languageItems: any[];
  toggleItems: any[];
  elementList: any[];
  componentsList: any[];
  navbarTitle?: string;
  navbarSubTitle?: string;
  brandName?: string;
  profileTitle?: string;
  profileName?: string;
  logo?: string;
  languageLable: string;
  languageIcon: string;
  breacrumItem?: any;
  profilePic?:any
  onLogout?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
}
const RdsCompTopNavigation = (props: RdsCompTopNavigationProps) => {
  const [LinkAccount, setLinkAccount] = useState(false);
  const [elementPath, setElementPath] = useState("/elements");
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();

  const onSelectElementValue = (e: any) => {
    // console.log(e.dataset.name)
    //console.log(e.target.innerText)
    const selectValue = e.target.innerText;

    if (selectValue === "Alert") {
      navigate("/elements");
      setVisible(true);
    }
    // console.log(selectValue)
  };



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
  const [breacrumItem, setBreadCrumItem] = useState(props.breacrumItem);
  useEffect(() => {
    setBreadCrumItem(props.breacrumItem);
  }, [props.breacrumItem]);

  const ChangeId = (e: any) => {
    setLinkAccount(true);
  };

  const onClickHandler = (e: any, val: any) => {
    if (props.onClick) {
      props.onClick(e, val);
    }
  };
  const handlerElementChange = (e: any, val: string) => {
    const path = `/elements/${val}`;
    console.log("handlerElementChange ", val, path);
    setElementPath(path);
  };
  useEffect(() => {
    navigate(elementPath);
    console.log("useEffect elementPath", elementPath);
  }, [elementPath]);

  const handlerLinkElements = () => {};
  const[profilePic, setProfilePic] = useState("./assets/profile-picture-circle.svg");
  useEffect(()=>{
    if(props.profilePic){
      setProfilePic(props.profilePic)
    }

  },[props.profilePic])

  return (
    <div>
      <nav
        className={`navbar d-flex justify-content-between p-2 top-0 p-0 pe-3 min-width`}
      >
        <div className="d-flex align-items-center mx-3">
          {/* <span className="navbar-brand p-0 m-0" onClick={() => { navigate("/dashboard") }}>
            <img
              className="ms-1 cursor-pointer"
              src={props?.logo}
              alt="logo"
              width="64%"
            ></img>

            <span className="title fw-bold text-lowercase m-2 cursor-pointer">

              <b >{props.brandName}</b>
            </span>
          </span> */}
          <div>
            <div className="text-bold">{props.navbarTitle}</div>
            {breacrumItem.length > 1 && (
              <div className="text-muted fs-7">
                <>
                  <RdsBreadcrumb
                    role="advance"
                    breadItems={breacrumItem}
                  ></RdsBreadcrumb>
                </>
              </div>
            )}
          </div>
        </div>
        <div className="d-flex me-2 align-items-center">
          {/* <div className="px-2 cursor-pointer position-relative border-end">
            <RdsDropdownList
              placeholder="Components"
              listItems={props.componentsList}
              id={"component"}
            // onClick={props.toggleTheme}
            ></RdsDropdownList>
          </div> */}

          <Link
            to={elementPath}
            className="me-3 pe-3 border-end"
            role="button"
            onClick={handlerLinkElements}
          >
            <RdsDropdownList
              placeholder="Elements"
              icon=""
              iconFill={false}
              iconStroke={true}
              id={"elementlDropdown"}
              listItems={elementList}
              onClick={handlerElementChange} // onClick={props.toggleTheme}
            ></RdsDropdownList>
          </Link>

          <div className="px-2 position-relative me-3">
            <RdsDropdownList
              placeholder={props.languageLable}
              icon={props.languageIcon}
              iconFill={false}
              iconStroke={true}
              id={"languageDropdown"}
              listItems={props.languageItems}
              onClick={onClickHandler}
            ></RdsDropdownList>
          </div>
          <Link
            to="/chats"
            className="me-3 pe-3 border-end"
            role="button"
            onClick={props.onChatClickHandler}
          >
            <RdsIcon
              name="chat"
              height="20px"
              width="20px"
              fill={false}
              stroke={true}
              colorVariant="primary"
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
                  src={profilePic}
                ></img>
                <div className="ms-2 fw-bold fs-6">
                  <div className="text-nowrap">{props.profileTitle}</div>
                  <div className="text-nowrap text-muted">
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

              profilePic={profilePic}
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
