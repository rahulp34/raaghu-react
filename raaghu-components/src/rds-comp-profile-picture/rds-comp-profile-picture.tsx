// import { RdsButton, RdsInput, RdsRadioButton,RdsCheckbox } from "raaghu-react-elements";
import React, { FC, useState,useEffect } from "react";
import { RdsButton, RdsCheckbox, RdsFileUploader, RdsRadioButton } from "../rds-elements";
import { RdsCompProfilePictureWrapper } from "./rds-comp-profile-picture.styled";

interface RdsCompProfilePictureProps {}

const RdsCompProfilePicture = (props: any) => {
  // const [formData,setFormData] = useState(props.profilePictureData);
  const [avatarImg, setAvatarImg] = useState<string>('./assets/profile-picture-circle.svg');
  const [type, setavatarType] = useState(0);
  const [show, setShow] = useState<boolean>(false);
  const [newProfileImage,setNewProfileImage]=useState<string>('')

  function profileImage(data:any){  
    // props.preFileInfo(data);
    console.log("Image :",data.fileName);
    setAvatarImg(data[0]);
    console.log(setAvatarImg(data[0]));
  }

//   useEffect( () => {  
//     setFormData(props.profilePictureData);
//  }, [props.profilePictureData]);

 const handleProfileDataSubmit = (event: any) => {   
 console.log("formData is",event)
};

// function setProfilePicture(value:number){
// 	setFormData({...formData,type:value})
//   }

const onClickSetProfilePicture=(event:any)=>{
  // 
  if(event.target.value=="Use Default Avatar"){
    // alert(0);
    setAvatarImg('./assets/profile-picture-circle.svg');
    setavatarType(0); 
    setShow(false);   

  }
  else if(event.target.value=="Use Gravatar"){
    // alert(1);
    setAvatarImg('./assets/Avatar-rds-mascot.svg');
    setavatarType(1);  
    setShow(false);   
  }
  else if(event.target.value=="Upload File"){
    // alert(2);
    setavatarType(2);
    // profileImage(event) 
    setShow(true);  
  }
  // console.log(event.target.value);
}

  const profileList = [
    {
      checked: true,
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
    <form >
      <div className="row py-4 mt-4">
        <div className="col-4">
          <img
            src={avatarImg}
            alt="profilePic"
            width="130px"
            height="120px"
            className="profil_image_Class"
          ></img>
        </div>
        <div className="col-8 my-3">
          <RdsRadioButton 
            displayType="Default"
            itemList={profileList}
            // id={type} 
            // checked={type}        
            onChange={() => setavatarType(type)}   
            onClick={onClickSetProfilePicture}
            />              
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          
        </div>
        { show && (
          <div className="col-md-8">
            <RdsFileUploader
            colorVariant="primary"
            extensions=""
            multiple={false}
            placeholder="" size={""} label={"Select New Image"} limit={10}
            getFileUploaderInfo={(data:any)=>profileImage(data)} 
          /> 
      </div>
        )       
      }
        
      </div>

        <div className="col-12 col-md-12 footer-buttons">
          <RdsButton
            label="Save Changes"
            colorVariant="primary"
            block={false}
            type="button"
            onClick={() => {
              handleProfileDataSubmit(type);
            }}
          />
        </div>
     
    </form>
  );
};

export default RdsCompProfilePicture;
