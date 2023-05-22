import React from 'react';
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from '@testing-library/react';
import RdsCompPollsOption from '../src/rds-comp-polls-option/rds-comp-polls-option';

describe('RdsCompPollsOption', () => {
  const mockOptionsData = [
    { id: 1, text: 'Option 1', order: 1, voteCount: 0 },
    { id: 2, text: 'Option 2', order: 2, voteCount: 0 },
  ];

  const mockGetPollsOptionData = jest.fn(); // Mock function

  it('should render the component', () => {
    render(<RdsCompPollsOption optionsData={mockOptionsData} getPollsOptionData={mockGetPollsOptionData}/>);
    
    // Assert the presence of input, button, and table elements
    expect(screen.getByText('Option')).toBeInTheDocument();
    expect(screen.getByTestId("add")).toBeInTheDocument();
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('should add a new option', () => {
    render(<RdsCompPollsOption optionsData={mockOptionsData} getPollsOptionData={mockGetPollsOptionData}/>);
    
    const optionInput = screen.getByTestId('option');
    const addButton = screen.getByTestId('add');

    fireEvent.change(optionInput, { target: { value: 'New Option' } });
    fireEvent.click(addButton);

    // Assert that the new option is added to the table
    expect(screen.getByText('New Option')).toBeInTheDocument();
  });

  it('should edit an existing option', () => {
    render(<RdsCompPollsOption optionsData={mockOptionsData} getPollsOptionData={mockGetPollsOptionData}/>);

    const editButton = screen.getAllByTestId('edit')[0];
    
    fireEvent.click(editButton);

    // Assert that the option is being edited (e.g., update the input value)
    const optionInput = screen.getByTestId('option') as HTMLInputElement;
    expect(optionInput.value).toBe('Option 1');

    fireEvent.change(optionInput, { target: { value: 'Updated Option' } });
    fireEvent.click(screen.getByTestId('add'));

    // Assert that the option is updated in the table
    expect(screen.getByText('Updated Option')).toBeInTheDocument();
  });

  it('should delete an option', () => {
    render(<RdsCompPollsOption optionsData={mockOptionsData} getPollsOptionData={mockGetPollsOptionData}/>);

    const deleteButton = screen.getAllByTestId('delete')[0];
    fireEvent.click(deleteButton);

    // Assert that the option is removed from the table
    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  it('should render icons', ()=>{
    render(<RdsCompPollsOption optionsData={mockOptionsData} getPollsOptionData={mockGetPollsOptionData}/>);
    const iconElement = screen.getAllByRole('img');
    iconElement.forEach((item)=>{
        expect(item).toBeInTheDocument();
    })
  })
});
