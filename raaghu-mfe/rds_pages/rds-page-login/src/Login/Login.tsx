import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import RdsCompLogin from "../../../../../raaghu-components/src/rds-comp-login/rds-comp-login";
import {
  localizationService,
  configurationService,
} from "raaghu-react-core";
import { useAppDispatch } from "../../../../libs/state-management";
import { callLoginAction } from "../../../../libs/public.api";

export interface LoginProps {
  onForgotPassword: (isForgotPasswordClicked?: boolean) => void;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { i18n } = useTranslation();

  function loginHandler(email: any, password: any) {
    dispatch(callLoginAction({email,password}) as any)
  };
 // localStorage.setItem("auth", JSON.stringify(false));

  const forgotPasswordHandler: any = (isForgotPasswordClicked: boolean) => {
    // navigate("/forgot-password");
    // props.onForgotPassword(isForgotPasswordClicked);
  };
  const { t } = useTranslation();
  const [turnSpinnerOff, setTurnSpinnerOff]= useState(false);
  return (
    <div className="login-background">
      <div
        className="align-items-center d-flex justify-content-center login m-auto"
        style={{ maxWidth: "900px", height: "100vh " }}
      >
        <div className="container-fluid m-2">
          <div className="bg-white row rounded-3 ">
            <div className="col-md-6">
              <div className="py-4 px-3">
                <div className="pb-4">
                  <div className="text-center">
                    <img src="./assets/raaghu_text_logo.svg"></img>
                  </div>
                </div>
                <RdsCompLogin
                  onLogin={loginHandler}
                  onForgotPassword={forgotPasswordHandler}
                  turnSpinnerOff={turnSpinnerOff}
                />
              </div>
            </div>
            <div
              className="col-md-6 order-1 order-sm-2 rounded-end position-relative align-items-center p-0"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundColor: "#000",
                height: 524,
              }}
            >
              <video
                className="video position-relative"
                autoPlay
                muted
                loop
                style={{ width: 442, height: 524 }}
              >
                <source
                  src="./assets/building_lights.mp4"
                  type="video/mp4"
                ></source>
              </video>
              <img
                className="position-absolute"
                style={{
                  zIndex: "3",
                  backgroundSize: "cover",
                  top: 244,
                  left: 200,
                  width: 42,
                  height: 39,
                }}
                src="./assets/raaghu_icon.png"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
