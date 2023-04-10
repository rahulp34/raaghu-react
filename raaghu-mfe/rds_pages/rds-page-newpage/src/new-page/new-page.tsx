import React from "react";
import { RdsInput } from "../../../rds-elements";

const NewPage = () => {
	return (
		<>
			<div className="container">
				<div className="card border-0 rounded-0 mt-3">
					<div className="row p-3">
						<div className="col-md-12 sm-p-0">
							<div className="form-group">
								<RdsInput
									inputType="text"
									required={true}
									label={"Title"}
									placeholder={"Enter Title Name"}
								></RdsInput>
								</div>
						</div>
						<div className="col-md-12 sm-p-0">
							<div className="form-group">
								<RdsInput
									inputType="text"
									required={true}
									label={"Slug"}
									placeholder={"Enter Slug Name"}
								></RdsInput>
								</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default NewPage;