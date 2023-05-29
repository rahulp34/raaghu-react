import { useEffect, useState } from "react";
import { RdsInput, RdsButton, RdsIcon, RdsOffcanvas } from '../rds-elements';
import { useNavigate } from "react-router-dom";
import React from "react";
import "./rds-comp-profile.css";
import RdsCompLinkedAccount from "../rds-comp-linked-account/rds-comp-linked-account";

export interface RdsCompProfileProps {
  navtabItems: any[];
  profilePic?: string;
  userName: string;
  userRole: string;
  onEditProfile?: (Event: React.MouseEvent<HTMLElement>) => void;
  onLogout?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
  currNavTabId?: (id: any) => void;
  // onClose?: (Event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
const RdsCompProfile = (props: RdsCompProfileProps) => {
  const [activetab, setAcivetab] = useState("");
  const navigate = useNavigate();
  const [profilePic ,setprofilePic] = useState("./assets/profile-picture-circle.svg")
  useEffect(()=>{
    if(props.profilePic){
      setprofilePic(props.profilePic)
    }

  },[props.profilePic])
    
  const onSetNavTabHandler = (id: any) => {
    setAcivetab(id);
    console.log(id);
    if (id === "nav-MyAccount") {
      navigate('/raaghu-my-account');
    }
    else if (id === "nav-LinkAccount") {
      navigate('/linked-accounts')
    }
    else if (id === "nav-SecuityLogs") {
      navigate('/raaghu-Security-Logs')
    }
    else if (id === "nav-PersonalData") {
      navigate('/raaghu-personal-data')
    }
    props.currNavTabId != undefined && props.currNavTabId(id);
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="d-inline-block position-relative">
          <img
            src={profilePic}
            alt="profilePic"
            width="130px"
            height="120px"
            className="profil_image_Class rounded-circle"
            data-testid="profile-pic"
          ></img>
        </div>
        <p className="fw-bold text-center m-0 mt-3">{props.userName}</p>
        <p className="mb-3 text-center text-muted ">{props.userRole}</p>
      </div>

      <div className="justify-content-center d-flex   p-2 m-2 profile-offcanvas" >
        <div> 
          <ul className="m-0 p-0">
          {props.navtabItems.map((item: any, i) => (
            <div key={i} data-bs-dismiss="offcanvas">
              <li
                className={` d-flex mb-4 align-items-baseline gap-1 cursor-pointer  ${activetab == item.id ? " activeBackgraound" : ""
                  }`}
                onClick={() => onSetNavTabHandler(item.id)}
              >
                <span className="me-2">
                  <RdsIcon
                    name={item.icon}
                    colorVariant={activetab == item.id ? "primary" : "dark"}
                    fill={false}
                    stroke={true}
                    width="24px"
                    height="24px"
                  />
                </span>
                <div>
                  <div
                    className={`fw-semibold  ${activetab == item.id ? " text-primary" : ""
                      }`}
                  >
                    {item.label}
                  </div>
                  <p className="text-muted text-break m-0">{item.subText}</p>
                </div>
              </li>
              <RdsOffcanvas
								offId={item.id}
								placement="start"
								offcanvaswidth={400}
								backDrop={false}
								scrolling={false}
								preventEscapeKey={false}
								canvasTitle={""}
								offcanvasbutton={
									""
								}
							>
								<RdsCompLinkedAccount></RdsCompLinkedAccount>
							</RdsOffcanvas>
            </div>
          ))}
          </ul>
        </div>
      </div>

      <div className="mt-5 d-flex justify-content-center">
        <RdsButton
          label="Logout"
          colorVariant="primary"
          block={false}
          tooltipTitle={""}
          type="submit"
          isOutline={true}
          onClick={props.onLogout}
          dataTestId="logout"
        />
      </div>
    </>
  );
};

export default RdsCompProfile;
