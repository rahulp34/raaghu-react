import { useState } from "react";
import { RdsInput, RdsButton, RdsIcon, RdsOffcanvas } from "raaghu-react-elements";
import React from "react";
import {useNavigate} from "react-router-dom";
import "./rds-comp-profile.scss";
import RdsCompLinkedAccount from "../rds-comp-linked-account/rds-comp-linked-account";

export interface RdsCompProfileProps {
  navtabItems: any[];
  profilePic: string;
  userName: string;
  userRole: string;
  onEditProfile?: (Event: React.MouseEvent<HTMLElement>) => void;
  onLogout?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
  handleToggle?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
  currNavTabId?: (id: any) => void;
  // onClose?: (Event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
const RdsCompProfile = (props: RdsCompProfileProps) => {
  const [activetab, setAcivetab] = useState("");
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const profilePic =
    props.profilePic ||
    "./assets/profile-picture-circle.svg";
  const onSetNavTabHandler = (id: any) => {
    setAcivetab(id);
    props.currNavTabId != undefined && props.currNavTabId(id);
    openOffCanvasOnClick(id);    
  };

  const handleToggle = () => {
    setVisible((current) => !current);
    // var x=   document.getElementById('Profile');
    // x?.style.display=="none";
  };

  function openOffCanvasOnClick(id:any){
    setAcivetab(id);       
    if(id==="nav-Security-logs"){     
      navigate('/security-logs');
      handleToggle();
    }   
    else if(id==="nav-myAccount"){
      navigate('/my-account');
    }
  }
  return (
    <>
      <div>
      <div className="d-flex justify-content-center align-items-center flex-column">
          <div className="d-inline-block position-relative">
            <img
              src={profilePic}
              alt="profilePic"
              width="130px"
              height="120px"
              className="profil_image_Class"
            ></img>
            <span className="cursor-pointer position-absolute bottom-0" style={{ right: '2px' }}>
              <RdsButton
                class="btn btn-icon btn-sm position-relative rounded-circle bg-white"
                icon="pencil"
                isOutline={true}
                size="small"
                roundedButton={true}
                iconFill={false}
                iconStroke={true}
                iconColorVariant="light"
                iconHeight="16px"
                iconWidth="16px"
                type={"button"} />
              
            </span>
          </div>
          <p className="fw-bold text-center m-0">{props.userName}</p>
          <p className="mb-3 text-center text-muted ">{props.userRole}</p>
        </div><div className="justify-content-center d-flex   p-2 m-2">
            <div>
              {props.navtabItems.map((item: any, i) => (
                <div key={i}  data-bs-dismiss="offcanvas">
                  <div
                    className={` d-flex mb-4 align-items-baseline gap-1 cursor-pointer  ${activetab == item.id ? " activeBackgraound" : ""}`}
                    onClick={() => onSetNavTabHandler(item.id)}
                  >
                    <span className="me-2">
                      <RdsIcon
                        name={item.icon}
                        colorVariant={activetab == item.id ? "primary" : "dark"}
                        fill={false}
                        stroke={true}
                        width="24px"
                        height="24px" />
                    </span>
                    <div>
                      <div
                        className={`fw-semibold  ${activetab == item.id ? " text-primary" : ""}`}
                        onClick={handleToggle}>
                        {item.label}
                      </div>
                      <p className="text-muted text-break m-0">{item.subText}</p>
                    </div>
                  </div>                                               
                </div>
              ))}
            </div>
          </div><div className="mt-5 d-flex justify-content-center">
            <RdsButton
              label="Logout"
              colorVariant="primary"
              block={false}
              tooltipTitle={""}
              type="submit"
              isOutline={true}
              onClick={props.onLogout} />
          </div>


          <RdsOffcanvas
          canvasTitle="NEW"       
          placement="end"
          offId="dynamic-edit-off"
          offcanvaswidth={550}
          backDrop={false}
          scrolling={false}
          preventEscapeKey={false}
        >
        <p>hello</p>
        </RdsOffcanvas>

      </div>
     
    </>
  );
};

export default RdsCompProfile;
 