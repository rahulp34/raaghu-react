import React, { Suspense, useEffect, useState } from "react";
import { RdsLabel, RdsIcon } from "../rds-elements";
import code_snippet from "./code_snippet";

export interface RdsCompComponentsProps {}

const RdsCompComponents = (props: any) => {
  const [codeSnippet, setCodeSnippet] = useState<any>("");

  const [show, setShow] = useState<boolean>(false);

  const ComponentElement = React.lazy(
    () => import("./components/" + props.type + ".tsx")
  );
  console.log("Props: ", props.type);

  useEffect(() => {
    const filteredSnippets = code_snippet.filter((snippet) =>
      snippet.hasOwnProperty(props.type)
    );
    const value = Object.values(filteredSnippets[0])[0];
    setCodeSnippet(value);
  }, [props.type]);

  const copy_click = (text: any) => {
    console.log(" prop.type ,", props.type);
    setShow(true);
    navigator.clipboard.writeText(text);
  };

  const setChildCode = (message: any) => {
    console.log("setChildCode:", message);
    // setCode(message);
  };

  return (
    <>
      <div className="card p-2 border-0 rounded-0 mt-4 vh-88">
        <div className="card-header">
          <h5>
            <RdsLabel>
              {" "}
              <span className="text-capitalize">{props.type}</span>{" "}
            </RdsLabel>
          </h5>
        </div>
        <div className="card-body pt-0">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12 mb-3 mt-2">
              <RdsLabel>Preview</RdsLabel>
              <div className="mb-4 mt-3">
                <Suspense fallback={<div>Page is Loading...</div>}>
                  <ComponentElement
                    onChange={(event: any) => setChildCode(event)}
                  />
                </Suspense>
              </div>
            </div>
            <div className="col-md-6">
              <RdsLabel>Code</RdsLabel>
              <div className="bg-light mt-4 p-4 rounded-4 pb-0">
                <span className="float-end cursor-pointer">
                  {show ? (
                    <RdsIcon
                      name="check"
                      width="12px"
                      height="12px"
                      colorVariant="primary"
                      fill={false}
                      stroke={true}
                    ></RdsIcon>
                  ) : (
                    <RdsIcon
                      name="clipboard"
                      width="17px"
                      height="17px"
                      fill={false}
                      stroke={true}
                      onClick={() => copy_click(codeSnippet)}
                    ></RdsIcon>
                  )}
                </span>
                <pre className="bg-light language-html">
                  <code className="language-html">
                    {ComponentElement.name}
                    {codeSnippet}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RdsCompComponents;

















// import { RdsLabel } from 'raaghu-react-elements';
// import React from 'react';
// import RdsCompAddressInput from '../rds-comp-address-input/rds-comp-address-input';
// import RdsCompAlertPopup from '../rds-comp-alert-popup';


// export interface RdsCompComponentsProps { }

// const RdsCompComponents = () => {
//    return (
//       <>
//          <div className="card p-2 border-0 rounded-0 mt-4">
//             <div className='card-header'>
//                <h5><RdsLabel>Address Input</RdsLabel></h5>
//             </div>
//             <div className='card-body pt-0'>
//                <div className="row">
//                   <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
//                      <div className='mb-2'>
//                         <RdsLabel>Address Input</RdsLabel>
//                      </div>
//                      <RdsCompAddressInput />
//                   </div>
//                   <div className="col-md-6">
//       <RdsLabel>Code</RdsLabel>
//       <div className="bg-light bg-opacity-100 p-4 rounded-4 mt-4">
//         <span className='float-end'>
//         {/* <RdsButton
//           // class="me-2"
//           label="Copy"
//           type="button"
//           isOutline={true}
//           colorVariant="primary"
//           size="small"
//           onClick={() => {
//             copy_click(code_snippet)
//           }}
//         ></RdsButton> */}
//         </span>
//         {/* <pre className="language-html">
//         <code className="language-html">
//           {code_snippet}
//         </code>
//         </pre> */}
//       </div>
//       </div>
//                </div>
//             </div>
//          </div>

//          <div className="card p-2 border-0 rounded-0 mt-4">
//             <div className='card-header'>
//                <h5><RdsLabel>Alert Popup</RdsLabel></h5>
//             </div>
//             <div className='card-body pt-0'>
//                <div className="row">
//                   <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
//                      <div className='mb-2'>
//                         <RdsLabel>Alert Popup</RdsLabel>
//                      </div>
//                      <>
//                         <button
//                            className="btn btn-primary"
//                            data-bs-target="#alert_popup"
//                            data-bs-toggle="modal"
//                            type="button"
//                         >
//                            Alert popup
//                         </button>
//                         <RdsCompAlertPopup
//                            alertConfirmation="Are you sure to Delete"
//                            alertID="alert_popup"
//                            cancelButtonLabel="Cancel"
//                            colorVariant="danger"
//                            deleteButtonLabel="Delete"
//                            iconUrl="delete"
//                            messageAlert="The record will be deleted permanently"
//                         />
//                      </>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </>
//    );
// };

// export default RdsCompComponents;
