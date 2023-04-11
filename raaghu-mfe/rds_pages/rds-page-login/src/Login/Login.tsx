import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import RdsCompLogin from "../../../../../raaghu-components/src/rds-comp-login/rds-comp-login";
import {
  sessionService,
  localizationService,
  configurationService,
} from "raaghu-core";
export interface LoginProps {
  onForgotPassword: (isForgotPasswordClicked?: boolean) => void;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  let API_URL: string =
    process.env.REACT_APP_API_URL || '<API_URL>';
  let grant_type = process.env.REACT_APP_GRANT_TYPE || "password";
  let client_id = process.env.REACT_APP_CLIENT_ID || "raaghu";
  let scope =
    process.env.REACT_APP_SCOPE ||
    "address email phone profile roles BookStore";

  const navigate = useNavigate();
  const { i18n } = useTranslation();
  async function loginHandler(email: any, password: any) {
    function hello(res: any) {
      localStorage.setItem("access_token", JSON.stringify(res));
      if (res != undefined) {
        localStorage.setItem("auth", JSON.stringify(true));
        const lang =localStorage.getItem("currentLang")||"en-GB"
        setTurnSpinnerOff(true)
        navigate('/dashboard')
        configurationService().then(async (res: any) => {
          await localizationService(lang).then(async (resp: any) => {
            i18n.changeLanguage(lang);
            var data1 = {};
            const translation = resp?.resources;
            if (translation) {
              Object.keys(translation).forEach((key) => {
                data1 = { ...data1, ...translation[key].texts };
              });
              i18n.addResourceBundle(lang, "translation", data1, false, true);
            }
          });
        });
      } else {
        localStorage.setItem("auth", JSON.stringify(false));
      }
    }

   await sessionService(API_URL, grant_type, email, password, client_id, scope).then(async(res:any)=>{
    await hello(res)
    localStorage.setItem('accessToken',JSON.stringify(res))
    })
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
                  top: 240,
                  left: 196,
                  width: 50,
                  height: 50,
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
