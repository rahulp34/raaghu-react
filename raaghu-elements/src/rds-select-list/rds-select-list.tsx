import React, { Fragment, useEffect, useState } from "react";
import "./rds-select-list.scss";
export interface RdsSelectProps {
  label: string;
  isDisabled?: boolean;
  isMultiple?: boolean;
  selectedOption?: any;
  size?: string;
  selectItems: any[];
  selectedValue?: any;
  id?: string;
  classes?: string;
  children?: React.ReactNode;
  someCallback?: any;
  onSelectListChange?: any;
  placeholder?:string
}
const RdsSelectList = (props: RdsSelectProps) => {
  const [selectedOption, setselectedoption] = useState(props.selectedValue);

  useEffect(() => {
    if (props.selectedValue) {
      setselectedoption(props.selectedValue);
    } else {
      setselectedoption("");
    }
  }, [props.selectedValue]);

  const handleChange = (e: any) => {
    if (props.isMultiple) {
      var options = e.target.options;
      var value = [];
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      props.someCallback(value);
      console.log("value", value);
    } else {
      props.onSelectListChange(e.target.value);
      setselectedoption(e.target.value);
    }
  };
  const Size = `${props.hasOwnProperty("size") ? props.size : "md"}`;
  const customSize = `${
    Size === "lg"
      ? "form-select form-select-lg"
      : Size === "sm"
      ? "form-select form-select-sm"
      : "form-select"
  }`;
  let Disabled = props.isDisabled || false;
  return (
    <Fragment>
      {" "}
      <select
        key={props.id}
        value={selectedOption}
        className={`${customSize} ${props.classes}`}
        disabled={Disabled}
        multiple={props.isMultiple}
        aria-label="select example"
        onChange={handleChange}
      >
        {}
        <option hidden className="text-muted">
          {props.label}
        </option>{" "}
        {props.selectItems.map((selectItem, i) => (
          <option
            value={selectItem.value}
            key={`${selectItem.option}+${i}+${props.id}`}
          >
            {props.children}
            {selectItem.option}
          </option>
        ))}
      </select>{" "}
    </Fragment>
  );
};
export default RdsSelectList;
