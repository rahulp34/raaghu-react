import React, { useEffect, useState } from "react";
import "./rds-input.scss";
import Tooltip from "../rds-tooltip/rds-tooltip";
import { placements } from "../../libs/types";
import RdsIcon from "../rds-icon";



export interface RdsInputProps {
  size?: "small" | "large" | "medium" | string;
  isDisabled?: boolean;
  readonly?: boolean;
  value?: string | null | any;
  inputType?: string;
  placeholder?: string;
  labelPositon?: string;
  tooltipPlacement?: placements;
  tooltipTitle?: string;
  name?: string;
  label?: string | "";
  id?: string;
  //required?: boolean;
  required?: boolean;

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => any;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => any;
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onKeyDown?:React.KeyboardEventHandler<HTMLInputElement>

  customClasses?: string;
  formName?: string;
}

const RdsInput = (props: RdsInputProps) => {
  const [value, setValue] = useState(props.value);
  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setValue(props.value ?? "");
  }, [props.value]);

  let size: "sm" | "lg" | undefined = undefined;

  if (props.size == "small") {
    size = "sm";
  } else if (props.size == "large") {
    size = "lg";
  }

  const [haserror, setError] = useState(false);


  const inputClasses =
    "form-control rounded form-control-" +
    size +
    " flex-grow-1 " +
    props.customClasses;

  const handleBlur = () => {
    if (!props.value) {
      setHasError(true);
    }
  };

  return (
    <>
      {!props.labelPositon && (
        <>
          {props.label && (
            <label htmlFor={props.id} className="form-label">
              {props.label}
            </label>
          )}
          {props.required && <span className="text-danger ms-1">*</span>}
        </>
      )}
      {props.labelPositon == "top" && (
        <>
          {props.label && (
            <>
              <label htmlFor={props.id} className="form-label">
                {props.label}
              </label>
              {props.required && <span className="text-danger ms-1">*</span>}
            </>
          )}
        </>
      )}

      {!props.tooltipTitle && (
        <div className="input-group">
          <input
            type={props.inputType}
            className={inputClasses}
            id={props.id}
            placeholder={props.placeholder}
            form={props.formName}
            required={props.required}
            onFocus={props.onFocus}
            onBlur={handleBlur}
            onKeyDown={props.onKeyDown}
            value={value ?? ""}
            onChange={props.onChange}
            disabled={props.isDisabled}
            readOnly={props.readonly}
          />



<RdsIcon
              name={
                showPassword
                  ? "eye"
                  : "eye_slash"
              }
              height="20px"
              width="20px"
              fill={false}
              stroke={true}
              onClick={() => setShowPassword(!showPassword)}
            />



          
        </div>
      )}

				{props.tooltipTitle && (
					<Tooltip text={props.tooltipTitle} place={props.tooltipPlacement}>
						<input
							type={props.inputType}
							className={inputClasses}
							id={props.id}
							placeholder={props.placeholder}
							name={props.name}
							form={props.formName}
							required={props.required}
							onFocus={props.onFocus}
							onBlur={handleBlur}
							onKeyDown={props.onKeyDown}
							value={value}
							onChange={props.onChange}
							disabled={props.isDisabled}
							readOnly={props.readonly}
						></input>
					</Tooltip>
				)}

        {props.labelPositon == "bottom" && (
          <>
            {props.label && (
              <>
                <label htmlFor={props.id} className="form-label">
                </label>
                {props.required && (
                  <span className="text-danger ms-1">*</span>
                )}
              </>
            )}
          </>
        )}
        {props.required && <div className="form-control-feedback">
           {props.required && !props.value && haserror &&  (<span className="text-danger">{props.label} is required </span>)}
        </div>}
      </>
    );
  }

export default RdsInput;
