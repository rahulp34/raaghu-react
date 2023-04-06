import { RdsLabel } from 'raaghu-react-elements';
import React from 'react';
import RdsCompAddressInput from '../rds-comp-address-input/rds-comp-address-input';
import RdsCompAlertPopup from '../rds-comp-alert-popup';


export interface RdsCompComponentsProps { }

const RdsCompComponents = () => {
   return (
      <>
         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>Address Input</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Address Input</RdsLabel>
                     </div>
                     <RdsCompAddressInput />
                  </div>
                  <div className="col-md-6">
      <RdsLabel>Code</RdsLabel>
      <div className="bg-light bg-opacity-100 p-4 rounded-4 mt-4">
        <span className='float-end'>
        {/* <RdsButton
          // class="me-2"
          label="Copy"
          type="button"
          isOutline={true}
          colorVariant="primary"
          size="small"
          onClick={() => {
            copy_click(code_snippet)
          }}
        ></RdsButton> */}
        </span>
        {/* <pre className="language-html">
        <code className="language-html">
          {code_snippet}
        </code>
        </pre> */}
      </div>
      </div>
               </div>
            </div>
         </div>

         <div className="card p-2 border-0 rounded-0 mt-4">
            <div className='card-header'>
               <h5><RdsLabel>Alert Popup</RdsLabel></h5>
            </div>
            <div className='card-body pt-0'>
               <div className="row">
                  <div className="col-lg-6 col-md-6 col-xs-12 mb-3">
                     <div className='mb-2'>
                        <RdsLabel>Alert Popup</RdsLabel>
                     </div>
                     <>
                        <button
                           className="btn btn-primary"
                           data-bs-target="#alert_popup"
                           data-bs-toggle="modal"
                           type="button"
                        >
                           Alert popup
                        </button>
                        <RdsCompAlertPopup
                           alertConfirmation="Are you sure to Delete"
                           alertID="alert_popup"
                           cancelButtonLabel="Cancel"
                           colorVariant="danger"
                           deleteButtonLabel="Delete"
                           iconUrl="delete"
                           messageAlert="The record will be deleted permanently"
                        />
                     </>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default RdsCompComponents;
