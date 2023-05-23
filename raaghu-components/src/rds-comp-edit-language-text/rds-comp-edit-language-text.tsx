import React from "react";
import { RdsTextArea, RdsButton, RdsLabel } from "../rds-elements";
export interface RdsCompEditLanguageTextProps {}
const RdsCompEditLanguageText = (props: RdsCompEditLanguageTextProps) => {
  return (
    <div>
      <form>
        <div className="mb-4">
          <RdsTextArea
            label="Base Language"
            placeholder="Enter Base Value"
            isDisabled={true}
            dataTestId="base-language"
          ></RdsTextArea>
        </div>
        <div className="mb-4">
          <RdsTextArea
            label="Target Language"
            placeholder="Enter Target Language"
            dataTestId="target-language"
          ></RdsTextArea>
        </div>
        <div className="row">
          <div className="col-2">
            <RdsButton
              label="Cancel"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="submit"
              isOutline={true}
              dataTestId="cancel"
            />
          </div>
          <div className="col-2">
            <RdsButton
              label="Save"
              colorVariant="primary"
              block={true}
              tooltipTitle={""}
              type="submit"
              dataTestId="save"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default RdsCompEditLanguageText;
