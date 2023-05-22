import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import RdsCompProfilePicture from "../src/rds-comp-profile-picture";

describe("RdsCompProfilePicture", () => {
  const mockProfilePictureData = {
    // mock profile picture data
  };
  const mockPostProfilePic = jest.fn();
  const mockHandleProfileDataSubmit = jest.fn();

  it("displays the correct default avatar image", () => {
    render(
      <RdsCompProfilePicture profilePictureData="profile-picture-circle.svg" />
    );
    const avatarImage = screen.getByTestId("avatar") as HTMLImageElement;
    expect(avatarImage.src).toContain("profile-picture-circle.svg");
  });

  it("displays the selected profile picture when radio button is clicked", () => {
    render(
      <RdsCompProfilePicture
        profilePictureData={mockProfilePictureData}
        postProfilePic={mockPostProfilePic}
        handleProfileDataSubmit={mockHandleProfileDataSubmit}
      />
    );
    const gravatarRadioButton = screen.getByLabelText("Use Gravatar");
    fireEvent.click(gravatarRadioButton);
    const avatarImage = screen.getByTestId("avatar") as HTMLImageElement;
    expect(avatarImage.src).toContain("Avatar-rds-mascot.svg");
    const defaultAvatarRadioButton =
      screen.getByLabelText("Use Default Avatar");
    fireEvent.click(defaultAvatarRadioButton);
    expect(avatarImage.src).toContain("profile-picture-circle.svg");
  });

  it("allows selecting a new profile picture when 'Upload File' radio button is clicked", () => {
    render(<RdsCompProfilePicture />);
    const uploadFileRadioButton = screen.getByText("Upload File");
    fireEvent.click(uploadFileRadioButton);
    const fileUploader = screen.getByText("Select New Image");
    expect(fileUploader).toBeInTheDocument();
  });

  it("disables the save button when the file size exceeds the limit", () => {
    render(<RdsCompProfilePicture />);
    const uploadFileRadioButton = screen.getByText("Upload File");
    fireEvent.click(uploadFileRadioButton);
    const file = new File(["test"], "image.jpg", { type: "image/jpeg" });
    Object.defineProperty(file, "size", { value: 2000 });
    const fileInput = screen.getByText("Select New Image");
    fireEvent.change(fileInput, { target: { files: [file] } });
    const saveButton = screen.getByTestId("save");
    expect(saveButton).toBeDisabled();
  });
});
