import React from "react";
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react";
import RdsCompIdentityManagement, {
  RdsCompIdentityManagementProps,
} from "../src/rds-comp-identity-management-new/rds-comp-identity-management-new";

describe("RdsCompIdentityManagement", () => {
  const mockProps: RdsCompIdentityManagementProps = {
    handleIdentity: jest.fn(),
    lockoutSettings: {},
    passwordSettings: {},
    signSettings: {},
    userSettings: {},
  };


  it("should render the component correctly", () => {
    render(<RdsCompIdentityManagement {...mockProps} />);

    expect(screen.getByText("Required Length (Min)")).toBeInTheDocument();
    expect(
      screen.getByText("Required Special Characters (Min)")
    ).toBeInTheDocument();
  });

  it("should handle the form submission", () => {
    const handleSubmit = jest.fn();
    render(<RdsCompIdentityManagement {...mockProps} handleIdentity={handleSubmit}/>);
    fireEvent.click(screen.getByTestId("save"));
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it("should update the passwordSettings state when the 'Required Length (Min)' input is changed", () => {
    render(<RdsCompIdentityManagement {...mockProps} />);
    const inputElement = screen.getByTestId("required-length") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "10" } });
    expect(inputElement.value).toBe("10");
  });

  it("should update the lockoutSettings state when the 'Lockout Duration (Seconds)' input is changed", () => {
    render(<RdsCompIdentityManagement {...mockProps} />);
    const inputElement = screen.getByTestId("lockout-duration") as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "60" } });
    expect(inputElement.value).toBe("60");
  });

  it("should call the handleIdentity function when the 'SAVE' button is clicked", () => {
    const handleIdentity = jest.fn();
    render(<RdsCompIdentityManagement {...mockProps}  handleIdentity={handleIdentity}/>);
    fireEvent.click(screen.getByTestId("save"));
    expect(handleIdentity).toHaveBeenCalledTimes(1);
  });
});
