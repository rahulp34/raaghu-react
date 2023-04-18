import React from "react";
import { colors } from "../../libs/types";
import "./rds-toast.scss";

export interface RdsToastProps {
  colorVariant?: colors;
  headerTitle: string;
  message: string;
  delay: number;
  autohide: boolean;
  borderColor: string;
  showHeader: boolean;
}
const RdsToast = (props: RdsToastProps) => {
  let borderColor = "border border-" + props.borderColor || " ";
  let bg = " bg-" + props.colorVariant || "light";
  return (
    <>
      <div className="toast-container">
        <div
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          className={`toast fade show ${bg} ${borderColor}`}
          id="toastId"
          data-bs-autohide="true"
          data-bs-delay="1000"
          
        >
          {props.showHeader && (
            <div>
              <div className="toast-header p-2 d-flex justify-content-between">
                <strong className="me-auto text-dark">
                  {" "}
                  {props.headerTitle}{" "}
                </strong>
                <button
                  type="button"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                  className="btn-close"
                ></button>
              </div>
              <div className="toast-body">{props.message}</div>
            </div>
          )}

          {!props.showHeader && (
            <div className="m-1 toastbody ">
              <div className="d-flex justify-content-between     align-items-baseline  ">
                <div className="toast-body toastbody d-flex justify-content-between toast-text ">
                  {props.message}
                </div>
                <button
                  type="button"
                  data-bs-dismiss="toast"
                  aria-label="Close"
                  className="btn-close"
                ></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default RdsToast;


  // <div className="toast-container position-absolute p-3 start-0">
  //   <div
  //     role="alert"
  //     aria-live="assertive"
  //     aria-atomic="true"
  //     className="toast fade hide border border-undefined"
  //     id="toastId"
  //     data-bs-autohide="true"
  //     data-bs-delay="1000"
  //   >
  //     <div _ngcontent-xvo-c47="" className="toast-header toast-success">
  //       <strong _ngcontent-xvo-c47="" className="me-auto">
  //         Toast
  //       </strong>
  //       <button
  //         _ngcontent-xvo-c47=""
  //         type="button"
  //         data-bs-dismiss="toast"
  //         aria-label="Close"
  //         className="btn-close"
  //       ></button>
  //     </div>
  //     <div _ngcontent-xvo-c47="" className="toast-body">
  //       <div _ngcontent-xvo-c47="">
  //         <div
  //           _ngcontent-xvo-c47=""
  //           className="d-flex justify-content-between toast-text"
  //         >
  //           <div _ngcontent-xvo-c47=""> This is a sample toast </div>
  //           <div _ngcontent-xvo-c47=""></div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
