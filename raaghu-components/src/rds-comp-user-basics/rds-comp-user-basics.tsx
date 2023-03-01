import React, { useState, useRef, useEffect } from "react";
import { RdsButton, RdsCheckbox, RdsInput, RdsSelectList } from "raaghu-react-elements";
// import img from "./assets/edit-profile";

export interface RdsCompUserBasicsProps {
  userData?: any;
  organizationUnit?: any;
  roles?: any;
  createUser?:any
  isEdit?:boolean;
}

const RdsCompUserBasics = (props: RdsCompUserBasicsProps) => {
  const [organizationUnit, setOrganizationUnit] = useState(
    props.organizationUnit
  );
  
  const [roles, setRoles ] = useState(props.roles);

  const [userData, setUserData] = useState<any>(props.userData);


  const setName = (event: any) => {
    setUserData({...userData, name:event.target.value})
  };

  const setSurname = (event: any) => {
    setUserData({...userData, surname:event.target.value})
  };

  const setEmail = (event: any) => {
    setUserData({...userData, email:event.target.value})
  };

  const setPassword = (event: any) => {
    setUserData({...userData, password:event.target.value})
  };

  const setUserName = (event: any) => {
    setUserData({...userData, userName:event.target.value})
  };

  const setPhoneNumber = (event: any) => {
    setUserData({...userData, phoneNumber:event.target.value})
  };
 
  function setOrganizationUnitData(value:any){
    debugger
    setUserData({...userData, organizationUnitIds:[value]})
  }
  function setRolesData(value:any){
    debugger
    setUserData({...userData, roleNames:[value]})
  }
  function handletwoFactorEnable(event:any){
    setUserData({...userData, twoFactorEnabled:event.target.checked})
  }
  function handleIsActive(event:any){
    setUserData({...userData, isActive:event.target.checked})
  }
  function handleLockoutEnabled(event:any){
    setUserData({...userData, lockoutEnabled:event.target.checked})
  }
  userData

  useEffect(()=>{
    setUserData(props.userData)
   },[props.userData])

   useEffect(()=>{
    setOrganizationUnit(props.organizationUnit)
   },[props.organizationUnit])

  useEffect(()=>{
   setOrganizationUnit(props.organizationUnit);
   setRoles(props.roles)
  },[props.roles])

  return (
    <>
      <form className="p-2 mt-2">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div>
              <RdsInput
                value={userData.name}
                placeholder="Enter Name"
                inputType="text"
                label="Name"
                name="name"
                required={true}
                onChange={(e)=>{setName(e)}}
              ></RdsInput>
            </div>
            <div>
              <RdsInput
                value={userData.surname}
                placeholder="Enter Surname"
                inputType="text"
                label="Surname"
                name="surName"
                required={true}
                onChange={(e)=>{setSurname(e)}}
              ></RdsInput>
            </div>
          </div>

          <div className="col-md-6 text-center cursor-pointer sm-p-0">
              <img
                src="./assets/edit-pic.png"
                width="100"
                //onClick={}
              />
              <input
                type="file"
                id="file"
                //ref={inputFile}
                style={{ display: "none" }}
              />
            </div>
        </div>

        <div className="row mb-2">
          <div className="col-lg-6 col-md-6">
            <div className="mb-2">
              <RdsInput
                value={userData.email}
                placeholder="Enter Email"
                inputType="email"
                label="Email Address"
                name="email"
                required={true}
                onChange={(e)=>{setEmail(e)}}
              ></RdsInput>
            </div>
          </div>
          {!props.isEdit && (<div className="col-lg-6 col-md-6">
            <div className="mb-2">
              <RdsInput
                value={userData.password}
                placeholder="****"
                inputType="password"
                label="Password"
                name="password"
                required={true}
                onChange={(e)=>{setPassword(e)}}
              ></RdsInput>
            </div>
          </div>)}
        </div>
        <div className="row">
        <div className="col-lg-6 col-md-6">
            <div className="mb-2">
              <RdsInput
                value={userData.userName}
                placeholder="Enter Username"
                inputType="text"
                label="User Name"
                name="userName"
                required={true}
                onChange={(e)=>{setUserName(e)}}
              ></RdsInput>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="mb-2">
              <RdsInput
                value={userData.phoneNumber}
                placeholder="Enter Phone"
                inputType="number"
                label="Phone Number"
                name="phone"
                required={true}
                onChange={(e)=>{setPhoneNumber(e)}}
              ></RdsInput>
            </div>
          </div>
          
        </div>
        <div className="row my-2"> 
          <div className="col-lg-6 col-md-6">
            <div className="mb-2">
            <RdsSelectList
								label={"Organization Unit"}
								selectItems={organizationUnit}
								// selectItems={props.typeList}
								// selectedValue={basicApplicationData.type}
								onSelectListChange={(e: any) => setOrganizationUnitData(e.target.value)}
							></RdsSelectList>
              
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="mb-2">
            <RdsSelectList
								label={"Roles"}
								selectItems={roles}
								onSelectListChange={(e: any) => setRolesData(e.target.value)}
						></RdsSelectList>
            </div>
          </div>
        </div>
        {!props.isEdit && (<div className="row my-2">
          <div className="mb-2 text-muted">
            <RdsCheckbox
              id="0"
              label="Two Factor Authentication"
              checked={userData.twoFactorEnabled}
              onChange={e=>{handletwoFactorEnable(e)}}
            ></RdsCheckbox>
          </div>
        </div>)}
        {props.isEdit && (<><div className="row my-2">
          <div className="mb-2 text-muted">
            <RdsCheckbox
              id="0"
              label="Active"
              checked={userData.isActive}
              onChange={e=>{handleIsActive(e)}}
            ></RdsCheckbox>
          </div>
        </div>
        <div className="row my-2">
          <div className="mb-2 text-muted">
            <RdsCheckbox
              id="0"
              label="Account Lockout"
              checked={userData.lockoutEnabled}
              onChange={e=>{handleLockoutEnabled(e)}}
            ></RdsCheckbox>
          </div>
        </div></>)}
        <div className="footer-buttons justify-content-end d-flex bottom-0 pt-0">
          <RdsButton
            class="me-2"
            label="CANCEL"
            type="button"
            databsdismiss="offcanvas"
            isOutline={true}
            colorVariant="primary"
          ></RdsButton>
          <RdsButton
            class="me-2"
            label="SAVE"
            type="button"
            isOutline={false}
            colorVariant="primary"
            onClick={()=>{props.createUser(userData)}}
            databsdismiss="offcanvas"
          ></RdsButton>
        </div>
      </form>
    </>
  );
};

export default RdsCompUserBasics;
