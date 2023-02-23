import React, { FormEventHandler, useState } from "react";
import { RdsInput, RdsTextArea, RdsButton } from "../rds-elements";

export interface RdsCompNewClaimTypeProps {
  name: string;
  regex: string;
  value: string;
  regexDesc: string;
  desc: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  onSubmit: any;
}

const RdsCompNewClaimType = (props: RdsCompNewClaimTypeProps) => {
  const [data, setData] = useState({
    name: props.name,
    regex: props.regex,
    value: props.value,
    regexDesc: props.regexDesc,
    desc: props.desc,
  });
  const allFieldsAreEmpty = Object.values(data).every((value) => value === "");

  const onNameChangeHandler = (e: any) => {
    setData({ ...data, name: e.target.value });
  };
  const onRegexChangeHandler = (e: any) => {
    setData({ ...data, regex: e.target.value });
  };
  const onValueChangeHandler = (e: any) => {
    setData({ ...data, value: e.target.value });
  };
  const onRegexDescChangeHandler = (e: any) => {
    setData({ ...data, regexDesc: e.target.value });
  };
  const onDescChangeHAndler = (e: any) => {
    setData({ ...data, desc: e.target.value });
  };

  return (
    <>
      <>
        <div className="row">
          <RdsInput
            label="Name"
            value={data.name}
            placeholder="Enter  name"
            required={true}
            name="name"
            onChange={onNameChangeHandler}
          />
        </div>
        <div className="row">
          <div className="col-6">
            {" "}
            <RdsInput
              label="Regex"
              value={data.regex}
              name="regex"
              required={true}
              onChange={onRegexChangeHandler}
            />
          </div>
          <div className="col-6">
            {" "}
            <RdsInput
              label="Value Type"
              required={true}
              value={data.value}
              name="value"
              placeholder="Enter a value"
              onChange={onValueChangeHandler}
            />
          </div>
        </div>
        <div className="row">
          <RdsInput
            label="Regex Description"
            value={data.regexDesc}
            name="regexDesc"
            required={true}
            onChange={onRegexDescChangeHandler}
          />
        </div>
        <div className="row">
          <RdsInput
            label="Description"
            value={data.desc}
            required={true}
            name="desc"
            onChange={onDescChangeHAndler}
          />
        </div>
        <div className="d-flex footer-buttons">
          <RdsButton
            label="CANCEL"
            databsdismiss="offcanvas"
            type={"button"}
            size="small"
            isOutline={true}
            colorVariant="primary"
            class="me-2"
          ></RdsButton>
          <RdsButton
            label="SAVE"
            type={"button"}
            size="small"
            databsdismiss="offcanvas"
            isDisabled={allFieldsAreEmpty}
            colorVariant="primary"
            class="me-2"
            onClick={() => {
              props.onSubmit(data);
            }}
          ></RdsButton>
        </div>
      </>
    </>
  );
};

export default RdsCompNewClaimType;
