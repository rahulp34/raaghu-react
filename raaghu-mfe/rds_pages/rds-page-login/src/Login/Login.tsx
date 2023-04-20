import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import RdsCompLogin from "../../../../../raaghu-components/src/rds-comp-login/rds-comp-login";

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
    dispatch(callLoginAction({ email, password }) as any)
  };
  // localStorage.setItem("auth", JSON.stringify(false));

  const forgotPasswordHandler: any = (isForgotPasswordClicked: boolean) => {
  };
  const { t } = useTranslation();
  return (
    <div className="login-background">
      <div
        className="align-items-center d-flex justify-content-center vh-100 m-auto login-container">
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
                />
              </div>
            </div>
            <div className="col-md-6 order-1 order-sm-2 rounded-end position-relative align-items-center p-0 login-card-height"
              style={{ backgroundImage: "url(../assets/bg_1.png)", backgroundSize: "cover", backgroundPosition: "bottom", backgroundRepeat: "no-repeat", backgroundColor: "#000;" }}>
              <video id="myVideo" className="video" autoPlay muted loop>
                <source src="../assets/Comp1.mp4" type="video/mp4" />
              </video>
              <div className="raghu1">
                  <img src="../assets/fg_raaghu.png"></img>
                </div>
              <div className="wrap">
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
                <div className="c"></div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Login;
