import React, { FC, useEffect, useState } from "react";
import {
  RdsButton,
  RdsCheckbox,
  RdsCounter,
  RdsInput,
  RdsLabel,
  RdsNavtabs,
  RdsSelectList,
} from "../../../raaghu-elements/src";

export interface RdsCompFeatureProps {
  featureIdentitySettingsData1?: any;
  saveFeature: any;
  compData?: any;
  twoFactorList?: any;
  restoreFeatures?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
}

const RdsCompFeatures = (props: RdsCompFeatureProps) => {
  const [featureIdentitySettingsData, setfeatureIdentitySettingsData] =
    useState<any>(props.featureIdentitySettingsData1);
  const [a, setA] = useState(featureIdentitySettingsData[0].value);
  const twoFactChange = (event: any) => {
    setA(event.target.value);
    let tempdata = featureIdentitySettingsData.map(
      (curElem: any, index: any) => {
        if (index === 0) {
          return { ...curElem, value: event.target.value };
        } else return curElem;
      }
    );
    setfeatureIdentitySettingsData(tempdata);
  };

  useEffect(() => {
    setfeatureIdentitySettingsData(props.featureIdentitySettingsData1);
    setA(props.featureIdentitySettingsData1[0].value);
  }, [props.featureIdentitySettingsData1]);

  function saveFeaturesData() {
    let tempdata: any[] = [];
    props.featureIdentitySettingsData1.forEach(
      (element: any, index: number) => {
        if (element.value != featureIdentitySettingsData[index].value) {
          tempdata.push(featureIdentitySettingsData[index]);
        }
      }
    );

    props.saveFeature(tempdata);
  }

  function setLDAP(value: boolean) {
    let tempdata = featureIdentitySettingsData.map(
      (curElem: any, index: any) => {
        if (index === 2) {
          return { ...curElem, value: value };
        } else return curElem;
      }
    );
    setfeatureIdentitySettingsData(tempdata);
  }

  function setOAuthLogin(value: boolean) {
    let tempdata = featureIdentitySettingsData.map(
      (curElem: any, index: any) => {
        if (index === 3) {
          return { ...curElem, value: value };
        } else return curElem;
      }
    );
    setfeatureIdentitySettingsData(tempdata);
  }

  
  function setEnableSettings(value: boolean) {
    let tempdata = featureIdentitySettingsData.map(
      (curElem: any, index: any) => {
        if (index === 4) {
          return { ...curElem, value: value };
        } else return curElem;
      }
    );
    setfeatureIdentitySettingsData(tempdata);
  }

  function setChangeEmail(value: boolean) {
    let tempdata = featureIdentitySettingsData.map(
      (curElem: any, index: any) => {
        if (index === 5) {
          return { ...curElem, value: value };
        } else return curElem;
      }
    );
    setfeatureIdentitySettingsData(tempdata);
  }

  function setLanguage(value: boolean) {
    let tempdata = featureIdentitySettingsData.map(
      (curElem: any, index: any) => {
        if (index === 6) {
          return { ...curElem, value: value };
        } else return curElem;
      }
    );
    setfeatureIdentitySettingsData(tempdata);
  }

  function setTextTemplate(value: boolean) {
    let tempdata = featureIdentitySettingsData.map(
      (curElem: any, index: any) => {
        if (index === 7) {
          return { ...curElem, value: value };
        } else return curElem;
      }
    );
    setfeatureIdentitySettingsData(tempdata);
  }

  function setAuditLog(value: boolean) {
    let tempdata = featureIdentitySettingsData.map(
      (curElem: any, index: any) => {
        if (index === 8) {
          return { ...curElem, value: value };
        } else return curElem;
      }
    );
    setfeatureIdentitySettingsData(tempdata);
  }

  function setMaxUser(value: string) {
    let tempdata = featureIdentitySettingsData.map(
      (curElem: any, index: any) => {
        if (index === 1) {
          return { ...curElem, value: value };
        } else return curElem;
      }
    );
    setfeatureIdentitySettingsData(tempdata);
  }

  return (
    <div className="d-flex ps-3 pe-3 pt-2">
      <div className="flex-grow-1 mt-3">
        <form>
          <div className="text-muted fw-bold">Identity</div>
          <hr className="mt-1 mb-4"></hr>
          <div className="mt-2 mb-2 fw-normal">
            <RdsLabel label="Two Factor Authentication" size="14px"></RdsLabel>
          </div>
          <div className="col-md-6">
            <RdsSelectList
              label="Select"
              selectItems={props.twoFactorList}
              selectedValue={a}
              onSelectListChange={(e:any) => {
                twoFactChange(e);
              }}
              size="small"
            ></RdsSelectList>
          </div>
          <h6 className="text-muted mt-1">
            Set two factor behaviour.Optional values:Optional,Disabled,Forced
          </h6>
          <div className="col-md-6 mt-3">
            <div className="form-group fw-normal">
              <RdsInput
                size="small"
                inputType="text"
                label="Maximum user count"
                isDisabled={false}
                readonly={false}
                placeholder="Enter Length"
                required={true}
                value={featureIdentitySettingsData[1].value}
                onChange={(e: any) => setMaxUser(e.target.value)}
              ></RdsInput>
            </div>
          </div>

          <div className="col-md-12">
            <RdsCheckbox
              label="LDAP Login"
              checked={featureIdentitySettingsData[2].value}
              onChange={(e) => {
                setLDAP(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
          <div className="col-md-12 mt-2">
            <RdsCheckbox
              label="OAuth Login"
              checked={featureIdentitySettingsData[3].value}
              onChange={(e) => {
                setOAuthLogin(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
        </form>

        <div className="mt-5">
          <div className="text-muted fw-bold">Setting Management</div>
          <hr className="mt-1 mb-4"></hr>
          <div className="col-md-12">
            <RdsCheckbox
              label="Enable setting management"
              checked={featureIdentitySettingsData[4].value}
              onChange={(e) => {
                setEnableSettings(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
          <div className="col-md-12 mt-2">
            <RdsCheckbox
              label="Allow changing email settings"
              checked={featureIdentitySettingsData[5].value}
              onChange={(e) => {
                setChangeEmail(e.target.checked);
              }}
            ></RdsCheckbox>
          </div>
        </div>

        <div className="col-md-12 mt-5">
          <div className="text-muted fw-bold">Language Management</div>
          <hr className="mt-1 mb-4"></hr>
          <RdsCheckbox
            label="Enable language Management"
            checked={featureIdentitySettingsData[6].value}
            onChange={(e) => {
              setLanguage(e.target.checked);
            }}
          ></RdsCheckbox>
        </div>
        <h6 className="text-muted my-2">
          Enable language management system in the application.
        </h6>

        <div className="col-md-12 mt-5">
          <div className="text-muted fw-bold">Text Template Management</div>
          <hr className="mt-1 mb-4"></hr>
          <RdsCheckbox
            label="Enable text template Management"
            checked={featureIdentitySettingsData[7].value}
            onChange={(e) => {
              setTextTemplate(e.target.checked);
            }}
          ></RdsCheckbox>
        </div>
        <h6 className="text-muted my-2">
          Enable text management system in the application.
        </h6>

        <div className="col-md-12 mt-5">
        <div className="text-muted fw-bold">Audit Logging</div>
          <hr className="mt-1 mb-4"></hr>
          <RdsCheckbox
            label="Enable Audit logging page"
            checked={featureIdentitySettingsData[8].value}
            onChange={(e) => {
              setAuditLog(e.target.checked);
            }}
          ></RdsCheckbox>
        </div>
        <h6 className="text-muted my-2">
          Enable audit logging page in the application.
        </h6>
        <div className="footer-buttons d-flex bottom-0 pt-0">
          <RdsButton
            class="me-2"
            label="Restore to default"
            type="button"
            isOutline={true}
            onClick={props.restoreFeatures}
            colorVariant="primary"
            size="small"
          ></RdsButton>
          <RdsButton
            class="me-2"
            label="CANCEL"
            type="button"
            isOutline={true}
            colorVariant="primary"
            databsdismiss="offcanvas"
            size="small"
          ></RdsButton>
          <RdsButton
            class="me-2"
            label="SAVE"
            type="submit"
            databsdismiss="offcanvas"
            onClick={saveFeaturesData}
            isOutline={false}
            colorVariant="primary"
            size="small"
          ></RdsButton>
        </div>
      </div>
    </div>
  );
};

export default RdsCompFeatures;
