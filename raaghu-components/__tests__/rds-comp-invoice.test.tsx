import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RdsCompInvoice from "../src/rds-comp-invoice/rds-comp-invoice";

describe("RdsCompInvoice", () => {
  it("renders invoice information correctly", () => {
    render(<RdsCompInvoice />);
    
    const nameLabel = screen.getByPlaceholderText("Enter name")
    expect(nameLabel).toBeInTheDocument();

    const addressLabel = screen.getByPlaceholderText("Address");
    expect(addressLabel).toBeInTheDocument();

    const lanb=screen.getByText("Legal name");
    expect(lanb).toBeInTheDocument();

    const addressTextArea = screen.getByPlaceholderText("Address");
    expect(addressTextArea).toBeInTheDocument();
    
    const addressTextAreaRows = screen.getByPlaceholderText("Address").getAttribute("rows");
    expect(addressTextAreaRows).toBe("4");
  });
});
