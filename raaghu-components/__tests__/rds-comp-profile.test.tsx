import React from "react";
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react";
import RdsCompProfile, { RdsCompProfileProps } from "../src/rds-comp-profile/rds-comp-profile";

jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
}));

const mockNavtabItems = [
  {
    id: "nav-MyAccount",
    icon: "account",
    label: "My Account",
    subText: "Manage your account",
  },
  {
    id: "nav-LinkAccount",
    icon: "link",
    label: "Linked Accounts",
    subText: "Manage linked accounts",
  },
];

const mockProps: RdsCompProfileProps = {
  navtabItems: mockNavtabItems,
  userName: "John Doe",
  userRole: "Admin",
};

describe("RdsCompProfile", () => {
  it("renders profile information correctly", () => {
    render(<RdsCompProfile {...mockProps} />);

    const profilePic = screen.getByTestId("profile-pic");
    expect(profilePic).toBeInTheDocument();
    expect(profilePic).toHaveAttribute(
      "src",
      "./assets/profile-picture-circle.svg"
    );

    const userName = screen.getByText("John Doe");
    expect(userName).toBeInTheDocument();

    const userRole = screen.getByText("Admin");
    expect(userRole).toBeInTheDocument();
  });

  it("calls the 'onLogout' prop when clicking on the logout button", () => {
    const onLogoutMock = jest.fn();
    render(<RdsCompProfile {...mockProps} onLogout={onLogoutMock} />);

    const logoutButton = screen.getByTestId("logout");
    fireEvent.click(logoutButton);
    expect(onLogoutMock).toHaveBeenCalled();
  });
});
