import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import RdsCompProfileEdit, {
  RdsCompProfileEditProps,
} from "../src/rds-comp-profile-edit/rds-comp-profile-edit";

describe("RdsCompProfileEdit", () => {
  const mockOnForgotPassword = jest.fn();

  const setup = (props: Partial<RdsCompProfileEditProps> = {}) => {
    const initialProps: RdsCompProfileEditProps = {
      onForgotPassword: mockOnForgotPassword,
      ...props,
    };

    render(<RdsCompProfileEdit {...initialProps} />);
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the component correctly", () => {
    setup();

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
    expect(screen.getByLabelText("User Name")).toBeInTheDocument();
    expect(screen.getByTestId("cancel")).toBeInTheDocument();
    expect(screen.getByTestId("save")).toBeInTheDocument();
  });

  it("should display an error message for empty name input when blurred", () => {
    setup();

    const nameInput = screen.getByLabelText("Name");
    fireEvent.blur(nameInput);

    expect(
      screen.getByText("Tenancy Name must not be empty")
    ).toBeInTheDocument();
  });

  it("should display an error message for empty email input when blurred", () => {
    setup();

    const emailInput = screen.getByLabelText("Email Address");
    fireEvent.blur(emailInput);
    expect(screen.getByText("Email must not be empty")).toBeInTheDocument();
  });

  it("should display an error message for invalid email input when blurred", () => {
    setup();

    const emailInput = screen.getByLabelText("Email Address");
    fireEvent.change(emailInput, { target: { value: "invalidEmail" } });
    fireEvent.blur(emailInput);
    expect(screen.getByText("Entered Email is Invalid")).toBeInTheDocument();
  });

  it("should display an error message for empty phone number input when blurred", () => {
    setup();

    const phoneInput = screen.getByLabelText("Phone Number");
    fireEvent.blur(phoneInput);
    expect(
      screen.getByText("Phone Number must not be empty")
    ).toBeInTheDocument();
  });

  it("should display an error message for invalid phone number input when blurred", () => {
    setup();

    const phoneInput = screen.getByLabelText("Phone Number");
    fireEvent.change(phoneInput, { target: { value: "123" } });
    fireEvent.blur(phoneInput);
    expect(
      screen.getByText("Entered Phone Number is Invalid")
    ).toBeInTheDocument();
  });

  it("should display an error message for empty username input when blurred", () => {
    setup();
    const usernameInput = screen.getByLabelText("User Name");
    fireEvent.blur(usernameInput);
    expect(screen.getByText("Username must not be empty")).toBeInTheDocument();
  });
});
