import React from "react";
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import RdsRadioButton, { RdsRadioButtonProps } from "../src/rds-radio-button/rds-radio-button";

describe('RdsRadioButton', () => {
  const itemList = [
    { id: 1, name: 'radio-group', label: 'Option 1', checked: true, disabled: false },
    { id: 2, name: 'radio-group', label: 'Option 2', checked: false, disabled: true },
    { id: 3, name: 'radio-group', label: 'Option 3', checked: false, disabled: false },
  ];
  const defaultProps = {
    itemList,
    label: 'Radio Button Group',
  };

  it('renders the label correctly', () => {
    render(<RdsRadioButton {...defaultProps} />);
    expect(screen.getByText('Radio Button Group')).toBeInTheDocument();
  });

  it("renders radio buttons with labels and a label for the group", () => {
    const { getByLabelText, getByText } = render(
      <RdsRadioButton {...defaultProps} />
    );

    expect(getByText(defaultProps.label!)).toBeInTheDocument();

    const option1 = getByLabelText(itemList[0].label);
    const option2 = getByLabelText(itemList[1].label);
    const option3 = getByLabelText(itemList[2].label);

    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  
  it('renders the radio buttons correctly', () => {
    render(<RdsRadioButton {...defaultProps} />);
    expect(screen.getByLabelText('Option 1')).toBeChecked();
    expect(screen.getByLabelText('Option 2')).toBeDisabled();
    expect(screen.getByLabelText('Option 3')).not.toBeChecked();
  });


  it('displays an error message when provided with the `state` prop', () => {
    const errorMessage = 'This is an error message';
    render(<RdsRadioButton {...defaultProps} state="errorRadio" errorMessage={errorMessage} />);
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });

});
