import React from "react";
import "@testing-library/jest-dom"
import { render, fireEvent, screen } from "@testing-library/react";
import RdsButton from "./index";

describe("RdsButton component", () => {
  beforeEach(() => {
    // set up any necessary mocks or test data here
  });

  afterEach(() => {
    // clean up any mocks or test data here
  });

  test("renders a button with the correct label and icon", () => {
    render(<RdsButton label="Save" icon="save"/>);

    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByLabelText("Save button icon")).toBeInTheDocument();
  });

  test("calls the onClick handler when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<RdsButton label="Save" onClick={handleClick} />);

    fireEvent.click(screen.getByText("Save"));
    expect(handleClick).toHaveBeenCalled();
  });

  test("disables the button when isDisabled prop is true", () => {
    render(<RdsButton label="Save" isDisabled={true} />);

    expect(screen.getByText("Save")).toBeDisabled();
  });

  test("shows the loading spinner when showLoadingSpinner prop is true", () => {
    render(<RdsButton label="Save" showLoadingSpinner={true} />);

    expect(screen.getByLabelText("Loading spinner")).toBeInTheDocument();
  });
});