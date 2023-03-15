import React, { FC, useEffect, useState } from "react";
import {
  RdsButton,
  RdsCheckbox,
  RdsCounter,
  RdsInput,
  RdsLabel,
  RdsNavtabs,
  RdsSelectList,
} from "../rds-elements";

export interface RdsCompFeatureManagementProps{
 featureIdentitySettingsData1?:any;
 saveFeature:any;
 compData?:any;
 twoFactorList?:any;
 restoreFeatures?:( Event:React.MouseEvent<HTMLButtonElement>, ) => void;
}

const navtabsItems = [
  { label: "Identity", tablink: "#nav-home", id: 0 },
  { label: "Language Management", tablink: "#nav-profile", id: 1 },
  { label: "Text Template Management", tablink: "#nav-profile", id: 2 },
  { label: "Audit Logging", tablink: "#nav-profile", id: 3 },
];

const RdsCompFeatureManagement = (props: RdsCompFeatureManagementProps) => {
  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [featureIdentitySettingsData, setfeatureIdentitySettingsData] = useState<any>(props.featureIdentitySettingsData1)
  const [a, setA] = useState(featureIdentitySettingsData[0].value)
  const twoFactChange = (event: any) => {
    
    setA(event.target.value);
    let tempdata=featureIdentitySettingsData.map((curElem:any,index:any)=>{
      if(index===2){
        return {...curElem, value:event.target.value}
      }
      else return curElem;
    })
    setfeatureIdentitySettingsData(tempdata);
  };



  useEffect(() => {
    setfeatureIdentitySettingsData(props.featureIdentitySettingsData1);
    setA(props.featureIdentitySettingsData1[0].value);
  }, [props.featureIdentitySettingsData1]);



function saveFeaturesData(){
  let tempdata:any[] = [];
  

  props.featureIdentitySettingsData1.forEach((element:any,index:number) => {
    if(element.value != featureIdentitySettingsData[index].value){
      tempdata.push(featureIdentitySettingsData[index]);
    }
    });

    props.saveFeature(tempdata);
}


  function setLDAP(value: boolean) {
    let tempdata=featureIdentitySettingsData.map((curElem:any,index:any)=>{
      if(index===2){
        return {...curElem, value:value}
      }
      else return curElem;
    })
    setfeatureIdentitySettingsData(tempdata);
  }

  function setOAuthLogin(value: boolean) {
    let tempdata=featureIdentitySettingsData.map((curElem:any,index:any)=>{
      if(index===3){
        return {...curElem, value:value}
      }
      else return curElem;
    })
    setfeatureIdentitySettingsData(tempdata);
  }
  function setLanguage(value: boolean) {
    let tempdata=featureIdentitySettingsData.map((curElem:any,index:any)=>{
      if(index===4){
        return {...curElem, value:value}
      }
      else return curElem;
    })
    setfeatureIdentitySettingsData(tempdata);
  }

  function setTextTemplate(value: boolean) {
    let tempdata=featureIdentitySettingsData.map((curElem:any,index:any)=>{
      if(index===5){
        return {...curElem, value:value}
      }
      else return curElem;
    })
    setfeatureIdentitySettingsData(tempdata);
  }

  function setAuditLog(value: boolean) {
    let tempdata=featureIdentitySettingsData.map((curElem:any,index:any)=>{
      if(index===6){
        return {...curElem, value:value}
      }
      else return curElem;
    })
    setfeatureIdentitySettingsData(tempdata);
  }

  function setMaxUser(value: string) {
    let tempdata=featureIdentitySettingsData.map((curElem:any,index:any)=>{
      if(index===1){
        return {...curElem, value:value}
      }
      else return curElem;
    })
    setfeatureIdentitySettingsData(tempdata);
  }
  
  
  return (
    <div className="d-flex">
   
      <div className="mt-4 ">
        <div className="col-12"> 
        <RdsNavtabs
          navtabsItems={navtabsItems}
          type="vertical"
          fill={false}
          justified={false}
          activeNavtabOrder={(activeNavTabId) => {
            setActiveNavTabId(activeNavTabId);
          }}
        />
        </div>
      </div>

      <div className="flex-grow-1 mx-3">
        {activeNavTabId == 0 && (
          <>
            <form >
              <div className=" text-muted mt-3 ">
                <RdsLabel
                  label="Two Factor Authentication"
                  size="14px"
                ></RdsLabel>
              </div>
              <div className="col-md-4">
                <RdsSelectList
                  label="Select"
                  selectItems={props.twoFactorList}
                  selectedValue={a}
                  onSelectListChange={(e:any) => {
                    twoFactChange(e)
                  }}
                  size="medium"
                ></RdsSelectList>
              </div>
              <h6 className="text-muted mt-1">
                Set two factor behaviour.Optional values:Optional,Disabled,Forced
              </h6>
              <div className="col-md-4 text-muted mt-4 ">
              <div className="form-group ">
              <RdsInput
                size="medium"
                label="Maximum User Count "
                inputType="text"
                isDisabled={false}
                readonly={false}
                placeholder="Enter Length"
                required={true}
                value={featureIdentitySettingsData[1].value}
                onChange={(e:any) => setMaxUser(e.target.value)}
              ></RdsInput>
              </div>
            </div>
            {/* <h6 className="text-muted">
            0 = unlimited
              </h6> */}
              <div className="col-md-12 mt-3">
                <RdsCheckbox
                  label="LDAP Login"
                  checked={featureIdentitySettingsData[2].value}
                  onChange={(e:any) => {
                    setLDAP(e.target.checked);
                  }}
                ></RdsCheckbox>
              </div>
              <div className="col-md-12 mt-3">
                <RdsCheckbox
                  label="OAuth Login"
                  checked={featureIdentitySettingsData[3].value}
                  onChange={(e:any) => {
                    setOAuthLogin(e.target.checked);
                  }}
                ></RdsCheckbox>
              </div>
            </form>
          </>
        )}
        {activeNavTabId == 1 && (
          <>
            <div className="col-md-12 mt-5">
              <RdsCheckbox
                label="Enable language Management"
                checked={featureIdentitySettingsData[4].value}
                onChange={(e:any) => {
                  setLanguage(e.target.checked);
                }}
              ></RdsCheckbox>
            </div>
            <h6 className="text-muted my-2">
              Enable language management system in the application.
            </h6>
          </>
        )}
        {activeNavTabId == 2 && (
          <>
            <div className="col-md-12 mt-5">
              <RdsCheckbox
                label="Enable text template Management"
                checked={featureIdentitySettingsData[5].value}
                onChange={(e:any) => {
                  setTextTemplate(e.target.checked);
                }}
              ></RdsCheckbox>
            </div>
            <h6 className="text-muted my-2">
              Enable text management system in the application.
            </h6>
          </>
        )}
        {activeNavTabId == 3 && (
          <>
            <div className="col-md-12 mt-5">
              <RdsCheckbox
                label="Enable Audit logging page"
                checked={featureIdentitySettingsData[6].value}
                onChange={(e:any) => {
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
                size="small"
              ></RdsButton>
              <RdsButton
                class="me-2"
                label="SAVE"
                type="submit"
                onClick={saveFeaturesData}
                isOutline={false}
                colorVariant="primary"
                size="small"
              ></RdsButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RdsCompFeatureManagement;
