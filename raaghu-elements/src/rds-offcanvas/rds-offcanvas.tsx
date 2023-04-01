import React, { HtmlHTMLAttributes, ReactNode, useEffect } from "react";
import "./rds-offcanvas.scss";
export interface RdsOffcanvasProps {
  placement: "start" | "end" | "top" | "bottom";
  backDrop: "static" | true | false;
  scrolling: boolean;
  preventEscapeKey: boolean;
  offId: any;
  canvasTitle: string;
  offcanvaswidth?: number;
  onShow?: React.EventHandler<HTMLAllCollection | any>;
  onClose?: React.EventHandler<HTMLAllCollection | any>;
  buttonname?: string;
  offcanvasbutton?: ReactNode;
  children?: ReactNode;
  onclick?: (data: any) => void;
  className?: string;
}
const RdsOffcanvas = (props: RdsOffcanvasProps) => {
  let preventEscapeKey =`${props.hasOwnProperty('preventEscapeKey')?props.preventEscapeKey :true}` 
 let Backdrop = `${props.hasOwnProperty('modalBackdrop')?props.backDrop :true}`
 
  let align = ` offcanvas offcanvas-${props.placement} ${
    props.placement == "start" || props.placement == "end"
      ? " offCanvas_Class"
      : " offCanvasClass"
  }`;
  const offcanvasCustomWidth = props.offcanvaswidth || 650;
  const Width = `${
    props.placement == "start" || props.placement == "end"
      ? `${offcanvasCustomWidth}px`
      : "100% "
  }`;
  let isCanvasTitle =props.canvasTitle !== "" && props.canvasTitle !== undefined;
  useEffect(()=>{
    const a = document.querySelectorAll('[data-bs-toggle]');
    a.forEach((element)=>{
      element.addEventListener('click',()=>{
        const b = document.querySelectorAll('.offcanvas-backdrop')
        b.forEach((el:any, index:number) => {
          if(index!=0){
            el.classList.remove('offcanvas-backdrop');
            el.classList.remove('fade');
            el.classList.remove('show');
          }
        })
      })
    })
  },[])
  
  
  return (
    <>
      {props.offcanvasbutton && (
        <div className="offcanvas_btn"
          style={{ cursor: "pointer" }}
          onClick={props.onclick}
          data-bs-toggle="offcanvas"
          data-bs-target={`#${props.offId}`}
          aria-controls={`${props.offId}`}
        >
          {props.offcanvasbutton}
        </div>
      )}
      <div
        className={align}
        data-bs-scroll={props.scrolling}
        data-bs-keyboard={preventEscapeKey}
        data-bs-backdrop={Backdrop}
        data-bs-padding={0}
        tabIndex={-1}
        id={`${props.offId}`}
        aria-labelledby={`'canvas' +${props.offId}`}
        style={{ width: Width }}
      >
         <div className={`${isCanvasTitle?'offcanvas-header':"offcanvas-header border-0"}`}>
            {isCanvasTitle && <h5 className="offcanvas-title" id={`'canvas' +${props.offId}`}>
              {props.canvasTitle}
            </h5>}
            <button
              type="button"
              className="btn-close text-reset offcanvas-close"
              onClick={props.onClose}
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
        <div className={`offcanvas-body ${props.className}`}>
          {props.children}
        </div>
      </div>
    </>
  );
};
export default RdsOffcanvas;
