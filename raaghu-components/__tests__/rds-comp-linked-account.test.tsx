import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import RdsCompLinkedAccount from "../src/rds-comp-linked-account/rds-comp-linked-account";

describe("RdsCompLinkedAccount", () => {
  it("renders the initial component state correctly", () => {
    render(<RdsCompLinkedAccount />);

    expect(screen.getByText("LINK NEW ACCOUNT")).toBeInTheDocument();
    expect(screen.queryByTestId("tenancy-name")).not.toBeInTheDocument();
    expect(screen.queryByTestId("username")).not.toBeInTheDocument();
    expect(screen.queryByTestId("password")).not.toBeInTheDocument();
    expect(screen.queryByTestId("cancel")).not.toBeInTheDocument();
    expect(screen.queryByTestId("submit")).not.toBeInTheDocument();
  });

  it("toggles the form on button click", () => {
    render(<RdsCompLinkedAccount />);
    fireEvent.click(screen.getByTestId("link-new-account"));
    expect(screen.getByTestId("tenancy-name")).toBeInTheDocument();
    expect(screen.getByTestId("username")).toBeInTheDocument();
    expect(screen.getByTestId("password")).toBeInTheDocument();
    expect(screen.getByTestId("cancel")).toBeInTheDocument();
    expect(screen.getByTestId("submit")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("cancel"));

    expect(screen.queryByTestId("tenancy-name")).not.toBeInTheDocument();
    expect(screen.queryByTestId("username")).not.toBeInTheDocument();
    expect(screen.queryByTestId("password")).not.toBeInTheDocument();
    expect(screen.queryByTestId("cancel")).not.toBeInTheDocument();
    expect(screen.queryByTestId("submit")).not.toBeInTheDocument();
  });
});
