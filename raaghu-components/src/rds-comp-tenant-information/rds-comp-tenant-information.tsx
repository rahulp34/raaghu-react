import { RdsLabel } from "raaghu-react-elements";
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
      checked: true,
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
  const [editionList, setEditionList] = useState<any>([]);
  const [tenantInformationData, setTenantInformationData] = useState<any>(props.tenantInformationData1);
  const [databaseUrl , setDatabaseUrl]= useState("");

  useEffect(() => {
    debugger
    setTenantInformationData(props.tenantInformationData1)
  }, [props.tenantInformationData1])

  useEffect(() => {
    setEditionList(props.editions)
  }, [props.editions])

  function handleName(value: any) {
    setTenantInformationData({ ...tenantInformationData, name: value })
  }

  function handleEditionId(value: any) {
    
    setTenantInformationData({ ...tenantInformationData, editionId: value })
  }
  function handleEmail(value: any) {
    debugger
    setTenantInformationData({ ...tenantInformationData, adminEmailAddress: value })
  }
  function handlePassword(value: any) {
    setTenantInformationData({ ...tenantInformationData, password: value })
  }
  function handleDatabaseUrl(value: any) {
    setDatabaseUrl(value);
    setTenantInformationData({ ...tenantInformationData, connectionStrings: { ...tenantInformationData.connectionStrings, id: value } })
  }

  return (
    <div>
      <div className="tab-content py-4">
        <form>
          <div className="row ">
            <div className="col-md-6 sm-p-0">
              <div className="form-group mb-3">
                <RdsInput
                  inputType="text"
                  required={true}
                  label={"Name"}
                  value={tenantInformationData.name}
                  placeholder={"Enter Tenant Name"}
                  onChange={(e) => { handleName(e.target.value) }}
                ></RdsInput>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="Edition" className="mb-2">
                  {"Edition"}
                </label>
                <RdsSelectList
                  label={"Select Edition"}
                  selectItems={editionList}
                  selectedValue={tenantInformationData.editionId}
                  onSelectListChange={(e: any) => { handleEditionId(e.target.value) }}
                ></RdsSelectList>
              </div>
            </div>
            <div className="col-md-6 cursor-pointer text-center mt-2 sm-p-0">
             
              <img
                src="./assets/edit-pic.png"
                width="100"
              //onClick={}
              />
              <input
                type="file"
                id="file"
                //ref={inputFile}
                style={{ display: "none" }}
              />      
            </div>
          </div>
          <div className="my-3 pb-2 border-bottom text-muted">
            <label htmlFor="Admin details">{"Admin Details"}</label>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 cursor-pointer sm-p-0">
              <div className="form-group mb-3">
                <RdsInput
                  required={true}
                  inputType="email"
                  label="Email"
                  placeholder="Enter Email"
                  name="email"
                  value={tenantInformationData.adminEmailAddress}
                  id="email"
                  onChange={(e: any) => { handleEmail(e.target.value) }}
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
                  value={tenantInformationData.password}
                  onChange={(e: any) => { handlePassword(e.target.value) }}
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
                onClick={(e: any) => { handleDatabaseUrl(e.target.value) }}
                ></RdsRadioButton>
              </div>
            </div>
          </div>
          {databaseUrl == "Separated Database" && (
            <>
            <div className="row">
            <div className="col-md-12 sm-p-0">
              <div className="form-group mb-3">
                <RdsInput
                  
                  inputType="URL"
                  label={"Database URL"}
                  placeholder={"Enter URL"}
                  name="URL"
                  id="URL"
                  value={tenantInformationData.connectionStrings.id}
                  // onChange={(e: any) => { handleDatabaseURL(e.target.value) }}
                //onFocus={() => setUrlTouched(true)}
                ></RdsInput>
              </div>
            </div>
          </div>
          </>
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