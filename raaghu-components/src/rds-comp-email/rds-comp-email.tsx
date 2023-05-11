import React, { useState, useEffect } from "react";
import { RdsButton, RdsCheckbox, RdsInput, RdsLabel } from "raaghu-react-elements";
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
        <div className="col-md-4 sm-p-0">
            <div className="form-group ">
            <RdsInput
              value={formData.smtpDomain}
              name="displayName"
              label="Domain"
              required={true}
              placeholder=""
              customClasses="form-control"
			        onChange={(e:any) => setDomain(e.target.value)} 
            ></RdsInput>
            </div>
        </div>
     </div>

   <div className="row mt-2">
        <div className="col-md-4 sm-p-0">
            <div className="form-group">
            <RdsInput
              value={formData.smtpUserName}
              name="displayName"
              label="User name"
              required={true}
              placeholder=""
              customClasses="form-control"
			        onChange={(e:any) => setUserName(e.target.value)} 
            ></RdsInput>
            </div>
        </div>
     </div>
     <div className="row mt-2">
        <div className="col-md-4 sm-p-0">
            <div className="form-group ">
            <RdsInput
              value={formData.smtpPassword}
              name="displayName"
              label="Password"
              required={true}
              placeholder=""
              inputType="password"
              customClasses="form-control"
			        onChange={(e:any) => setPassword(e.target.value)} 
            ></RdsInput>
            </div>
        </div>
     </div>

  </>:<></>


  return (
    <div className="pt-4">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-lg-4">
            <div className="form-group">
              <RdsInput
                placeholder="Email Address"
                customClasses="form-control"
                inputType="text"
                label="Default From (Sender) Email Address"
                name="email"
                required={true}
                value={formData.defaultFromDisplayName}
                onChange={(e:any) => setEmail(e.target.value)}
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
          <div className="col-md-4 col-sm-4 col-lg-4">
            <RdsInput
              value={formData.defaultFromAddress}
              name="displayName"
              required={true}
              label="Default From (Sender) Display Name"
              placeholder="Display Name"
              customClasses="form-control"
			        onChange={(e:any) => setUsername(e.target.value)} 
            ></RdsInput>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-4 col-lg-4">
            <div className="form-group">
              <RdsInput
                value={formData.smtpHost}
                name="smtpHost"
                label="SMTP Host"
                placeholder="127.0.0.1"
                required={true}
                customClasses="form-control"
				onChange={(e:any) => setSmtHost(e.target.value)}
              ></RdsInput>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4">
            <RdsInput
              value={formData.smtpPort}
              name="smtpPort"
              placeholder="25"
              label="SMTP Port"
              required={true}
              customClasses="form-control"
			  onChange={(e:any) => setPort(e.target.value)}
            ></RdsInput>
          </div>
        </div>
        <div className="row mb-3">
          <div
            className="col-lg-12 col-md-12 col-sm-12">
            <RdsCheckbox label="Use SSL"  onChange={(e:any) =>{setSSL(e.target.checked)}} checked={formData.smtpEnableSsl}></RdsCheckbox>
          </div>
        </div>

        <div className="row mb-3">
          <div
            className="col-lg-12 col-md-12 col-sm-12">
            <RdsCheckbox
              label="Use Default Credentials"
			  onChange={(e:any) =>{setCredential(e.target.checked)}}
              checked={formData.smtpUseDefaultCredentials}
            ></RdsCheckbox>
          </div>
        </div>

        {condition }
        <div className="position-relative bottom-0 justify-content-end" style={{right:0}}>
          <div className=" d-flex justify-content-start mt-3" >
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
        </div>

          
      </form>
    </div>
  );
};

export default RdsCompEmail;