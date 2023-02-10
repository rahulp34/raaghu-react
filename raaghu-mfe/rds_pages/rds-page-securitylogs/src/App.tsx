import React, { Suspense } from "react";
import SecurityLogs from "./security-logs/SecurityLogs";
import { RdsLabel,RdsButton } from "../../../../raaghu-elements/src";

const App = () => (
<Suspense>
  <div className="container">
    <div className="card">
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-md-8">
            <h4>Activities</h4>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
          <RdsButton type={"button"} colorVariant="primary" label="Download" 
          isOutline={true} icon="" iconHeight="15px" iconFill={false} iconStroke={true} iconWidth="15px" iconColorVariant="light"/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
             <SecurityLogs></SecurityLogs>
          </div>
        </div>
      </div>
    </div>
  </div>
</Suspense>
);

export default App;
