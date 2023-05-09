import React from "react";
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import RdsSpinner, { RdsSpinnerProps } from "../src/rds-spinner/rds-spinner";

describe("RdsSpinner component", () => {
  const defaultProps: RdsSpinnerProps = {
    spinnerType: "border",
    colorVariant: "primary",
    width: "3rem",
    borderWidth: "2px",
    height: "3rem",
  };

  it("renders a spinner with the border type", () => {
    render(<RdsSpinner {...defaultProps} />);
    const spinner = screen.getByRole("status");
    expect(spinner.classList).toContain("spinner-border");
  });

  it("renders a spinner with the grow type", () => {
    render(
      <RdsSpinner {...defaultProps} spinnerType="grow" />
    );
    const spinner = screen.getByRole("status");
    expect(spinner.classList).toContain("spinner-grow");
  });

  it("applies custom styles", () => {
    const customProps: RdsSpinnerProps = {
      ...defaultProps,
      width: "5rem",
      borderWidth: "3px",
      height: "5rem",
    };
    render(<RdsSpinner {...customProps} />);
    const spinner = screen.getByRole("status") as HTMLElement;
    expect(spinner.style.width).toBe(customProps.width);
    expect(spinner.style.height).toBe(customProps.height);
    expect(spinner.style.borderWidth).toBe(customProps.borderWidth);
  });
});
