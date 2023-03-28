import React, { Fragment } from "react";
import "./rds-select-list.scss"
export interface RdsSelectProps{
    label: string;
    isDisabled?:boolean;
    isMultiple?:boolean;
    selectedOption?:any;
    size?:string;
    selectItems: any[];
    selectedValue?:any;
    id?:string;
    placeholder?: string;
    classes?:string, 
    children?:React.ReactNode
    someCallback?:any;
    onSelectListChange ?:any; 
   }
const RdsSelectList = (props: RdsSelectProps) => {
  const handleChange = (e :any) => {
    if(props.isMultiple){
      var options = e.target.options;
      var value = [];
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          value.push(options[i].value);
        }
      }
      props.someCallback(value);
    }else{
      props.onSelectListChange(e.target.value);
    }
  }
  const Size = `${props.hasOwnProperty("size") ? props.size : "md"}`
  const customSize = `${Size === "lg" ? "form-select form-select-lg" : Size === "sm" ? "form-select form-select-sm" : "form-select"}`
  let Disabled = props.isDisabled || false;
  return (
    <Fragment>      <select key={props.id}  value={props.selectedValue} className={`${customSize} ${props.classes}` + ' ' + `${props.selectedValue === '' && 'text-muted' }` }
       disabled={Disabled} multiple={props.isMultiple} aria-label="select example" placeholder={props.placeholder}
       onChange={handleChange}>{}
        <option  hidden className="text-muted">{props.placeholder}</option>        {props.selectItems.map((selectItem,i) => (
          <option value={selectItem.value}  key={`${selectItem.option}+${i}+${props.id}`}>{props.children}{selectItem.option}</option>        ))}
      </select>    </Fragment>  );
};
export default RdsSelectList;