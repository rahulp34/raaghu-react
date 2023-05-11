import React, { useEffect, useState } from "react";
import {
   RdsLabel,
   RdsButton,
   RdsInput,
   RdsCheckbox,
   RdsModal,
 } from "../rds-elements";

interface RdsCompRegisterProps {}

const RdsCompRegister: React.FC<RdsCompRegisterProps> = (

) => {
   return (
        <div>
      <div className="text-center">
        <h2>
          <b> Login </b>
        </h2>
        <div>
          <small className="pb-5 d-flex justify-content-center">
            <RdsLabel
            // label={`current tenant:`+ props.getvalidTenantName}
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
                // saveChangesName={`${
                //   checked ? "SWITCH TO THE TENANT" : "SWITCH TO THE HOST"
                // }`}
                cancelButtonName="CANCEL"
              >
                <div className="text-start  mb-4 border-bottom">
                  {/* <div className="form-check form-switch text-start ps-0 mb-4">
                    <RdsCheckbox label={`${
                  checked ? "SWITCH TO THE TENANT" : "SWITCH TO THE HOST"
                }`}
                 checked={checked} isSwitch={checked}
                 onChange={() => setChecked(!checked)}
                 ></RdsCheckbox> */}
                  </div>
                  <RdsInput
                    label="Tenancy Name"
                    placeholder="Tenancy Name"
                    inputType="email/text"
                  //   onChange={TenancyNameChange}
                  //   value={currentTenant}
                    name={"currentTenant"}
                    required={true}
                    //isDisabled={!checked}
                  ></RdsInput>
                {/* </div> */}
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
             // label={checked ? "SWITCH TO THE TENANT" : "SWITCH TO THE HOST"}
              size="small"
              isDisabled={false}
              colorVariant="primary"
              tooltipTitle={""}
              type={"submit"}
              databsdismiss="modal"
              //onClick={() => {props.validTenant(currentTenant);setChecked(!checked)}}
            ></RdsButton>
          </div>

              
              </RdsModal>
            </span>
          </small>
        </div>
        <div>
          {/* <form onSubmit={handleSubmit}> */}
            <div className="form-group text-start">
              <RdsInput
                label="Email/Username"
                placeholder="Email/Username"
                inputType="email/text"
               //  onChange={emailhandleChange}
               //  value={email}
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
                //onChange={passwordhandleChange}
                name={"password"}
                //value={password}
              ></RdsInput>
            </div>
            <div className="d-flex justify-content-between mt-2 mb-4">
              <div>
                <div className="form-group mb-3">
                  {/* <RdsCheckbox
                    label={"Remember me"}
                  //   checked={rememberMe}
                  //   onChange={onCheckedHandler}
                  ></RdsCheckbox> */}
                </div>
              </div>
              <div>
                <a
                  className="link-primary text-decoration-none float-end"
                  href="javascript:void(0)"
                  //onClick={forgotPasswordHandler}
                >
                  Forgot password ?
                </a>
              </div>
            </div>
            <RdsButton
              label="Login"
              colorVariant="primary"
              showLoadingSpinner={true}
              //isDisabled={!isFormValid}
              block={true}
              tooltipTitle={""}
              type="submit"
            />
          {/* </form> */}
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
