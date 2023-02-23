import React from "react";
import {
  RdsButton,
  RdsSelectList,
  RdsCounter,
  RdsCheckbox,
} from "raaghu-react-elements";

export interface RdsCompNewFeaturesProps {}

const RdsCompNewFeatures = (props: RdsCompNewFeaturesProps) => {
  return (
    <>
      <div className="col-md-12 mt-2">
        <div className="row">
          <div className="my-2 border-bottom text-muted pb-2 px-0 mx-3">
            Identity
          </div>
          <div className="row">
            <div className="col-md-12 form-group mt-3 px-3">
              <label className="mb-2">Two factor behaviour</label>
              <RdsSelectList
                label="Optional"
                selectItems={[
                  {
                    option: "Optional",
                  },
                  {
                    option: "Disabled",
                  },
                  {
                    option: "Forced",
                  },
                ]}
              ></RdsSelectList>
            </div>
            <div className="col-md-12 form-group mt-3 px-3">
              <RdsCounter
                counterValue={0}
                min={0}
                max={0}
                width={0}
                label="Maximum User Count"
              ></RdsCounter>
            </div>
            <div className="col-md-12 mt-3 px-3 form-group">
              <RdsCheckbox
                state="Checkbox"
                label="Enable Ldap Login"
                checked={true}
                isDisabled={false}
                isSwitch={false}
                withlabel={true}
                id="id1"
                errorMessage="error Message"
              ></RdsCheckbox>
            </div>
            <div className="col-md-12 mt-3 px-3 form-group">
              <RdsCheckbox
                state="Checkbox"
                label="Enable OAuth Login"
                checked={true}
                isDisabled={false}
                isSwitch={false}
                withlabel={true}
                id="id1"
                errorMessage="error Message"
              ></RdsCheckbox>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 mt-2">
        <div className="row">
          <div className="my-2 border-bottom text-muted pb-2 px-0 mx-3">
            Setting Management
          </div>
          <div className="row">
            <div className="col-md-12 form-group mt-3 px-3">
              <RdsCheckbox
                state="Checkbox"
                label="Enable setting management"
                checked={true}
                isDisabled={false}
                isSwitch={false}
                withlabel={true}
                id="id1"
                errorMessage="error Message"
              ></RdsCheckbox>
            </div>
            <div className="col-md-12 form-group mt-3 px-3">
              <RdsCheckbox
                state="Checkbox"
                label="Allow tenants to change email settings."
                checked={false}
                isDisabled={false}
                isSwitch={false}
                withlabel={true}
                id="id1"
                errorMessage="error Message"
              ></RdsCheckbox>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 mt-2">
        <div className="row">
          <div className="my-2 border-bottom text-muted pb-2 px-0 mx-3">
            Language Management
          </div>
          <div className="row">
            <div className="col-md-12 form-group mt-3 px-3">
              <RdsCheckbox
                state="Checkbox"
                label="Enable language management"
                checked={true}
                isDisabled={false}
                isSwitch={false}
                withlabel={true}
                id="id1"
                errorMessage="error Message"
              ></RdsCheckbox>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 mt-2">
        <div className="row">
          <div className="my-2 border-bottom text-muted pb-2 px-0 mx-3">
            Text Template Management
          </div>
          <div className="row">
            <div className="col-md-12 form-group mt-3 px-3">
              <RdsCheckbox
                state="Checkbox"
                label="Enable text template management"
                checked={true}
                isDisabled={false}
                isSwitch={false}
                withlabel={true}
                id="id1"
                errorMessage="error Message"
              ></RdsCheckbox>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 mt-2">
        <div className="row">
          <div className="my-2 border-bottom text-muted pb-2 px-0 mx-3">
            Lepton Theme management
          </div>
          <div className="row">
            <div className="col-md-12 form-group mt-3 px-3">
              <RdsCheckbox
                state="Checkbox"
                label="Enable lepton theme management"
                checked={true}
                isDisabled={false}
                isSwitch={false}
                withlabel={true}
                id="id1"
                errorMessage="error Message"
              ></RdsCheckbox>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 mt-2">
        <div className="row">
          <div className="my-2 border-bottom text-muted pb-2 px-0 mx-3">
            Audit Logging
          </div>
          <div className="row">
            <div className="col-md-12 form-group mt-3 px-3">
              <RdsCheckbox
                state="Checkbox"
                label="Enabled audit logging page"
                checked={true}
                isDisabled={false}
                isSwitch={false}
                withlabel={true}
                id="id1"
                errorMessage="error Message"
              ></RdsCheckbox>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <RdsButton
          class="me-2"
          tooltipTitle={""}
          type={"button"}
          label="Cancel"
          colorVariant="outline-primary"
          size="small"
          databsdismiss="offcanvas"
        ></RdsButton>
        <RdsButton
          class="me-2"
          label="Next"
          size="small"
          colorVariant="primary"
          tooltipTitle={""}
          type={"submit"}
        ></RdsButton>
      </div>
    </>
  );
};

export default RdsCompNewFeatures;
