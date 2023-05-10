import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RdsSideNav, { RdsSideNavProps } from "../src/rds-side-nav/rds-side-nav";

describe("RdsSideNav", () => {
  const sideNavItems: never[] = [
    // Define your test data for sideNavItems
    // ...
  ];

  const onClickMock = jest.fn();
  const toggleThemeMock = jest.fn();

  const defaultProps: RdsSideNavProps = {
    sideNavItems: sideNavItems,
    onClick: onClickMock,
    toggleTheme: toggleThemeMock,
    collapse: true,
  };

  it("renders RdsSideNav component with provided props", () => {
    render(<RdsSideNav {...defaultProps} />);
    
    // Add your assertions here
    // For example:
    // expect(screen.getByText("Some text")).toBeInTheDocument();
  });

  it("calls the onClick event handler when a link is clicked", () => {
    render(<RdsSideNav {...defaultProps} />);
    
    // Find the link element
    const linkElement = screen.getByTestId("link-id");
    
    // Simulate a click event
    fireEvent.click(linkElement);

    // Verify that the onClickMock function was called
    expect(onClickMock).toHaveBeenCalled();
  });

  it("calls the toggleTheme event handler when the theme input is clicked", () => {
    render(<RdsSideNav {...defaultProps} />);
    
    // Find the theme input element
    const themeInput = screen.getByTestId("theme-input");
    
    // Simulate a click event
    fireEvent.click(themeInput);

    // Verify that the toggleThemeMock function was called
    expect(toggleThemeMock).toHaveBeenCalled();
  });

  // Add more test cases as needed
});
