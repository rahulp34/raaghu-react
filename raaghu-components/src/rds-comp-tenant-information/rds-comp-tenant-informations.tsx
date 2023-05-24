import React, { useState, useEffect } from "react";
import {
  RdsInput,
  RdsSelectList,
  RdsButton,
  RdsRadioButton,
} from "../rds-elements";

const RdsCompTenantInformation = (props: any) => {
  const radioItemList = [
    {
      id: 1,
      label: "Shared Database",
      checked: false,
      name: "radio_button",
    },
    {
      id: 2,
      label: "Separated Database",
      checked: false,
      name: "radio_button",
    },
  ];

  const RadioButton = "Separated Database";
  const [editionList , setEditionList] = useState<any>([]);
  const [tenantInformationData, setTenantInformationData] = useState<any>({
    editionId: "",
    name: "",
    activationEndDate: null,
    adminPassword: "",
    activationState: 0,
    adminEmailAddress: "",
    connectionStrings: { id: "", default: null, databases: [] },
  });

  useEffect(()=>{
    
    if(props.tenantInformationData)
    setTenantInformationData(props.tenantInformationData)
  },[props.tenantInformationData])

  useEffect(()=>{
    
    if(props.editions)
      setEditionList(props.editions)
  },[props.editions])

  function handleName(value: any) {
    setTenantInformationData({...tenantInformationData, name:value})
  }

  function handleEditionId(value: any) {
    setTenantInformationData({...tenantInformationData, editionId:value})
  }
  function handleEmail(value: any) {
    setTenantInformationData({...tenantInformationData, adminEmailAddress:value})
  }
  function handlePassword(value: any) {
    setTenantInformationData({...tenantInformationData, adminPassword:value})
  }
  function handleDatabaseURL(value: any){
    console.log();
    
    setTenantInformationData({...tenantInformationData, connectionStrings:{...tenantInformationData.connectionStrings, id:value}})
  }

  return (
    <div>
      <div className="tab-content py-4">
        <form>
          <div className="row align-items-center">
            <div className="col-md-6 sm-p-0">
              <div className="form-group mb-3">
                <RdsInput
                  inputType="text"
                  required={true}
                  label={"Name"}
                  value={tenantInformationData.name}
                  placeholder={"Enter Tenant Name"}
                  onChange={(e)=>{handleName(e.target.value)}}
                ></RdsInput>
                <div className="form-control-feedback"></div>
              </div>
              <div className="form-group mb-3">       
                <label htmlFor="Edition" className="mb-2">
                  {"Edition"}
                </label>
                <RdsSelectList
                  label={"Select Edition"}
                  selectItems={editionList}
                  selectedValue={tenantInformationData.editionId}
                  onSelectListChange={(e:any)=>{handleEditionId(e)}}
                ></RdsSelectList>
              </div>
            </div>
            <div className="col-md-6 text-center cursor-pointer sm-p-0">
              <img
                src="./assets/edit-pic.png"
                width="100"
                //onClick={}
              />
              <input
                type="file"
                id="file"
                //ref={inputFile}
                className="d-none"/>
            </div>
          </div>
          <div className="mt-3 border-bottom text-muted">
            
            <label htmlFor="Admin details">{"Admin Details"}</label>
          </div>
          <div className="row mt-4">
            
            <div className="col-md-6 cursor-pointer sm-p-0">
              
              <div className="form-group mb-3">
                
                <RdsInput
                  required={false}
                  inputType="email"
                  label="Username/Email"
                  placeholder="Enter Username /Email"
                  name="email"
                  value={tenantInformationData.adminEmailAddress}
                  id="email"
                  onChange={(e:any)=>{handleEmail(e.target.value)}}
                ></RdsInput>
              </div>
            </div>
            <div className="col-md-6 sm-p-0">
              <div className="form-group mb-3">
                <RdsInput
                  required={true}
                  label="Password"
                  placeholder="Enter Password"
                  inputType="password"
                  name="password"
                  id="password"
                  value={tenantInformationData.adminPassword}
                  onChange={(e:any)=>{handlePassword(e.target.value)}}
                ></RdsInput>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 sm-p-0">
              <div className="form-group mb-3">
                <RdsRadioButton
                  displayType="Default"
                  label=""
                  itemList={radioItemList}
                  //onClick={props.onClick}
                ></RdsRadioButton>
              </div>
            </div>
          </div>
          {RadioButton == "Separated Database" && (
            <div className="row">
              <div className="col-md-12 sm-p-0">
                
                <div className="form-group mb-3">
                  
                  <RdsInput
                    required={true}
                    inputType="URL"
                    label={"Database URL"}
                    placeholder={"Enter URL"}
                    name="URL"
                    id="URL"
                    value={tenantInformationData.connectionStrings.id}
                    onChange={(e:any)=>{handleDatabaseURL(e.target.value)}}
                    //onFocus={() => setUrlTouched(true)}
                  ></RdsInput>
                </div>
              </div>
            </div>
          )}
          <div className="footer-buttons mb-2 d-flex"> 
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
              label="Create"
              size="small"
              colorVariant="primary"
              tooltipTitle={""}
              type={"submit"}
              databsdismiss="offcanvas"
              onClick={() => {
                props.onSaveHandler(tenantInformationData);
              }}
            ></RdsButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RdsCompTenantInformation;