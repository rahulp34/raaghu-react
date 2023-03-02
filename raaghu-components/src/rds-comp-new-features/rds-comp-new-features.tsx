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

export interface RdsCompFeatureManagementProps{
  featureIdentitySettingsData?:any[]
  saveFeature:any;
}


const RdsCompFeatures = (props: any) => {
  const [featureIdentitySettingsData, setfeatureIdentitySettingsData] = useState([{value:"Optional"},{value:3},{value:true},{value:true},{value:true},{value:true},{value:true},{value:true},{value:true}])
  const [a, setA] = useState("Optional")
  console.log(featureIdentitySettingsData)
  const twoFactChange = (event: any) => {
    setA(event.target.value);
    let data=featureIdentitySettingsData
    data[0].value = event.target.value
    setfeatureIdentitySettingsData(data);
  };

  useEffect(() => {
    if(props.featureIdentitySettingsData?.length)
    setfeatureIdentitySettingsData(props.featureIdentitySettingsData);
    setA(props.featureIdentitySettingsData[0].value);
  }, [props.featureIdentitySettingsData]);

  

  function setLDAP(value: boolean) {
    let data=featureIdentitySettingsData
    data[2].value = value
    setfeatureIdentitySettingsData(data);
  }
  function setOAuthLogin(value: boolean) {
    let data=featureIdentitySettingsData
    data[3].value = value
    setfeatureIdentitySettingsData(data);
  }
  function setLanguage(value: boolean) {
    let data=featureIdentitySettingsData
    data[4].value = value
    setfeatureIdentitySettingsData(data);
  }
  function setTextTemplate(value: boolean) {
    let data=featureIdentitySettingsData
    data[5].value = value
    setfeatureIdentitySettingsData(data);
  }
  function setAuditLog(value: boolean) {
    let data=featureIdentitySettingsData
    data[6].value = value
    setfeatureIdentitySettingsData(data);
  }
  function setMaxUser(value: string) {
    let data=featureIdentitySettingsData
    data[1].value = value
    setfeatureIdentitySettingsData(data);
  }
 
  return (
      <>

            <form>
              <div className=" text-muted mt-3 fw-bold pb-2">
                <RdsLabel
                  label="Two Factor Authentication"
                  class="mb-1"
                  size="14px"
                ></RdsLabel>
              </div>
              <div className="col-md-12 mt-1">
                <RdsSelectList
                  label="Select"
                  selectItems={[{option:"optional",value:"Optional"},{option:"forced",value:"Forced"},{option:"disable",value:"Disable"}]}
                  selectedValue={a}
                  onSelectListChange={(e:any) => {
                    twoFactChange(e)
                  }}
                  size="small"
                ></RdsSelectList>
              </div>
              <h6 className="text-muted">
                Set two factor behaviour.Optional values:Optional,Disabled,Forced
              </h6>
              <div className=" text-muted mt-4 fw-bold pb-2">
              </div>
              <div className="form-group ">
              <RdsLabel
                size="14px"
                label="Maximum User Count "
                class="form-label ms-1"
                children={<span style={{ color: "red" }}>*</span>}
              ></RdsLabel>
              <RdsInput
                size="small"
                inputType="text"
                isDisabled={false}
                readonly={false}
                placeholder="Enter Length"
                required={true}
                value={featureIdentitySettingsData[1].value}
                onChange={(e:any) => setMaxUser(e.target.value)}
              ></RdsInput>
            </div>
        
              <div className="col-md-12 mt-3">
                <RdsCheckbox
                  label="LDAP Login"
                  checked={featureIdentitySettingsData[2].value}
                  onChange={(e) => {
                    setLDAP(e.target.checked);
                  }}
                ></RdsCheckbox>
              </div>
              <div className="col-md-12 mt-3">
                <RdsCheckbox
                  label="OAuth Login"
                  checked={featureIdentitySettingsData[3].value}
                  onChange={(e) => {
                    setOAuthLogin(e.target.checked);
                  }}
                ></RdsCheckbox>
              </div>
            </form>
            <div className="col-md-12 mt-5">
              <RdsCheckbox
                label="Enable setting management"
                checked={featureIdentitySettingsData[4].value}
                onChange={(e) => {
                  setLanguage(e.target.checked);
                }}
              ></RdsCheckbox>
            </div>
            <div className="col-md-12 mt-5">
              <RdsCheckbox
                label="Allow changing email settings."
                checked={featureIdentitySettingsData[5].value}
                onChange={(e) => {
                  setLanguage(e.target.checked);
                }}
              ></RdsCheckbox>
            </div>

            <div className="col-md-12 mt-5">
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
            <div className="footer-buttons justify-content-end d-flex bottom-0 pt-0">
              <RdsButton
                class="me-2"
                label="Restore to default"
                type="button"
                isOutline={true}
                onClick={()=>{props.restoreFeatures(featureIdentitySettingsData)}}
                colorVariant="primary"
                size="small"
              ></RdsButton>
              <RdsButton
                class="me-2"
                label="CANCEL"
                type="button"
                isOutline={true}
                colorVariant="primary"
                size="small"
                databsdismiss="offcanvas"
              ></RdsButton>
              <RdsButton
                class="me-2"
                label="SAVE"
                type="submit"
                onClick={()=>{props.saveFeature(featureIdentitySettingsData)}}
                isOutline={false}
                colorVariant="primary"
                size="small"
                databsdismiss="offcanvas"
              ></RdsButton>
            </div>
             
      </>
  );
};

export default RdsCompFeatures;
