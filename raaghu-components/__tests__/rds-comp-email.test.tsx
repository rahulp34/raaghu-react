import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import RdsCompEmail from "../src/rds-comp-email/rds-comp-email";

const props = {
  emailSettings: {
    defaultFromDisplayName: "John Doe",
    defaultFromAddress: "johndoe@example.com",
    smtpHost: "127.0.0.1",
    smtpPort: 25,
    smtpEnableSsl: false,
    smtpUseDefaultCredentials: true,
  },
};

describe("RdsCompEmail", () => {
  it("renders the component correctly", async () => {
    render(<RdsCompEmail {...props} />);

    expect(screen.getByText("Default From (Sender) Email Address")).toBeTruthy();
    expect(screen.getByText("Default From (Sender) Display Name")).toBeTruthy();
    expect(screen.getByText("SMTP Host")).toBeTruthy();
    expect(screen.getByText("SMTP Port")).toBeTruthy();
    expect(screen.getByText("Use SSL")).toBeTruthy();
    expect(screen.getByText("Use Default Credentials")).toBeTruthy();
  });

  it("calls the handleSubmit function when the Save button is clicked", async () => {
    const handleSubmit = jest.fn();
    render(<RdsCompEmail handleSubmit={handleSubmit} {...props} />);

    const saveButton = screen.getByTestId("save-button");
    await saveButton.click();

    expect(handleSubmit).toHaveBeenCalled();
  });

  it("does not call the handleSubmit function when the Cancel button is clicked", async () => {
    const handleSubmit = jest.fn();
    render(<RdsCompEmail handleSubmit={handleSubmit} {...props} />);

    const cancelButton = screen.getByTestId("cancel-button");
    await cancelButton.click();

    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
