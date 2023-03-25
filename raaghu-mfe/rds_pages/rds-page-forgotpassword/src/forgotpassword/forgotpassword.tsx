import React from "react";
// To view for separetly forgot-password page please uncomment the below link
// import "../../../../../raaghu-themes/themes/default.scss";
import "./forgotpassword.scss";
import {
	RootState,
	AppDispatch,
	useAppDispatch,
	shouldSendPasswordResetCode,
	message,
} from "../../../../libs/public.api";
import { useSelector } from "react-redux";
import { RdsCompForgotPassword } from "../../../rds-components";
import { useTranslation } from "react-i18next";

export interface ForgotPasswordProps {}

const ForgotPassword = (props: ForgotPasswordProps) => {
	const Message = useSelector(message);
	const forgotPasswordHandler = async (email?: string) => {
		await dispatch(shouldSendPasswordResetCode(email));
		alert(Message);
	};
	const { t } = useTranslation();


	const dispatch: any = useAppDispatch();

	return (
		<div className="forgot-background">
		<div className="align-items-center d-flex justify-content-center login m-auto"
		  style={{ maxWidth: "900px", height: "100vh " }}>
		  <div className="container-fluid m-2">
			<div className="bg-white row rounded-3 ">
			  <div className="col-md-6">
				<div className="py-4 px-3">
				  <div className="pb-4">
					<div className="text-center">
					  <img src="./assets/Raaghu-logo-mfe-white.svg"></img>
					</div>
				  </div>	
				  <RdsCompForgotPassword onForgotPassword={forgotPasswordHandler}></RdsCompForgotPassword>
				</div>
			  </div>
			  <div
				className="col-md-6 order-1 order-sm-2 rounded-end position-relative align-items-center p-0"
				style={{
				  backgroundRepeat: "no-repeat",
				  backgroundColor: "#000",
				  height: 524,
				}}>
				<video className="video position-relative" autoPlay muted loop style={{ width: 442, height: 524 }}>
				  <source src="./assets/building_lights.mp4" type="video/mp4"></source>
				</video>
				<img className="position-absolute" style={{ zIndex: "3", backgroundSize: "cover", top: 240, left: 196, width: 50, height: 50, }} src="./assets/raaghu_icon.png"></img>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	);
};

export default ForgotPassword;
