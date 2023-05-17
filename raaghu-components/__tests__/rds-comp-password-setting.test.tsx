import React from 'react';
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from '@testing-library/react';
import RdsCompPasswordSetting from '../src/rds-comp-password-setting/rds-comp-password-setting';

describe('RdsCompPasswordSetting', () => {
  test('renders without errors', () => {
    render(<RdsCompPasswordSetting />);
    // Add assertions to check if the component renders correctly
  });

 
  test('handles form submission', () => {
    const { getByText } = render(<RdsCompPasswordSetting />);
    const saveButton = getByText('Save');

    fireEvent.click(saveButton);

    
  });
});
