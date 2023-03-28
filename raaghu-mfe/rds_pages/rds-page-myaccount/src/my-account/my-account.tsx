import React, { useEffect, useState } from "react"; 
import {RdsButton, RdsCheckbox, RdsLabel, RdsNavtabs} from "raaghu-react-elements";
import {RdsCompChangePassword, RdsCompPersonalInfo, RdsCompProfilePicture } from "../../../rds-components";

 const navtabsItems = [
    { label: "Profile Picture", tablink: "#nav-profile_picture", id: 0 },
    { label: "Change password", tablink: "#nav-change_password", id: 1 },
    { label: "Personal Info", tablink: "#nav-personal_info", id: 2 },
    { label: "Two factor", tablink: "#nav-two_Factor", id: 3 },
  ];

 const MyAccount = (props:any) => { 
    const [activeNavTabId, setActiveNavTabId] = useState(0);
    const [twoFactorData,setFormData] = useState(props.changePasswordData);

    var data:any;
    const [changePasswordData, setchangePassword] = useState<any>({
        cuurentPassword: "",       
    });

    const [personalIfo, setpersonalIfo] = useState<any>({
        cuurentPassword: "",       
    });
    

    function handlePasswordDataSubmit(formData: any) {
        console.log("Data", formData);
    }

    function handleTwoFactorSubmit(value:boolean) {
        setFormData({twoFactorData:value})
        console.log("Two factor Data", value);
    }

    function handlePersonalInfoSubmit(value:boolean) {
        setpersonalIfo({twoFactorData:value})
        console.log("Personal Info Data", value);
    }

    // useEffect(() => {
    //     if (data.changePasswordData) {
    //         setchangePassword(data.changePasswordData);
    //     }
    //   }, [data.changePasswordData]);
 
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
                        <RdsCompProfilePicture></RdsCompProfilePicture>
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
                        handlePersonalInfoSubmit={(formData: any) => {
                            handlePersonalInfoSubmit(formData);
                        }}
                        personalIfo={personalIfo}></RdsCompPersonalInfo>
                        
                    )}
                    {activeNavTabId == 3 && (
                       <form onSubmit={handlePasswordDataSubmit}>
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
                            onClick={()=>{handlePasswordDataSubmit(twoFactorData)}}				
                            />      
                        </div>
                       </form>
                    )}                                                           
            </div>
        </div>
     </div>      
      );
}

export default MyAccount;