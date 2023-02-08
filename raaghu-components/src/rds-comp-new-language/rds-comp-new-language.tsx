import React from "react";
import {
	RdsSelectList,
	RdsCheckbox,
	RdsLabel,
	RdsButton,
} from "../rds-elements";

export interface RdsCompNewLanguageProps {
	flags : any[],
	languageNames :any[]
}
const RdsCompNewLanguage = (props: RdsCompNewLanguageProps) => {


	return (
		<>
			<form>
				<div className="row">
					<div className="col-md-6 mb-3">
						<div className="form-group mt-3">
							<div className="mb-2">
								<RdsLabel
									label="Language Name"
									redAsteriskPresent={true}
								></RdsLabel>{" "}
							</div>
							<RdsSelectList
								label="Select Languages"
								selectItems={props.languageNames}
							></RdsSelectList>
						</div>
					</div>
					<div className="col-md-6 mb-3">
						<div className="form-group mt-3">
							<div className="mb-2">
								<RdsLabel label="Display Name"></RdsLabel>
							</div>
							
							<RdsSelectList label="de" selectItems={props.flags}></RdsSelectList>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6 mb-3">
						<div className="form-group mt-3">
							<div className="mb-2">
								<RdsLabel
									label="Country"
									redAsteriskPresent={true}
								></RdsLabel>{" "}
							</div>
							<RdsSelectList
								label="Select Country"
								selectItems={props.flags}
							></RdsSelectList>
						</div>
					</div>
					
				</div>

				<RdsCheckbox label="is Enabled" checked={false}></RdsCheckbox>
			</form>

			<div className="footer-buttons my-2">
				<div className="row">
					<div className="col-md-12 d-flex" >
						<div>
							<RdsButton
								label="Cancel"
								type="button"
								colorVariant="primary"
								size="small"
								databsdismiss="offcanvas"
                isOutline={true}
							></RdsButton>
						</div>
						{/* <rds-button [label]="translate.instant('Cancel')" (click)="closeCanvas()" type="button"
          [colorVariant]="'primary'" [isOutline]="true" [size]="'small'">
        </rds-button> */}
						<div>
							<RdsButton
								label="Save"
								type="button"
								size="small"
								class="ms-2"
								colorVariant="primary"
							></RdsButton>
						</div>
						{/* <rds-button [label]="translate.instant('Save')" type="button" [size]="'small'"
          [isDisabled]="!selectedLanguage||!selectedLanguage.languageName" class="ms-2" [colorVariant]="'primary'"
          (click)="addLanguage(languageForm)">
        </rds-button> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default RdsCompNewLanguage;
