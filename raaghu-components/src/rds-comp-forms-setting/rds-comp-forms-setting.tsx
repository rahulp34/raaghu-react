import React, { useEffect, useState } from "react";
import { RdsButton, RdsCheckbox, RdsDropdownList, RdsInput, RdsLabel, RdsSelectList, RdsTextArea } from "../rds-elements";

export interface RdsCompFormsSettingProps {
	formsSettingData?: any;
	handleFormSettings: React.EventHandler<any>;

}

const RdsCompFormsSettings = (props: RdsCompFormsSettingProps) => {

	const [formsSetting, setFormsSetting] = useState(props.formsSettingData)

	useEffect(() => {
		setFormsSetting(props.formsSettingData)
	}, [props.formsSettingData]);

	function setResponses(value: any) {
		setFormsSetting({ ...formsSetting, responses: value })
	}
	function setEmail(value: any) {
		setFormsSetting({ ...formsSetting, email: value })
	}
	function setQuiz(value: any) {
		setFormsSetting({ ...formsSetting, quiz: value })
	}
	function setLogin(value: any) {
		setFormsSetting({ ...formsSetting, login: value })
	}
	function setHasLimit(value: any) {
		setFormsSetting({ ...formsSetting, hasLimit: value })
	}
	function setEdit(value: any) {
		setFormsSetting({ ...formsSetting, edit: value })
	}
	

	const handleFormSettings = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		debugger
	};
	return (
		<>
			<form onSubmit={handleFormSettings}>
				<div className="row">
				<div className="row py-3 border-bottom">
					<RdsLabel label="Form is" class="fw-bold"></RdsLabel>
					<RdsCheckbox
						classes="py-2"
						label="Is accepting responses"
						onChange={e => { setResponses(e.target.checked) }}
						checked={formsSetting.responses}
					></RdsCheckbox>
					<RdsCheckbox
						classes="py-2"
						label="Is collecting email"
						onChange={e => { setEmail(e.target.checked) }}
						checked={formsSetting.email}
					></RdsCheckbox>
					<RdsCheckbox
						classes="py-2"
						label="Is a quiz"
						onChange={e => { setQuiz(e.target.checked) }}
						checked={formsSetting.quiz}
					></RdsCheckbox>
				</div>
				<div className="row py-3 border-bottom">
					<RdsLabel label="Form" class="fw-bold"></RdsLabel>
					<RdsCheckbox
						classes="py-2"
						label="Requires login"
						onChange={e => { setLogin(e.target.checked) }}
						checked={formsSetting.login}
					></RdsCheckbox>
					<RdsCheckbox
						classes="py-2"
						label="Has limit one response per user"
						onChange={e => { setHasLimit(e.target.checked) }}
						checked={formsSetting.hasLimit}
						isDisabled={formsSetting.login}
					></RdsCheckbox>
				</div>
				<div className="row py-3">
					<RdsLabel label="Respondents" class="fw-bold"></RdsLabel>
					<RdsCheckbox
						classes="py-2"
						label="Can edit after submit"
						onChange={e => { setEdit(e.target.checked) }}
						checked={formsSetting.edit}
					></RdsCheckbox>
				</div>
				<div className="pt-3" >
					<RdsButton
						class="me-2"
						type={"button"}
						label="cancel"
						size="small"
						isOutline={true}
						colorVariant="primary"
						databsdismiss="offcanvas"
						databstoggle="offcanvas"
						databstarget="#formSetting"
					></RdsButton>
					<RdsButton
						class="me-2"
						label="SAVE"
						type="submit"
						isOutline={false}
						colorVariant="primary"
						databsdismiss="offcanvas"
						size="small"
						onClick={() => { props.handleFormSettings(formsSetting) }}
					></RdsButton>
				</div>
				</div>

			</form>
		</>
	);
};
export default RdsCompFormsSettings;
