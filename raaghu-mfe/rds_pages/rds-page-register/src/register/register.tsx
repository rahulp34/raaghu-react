import React, { useEffect } from "react";
import RdsCompRegister from "../../../../../raaghu-components/src/rds-comp-register";
import { useAppDispatch, useAppSelector } from "../../../../libs/state-management/hooks";
import { registerData } from "../../../../libs/state-management/register/register-slice";

const Register = (props: any) => {
	const dispatch = useAppDispatch();
	const loginHandler: any = (isLoginClicked: boolean) => { };

	useEffect(() => {
		debugger
		dispatch(registerData(null) as any);
	}, []);

	const registerHandler = (emailAddress: any, password: any, userName: any, appName: any) => {
		debugger
		dispatch(registerData({ emailAddress, password, userName, appName }) as any).then((res: any) => {
		});
	};

	return (
		<>
			<div className="login-background">
				<div className="align-items-center d-flex justify-content-center vh-100 m-auto login-container">
					<div className="container-fluid m-2">
						{/* {Alert.show == true && (
							<div className="invalid-popup">
								<RdsAlert
									dismisable={true}
									alertmessage={Alert.message}
									colorVariant="danger"
									onDismiss={handlerDismissAlert}
									reset={Alert.show}
								/>
							</div>
						)} */}
						<div className="bg-white row rounded-3 ">
							<div className="col-md-6">
								<div className="py-4 px-3">
									<div className="pb-4">
										<div className="text-center">
											<img src="./assets/raaghu_text_logo.svg"></img>
										</div>
									</div>
									<RdsCompRegister
										getvalidTenantName={""}
										emailAddress={""} password={""}
										userName={""}
										onLogin={loginHandler}
										onRegister={registerHandler}
										currentTenant={undefined}
										validTenant={undefined} appName={""}></RdsCompRegister>

								</div>
							</div>
							<div
								className="col-md-6 order-1 order-sm-2 rounded-end position-relative align-items-center p-0 login-card-height d-none d-lg-block"
								style={{
									backgroundImage: "url(../assets/bg_1.png)",
									backgroundSize: "cover",
									backgroundPosition: "bottom",
									backgroundRepeat: "no-repeat",
									backgroundColor: "#000;",
								}}
							>
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
		</>
	)
}
export default Register;