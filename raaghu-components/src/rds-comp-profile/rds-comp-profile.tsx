import { useEffect, useState } from "react";
import { RdsInput, RdsButton, RdsIcon, RdsOffcanvas } from "raaghu-react-elements";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./rds-comp-profile.scss";
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
      navigate('/my-account');
    }
    else if (id === "nav-SecuityLogs") {
      navigate('/security-logs')
    }
    else if (id === "nav-PersonalData") {
      navigate('/personal-data')
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
          ></img>
        </div>
        <p className="fw-bold text-center m-0 mt-3">{props.userName}</p>
        <p className="mb-3 text-center text-muted ">{props.userRole}</p>
      </div>

      <div className="justify-content-center d-flex   p-2 m-2">
        <div>
          {props.navtabItems.map((item: any, i) => (
            <div key={i} data-bs-dismiss="offcanvas">
              <div
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
              </div>
              {/* <RdsOffcanvas
								offId={item.id}
								placement="start"
								offcanvaswidth={400}
								backDrop={false}
								scrolling={false}
								preventEscapeKey={false}
								canvasTitle={""}
								offcanvasbutton={
									
								}
							>
								<RdsCompLinkedAccount></RdsCompLinkedAccount>
							</RdsOffcanvas> */}
            </div>
          ))}
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
        />
      </div>
    </>
  );
};

export default RdsCompProfile;
