import React from "react";
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RdsTextEditor, { RdsTextEditorProps } from "../src/rds-text-editor/rds-text-editor";

describe('RdsTextEditor', () => {
  const defaultProps: RdsTextEditorProps = {
    label: 'Text Editor',
  };

  it('renders label', () => {
    const { getByText } = render(<RdsTextEditor {...defaultProps} />);
    expect(getByText('Text Editor')).toBeInTheDocument();
  });

  it("renders the label passed as a prop", () => {
    render(<RdsTextEditor label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

});
