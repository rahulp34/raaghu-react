import { RdsButton, RdsInput } from 'raaghu-react-elements';
import React, { FC, useEffect, useState } from 'react';
import { RdsCompChangePasswordWrapper } from './rds-comp-change-password.styled';

export interface RdsCompChangePasswordProps {

}



const RdsCompChangePassword= (props:any)  => {
   const [formData,setFormData] = useState(props.changePasswordData);

   useEffect( () => {  
      setFormData(props.changePasswordData);
   }, [props.changePasswordData]);

   const handlePasswordDataSubmit = (event: any) => {
      event.preventDefault();     
     console.log("formData is",formData)
    };

   function setCurrentPassword(value :any){
      setFormData({...formData, currentPassword:value})
   }

   function setNewPassword(value :any){
      setFormData({...formData, newPassword:value})
   }

   function setConfirmNewPassword(value :any){
      setFormData({...formData, newPasswordConfirm:value})
   }

  return(
   <div className="row py-4">
      <form onSubmit={handlePasswordDataSubmit}>
      <div className="col-6 col-md-6">
         <RdsInput   
                  size="medium"
                  label="Current Password"
                  inputType="password"
                  isDisabled={false}
                  readonly={false}
                  placeholder="Current Password"
                  value={formData.currentPassword} 
                  onChange={(e:any) => setCurrentPassword(e.target.value)}              
                  required={true}               
         ></RdsInput>
      </div>
      <div className="col-6 col-md-6">
         <RdsInput
                  size="medium"
                  label="New Password"
                  inputType="password"
                  isDisabled={false}
                  readonly={false}               
                  required={true}
                  placeholder="New Password"
                  value={formData.newPassword} 
                  onChange={(e:any) => setNewPassword(e.target.value)}                
         ></RdsInput>
      </div>
      <div className="col-6 col-md-6">
         <RdsInput
                  size="medium"
                  label="Confirm New Password"
                  inputType="password"
                  isDisabled={false}
                  readonly={false}               
                  required={true} 
                  placeholder="Confirm New Password"
                  value={formData.newPasswordConfirm} 
                  onChange={(e:any) => setConfirmNewPassword(e.target.value)}               
         ></RdsInput>
      </div> 
      <div className="col-12 col-md-12 footer-buttons mx-3">
         <RdsButton
            label = 'Save'
            colorVariant ='primary'                 
            block = {false}                 
            type = "submit"
            onClick={()=>{props.handlePasswordDataSubmit(formData)}}				
         />      
      </div>        
      </form>        
   </div>
  );
}
//  <RdsCompChangePasswordWrapper>
//     RdsCompChangePassword Component
//  </RdsCompChangePasswordWrapper>


export default RdsCompChangePassword;
