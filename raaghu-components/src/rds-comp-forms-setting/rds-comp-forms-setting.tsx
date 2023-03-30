import React, { useEffect, useState } from "react";
import { RdsButton, RdsCheckbox, RdsDropdownList, RdsInput, RdsLabel, RdsSelectList, RdsTextArea } from "../rds-elements";

export interface RdsCompFormsSettingProps {
	formsSettingData?: any;
	handleFormSettings?: any;
}

const RdsCompFormsSettings = (props: RdsCompFormsSettingProps) => {

	const [formsSetting, setFormsSetting] = useState(props.formsSettingData);

	useEffect(() => {
		setFormsSetting(props.formsSettingData)
	}, [props.formsSettingData]);

	function setResponses(value: any) {
		setFormsSetting({ ...formsSetting, isAcceptingResponses: value })
		props.handleFormSettings({ ...formsSetting, isAcceptingResponses: value });
	}
	function setEmail(value: any) {
		setFormsSetting({ ...formsSetting, isCollectingEmail: value })
		props.handleFormSettings({ ...formsSetting, isCollectingEmail: value });
	}
	function setQuiz(value: any) {
		setFormsSetting({ ...formsSetting, isQuiz: value })
		props.handleFormSettings({ ...formsSetting, isQuiz: value });
	}
	function setLogin(value: any) {
		setFormsSetting({ ...formsSetting, requiresLogin: value });
		props.handleFormSettings({ ...formsSetting, requiresLogin: value });
	}
	function setHasLimit(value: any) {
		setFormsSetting({ ...formsSetting, hasLimitOneResponsePerUser: value });
		props.handleFormSettings({ ...formsSetting, hasLimitOneResponsePerUser: value });
	}
	function setEdit(value: any) {
		setFormsSetting({ ...formsSetting, canEditResponse: value });
		props.handleFormSettings({ ...formsSetting, canEditResponse: value });
	}
	return (
		<>
			<form onSubmit={props.handleFormSettings}>
				<div className="row">
					<div className="row">
						{/* <RdsLabel label="Form is" class="fw-bold"></RdsLabel> */}
						<RdsCheckbox
							classes="py-2"
							label="Is accepting responses"
							onChange={e => { setResponses(e.target.checked) }}
							checked={formsSetting.isAcceptingResponses}
						></RdsCheckbox>
						<RdsCheckbox
							classes="py-2"
							label="Is collecting email"
							onChange={e => { setEmail(e.target.checked) }}
							checked={formsSetting.isCollectingEmail}
						></RdsCheckbox>
						<RdsCheckbox
							classes="py-2"
							label="Is a quiz"
							onChange={e => { setQuiz(e.target.checked) }}
							checked={formsSetting.isQuiz}
						></RdsCheckbox>
					</div>
					<div className="row">
						{/* <RdsLabel label="Form" class="fw-bold"></RdsLabel> */}
						<RdsCheckbox
							classes="py-2"
							label="Requires login"
							onChange={e => { setLogin(e.target.checked) }}
							checked={formsSetting.requiresLogin}
						></RdsCheckbox>
						<RdsCheckbox
							classes="py-2"
							label="Has limit one response per user"
							onChange={e => { setHasLimit(e.target.checked) }}
							checked={formsSetting.hasLimitOneResponsePerUser}
							isDisabled={formsSetting.requiresLogin}
						></RdsCheckbox>
					</div>
					<div className="row ">
						{/* <RdsLabel label="Respondents" class="fw-bold"></RdsLabel> */}
						<RdsCheckbox
							classes="py-2"
							label="Can edit after submit"
							onChange={e => { setEdit(e.target.checked) }}
							checked={formsSetting.canEditResponse}
						></RdsCheckbox>
					</div>

				</div>

			</form>
		</>
	);
};
export default RdsCompFormsSettings;
