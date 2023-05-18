import React, { useState, useRef, Fragment, useEffect } from "react";
import "./rds-checkbox.scss";

export interface RdsCheckboxProps {
  label: string;
  labelClass?: string;
  checked: any;
  isDisabled?: boolean;
  classes?: string;
  isSwitch?: boolean;
  withlabel?: boolean;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  state?: "Checkbox" | "Indeterminate" | "ErrorCheckbox";
  errorMessage?: string;
  id?: string;
  dataTestId?: string
}

const RdsCheckbox = (props: RdsCheckboxProps) => {

  const[check,setcheck]=useState(props.checked)

  useEffect(() => {
    setcheck(props.checked)

  }, [props.checked])


  const SWITCH = `${
    props.isSwitch !== true ? " form-check " : " form-switch "
  }`;

  return (
    <Fragment>
      <div>
        <div className={`${SWITCH} ${props.classes}`}>
          <input
            type="checkbox"
            className={
              props.state == "Indeterminate"
                ? "form-check-input form-check-input-intermediate"
                : props.state == "ErrorCheckbox"
                ? " form-check-input form-check-input-error"
                : "form-check-input"
            }
            value=" "
            disabled={props.isDisabled}
            checked={check}
            id={props.id}
            name={props.id}
            onChange={props.onChange}
            data-testId={props.dataTestId}
          />

          {props.withlabel == false ? (
            <></>
          ) : (
            <label
              className={` form-check-label me-5 ms-2  ${props.labelClass} `}
              htmlFor={props.id}
            >
              {props.label}
            </label>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default RdsCheckbox;
