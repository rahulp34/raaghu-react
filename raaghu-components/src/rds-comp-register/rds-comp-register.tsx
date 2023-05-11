import React, { useEffect, useState } from "react";
import {
   RdsLabel,
   RdsButton,
   RdsInput,
   RdsCheckbox,
   RdsModal,
 } from "../rds-elements";
import { useNavigate } from "react-router-dom";

export interface RdsCompRegisterProps {
  error?: any;
  getvalidTenantName: string;
  email: string;
  password: string;
  onDismissAlert?: () => any;
  //onLogin: (email: string, password: string, rememberMe: boolean) => any;
  onLogin: (isLoginClicked?: boolean) => void;
  onRegister: (email: string, password: string,username: string) => void;
  currentTenant: any;
  validTenant: any;
}

const RdsCompRegister: React.FC<RdsCompRegisterProps> = (
  props: RdsCompRegisterProps
) => {

  const navigate = useNavigate();

  const [isLoginClicked, setIsLoginClicked] = useState(false);

  const loginHandler: any = (isLoginClicked: boolean) => {
    setIsLoginClicked(true);
    navigate("/login");
    props.onLogin(isLoginClicked);
    console.log(isLoginClicked);
  };
  const TenancyNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setCurrentTenant(event.target.value);
  };

  const emailhandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
   // setEmail(event.target.value);
  };
  const usernamehandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
   // setUsername(event.target.value);
  };

  

  const passwordhandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    //setPassword(event.target.value);
  };
  const handleSubmit: any = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // props.onRegister(email, password, username);
    // setEmail("");
    // setPassword("");
  };

  const [checked, setChecked] = useState(false);
  const [currentTenant, setCurrentTenant] = useState(
    checked ? props.currentTenant : "Not Selected"
  );
   return (
        <div>
      <div className="text-center">
        <h2>
          <b> Register </b>
        </h2>
        <div>
          <small className="pb-5 d-flex justify-content-center">
            <RdsLabel
            label={`current tenant:`+ props.getvalidTenantName}
            ></RdsLabel>
            <span className="ms-1">
              <RdsModal
                modalId="modal1"
                modalAnimation="modal fade"
                showModalFooter={false}
                showModalHeader={true}
                scrollable={false}
                verticallyCentered={false}
                modalbutton={<a className="link-primary"> (Change)</a>}
                modalTitle="Switch Tenant"
                saveChangesName={`${
                  checked ? "SWITCH TO THE TENANT" : "SWITCH TO THE HOST"
                }`}
                cancelButtonName="CANCEL"
              >
                <div className="text-start  mb-4 border-bottom">
                  <div className="form-check form-switch text-start ps-0 mb-4">
                    <RdsCheckbox label={`${
                  checked ? "SWITCH TO THE TENANT" : "SWITCH TO THE HOST"
                }`}
                 checked={checked} isSwitch={checked}
                 onChange={() => setChecked(!checked)}
                 ></RdsCheckbox>
                  </div>
                  <RdsInput
                    label="Tenancy Name"
                    placeholder="Tenancy Name"
                    inputType="email/text"
                    onChange={TenancyNameChange}
                    value={currentTenant}
                    name={"currentTenant"}
                    required={true}
                    isDisabled={!checked}
                  ></RdsInput>
                </div>
                <div className=" mb-2 mt-3 d-flex justify-content-end">
            <RdsButton
              class="me-2"
              tooltipTitle={""}
              type={"button"}
              label="Cancel"
              colorVariant="outline-primary"
              size="small"
              databsdismiss="modal"
            ></RdsButton>
            <RdsButton
              class="me-2"
              label={checked ? "SWITCH TO THE TENANT" : "SWITCH TO THE HOST"}
              size="small"
              isDisabled={false}
              colorVariant="primary"
              tooltipTitle={""}
              type={"submit"}
              databsdismiss="modal"
              onClick={() => {props.validTenant(currentTenant);setChecked(!checked)}}
            ></RdsButton>
          </div>

              
              </RdsModal>
            </span>
          </small>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group text-start">
              <RdsInput
                label="Email"
                placeholder="Email"
                inputType="email"
                onChange={emailhandleChange}
                //value={email}
                name={"email"}
                required={true}
              ></RdsInput>
            </div>

            <div className="form-group text-start ">
              <RdsInput
                required={true}
                label="Password"
                placeholder="Password"
                inputType="password"
                onChange={passwordhandleChange}
                name={"password"}
                //value={password}
              ></RdsInput>
            </div>
            
            <RdsButton
              label="Register"
              colorVariant="primary"
              showLoadingSpinner={true}
              //isDisabled={!isFormValid}
              block={true}
              tooltipTitle={""}
              type="submit"
            />
            <div className="float-start mt-3">
              <p>Already registered?  <span><a
                className="link-primary text-decoration-none"
                href="javascript:void(0)"
                onClick={loginHandler}
              >
                Login
              </a></span></p>
            </div>

            
          </form>
          <div className="pt-2">
            <RdsLabel
              class="text-mute pt-2 secondary "
              label="©2023 WAi Technologies. All rights reserved "
              size="0.7rem"
            ></RdsLabel>
          </div>
        </div>
      </div>
    </div>
   )
}

export default RdsCompRegister;
