import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RdsCompProfile from "../rds-comp-profile/rds-comp-profile";

import { RdsIcon, RdsOffcanvas } from "../rds-elements";
import RdsDropdownList from "../../../raaghu-elements/src/rds-dropdown-list/index";
import RdsBreadcrumb from "../../../raaghu-elements/src/rds-breadcrumb/rds-breadcrumb";
import elementList from "./element-list";
import componentList from "./components-list";

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
  onElementSelect?: (selectedElement: any) => void;
}
const RdsCompTopNavigation = (props: RdsCompTopNavigationProps) => {
  const [breacrumItem, setBreadCrumItem] = useState(props.breacrumItem);
  const [path, setPath] = useState({ elem: "/elements", compo: "/components" });
  const [navtitle, setNavtitle] = useState(props.navbarTitle);
  const [resetDrop, setResetDrop] = useState({
    elem: false,
    compo: false,
  });
  const [isElement, setIsElement] = useState(false);
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

  const onClickHandler = (e: any, val: any) => {
    if (props.onClick) {
      props.onClick(e, val);
    }
  };
  const handlerElementChange = (e: any, val: string) => {
    setResetDrop({ ...resetDrop, compo: !resetDrop.compo });
    const paath = `/elements/${val}`;
    console.log("Component Change ", val, paath);
    let elementBreadCrumb = [
      { id: "Element", label: "Element", icon: "" },
      { id: e.target.textContent, label: e.target.textContent, icon: "" },
    ];
    setNavtitle("Element");
    setBreadCrumItem(elementBreadCrumb);
    setPath({ ...path, elem: paath });
  };
  const handlerComponentChange = (e: any, val: string) => {
    setResetDrop({ ...resetDrop, elem: !resetDrop.elem });
    const paath = `/components/${val}`;
    console.log("Component Change ", val, paath);
    let compoBreadCrumb = [
      { id: "Component", label: "Component", icon: "" },
      { id: e.target.textContent, label: e.target.textContent, icon: "" },
    ];

    setNavtitle("Component");
    setBreadCrumItem(compoBreadCrumb);
    setPath({ ...path, compo: paath });
  };
  useEffect(() => {
    setBreadCrumItem(props.breacrumItem);
  }, [props.breacrumItem]);

  const handlerLinkElements = () => {};
  const[profilePic, setProfilePic] = useState("./assets/profile-picture-circle.svg");
  useEffect(()=>{
    if(props.profilePic){
      setProfilePic(props.profilePic)
    }

  },[props.profilePic])

  useEffect(() => {
    setNavtitle(props.navbarTitle);
    if ((navtitle != "Element" && navtitle != "Component" )|| props.navbarTitle != navtitle) {
      setResetDrop({ ...resetDrop, elem: !resetDrop.elem ,compo: !resetDrop.compo });
    }
  }, [props.breacrumItem, props.navbarTitle]);

  useEffect(() => {
    if (navtitle == "Component") {
      navigate(path.compo);
    }
    if (navtitle == "Element") {
      navigate(path.elem);
    }
  }, [path]);
  return (
    <div>
      <nav
        className={`navbar d-flex justify-content-between p-2 top-0 p-0 pe-3 min-width`}
      >
        <div className="d-flex align-items-center mx-4">
          <div>
            <div className="text-bold">{navtitle}</div>
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
          <RdsDropdownList
            reset={resetDrop.compo}
            placeholder="Components"
            icon=""
            iconFill={false}
            iconStroke={true}
            id={"componentlDropdown"}
            listItems={componentList}
            onClick={handlerComponentChange}
          ></RdsDropdownList>

          <RdsDropdownList
            reset={resetDrop.elem}
            placeholder="Elements"
            icon=""
            iconFill={false}
            iconStroke={true}
            id={"elementlDropdown"}
            listItems={elementList}
            onClick={handlerElementChange}
          ></RdsDropdownList>

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
