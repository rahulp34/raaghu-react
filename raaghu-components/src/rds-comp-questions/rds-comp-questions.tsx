import React, { useEffect, useState } from "react";
import RdsCompFormsBasic from "../rds-comp-forms-basic/rds-comp-forms-basic";
import RdsCompFormsQuestion from "../rds-comp-forms-question/rds-comp-forms-question";
import { RdsButton, RdsCheckbox, RdsDropdownList, RdsInput, RdsLabel, RdsSelectList, RdsTextArea , RdsToggle } from "../rds-elements";

export interface RdsCompQuestionsProps {
}

const RdsCompQuestions = (props: RdsCompQuestionsProps) => {
	const [basicEditFormData, setbasicEditFormData] = useState({
		title: '', description: ''
	});
	const [formQuestionsData, setFormQuestionsData] = useState<any>({});
	function handleNewFormData(basicInfo: any) {
		debugger
		setbasicEditFormData({ title: '', description: '' });
	}

	function handleButtonClick() {
		setDisplayedQuestion("showQuetion");
	}
	const [displayedQuestion, setDisplayedQuestion] = useState(" ");

	return (
		<>
			<div className="row mt-3 ">
				<div className="col-11">
					<RdsCompFormsBasic basicInfo={basicEditFormData} />
				</div>
				<div className="col-1 d-flex align-items-center justify-content-end ">
					<RdsButton
						label="Edit"
						type="button"
						isOutline={true}
						colorVariant="primary"
						databsdismiss="offcanvas"
						onClick={() => handleNewFormData(basicEditFormData)}
					></RdsButton>
				</div>
			</div>
			{displayedQuestion === "showQuetion" &&
				<>
					<RdsCompFormsQuestion formQuestionsData={formQuestionsData}></RdsCompFormsQuestion>
				</>
			}
			<div className="row ">
			<div className="d-flex justify-content-end mt-4 ">
				<RdsButton
					type={"button"}
					size="small"
					label="NEW QUESTION"
					icon="plus"
					iconColorVariant="light"
					iconFill={false}
					iconStroke={true}
					iconHeight="15px"
					iconWidth="15px"
					colorVariant="primary"
					onClick={handleButtonClick}
				></RdsButton>
			</div>
			</div>
			
		</>
	);
};
export default RdsCompQuestions;
