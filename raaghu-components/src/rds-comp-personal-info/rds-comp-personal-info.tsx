import { RdsButton, RdsInput } from "raaghu-react-elements";
import React, { FC, useEffect, useState } from "react";
import { RdsCompPersonalInfoWrapper } from "./rds-comp-personal-info.styled";

interface RdsCompPersonalInfoProps {}

const RdsCompPersonalInfo = (props: any) => {
  const [formData, setPersonalFormData] = useState(props.personalIfo);

  useEffect(() => {
    setPersonalFormData(props.personalIfo);
  }, [props.personalIfo]);

  const handlePersonalDataSubmit = (event: any) => {
    event.preventDefault();
    console.log("formData is", formData);
  };

  function setUserName(value: any) {
    setPersonalFormData({ ...formData, userName: value });
  }

  function setName(value: any) {
    setPersonalFormData({ ...formData, userName: value });
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
            value={formData.userName}
            onChange={(e: any) => setUserName(e.target.value)}
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
            value={formData.userName}
            onChange={(e: any) => setUserName(e.target.value)}
            required={true}
          ></RdsInput>
        </div>
        <div className="col-12">
          <RdsInput
            size="medium"
            label="Email"
            inputType="text"
            isDisabled={false}
            readonly={false}
            placeholder="Email"
            value={formData.userName}
            onChange={(e: any) => setUserName(e.target.value)}
            required={true}
          ></RdsInput>
        </div>
        <div className="col-12">
          <RdsInput
            size="medium"
            label="Phone Number"
            inputType="text"
            isDisabled={false}
            readonly={false}
            placeholder="Phone Number"
            value={formData.userName}
            onChange={(e: any) => setUserName(e.target.value)}
            required={true}
          ></RdsInput>
        </div>
        <div className="col-12 col-md-12">
          <RdsButton
            label="Save"
            colorVariant="primary"
            block={false}
            type="submit"
            onClick={() => {
              props.handlePasswordDataSubmit(formData);
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default RdsCompPersonalInfo;
