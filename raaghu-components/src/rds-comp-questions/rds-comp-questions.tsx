import React, { useEffect, useState } from "react";
import RdsCompFormsBasic from "../rds-comp-forms-basic/rds-comp-forms-basic";
import RdsCompFormsQuestion from "../rds-comp-forms-question/rds-comp-forms-question";
import RdsCompFormsQuestions from "../rds-comp-forms-question/rds-comp-forms-questions";
import { RdsButton, RdsCheckbox, RdsDropdownList, RdsInput, RdsLabel, RdsSelectList, RdsTextArea, RdsToggle } from "../rds-elements";

export interface RdsCompQuestionsProps {
	handleEditQuestion?: any;
	formQuestionsData: any[];
	basicEditFormData: any;
	getBasicEditDataFromQuestionComp?: any;
	getQuestionsEditDataFromQuestionComp?: any;
}

const RdsCompQuestions = (props: RdsCompQuestionsProps) => {
	const [basicEditFormData, setbasicEditFormData] = useState(props.basicEditFormData);
	// const [questions, setQuestions] = useState<any[]>([]);
	useEffect(() => {
		setbasicEditFormData(props.basicEditFormData)
	}, [props.basicEditFormData])

	function handleGetEditFormData(data: any) {

		const updatedFormData = {
			...data,
			questions: formQuestionsData
		};
		setbasicEditFormData(updatedFormData)
		props.getBasicEditDataFromQuestionComp(updatedFormData);                                                            
	}

	const [formQuestionsData, setFormQuestionsData] = useState(props.formQuestionsData);
	useEffect(() => {
		setFormQuestionsData(props.formQuestionsData)
	}, [props.formQuestionsData])

	function handleGetQuestions(data: any) {
        debugger
		setFormQuestionsData(data)

		props.getQuestionsEditDataFromQuestionComp(data);
	}

	return (
		<>
			<div className="row mt-3 ">
				<RdsCompFormsBasic basicInfo={basicEditFormData} handleNewFormData={(data: any) => handleGetEditFormData(data)} questions={formQuestionsData} />
			</div>
			<RdsCompFormsQuestions formQuestionsData={formQuestionsData} handleQuestions={(data: any) => handleGetQuestions(data)}></RdsCompFormsQuestions>
		</>
	);
};
export default RdsCompQuestions;
