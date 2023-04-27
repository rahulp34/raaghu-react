import { fireEvent, render, screen } from "@testing-library/react";
import RdsAlert from "../src/rds-alert/rds-alert";
import "@testing-library/jest-dom";
import React from "react";

describe("RdsAlert", () => {
  it("renders alert message", () => {
    const alertMessage = "Test alert message";
    render(<RdsAlert alertmessage={alertMessage} colorVariant={""} />);
    const messageElement = screen.getByText(alertMessage);
    expect(messageElement).toBeInTheDocument();
  });

  it("should close the alert when the dismiss button is clicked", () => {
    render(
      <RdsAlert
        dismisable={true}
        alertmessage="Test Alert"
        colorVariant="primary"
      />
    );
    const dismissButton = screen.getByRole("button");
    fireEvent.click(dismissButton);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("d-none");
  });

  it("displays icon when provided", () => {
    const icon = "check-circle";
    render(
      <RdsAlert
        alertmessage="Test alert message"
        icon={icon}
        colorVariant={""}
      />
    );
    const iconElement = screen.getByRole("img");
    expect(iconElement).toBeInTheDocument();
  });
});
