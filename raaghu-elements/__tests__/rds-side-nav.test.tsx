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
})