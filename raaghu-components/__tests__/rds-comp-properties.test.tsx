import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import RdsCompProperties, {
  RdsCompPropertiesProp,
} from "../src/rds-comp-properties/rds-comp-properties";

describe("RdsCompProperties", () => {
  const mockData: RdsCompPropertiesProp = {
    propertyData: [],
    propertyHeaders: [],
    onActionSelection: jest.fn(),
  };

  it("renders form elements", () => {
    render(<RdsCompProperties {...mockData} />);
    expect(screen.getByTestId("key")).toBeInTheDocument();
    expect(screen.getByTestId('value')).toBeInTheDocument();
    expect(screen.getByTestId('add')).toBeInTheDocument();
    expect(screen.getByTestId('cancel')).toBeInTheDocument();
    expect(screen.getByTestId('save')).toBeInTheDocument();
  });

  it("updates key state on input change", () => {
    render(<RdsCompProperties {...mockData} />);
    const keyInput = screen.getByTestId("key");
    fireEvent.change(keyInput, { target: { value: "testKey" } });
    expect(keyInput).toHaveValue("testKey");
  });

  it("updates value state on input change", () => {
    render(<RdsCompProperties {...mockData} />);
    const valueInput = screen.getByTestId('value');
    fireEvent.change(valueInput, { target: { value: "testValue" } });
    expect(valueInput).toHaveValue("testValue");
  });

  it("submits the form and clears key and value state", () => {
    render(<RdsCompProperties {...mockData} />);
    const keyInput = screen.getByTestId("key");
    const valueInput = screen.getByTestId('value');
    const addButton = screen.getByTestId('add');
    fireEvent.change(keyInput, { target: { value: "testKey" } });
    fireEvent.change(valueInput, { target: { value: "testValue" } });
    fireEvent.click(addButton);
    expect(keyInput).toHaveValue("");
    expect(valueInput).toHaveValue("");
  });
});
