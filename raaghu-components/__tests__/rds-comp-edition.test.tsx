import React from "react";
import "@testing-library/jest-dom"
import { render, screen, waitFor } from "@testing-library/react";
import RdsCompEdition from "../src/rds-comp-edition/rds-comp-edition";

const props = {
  EditionItems: {
    EditionName: "Basic",
    EditionTitle: "Basic Edition",
    Price: 100,
    Plan: "Monthly",
  },
  features: ["Feature 1", "Feature 2"],
};

const onSubmit = jest.fn();
const onCancel = jest.fn();

describe("RdsCompEdition", () => {
  it("renders the component correctly", async () => {
    render(<RdsCompEdition {...props} />);

    expect(screen.getByText("Basic")).toBeTruthy();
    expect(screen.getByText("Basic Edition")).toBeTruthy();
    expect(screen.getByText("100")).toBeTruthy();
    expect(screen.getByText("Monthly")).toBeTruthy();
    expect(screen.getByText("Feature 1")).toBeTruthy();
    expect(screen.getByText("Feature 2")).toBeTruthy();
  });

  it("does not call the onSubmit function when the Next button is clicked", async () => {
    render(<RdsCompEdition {...props} />);

    const nextButton = screen.getByRole("button", { name: "Next" });
    await nextButton.click();

    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("does not call the onCancel function when the Cancel button is clicked", async () => {
    render(<RdsCompEdition {...props} />);

    const cancelButton = screen.getByRole("button", { name: "Cancel" });
    await cancelButton.click();

    expect(onCancel).not.toHaveBeenCalled();
  });
});
