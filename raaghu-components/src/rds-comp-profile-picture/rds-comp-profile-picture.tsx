import { RdsButton, RdsInput, RdsRadioButton } from "raaghu-react-elements";
import React, { FC } from "react";
import { RdsCompProfilePictureWrapper } from "./rds-comp-profile-picture.styled";

interface RdsCompProfilePictureProps {}

const RdsCompProfilePicture = (props: any) => {
  const profileList = [
    {
      checked: false,
      id: 1,
      label: "Use Default Avatar",
      name: "radio_button",
    },
    {
      checked: false,
      id: 2,
      label: "Use Gravatar",
      name: "radio_button",
    },
    {
      checked: true,
      id: 3,
      label: "Upload File",
      name: "radio_button",
    },
  ];

  return (
    <form>
      <div className="row py-4">
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
          <RdsRadioButton displayType="Default" itemList={profileList} />
        </div>
        <div className="col-12 col-md-12 mt-5">
          <RdsButton
            label="Save Changes"
            colorVariant="primary"
            block={false}
            type="submit"
            // onClick={() => {
            //   props.handlePasswordDataSubmit(formData);
            // }}
          />
        </div>
      </div>
    </form>
  );
};

export default RdsCompProfilePicture;
