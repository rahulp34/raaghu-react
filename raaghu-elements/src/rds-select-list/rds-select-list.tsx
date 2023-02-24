import React, { Fragment } from "react";
import "./rds-select-list.scss"

export interface RdsSelectProps{
    label: string;
    isDisabled?:boolean;
    isMultiple?:boolean;
    size?:string;
    selectItems: any[];
    id?:string;
    classes?:string, 
    children?:React.ReactNode
    onSelectListChange ?:( Event:React.ChangeEvent<HTMLSelectElement>, ) => void; 
   }

const RdsSelectList = (props: RdsSelectProps) => {

  const Size = `${props.hasOwnProperty("size") ? props.size : "md"}`
  const customSize = `${Size === "lg" ? "form-select form-select-lg" : Size === "sm" ? "form-select form-select-sm" : "form-select"}`

  let Multiple = props.isMultiple || false;
  let Disabled = props.isDisabled || false;
  
  return (
    <Fragment>
      <select key={props.id}  defaultValue={props.label} className={`${customSize} ${props.classes}`}
       disabled={Disabled} multiple={Multiple} aria-label="select example"
       onChange={props.onSelectListChange}>
        <option  hidden className="text-muted">{props.label}</option>
        {props.selectItems.map((selectItem,i) => (
          <option value={selectItem.option} id={`${selectItem.id}`}  key={`${selectItem.option}+${i}+${props.id}`}>{props.children}{selectItem.option}</option>
        ))}
      </select>
    </Fragment>
  );
};

export default RdsSelectList;

