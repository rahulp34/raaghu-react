import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import RdsSelectList, { RdsSelectProps } from '../src/rds-select-list/rds-select-list';

describe('RdsSelectList', () => {
  const options = [
    { option: 'Option 1', value: 'option-1' },
    { option: 'Option 2', value: 'option-2' },
    { option: 'Option 3', value: 'option-3' },
  ];
  const props: RdsSelectProps = {
    label: 'Select an option',
    selectItems: options,
  };

  it('should render select list with label and options', () => {
    render(<RdsSelectList {...props} dataTestId='select-example'/>);
    const selectElement = screen.getByTestId('select-example');
    expect(selectElement).toBeInTheDocument();
    expect(screen.getByTestId('select-example')).toBeInTheDocument();
    options.forEach(option => {
      expect(screen.getByText(option.option)).toBeInTheDocument();
      expect(selectElement).toHaveValue();
    });
  });

  it('should call onSelectListChange callback when a single option is selected', () => {
    const onSelectListChange = jest.fn();
    render(
      <RdsSelectList {...props} onSelectListChange={onSelectListChange} dataTestId='select-example' />
    );
    const selectElement = screen.getByTestId('select-example');
    fireEvent.change(selectElement, { target: { value: 'option-2' } });
    expect(onSelectListChange).toHaveBeenCalledTimes(1);
    expect(onSelectListChange).toHaveBeenCalledWith('option-2');
    expect(selectElement).toHaveValue('option-2');
  });

//   it('should call someCallback callback when multiple options are selected', () => {
//     const someCallback = jest.fn();
//     render(
//       <RdsSelectList {...props} isMultiple someCallback={someCallback} />
//     );
//     const selectElement = screen.getByLabelText('select example');
//     fireEvent.change(selectElement, {
//       target: { options: [selectElement.options[0], selectElement.options[1]] },
//     });
//     expect(someCallback).toHaveBeenCalledTimes(1);
//     expect(someCallback).toHaveBeenCalledWith(['option-1', 'option-2']);
//   });

it('disables the select list when isDisabled is true', () => {
    render(<RdsSelectList {...props} isDisabled={true} />);
    const selectList = screen.getByLabelText('select example');
    expect(selectList).toBeDisabled();
  });
});
