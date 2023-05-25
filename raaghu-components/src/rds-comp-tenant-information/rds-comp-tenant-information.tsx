import { RdsLabel } from "../rds-elements";
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
  const [activationStateList, setActivationStateList] = useState<any[]>(
    [
      { option: 'Active', value: 1 },
      { option: 'Active with Limited Time', value: 2 },
      { option: 'Inactive', value: 0 }
    ]
  );
  const [tenantInformationData, setTenantInformationData] = useState<any>(props.tenantInformationData1);
  const [databaseUrl, setDatabaseUrl] = useState("");
  const isEmailValid = (email: any) => {
    if (!email || email.length === 0) {
      return false;
    }
    return true;
  };
  const isPasswordValid = (password: any) => {
    if (!password || password.length === 0) {
      return false;
    }
    return true;
  };

  const isNameValid = (name: any) => {
    if (!name || name.length === 0) {
      return false;
    }
    return true;
  };
  const isFormValid = isPasswordValid(tenantInformationData.adminPassword) && isEmailValid(tenantInformationData.adminEmailAddress) && isNameValid(tenantInformationData.name);
  useEffect(() => {

    setTenantInformationData(props.tenantInformationData1)
  }, [props.tenantInformationData1])

  useEffect(() => {
    setEditionList(props.editions)
  }, [props.editions])

  // useEffect(() => {
  //   setActivationStateList(props.activationStates)
  // },[props.activationStates])

  function handleName(value: any) {
    setTenantInformationData({ ...tenantInformationData, name: value });
  }

  function handleEditionId(value: any) {
    setTenantInformationData({ ...tenantInformationData, editionId: value })
  }
  function handleEmail(value: any) {

    setTenantInformationData({ ...tenantInformationData, adminEmailAddress: value })
  }
  function handlePassword(value: any) {
    setTenantInformationData({ ...tenantInformationData, adminPassword: value })
  }
  function handleDatabaseUrl(value: any) {
    setDatabaseUrl(value);
    setTenantInformationData({ ...tenantInformationData, connectionStrings: { ...tenantInformationData.connectionStrings, id: value } })
  }
  function handleActivationState(value: any) {
    setTenantInformationData({ ...tenantInformationData, activationState: value })
  }


  function emitSaveData(event: any) {
    event.preventDefault();
    props.onSaveHandler(tenantInformationData);
    setTenantInformationData(
      {
        editionId: "",
        name: "",
        activationEndDate: null,
        adminPassword: "",
        activationState: "",
        adminEmailAddress: "",
        connectionStrings: { id: "", default: null, databases: [] },
      }
    );

  }

  useEffect(() => {
    props.emittedDataTenantData(tenantInformationData);
  }, [tenantInformationData]);


  return (
    <div>
      <div className="tab-content">
        <form>
          <div className="row flex-column-reverse flex-lg-row flex-md-row">
            <div className="col-md-6">
              <div className="form-group">
                <RdsInput
                  inputType="text"
                  required={true}
                  label={"Name"}
                  value={tenantInformationData.name}
                  placeholder={"Enter Tenant Name"}
                  onChange={(e) => { handleName(e.target.value) }}
                ></RdsInput>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="Edition" className="mb-2">
                  {"Edition"}
                </label>
                <RdsSelectList
                  label={"Select Edition"}
                  selectItems={editionList}
                  selectedValue={tenantInformationData.editionId}
                  onSelectListChange={(e: any) => { handleEditionId(e) }}
                ></RdsSelectList>
              </div>
            </div>
          </div>
          <div className="pb-2 border-bottom">
            <label htmlFor="Admin details">{"Admin Details"}</label>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 cursor-pointer">
              <div className="form-group">
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
            <div className="col-md-6">
              <div className="form-group">
                <RdsInput
                  required={true}
                  label="Password"
                  placeholder="Enter Password"
                  inputType="password"
                  name="adminPassword"
                  id="adminPassword"
                  value={tenantInformationData.adminPassword}
                  onChange={(e: any) => { handlePassword(e.target.value) }}
                ></RdsInput>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <RdsLabel label="Database Connection Strings" required={true} />
              <div className="form-group mt-3">
                <RdsRadioButton
                  displayType="Horizontal"
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
                <div className="col-md-12">
                  <div className="form-group">
                    <RdsInput

                      inputType="URL"
                      label={"Database URL"}
                      placeholder={"Enter URL"}
                      name="URL"
                      id="URL"
                      required={true}
                      value={tenantInformationData.connectionStrings.id}
                    // onChange={(e: any) => { handleDatabaseURL(e.target.value) }}
                    //onFocus={() => setUrlTouched(true)}
                    ></RdsInput>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <RdsLabel label="Activation State" />
                <RdsSelectList
                  label={"Activation State"}
                  selectItems={activationStateList}
                  selectedValue={tenantInformationData.activationState}
                  onSelectListChange={(e: any) => { handleActivationState(e) }}
                >
                </RdsSelectList>
              </div>
            </div>
          </div>
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
              label="Save"
              size="small"
              isDisabled={!isFormValid}
              colorVariant="primary"
              tooltipTitle={""}
              type={"submit"}
              databsdismiss="offcanvas"
              onClick={(e: any) => emitSaveData(e)}
            ></RdsButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RdsCompTenantInformation;