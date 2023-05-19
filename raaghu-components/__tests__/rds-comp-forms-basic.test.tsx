import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import RdsCompFormsBasic, {
  RdsCompFormsBasicProps,
} from "../src/rds-comp-forms-basic/rds-comp-forms-basic";

describe("RdsCompFormsBasic", () => {
  const mockProps: RdsCompFormsBasicProps = {
    basicInfo: {},
    handleNewFormData: jest.fn(),
    questions: [],
  };

  it("should render the component correctly", () => {
    render(<RdsCompFormsBasic {...mockProps} />);
    const titleInput = screen.getByText("Title");
    const descriptionInput = screen.getByText("Description");
    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
  });

  it("should update the title and description on input change", () => {
    render(<RdsCompFormsBasic {...mockProps} />);
    const titleInput = screen.getByTestId("title");
    fireEvent.change(titleInput, { target: { value: "New Title" } });
    expect(mockProps.handleNewFormData).toHaveBeenNthCalledWith(1, {
      ...mockProps.basicInfo,
      title: "New Title",
    });
    const descriptionInput = screen.getByTestId("description");
    fireEvent.change(descriptionInput, {
      target: { value: "New Description" },
    });
    expect(mockProps.handleNewFormData).toHaveBeenNthCalledWith(2, {
      ...mockProps.basicInfo,
      title: "New Title",
      description: "New Description",
    });
  });

  it("should display default values if basicInfo prop is provided", () => {
    const basicInfo = {
      id: 1,
      title: "Default Title",
      description: "Default Description",
    };

    render(<RdsCompFormsBasic {...mockProps} basicInfo={basicInfo} />);
    const titleInput = screen.getByTestId("title") as HTMLInputElement;
    const descriptionInput = screen.getByTestId(
      "description"
    ) as HTMLInputElement;
    expect(titleInput.value).toBe("Default Title");
    expect(descriptionInput.value).toBe("Default Description");
  });

  it("should display correct inputs based on basicInfo prop", () => {
    const basicInfo = {
      id: 1,
      title: "Default Title",
      description: "Default Description",
    };

    render(<RdsCompFormsBasic {...mockProps} basicInfo={basicInfo} />);
    const titleInput = screen.getByText("Title");
    const descriptionInput = screen.getByText("Description");
    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    const additionalInputs = screen.queryByLabelText("Additional Input");
    expect(additionalInputs).toBeNull();
  });
});
