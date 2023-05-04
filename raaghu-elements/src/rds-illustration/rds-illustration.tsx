import React, { Fragment } from "react";
import { colors } from "../../libs/types";
import "./rds-illustration.scss";
import RdsIcon from "../rds-icon/rds-icon";

export interface RdsIllustrationProps {
  label?: string;
  subLabel?: string;
  colorVariant?: colors;
}

const RdsIllustration = (props: RdsIllustrationProps) => {
  return (
    <Fragment>
      <div className="align-items-center d-flex h-100 justify-content-center">
        <div className="text-center" data-testid="icon" >
          <RdsIcon
            name="file_plus"
            width="120px"
            height="120px"
            fill={false}
            stroke={true}
            colorVariant={props.colorVariant || "dark"}
          ></RdsIcon>
          <h5 data-testid="labelElement" >
            <label className="mt-4" >{props.label}</label>
          </h5>
          <div data-testid="sublabelElement" className="mt-2 opacity-25">{props.subLabel}</div>
        </div>

      </div>
    </Fragment>
  );
};
export default RdsIllustration;
