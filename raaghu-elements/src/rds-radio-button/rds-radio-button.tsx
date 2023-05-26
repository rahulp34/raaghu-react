import React, { useState } from "react";
import "./rds-radio-button.css";
import { useReducer } from "react";

export interface RdsRadioButtonProps {
  switch?: boolean;
  inline?: boolean;
  isInputGroup?: boolean;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
  itemList: any;
  displayType?: string;
  label?: string;
  id?:number;
  dataTestId?: string ;
  state?: 'radio' | 'errorRadio',
  errorMessage?:string;
}

const RdsRadioButton = (props: RdsRadioButtonProps) => {
  let InputGroup = props.isInputGroup || false;
  let Switch = props.switch || false;
  let Inline = props.inline || false;

  let display_type = props.displayType || "Default";
  
  let InputGroup1 = `${InputGroup === true ? "input-group-text" : ""} `;
  let Switch1 = `${Switch === true ? "form-switch" : ""} `;
  let Inline1 = `${
    Inline === true || display_type == "Horizontal" ? "form-check-inline" : ""
  } `;
  let state=props.state||'radio';//form-check-input-error
 const radioButtonClass = props.displayType === "Horizontal"?"row":"";
  return (
    <>
      <div key={props.id} >
        <div>
          <label className="d-flex">{props.label}</label>
         
          {state =="errorRadio" && <span className="error_Msg"> {props.errorMessage}</span>}
          <div className = {radioButtonClass}>

          {props.itemList?.map((item: any, idx: any) => (
            <div 
            className={`${display_type =="Horizontal" ? "col": "col-md-6" }`}
            >

            <div
              key={idx}
              className={
                "form-check mb-3 d-flex" + `${InputGroup1}` + `${Switch1}` + `${Inline1}`
              }
            >

{/* <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  <label class="form-check-label" for="flexRadioDefault1">
    Default radio
  </label>
</div> */}



              <input
                type="radio"
                className={`${state =="errorRadio" ?"form-check-input-error": "form-check-input" }`}
                name={item.name}
                value={item.label}
                defaultChecked={item.checked}
                id={item.id}
                disabled={item.disabled}
                onClick = {props.onClick}
                data-testid={props.dataTestId}
              />
              <label htmlFor={item.id} className="form-check-label ms-2">
                {item.label}
              </label>
            </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};
export default RdsRadioButton;
