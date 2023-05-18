// import { RdsButton, RdsInput, RdsRadioButton,RdsCheckbox } from "raaghu-react-elements";
import React, { useState, useEffect } from "react";
import { RdsButton, RdsFileUploader, RdsRadioButton } from "../rds-elements";

interface RdsCompProfilePictureProps {}

const RdsCompProfilePicture = (props: any) => {
  // const [formData,setFormData] = useState(props.profilePictureData);
  const [avatarImg, setAvatarImg] = useState<any>(props.profilePictureData);
  const [type, setavatarType] = useState(0);
  const [show, setShow] = useState<boolean>(false);
  const [newProfileImage, setNewProfileImage] = useState<string>("");
  const [isExceed, setIsExceed] = useState(false);

  function profileImage(data: any) {
    const fileSize = data.files[0].size / 1024; //now size in kb
    //validation
    if (fileSize > props?.limit) {
      setIsExceed(true);
    } else {
      setIsExceed(false);
    }
    props.postProfilePic(data.files[0]);
  }

  useEffect(() => {
    setAvatarImg(props.profilePictureData);
  }, [props.profilePictureData]);


  const onClickSetProfilePicture = (event: any) => {
    if (event.target.value == "Use Default Avatar") {
      // alert(0);
      setAvatarImg("./assets/profile-picture-circle.svg");
      setavatarType(0);
      const imagePath = "./assets/profile-picture-circle.svg";

      // Create a new File object from the local file
      const file = new File([imagePath], "profile.svg", {
        type: "image/svg+xml",
      });

      props.postProfilePic(file, 0);
      setShow(false);
    } else if (event.target.value === "Use Gravatar") {
      setAvatarImg("./assets/Avatar-rds-mascot.svg");
      setavatarType(1);

      const imagePath = "./assets/Avatar-rds-mascot.svg";

      // Create a new File object from the local file
      const file = new File([imagePath], "avatar.svg", {
        type: "image/svg+xml",
      });
      props.postProfilePic(file, 1); // pass the file to the function
      setShow(false);
    } else if (event.target.value == "Upload File") {
      // alert(2);
      setavatarType(2);
      // profileImage(event)
      setShow(true);
    }
   };

  const profileList = [
    {
      checked: true,
      id: 0,
      label: "Use Default Avatar",
      name: "radio_button",
      type: 0,
    },
    {
      checked: false,
      id: 1,
      label: "Use Gravatar",
      name: "radio_button",
      type: 1,
    },
    {
      checked: false,
      id: 2,
      label: "Upload File",
      name: "radio_button",
      type: 2,
    },
  ];
  const validation = [
    {
      hint: "File size should not be greater than 1 MB.",
      isError: false,
    },
    {
      hint: "File type should be .jpg, .jpeg, and .png.",
      isError: false,
    },
  ];
  return (
    <form>
      <div className="row py-4 mt-4">
        <div className="col-4">
          <img
            src={avatarImg}
            alt="profilePic"
            width="130px"
            height="120px"
            className="profil_image_Class rounded-circle"
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
      <div className="row position-relative">
        <div className="col-md-4 "></div>
        {show && (
          <>
            <div className="col-md-4 ">
              <RdsFileUploader
                colorVariant="primary"
                extensions=".jpg, .jpeg, .png"
                multiple={false}
                placeholder=""
                size={""}
                label={"Select New Image"}
                limit={10}
                validation={validation}
                getFileUploaderInfo={(data: any) => profileImage(data)}
              />
         
            </div>
          </>
        )}
      </div>

      <div className="col-12 col-md-12 footer-buttons mx-2 mb-2">
        <RdsButton
          label="Save Changes"
          colorVariant="primary"
          isDisabled={isExceed !== true}
          block={false}
          type="button"
          onClick={props.handleProfileDataSubmit}
        />
      </div>
    </form>
  );
};

export default RdsCompProfilePicture;
