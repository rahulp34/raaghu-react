import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import RdsCompLinkedAccount from "../src/rds-comp-linked-account/rds-comp-linked-account";

describe("RdsCompLinkedAccount", () => {
  test("renders the initial component state correctly", () => {
    render(<RdsCompLinkedAccount />);

    // Verify that the initial state is rendered correctly
    expect(screen.getByText("LINK NEW ACCOUNT")).toBeInTheDocument();
    expect(screen.queryByTestId("tenancy-name")).not.toBeInTheDocument();
    expect(screen.queryByTestId("username")).not.toBeInTheDocument();
    expect(screen.queryByTestId("password")).not.toBeInTheDocument();
    expect(screen.queryByTestId("cancel")).not.toBeInTheDocument();
    expect(screen.queryByTestId("submit")).not.toBeInTheDocument();
  });

  test("toggles the form on button click", () => {
    render(<RdsCompLinkedAccount />);

    // Click the "LINK NEW ACCOUNT" button
    fireEvent.click(screen.getByTestId("link-new-account"));

    // Verify that the form is displayed
    expect(screen.getByTestId("tenancy-name")).toBeInTheDocument();
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("cancel")).toBeInTheDocument();
    expect(screen.getByTestId("submit")).toBeInTheDocument();

    // Click the "CANCEL" button
    fireEvent.click(screen.getByTestId("cancel"));

    // Verify that the form is hidden again
    expect(screen.queryByTestId("tenancy-name")).not.toBeInTheDocument();
    expect(screen.queryByTestId("username")).not.toBeInTheDocument();
    expect(screen.queryByTestId("password")).not.toBeInTheDocument();
    expect(screen.queryByTestId("cancel")).not.toBeInTheDocument();
    expect(screen.queryByTestId("submit")).not.toBeInTheDocument();
  });

  test("submits form data correctly", async () => {
    render(<RdsCompLinkedAccount />);

    fireEvent.click(screen.getByTestId("link-new-account"));
    const tenancyNameInput = screen.getByTestId('tenancy-name') as HTMLInputElement;
    fireEvent.change(tenancyNameInput, { target: { value: 'exampleTenancy' } });
    expect(tenancyNameInput.value).toBe('exampleTenancy');

    const userNameInput = screen.getByTestId('username') as HTMLInputElement;
    fireEvent.change(userNameInput, { target: { value: 'exampleUser' } });
    expect(userNameInput.value).toBe('exampleUser');

    const passwordInput = screen.getByTestId('password') as HTMLInputElement;
    fireEvent.change(passwordInput, { target: { value: 'examplePassword' } });
    expect(passwordInput.value).toBe('examplePassword');
  });
});
