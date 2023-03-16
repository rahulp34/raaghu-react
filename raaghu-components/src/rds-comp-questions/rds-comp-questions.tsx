import React, { useEffect, useState } from "react";
import RdsCompFormsBasic from "../rds-comp-forms-basic/rds-comp-forms-basic";
import RdsCompFormsQuestion from "../rds-comp-forms-question/rds-comp-forms-question";
import { RdsButton, RdsCheckbox, RdsDropdownList, RdsInput, RdsLabel, RdsSelectList, RdsTextArea, RdsToggle } from "../rds-elements";

export interface RdsCompQuestionsProps {
}

const RdsCompQuestions = (props: RdsCompQuestionsProps) => {
	const [basicEditFormData, setbasicEditFormData] = useState({
		title: '', description: ''
	});
	const [formQuestionsDataArray, setFormQuestionsDataArray] = useState<any>([]);

	function handleNewFormData(basicInfo: any) {
		setbasicEditFormData({ title: '', description: '' });
	}
	let [count, setCount] = useState(0);
	let [btnLabel, setBtnLabel] = useState("NEW QUESTION")
	function handleButtonClick() {
		const questionId = `question_${count}`;
		const newQuestion = {
			title: "",
			description: "",
			questionType: "",
			// required: false,
			choices: [],
			id: questionId
		};

		setFormQuestionsDataArray([...formQuestionsDataArray, newQuestion]);
		setCount(count + 1);
		setDisplayedQuestion("showQuetion");

		if (count >= 0) {
			setBtnLabel("ADD");
		  }
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
						label="SAVE"
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
					{formQuestionsDataArray.map((element: any, i: number) => (<>
						<RdsCompFormsQuestion key={i} questionId={i + 1} questionNumber={i + 1} formQuestionsData={element}></RdsCompFormsQuestion>
					</>
					))}
				</>
			}
			<div className="row ">
				<div className="d-flex justify-content-end mt-4 ">
					<RdsButton
						type={"button"}
						size="small"
						label={btnLabel}
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
