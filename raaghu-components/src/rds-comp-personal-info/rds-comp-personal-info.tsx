import { RdsButton, RdsInput } from "raaghu-react-elements";
import React, {  useEffect, useState } from "react";


const RdsCompPersonalInfo = (props: any) => {
  const [formData, setPersonalFormData] = useState(props.personalInfo);

  useEffect(() => {
    setPersonalFormData(props.personalInfo);
  }, [props.personalInfo]);

  const handlePersonalDataSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleVerifyEmailSubmit = (event: any) => {
    event.preventDefault();
  };

  function setUserName(value: any) {
    setPersonalFormData({ ...formData, userName: value });
  }

  function setName(value: any) {
    setPersonalFormData({ ...formData, name: value });
  }

  function setSurname(value: any) {
    setPersonalFormData({ ...formData, surname: value });
  }

  function setEmail(value: any) {
    setPersonalFormData({ ...formData, email: value });
  }

  function setPhoneNumber(value: any) {
    setPersonalFormData({ ...formData, phoneNumber: value });
  }

  return (
    <form onSubmit={handlePersonalDataSubmit}>
      <div className="row py-4">
        <div className="col-12">
          <RdsInput
            size="medium"
            label="Admin"
            inputType="text"
            isDisabled={false}
            readonly={false}
            placeholder="User name"
            value={formData.userName}
            onChange={(e: any) => setUserName(e.target.value)}
            required={true}
          ></RdsInput>
        </div>
        <div className="col-6">
          <RdsInput
            size="medium"
            label="Name"
            inputType="text"
            isDisabled={false}
            readonly={false}
            placeholder="Name"
            value={formData.name}
            onChange={(e: any) => setName(e.target.value)}
            required={true}
          ></RdsInput>
        </div>
        <div className="col-6">
          <RdsInput
            size="medium"
            label="Surname"
            inputType="text"
            isDisabled={false}
            readonly={false}
            placeholder="Surname"
            value={formData.surname}
            onChange={(e: any) => setSurname(e.target.value)}
            required={true}
          ></RdsInput>
        </div>
        <div className="col-8">
          <RdsInput
            size="medium"
            label="Email"
            inputType="text"
            isDisabled={false}
            readonly={false}
            placeholder="Email"
            value={formData.email}
            onChange={(e: any) => setEmail(e.target.value)}
            required={false}
          ></RdsInput>
        </div>
        <div className="col-4 d-flex align-items-end">
        <RdsButton
            label="Verify Email"
            colorVariant="primary"
            block={false}
            type="submit"
            onClick={() => {
              props.handleVerifyEmailSubmit(formData);
            }}
          />
        </div>
        <div className="col-12 pt-4">
          <RdsInput
            size="medium"
            label="Phone Number"
            inputType="text"
            isDisabled={false}
            readonly={false}
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={(e: any) => setPhoneNumber(e.target.value)}
            required={false}
          ></RdsInput>
        </div>
        <div className="col-12 col-md-12 footer-buttons mx-3">
          <RdsButton
            label="Save"
            colorVariant="primary"
            block={false}
            type="submit"
            onClick={() => {
              props.handlePersonalDataSubmit(formData);
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default RdsCompPersonalInfo;
