import { RdsButton, RdsCheckbox, RdsInput, RdsLabel } from "raaghu-react-elements";
import { hu } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import "./rds-comp-email.scss";

const RdsCompEmail = (props: any) => {
	const [formData,setFormData] = useState(props.emailSettings)
 
 
console.log(formData);
useEffect( () => {
  
  setFormData(props.emailSettings);
}, [props.emailSettings]);

  function isValidEmail(email: any) {
    return /\S+@\S+\.\S+/.test(email);
  }
  const handleSubmit = (event: any) => {
    event.preventDefault();
    debugger
	console.log("formData is",formData)
  };
  function setEmail(value :any){
	setFormData({...formData, defaultFromDisplayName:value})
  }
  function setUsername(value :any){
	setFormData({...formData, defaultFromAddress :value})
  }
  function setSmtHost(value:any){
	setFormData({...formData, smtpHost:value})
  }
  function setPort(value:any){
	setFormData({...formData, smtpPort:value})
  }
  function setSSL(value:boolean){
    debugger
	setFormData({...formData,smtpEnableSsl:value})
  }
  function setDomain(value:any){
    setFormData({...formData,smtpDomain:value})
    }
    function setUserName(value:any){
      setFormData({...formData,smtpUserName:value})
      }
      function setPassword(value:any){
        setFormData({...formData,smtpPassword:value})
        }
  function setCredential(value:boolean){
	setFormData({...formData,smtpUseDefaultCredentials:value})
  }
 
  const condition =!formData.smtpUseDefaultCredentials?<>
  <div className="row mt-2">
        <div className="col-md-6 sm-p-0">
            <div className="form-group mb-4">
            <RdsInput
              value={formData.smtpDomain}
              name="displayName"
              label="Domain"
              placeholder=""
              customClasses="form-control"
			        onChange={e => setDomain(e.target.value)} 
            ></RdsInput>
            </div>
        </div>
     </div>

   <div className="row mt-2">
        <div className="col-md-6 sm-p-0">
            <div className="form-group mb-4">
            <RdsInput
              value={formData.smtpUserName}
              name="displayName"
              label="User name"
              placeholder=""
              customClasses="form-control"
			        onChange={e => setUserName(e.target.value)} 
            ></RdsInput>
            </div>
        </div>
     </div>
     <div className="row mt-2">
        <div className="col-md-6 sm-p-0">
            <div className="form-group mb-4">
            <RdsInput
              value={formData.smtpPassword}
              name="displayName"
              label="Password"
              placeholder=""
              inputType="password"
              customClasses="form-control"
			        onChange={e => setPassword(e.target.value)} 
            ></RdsInput>
            </div>
        </div>
     </div>

  </>:<></>


  return (
    <div className="pt-4">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <div className="form-group">
              <RdsLabel
                label="Default From (Sender) Email Address"
                class="mb-1"
                size="14px"
              ></RdsLabel>
              <RdsInput
                placeholder="Email Address"
                customClasses="form-control"
                inputType="text"
                name="email"
                value={formData.defaultFromDisplayName}
                onChange={(e) => setEmail(e.target.value)}
              ></RdsInput>
              {/* {error && (
                // <h2
                //   style={{ color: "red", fontSize: "15px", marginTop: "5px" }}
                // >
                //   {error}
                // </h2>
              )} */}
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <RdsLabel
              label="Default From (Sender) Display Name"
              class="mb-1"
              size="14px"
            ></RdsLabel>
            <RdsInput
              value={formData.defaultFromAddress}
              name="displayName"
              placeholder="Display Name"
              customClasses="form-control"
			        onChange={e => setUsername(e.target.value)} 
            ></RdsInput>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6 col-sm-6 col-lg-6">
            <div className="form-group">
              <RdsLabel label="SMTP Host" class="mb-1" size="14px"></RdsLabel>
              <RdsInput
                value={formData.smtpHost}
                name="smtpHost"
                placeholder="127.0.0.1"
                customClasses="form-control"
				onChange={e => setSmtHost(e.target.value)}
              ></RdsInput>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6">
            <RdsLabel label="SMTP Port" class="mb-1" size="14px"></RdsLabel>
            <RdsInput
              value={formData.smtpPort}
              name="smtpPort"
              placeholder="25"
              customClasses="form-control"
			  onChange={e => setPort(e.target.value)}
            ></RdsInput>
          </div>
        </div>
        <div className="row mb-3">
          <div
            className="col-lg-12 col-md-12 col-sm-12"
            style={{ fontSize: "14px" }}
          >
            <RdsCheckbox label="Use SSL"  onChange={e =>{setSSL(e.target.checked)}} checked={formData.smtpEnableSsl}></RdsCheckbox>
          </div>
        </div>

        <div className="row mb-3">
          <div
            className="col-lg-12 col-md-12 col-sm-12"
            style={{ fontSize: "14px" }}
          >
            <RdsCheckbox
              label="Use Default Credentials"
			  onChange={e =>{setCredential(e.target.checked)}}
              checked={formData.smtpUseDefaultCredentials}
            ></RdsCheckbox>
          </div>
        </div>

        {condition }
          <div className="footer-buttons justify-content-end d-flex bottom-0 pt-0" >
            <RdsButton
              class="me-2"
              label="CANCEL"
              type="button"
              isOutline={true}
              colorVariant="primary"
              size="small"
            ></RdsButton>
            <RdsButton
              class="me-2"
              label="SAVE"
              type="submit"
              isOutline={false}
              colorVariant="primary"
              size="small"
              onClick={()=>{props.handleSubmit(formData)}}
            ></RdsButton>
          </div>
      </form>
    </div>
  );
};

export default RdsCompEmail;