// import { RdsButton, RdsInput, RdsRadioButton,RdsCheckbox } from "raaghu-react-elements";
import React, { FC, useState,useEffect } from "react";
import { RdsButton, RdsCheckbox, RdsRadioButton } from "../rds-elements";
import { RdsCompProfilePictureWrapper } from "./rds-comp-profile-picture.styled";

interface RdsCompProfilePictureProps {}

export enum type{
  profileAvatar,
  profileGravatar,
  profileUploadFile
}

const RdsCompProfilePicture = (props: any) => {
  const [formData,setFormData] = useState(props.profilePictureData);
  const type="";

  useEffect( () => {  
    setFormData(props.profilePictureData);
 }, [props.profilePictureData]);

 const handleProfileDataSubmit = (event: any) => {
  event.preventDefault();     
 console.log("formData is",formData)
};

function setProfilePicture(value:boolean){
	setFormData({...formData,type:value})
  }

const onClickSetProfilePicture=(event:any)=>{
  if(event.target.value=="Use Default Avatar"){
    alert(0);
  }
  else if(event.target.value=="Use Gravatar"){
    alert(1);
  }
  else if(event.target.value=="Upload File"){
    alert(2)
  }
  console.log(event.target.value);
}

  const profileList = [
    {
      checked: false,
      id: 0,
      label: "Use Default Avatar",
      name: "radio_button",
      type:0
    },
    {
      checked: false,
      id: 1,
      label: "Use Gravatar",
      name: "radio_button",
      type:1
    },
    {
      checked: false,
      id: 2,
      label: "Upload File",
      name: "radio_button",
      type:2
    },
  ];

  return (
    <form onSubmit={handleProfileDataSubmit}>
      <div className="row py-4 mt-4">
        <div className="col-4">
          <img
            src="./assets/edit-pic.png"
            alt="profilePic"
            width="130px"
            height="120px"
            className="profil_image_Class"
          ></img>
        </div>
        <div className="col-4 my-3">
          {/* <RdsRadioButton 
            displayType="Default"
            itemList={profileList} 
            // checked={formData.type}           
            onClick={onClickSetProfilePicture}
            /> */}
             <RdsCheckbox
                label="Use Default Avatar"
                onChange={(e:any) =>{setProfilePicture(e.target.checked)}}
                checked={formData}
              ></RdsCheckbox>  
              
        </div>
        <div className="col-12 col-md-12 footer-buttons">
          <RdsButton
            label="Save Changes"
            colorVariant="primary"
            block={false}
            type="submit"
            onClick={() => {
              props.handleProfileDataSubmit(formData);
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default RdsCompProfilePicture;
