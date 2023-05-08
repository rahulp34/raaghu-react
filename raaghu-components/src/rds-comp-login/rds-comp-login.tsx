import React, { useEffect, useState } from "react";
import {
  RdsLabel,
  RdsButton,
  RdsInput,
  RdsCheckbox,
  RdsModal,
} from "../rds-elements";
import "./rds-comp-login.scss";
import { useNavigate } from "react-router-dom";
export interface RdsCompLoginProps {
  email: string;
  password: string;
  onLogin: (email: string, password: string, rememberMe: boolean) => any;
  onForgotPassword: (isForgotPasswordClicked?: boolean) => void;
}

const RdsCompLogin: React.FC<RdsCompLoginProps> = (
  props: RdsCompLoginProps
) => {
  const [email, setEmail] = useState(props.email);
  const navigate = useNavigate();
  const [password, setPassword] = useState(props.password);
  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
  const [rememberMe, setrememberMe] = useState(false);
  console.log(
    " hello login comp props.email props.email",
    props.email,
    props.password
  );
  useEffect(() => {
    setEmail(props.email);
  }, [props.email]);

  useEffect(() => {
    setPassword(props.password);
  }, [props.password]);

  const onCheckedHandler = (e: any) => {
    setrememberMe(e.target.checked);
  };

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
  const emailhandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };
  const passwordhandleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  const isFormValid = isPasswordValid(password) && isEmailValid(email);

  const handleSubmit: any = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onLogin(email, password, rememberMe);
    setEmail("");
    setPassword("");
  };

  const forgotPasswordHandler: any = (isForgotPasswordClicked: boolean) => {
    setIsForgotPasswordClicked(true);
    navigate("/forgot-password");
    props.onForgotPassword(isForgotPasswordClicked);
    console.log(isForgotPasswordClicked);
  };
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div className="text-center">
        <h2>
          <b> Login </b>
        </h2>
        <div>
          <small className="pb-5 d-flex justify-content-center">
            Current Tenant : Not Selected
            <span className="ms-1">
              <RdsModal
                modalId="modal1"
                modalAnimation="modal fade"
                showModalFooter={true}
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
                <div className="text-start ps-2 mb-3">
                  <div className="form-check form-switch text-start mb-4">
                    <input
                      className="form-check-input"
                      type="rememberMe"
                      role="switch"
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckChecked"
                    >
                      Switch to tenant
                    </label>
                  </div>
                  <RdsInput
                    label="Tenancy Name"
                    placeholder="Tenancy Name"
                    inputType="text"
                    onChange={emailhandleChange}
                    value=""
                    name="name"
                    required={true}
                  ></RdsInput>
                </div>
              </RdsModal>
            </span>
          </small>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group text-start">
              <RdsInput
                label="Email/Username"
                placeholder="Email/Username"
                inputType="email/text"
                onChange={emailhandleChange}
                value={email}
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
                value={password}
              ></RdsInput>
            </div>
            <div className="d-flex justify-content-between mt-2 mb-4">
              <div>
                <div className="form-group mb-3">
                  <RdsCheckbox
                    label={"Remember me"}
                    checked={rememberMe}
                    onChange={onCheckedHandler}
                  ></RdsCheckbox>
                </div>
              </div>
              <div>
                <a
                  className="link-primary text-decoration-none float-end"
                  href="javascript:void(0)"
                  onClick={forgotPasswordHandler}
                >
                  Forgot password ?
                </a>
              </div>
            </div>
            <RdsButton
              label="Login"
              colorVariant="primary"
              showLoadingSpinner={true}
              isDisabled={!isFormValid}
              block={true}
              tooltipTitle={""}
              type="submit"
            />
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
  );
};

export default RdsCompLogin;
