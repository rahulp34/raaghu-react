import React, { ReactNode } from "react";
import "./rds-label.css";

export interface RdsLabelProps {
	children?: ReactNode;
	label?: string;
	multiline?: boolean;
	size?: string;
	class?: string;
	fontWeight?: number | string;
	color?: string;
	required?: boolean;
	
}

const RdsLabel = (props: RdsLabelProps) => {
	return (
		<p
			className={` p-0 m-0 ${props.multiline ? "text-break" : "singleLine"} ${
				props.class
			}`}
		>
      <label
        htmlFor={props.label}
        style={{
          fontSize: props.size,
          fontWeight: props.fontWeight,
          color: props.color,
        }}
      >
        {props.label}
        {props.children}
      </label>

      {props.required && (
        <span className="text-danger ms-1">*</span>
      )}
		</p>
	);
};

export default RdsLabel;
