import React from "react";
import { Icons } from "./Icons";
import { Flags } from "./flag-icons";
import { useEffect } from "react";

export interface RdsIconProps {
  width?: string;
  height?: string;
  colorVariant?: string;
  name?: string;
  fill?: boolean;
  stroke?: boolean;
  strokeWidth?: string;
  borderRadius?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  opacity?: string;
  isAnimate?: boolean;
  classes?: any;
  dataTestId?: string;
}

const RdsIcon = (props: RdsIconProps) => {
  let name: string = !props.name ? "" : props.name.toLowerCase();
  let icon = Icons.hasOwnProperty(name) ? Icons[name] : Flags[name];

  const svgElementFromString = (svgContent: string): SVGElement => {
    const div = document.createElement("DIV");
    div.innerHTML = svgContent;
    const svg = div.querySelector("svg");
    if (!svg) {
      throw Error("<svg> tag not found");
    }
    if (props.height) {
      svg.style.height = props.height;
    }
    if (props.width) {
      svg.style.width = props.width;
    }
    if (props.opacity) {
      svg.style.opacity = props.opacity;
    }
    if (props.strokeWidth) {
      svg.style.strokeWidth = props.strokeWidth;
    }
    return (
      svg || document.createElementNS("http://www.w3.org/2000/svg", "path")
    );
  };
  var stringData =
    icon != undefined ? svgElementFromString(icon).outerHTML : "";

  return (
    <span
      className={props.classes}
      onClick={props.onClick}
      dangerouslySetInnerHTML={{ __html: stringData }}
      role="img"
      data-testid={props.dataTestId}
    />
  );
};

export default RdsIcon;
