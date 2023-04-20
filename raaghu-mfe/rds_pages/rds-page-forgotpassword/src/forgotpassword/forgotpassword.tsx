import React from "react";
// To view for separetly forgot-password page please uncomment the below link
// import "../../../../../raaghu-themes/themes/default.scss";
import "./forgotpassword.scss";
import {
	RootState,
	AppDispatch,
	useAppDispatch,
	shouldSendPasswordResetCode,
	//message,
} from "../../../../libs/public.api";
import { useSelector } from "react-redux";
import { RdsCompForgotPassword } from "../../../rds-components";
import { useTranslation } from "react-i18next";

export interface ForgotPasswordProps {}

const ForgotPassword = (props: ForgotPasswordProps) => {
	//const Message = useSelector(message);
	const forgotPasswordHandler = async (email?: string) => {
		//await dispatch(shouldSendPasswordResetCode(email));
		//alert(Message);
	};
	const { t } = useTranslation();


	//const dispatch: any = useAppDispatch();

	return (
		<div className="login-background">
		<div className="align-items-center d-flex justify-content-center vh-100 m-auto login-container">
		  <div className="container-fluid m-2">
			<div className="bg-white row rounded-3 ">
			  <div className="col-md-6 align-items-center justify-content-center login m-auto">
				<div className="h-100 py-4 px-3">
				  <div className="py-4">
					<div className="text-center">
					  <img src="./assets/raaghu_text_logo.svg"></img>
					</div>
				  </div>	
				  <RdsCompForgotPassword onForgotPassword={forgotPasswordHandler}></RdsCompForgotPassword>
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
		</div>
	  </div>
	);
};

export default ForgotPassword;
