import React, { useEffect, useState } from "react"; 
import {RdsButton, RdsCheckbox, RdsLabel, RdsNavtabs} from "raaghu-react-elements";
import {RdsCompChangePassword, RdsCompPersonalInfo, RdsCompProfilePicture } from "../../../rds-components";
import {  useAppDispatch,  useAppSelector} from "../../../../libs/state-management/hooks";
import { changepasswordProfile, fetchMyProfile, saveMyProfile, sendEmailVerifyProfile, setProfilePicture, setTwoFactorEnabled } from "../../../../libs/state-management/my-account/my-account-slice";


 const navtabsItems = [
    { label: "Profile Picture", tablink: "#nav-profile_picture", id: 0 },
    { label: "Change password", tablink: "#nav-change_password", id: 1 },
    { label: "Personal Info", tablink: "#nav-personal_info", id: 2 },
    { label: "Two factor", tablink: "#nav-two_Factor", id: 3 },
  ];

 const MyAccount = (props:any) => { 
    const [activeNavTabId, setActiveNavTabId] = useState(0);
    const data = useAppSelector((state) => state.persistedReducer.myaccount);
    const [twoFactorData,setFormData] = useState(false);

    const [changePasswordData, setchangePassword] = useState<any>({
        currentPassword: "",
        newPassword:"",
        newPasswordConfirm:""       
    });

    const [personalInfo, setpersonalInfo] = useState<any>({
        userName: "", 
        name:"",
        surname:"",
        email:"",
        phoneNumber:""    
    });

    const [profilePicture, setPicture] = useState<any>({
        type:0,
        // imageContent:""
    });

    const dispatch = useAppDispatch();
    
    function handlePasswordDataSubmit(formData: any) {
        dispatch(changepasswordProfile(formData) as any);
    }

    function handleTwoFactorSubmit(value:boolean) {
        setFormData(value);
        dispatch(setTwoFactorEnabled(value) as any)
        console.log("Two factor Data", value);
    }

    function handlePersonalInfoSubmit(formData:any) {
        dispatch(saveMyProfile(formData) as any);
    }

    function handleVerifyEmailDataSubmit(email:any) {
        dispatch(sendEmailVerifyProfile(email) as any);
    }

    function handleProfileDataSubmit(type:any) {
        console.log("type ", type);
        // dispatch(setProfilePictures(type) as any);
        console.log(dispatch(setProfilePicture(type) as any));
    }

    useEffect(() => {
        dispatch(fetchMyProfile() as any);

    },[dispatch]);

    useEffect(() => {
        if (data.personalInfo) {
            setpersonalInfo(data.personalInfo);
        }
      }, [data.personalInfo]);

      useEffect(() => {
        if (data.changePasswordData) {
            setchangePassword(data.changePasswordData);
        }
      }, [data.changePasswordData]);

      useEffect(() => {
        if (data.profilePicture) {
            setPicture(data.profilePicture);
        }
      }, [data.profilePicture]);


 
    return (
     <div className="mt-4">
        <div className="card border-0 px-4 h-100 rounded-0 card-full-stretch">
            <div className="card-body">                
                    <div className="col-12 cursor-pointer">
                        <RdsNavtabs                       
                        navtabsItems={navtabsItems}
                        type="tabs"
                        fill={false}
                        justified={false}
                        activeNavtabOrder={(activeNavTabId) => {
                            setActiveNavTabId(activeNavTabId);
                        }}         
                        />                                               
                    </div>
                    {activeNavTabId == 0 && (
                        <RdsCompProfilePicture
                        handleProfileDataSubmit={(type: any) => {
                            handleProfileDataSubmit(type);
                            }}
                            profilePicture={profilePicture}></RdsCompProfilePicture>
                    )}
                    {activeNavTabId == 1 && (
                        <RdsCompChangePassword
                        handlePasswordDataSubmit={(formData: any) => {
                            handlePasswordDataSubmit(formData);
                            }}
                            changePasswordData={changePasswordData}>                            
                        </RdsCompChangePassword>
                    )} 
                    {activeNavTabId == 2 && (
                        <RdsCompPersonalInfo
                        handlePersonalDataSubmit={(formData: any) => {
                            handlePersonalInfoSubmit(formData);
                        }}
                        handleVerifyEmailSubmit={(email:any)=>{
                            handleVerifyEmailDataSubmit(email)
                        }}
                        personalInfo={personalInfo}></RdsCompPersonalInfo>
                        
                    )}
                    {activeNavTabId == 3 && (
                        <>
                         <div className="mt-4 py-4">
                            <RdsCheckbox
                                label="Two factor enabled"
                                onChange={(e:any) =>{handleTwoFactorSubmit(e.target.checked)}}
                                checked={twoFactorData}
                            ></RdsCheckbox>  
                        </div>
                        <div className="mt-3 footer-buttons">
                        <RdsButton
                            label = 'Save'
                            colorVariant ='primary'                 
                            block = {false}                 
                            type = "submit"
                            onClick={()=>{handleTwoFactorSubmit(twoFactorData)}}				
                            />      
                        </div>
                        </>
                    //    <form onSubmit={handletwoFactorDataSubmit}>
                       
                    //    </form>
                    )}                                                           
            </div>
        </div>
     </div>      
      );
}

export default MyAccount;