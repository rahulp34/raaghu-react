
import React from "react";
import { RdsButton, RdsFileUploader } from "../../../../raaghu-react/raaghu-elements/src";
import "./rds-comp-fileUploader.scss";

export interface RdsCompFileUploaderProps{
onClick:any
preFileInfo?:any
}

const RdsCompFileUploader = (props: RdsCompFileUploaderProps) => {
  function folder(data:any){
    props.preFileInfo(data);
  }
  return (
    <>
      <div className="row">
        <div
          className="col ms-3 me-3 mt-2 "
          style={{
            border: "dashed 2px #D6B7FF",
            padding: "20px",
            background: "#F9F7FC 0% 0% no-repeat padding-box",
            top: "121px",
            left: "1234px",
            width: "624px",
            height: "258px",
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <div>
            <img
              src="./assets/File-upload.png"
              style={{ width: "fit-content" }}
            ></img>
          </div>

          <div>
            <RdsFileUploader
              colorVariant="primary"
              extensions=""
              multiple={true}
              placeholder="" size={""} label={""} limit={10} 
              getFileUploaderInfo={(data:any)=>folder(data)}            />
          </div>
        </div>
      </div>
      <div className="d-flex footer-buttons">
                <RdsButton
                  label="CANCEL"
                  databsdismiss="offcanvas"
                  type={"button"}
                  size="small"
                  isOutline={true}
                  colorVariant="primary"
                  class="me-2"
                ></RdsButton>
                <RdsButton
                  label="FINISH"
                  type={"button"}
                  size="small"
                  databsdismiss="offcanvas"
                  // isDisabled={""}
                  colorVariant="primary"
                  class="me-2"
                  onClick={props.onClick}
                ></RdsButton>
              </div>
    </>
  );
};

export default RdsCompFileUploader;
