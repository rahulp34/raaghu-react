import {
	RdsInput,
  RdsSelectList,
  RdsCheckbox,
  RdsDatePicker,
  RdsButton,
  RdsRadioButton,
} from "raaghu-react-elements";
import React ,  { useState, useEffect,useRef } from "react";
import "./rds-comp-tenant-information.scss";
import { useTranslation } from "react-i18next";
import { Id } from "@reduxjs/toolkit/dist/tsHelpers";
export interface RdsCompTenantInformationProps {
  editionList: any;
  tenantData?: any[];
  tenantInfo: (next: boolean) => void;
  onCancel?: React.EventHandler<any>;
  checkboxlabel: {
    id: string;
    label: string;
    checked: boolean;
    name: string;
  }[];
  onClick: any;
  check?: any;
  TenantName?: any;
  Username?: any;
  Url?: any;
  Password?: any;
  editTenantData: any;
  edit?: boolean;
}

const RdsCompTenantInformation = (props: RdsCompTenantInformationProps) => {
  const { t } = useTranslation();
  const [editTenantData, setEditTenantData] = useState<any>({ editTenantData: props.editTenantData });

  useEffect(() => {
    setEditTenantData({ editTenantData: props.editTenantData });
  }, [props.editTenantData]);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const [enteredTenancyName, setEnteredTenancyName] = useState("");
  const [isTenancyNameTouched, setIsTenancyNameTouched] = useState(false);
  const isTenancyNameEmpty = enteredTenancyName.trim() === "";
  const isTenancyNameInputEmptyAndTouched =
    isTenancyNameTouched && isTenancyNameEmpty;
  const [enteredTenantName, setEnteredTenantName] = useState("");
  const [isTenantNameTouched, setIsTenantNameTouched] = useState(false);
  const isTenantNameEmpty = enteredTenantName.trim() === "";
  const isTenantNameInputEmptyAndTouched =
    isTenantNameTouched && isTenantNameEmpty;
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);
  const isEnteredEmailEmpty = enteredEmail.trim() === "";
  // const isEnteredEmailInvalid = !emailRegex.test(enteredEmail);
  // const EmailInputIsEmptyAndTouched = isEmailTouched && isEnteredEmailEmpty;
  // const isEmailInputInvalid = isEnteredEmailInvalid && isEnteredEmailEmpty;
  const [UrlTouched, setUrlTouched] = useState(false);
  const [enteredUrl, setEnteredUrl] = useState("");
  const UrlEmpty = enteredUrl.trim() === "";
  const isURLTouchedandEmpty = UrlTouched && UrlEmpty;
  const isEnteredUrlInvalid = !emailRegex.test(enteredUrl);
  const isFormValid = !isTenancyNameEmpty && !isTenantNameEmpty && UrlEmpty;

  // const next = (event: any) => {
  //   if (!event || event.invalid) {
  //     return;
  //   }

  // };
  const [tenantData, settenantData] = useState<{
    name: string;
    adminEmailAddress: any;
    adminPassword: any;
    databaseURL: any;
    editionId: any;
  }>({
    name: "",
    adminEmailAddress: "",
    editionId: "",
    databaseURL: "",
    adminPassword: "",
  });
  const DatePicker = (start: any, end: any) => {};
  const [RadioButton, setRadioButton] = useState("");
  const [selctedOption, setSelectedOption] = useState("");
  const inputFile: any = useRef(null);
  const profilePicHandler = () => {
    inputFile.current.click();
  };
  // const radioButtonHandler=(event:any)=>{
  // settenantData({...tenantData.checkboxitem,checked: !tenantData.checkboxitem.checked})
  // }
  // const radioButtonHandler = (event: any) => {
  //   settenantData(prevState => ({
  //     ...prevState,
  //     checkboxitem: {
  //       ...prevState.checkboxitem,
  //       checked: !prevState.checkboxitem.checked
  //     }
  //   }));
  // }
  // const [Editions, setEdition] = useState('');
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsTenancyNameTouched(true);
    setIsEmailTouched(true);
    setIsTenantNameTouched(true);
    if (!isFormValid) return;
    props.tenantInfo(true);
    setEnteredEmail("");
    setEnteredTenancyName("");
    setEnteredTenantName("");
    setIsTenancyNameTouched(false);
    setIsEmailTouched(false);
    setIsTenantNameTouched(false);
    setUrlTouched(false);
    setEnteredUrl("");
  };

  const checkboxLabel = [
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
  useEffect(() => {
    if (tenantData && tenantData.editionId) {
      props.editionList.forEach((res: any) => {
        if (res && +res.value === +tenantData.editionId) {
          settenantData((prevState) => ({
            ...prevState,
            Editions: res.value,
          }));
          console.log("Edition", res.value);
        }
      });
    }
  }, [tenantData, props.editionList]);
  // ] value = {editTenantData.name}

  const inputChangeHandler = (e: any) => {
    if (props.edit) {
      setEditTenantData((prevState:any) => ({
        ...prevState,
        editTenantData: {
          ...prevState.editTenantData,
          name: e.target.value,
        },
      }));
      console.log("edited name", e.target.value);
    } else {
      settenantData({ ...tenantData, name: e.target.value });
    }
  };

  const UsernameChangeHandler = (e: any) => {
    if (props.edit) {
      console.log("Username", e.target.value);
    } else {
      settenantData({ ...tenantData, adminEmailAddress: e.target.value });
    }
  };

  const PasswordChangeHandler = (e: any) => {
    if (props.edit) {
      console.log("password", e.target.value);
    } else {
      settenantData({ ...tenantData, adminPassword: e.target.value });
    }
  };

  const databaseURL = (e: any) => {
    if (props.edit) {
      console.log("databaseUrl", e.target.value);
    } else {
      settenantData({ ...tenantData, databaseURL: e.target.value });
    }
  };

  const onSaveHandler = () => {
    if (props.edit) {
      console.log("edit data from comp",editTenantData)
      props.onClick(editTenantData);
    } else {
      console.log(":::::::::::::::::",tenantData)
      props.onClick(tenantData);
    }
  };

  return (
    <div>
      <div className="tab-content py-4">
        <form onSubmit={submitHandler}>
          <div className="row align-items-center">
            <div className="col-md-6 sm-p-0">
              <div className="form-group mb-3">
                <RdsInput
                  inputType="text"
                  required={true}
                  label={t("Name") || ""}
                  value={editTenantData.name}
                  name="tenancy_name"
                  id="tenancy_name"
                  placeholder={t("Enter Tenant Name") || ""}
                  onFocus={() => setIsTenancyNameTouched(true)}
                  // onChange={(e) => settenantData({...tenantData,name:e.target.value})}
                  onChange={inputChangeHandler}
                ></RdsInput>
                <div className="form-control-feedback"></div>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="Edition" className="mb-2">
                  {t("Edition")}
                </label>

                <RdsSelectList
                  //  [{option::, value"}]

                  label={t("Select Edition") || ""}
                  selectItems={props.editionList}
                  onSelectListChange={(e:any) =>
                    settenantData({ ...tenantData, editionId: e.target.value })
                  }
                ></RdsSelectList>
              </div>
            </div>
            <div className="col-md-6 text-center cursor-pointer sm-p-0">
              <img
                src="./assets/edit-pic.png"
                width="100"
                onClick={profilePicHandler}
              />

              <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <div className="mt-3 border-bottom text-muted">
            <label htmlFor="Admin details">{t("Admin Details")}</label>
          </div>
          <div className="row mt-4">
            <div className="col-md-6 cursor-pointer sm-p-0">
              <div className="form-group mb-3">
                <RdsInput
                  required={false}
                  label={t("Username/Email") || ""}
                  placeholder={t("Enter Username /Email") || ""}
                  name="email"
                  value={editTenantData.adminEmailAddress}
                  id="email"
                  onChange={UsernameChangeHandler}
                ></RdsInput>
                {/* {EmailInputIsEmptyAndTouched && (
                  <span className="red-color-error">
                    {t("Email is required")}
                  </span>
                )}
                {isEnteredEmailInvalid && !isEnteredEmailEmpty && (
                  <span className="red-color-error">
                    {t("Entered invalid Email Address")}
                  </span>
                )} */}
              </div>
            </div>
            <div className="col-md-6 sm-p-0">
              <div className="form-group mb-3">
                {/* <label htmlFor="Password" className="mb-2">
                  {t("Password")}
                </label> */}
                {/* <RdsSelectList
									label={t("Edition") ||""}
									selectItems={props.editionList}
									onSelectListChange={(e) => setSelectedOption(e.target.value)}
								></RdsSelectList> */}
                <RdsInput
                  required={true}
                  label="Password"
                  placeholder="Enter Password"
                  inputType="password"
                  name={"password"}
                  id="password"
                  value={editTenantData.adminPassword}
                  onChange={PasswordChangeHandler}
                ></RdsInput>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 sm-p-0">
              <div className="form-group mb-3">
                {/* <RdsCheckbox
                  label={t("Unlimited Time Subscription") || ""}
                  checked={false}
                  onChange={(e) =>
                    setIsUnlimitedSubscriptionChecked(e.target.checked)
                  }
                ></RdsCheckbox> */}
                <RdsRadioButton
                  displayType="Default"
                  label=""
                  itemList={checkboxLabel}
                  onClick={props.onClick}
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
                    label={t("Database URL") || ""}
                    placeholder={t("Enter URL") || ""}
                    name="URL"
                    id="URL"
                    value={editTenantData.databaseURL}
                    onChange={databaseURL}
                    onFocus={() => setUrlTouched(true)}
                  ></RdsInput>
                  {isURLTouchedandEmpty && (
                    <span className="red-color-error">
                      {t("URL is required")}
                    </span>
                  )}
                  {/* {isEnteredUrlInvalid && !isEnteredUrlInvalid && (
                  <span className="red-color-error">
                    {t("Entered invalid URL")}
                  </span>
                )} */}
                </div>
              </div>
            </div>
          )}

          {/* {!isUnlimitedSubscriptionChecked && (
            <div className="row">
              <div className="col-md-6 sm-p-0">
                <div className="form-group mb-3">
                  <RdsDatePicker
                    DatePickerLabel={""}
                    onDatePicker={DatePicker}
                  ></RdsDatePicker>
                </div>
              </div>
            </div>
          )} */}
          <div className="footer-buttons mb-2 d-flex">
            <RdsButton
              class="me-2"
              tooltipTitle={""}
              type={"button"}
              label={t("Cancel") || ""}
              colorVariant="outline-primary"
              size="small"
              databsdismiss="offcanvas"
            ></RdsButton>
            <RdsButton
              class="me-2"
              label={t("Create") || ""}
              size="small"
              colorVariant="primary"
              tooltipTitle={""}
              type={"submit"}
              databsdismiss="offcanvas"
              onClick={onSaveHandler}
              // onClick={props.onClick}
            ></RdsButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RdsCompTenantInformation;
