import { useState } from "react";
import { RdsInput, RdsButton } from "../rds-elements";
import React from "react";
import { useNavigate } from "react-router-dom";
export interface RdsForgotPasswordProps {
	onForgotPassword?: (email?: string) => void;
}

const RdsCompForgotPassword = (props: RdsForgotPasswordProps) => {
	const [error1, setError1] = useState("");
	const [showmailsuccess, setShowMailSuccess] = useState(false);
	const navigate = useNavigate();
	const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);

	const [email, setEmail] = useState("");

	const isEmailValid = (email: any) => {
		if (!email || email.length === 0) {
			
			return false;
		}
		return true;
	};

	// const emailhandleChange = (event: {
	// 	target: { value: React.SetStateAction<string> };
	// }) => {
	// 	
	// 	// if (!isEmailValid(event.target.value)) {
	// 	// 	setError1("Email is invalid");
	// 	// } else {
	// 	// 	setError1("");
	// 	// }
	// 	setEmail(event.target.value);
	// };
	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		props.onForgotPassword != undefined && props.onForgotPassword(email);
		setEmail("");
		setShowMailSuccess(true); // Update showmailsuccess to true
	};

	const resendHandler: any = () => {
		navigate("/forgot-password");
		setShowMailSuccess(false); // reset showmailsuccess to false
	};


	return (
		<div>
			<div className="text-center">
				{!showmailsuccess && (
					<div>
						<h2 className="pb-4">
							<b>Forgot Password? </b>
						</h2>
						<div>
							<form onSubmit={onSubmit}>
								<div className="form-group mb-3 text-start">
								<RdsInput
										size="medium"
										label="Enter email to receive reset password link"
										inputType="email"
										isDisabled={false}
										readonly={false}
										placeholder="Email"
										value={email}
										onChange={(e: any) => setEmail(e.target.value)}
										required={false}
										dataTestId="email"
									></RdsInput>
									<div className="row d-flex justify-content-between mt-2">
										<div className="col-md-12">
											<div>
												Remember Password ?
												<a href={"/"} className="link-primary text-decoration-none px-1">
													Login
												</a>
											</div>
										</div>
									</div>
								</div>
								<br />
								<div className="mb-2">
									<RdsButton
										class="d-grid mb-3"
										label="Submit"
										block
										size="medium"
										colorVariant="primary"
										tooltipTitle={""}
										showLoadingSpinner={true}
										type={"submit"}
										dataTestId="submit"
									></RdsButton>

								</div>
							</form>
						</div>
					</div>
				)}
				{showmailsuccess && (
					<div className="container">
						<img
							src="https://www.nicepng.com/png/full/362-3624869_success-image-png.png"
							className="mt-4 mb-4 w-25"
							alt="img"
						/>
						<h3 className="pb-3">Email has been sent !</h3>
						<div>
							Please check your inbox and click in the received link to reset a
							password
						</div>
						<br />
						<div>
							"Didn't receive the link" ?
							<a
								className="link-primary text-decoration-none px-1"
								href="javascript:void(0)"
								onClick={resendHandler}
								data-testid="resend-link"
							>
								Resend
							</a>

						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default RdsCompForgotPassword;
