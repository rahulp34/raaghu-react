import React, { useState } from "react";
import { RdsButton, RdsInput } from "raaghu-react-elements";

export interface RdsLinkedAccountProps {}

const RdsCompLinkedAccount = (props: RdsLinkedAccountProps) => {
	const [userData, setUserData] = useState({
		tenancyName: "",
		userName: "",
		password: "",
	});
	const [page, setPage] = useState(false);
	const onClickHandler = () => {
		setPage((prev) => !prev);
	};

	const onSubmitHandler = (e: any) => {
		e.preventDefault();
		let name = e.target[0].value;
		setUserData({
			...userData,
			tenancyName: e.target[0].value,
			userName: e.target[1].value,
			password: e.target[2].value,
		});
	};

	return (
		<>
		<div className="card h-100 border-0 px-4 py-4 rounded-0 card-full-stretch">
			<div className="container-fluid">
					<div className="d-flex">
					{!page && (
						<RdsButton
							type="button"
							icon="plus"
							colorVariant="primary"
							label="LINK NEW ACCOUNT"
							iconFill={false}
							iconStroke={true}
							iconHeight="15px"
							iconWidth="15px"
							size="small"
							iconColorVariant="light"
							onClick={onClickHandler}
						></RdsButton>
					)}
					</div>
					{page && ( 
						<form onSubmit={(e) => onSubmitHandler(e)}>
							<div className="row">
								<div className="col-12 col-lg-4 col-xl-4 col-xxl-4 mb-2">
									<RdsInput
										inputType="text"
										label="Tenancy Name"
										placeholder="Tenancy Name"
										required={true}
										size="medium"
										name="tenancyName"
									></RdsInput>
								</div>
								<div className="col-12 col-lg-4 col-xl-4 col-xxl-4 mb-2">
									<RdsInput
										inputType="text"
										label="User Name"
										placeholder="User Name"
										required={true}
										size="medium"
										name="userName"
									></RdsInput>
								</div>
								<div className="col-12 col-lg-4 col-xl-4 col-xxl-4 mb-2">
									<RdsInput
										inputType="password"
										label="Password"
										placeholder="Password"
										required={true}
										size="medium"
										name="password"
									></RdsInput>
								</div>
							</div>
							<div
								className="d-flex bottom-0 gap-2 mb-4 position-absolute"
							>
								<div>
									<RdsButton
										type="button"
										isOutline={true}
										colorVariant="primary"
										label="CANCEL"
										size="small"
										onClick={onClickHandler}
									></RdsButton>
								</div>
								<div>
									<RdsButton
										type="submit"
										isOutline={false}
										colorVariant="primary"
										label="SAVE"
										size="small"
									></RdsButton>
								</div>
							</div>
						</form>
					)}
			</div>
		</div>
			
		</>
	);
};

export default RdsCompLinkedAccount;
