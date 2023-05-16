import React from 'react';
import "@testing-library/jest-dom"
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RdsCompContactUs from '../src/rds-comp-contact-us/rds-comp-contact-us';

describe('RdsCompContactUs', () => {
  it('should render form fields and button', () => {
    render(<RdsCompContactUs />);

    // Check if email input field is rendered
    const emailInput = screen.getByText('Email ID');
    expect(emailInput).toBeInTheDocument();

    // Check if fullname input field is rendered
    const fullnameInput = screen.getByText('Full Name');
    expect(fullnameInput).toBeInTheDocument();

    // Check if message textarea field is rendered
    const messageTextarea = screen.getByText('Message');
    expect(messageTextarea).toBeInTheDocument();

    // Check if submit button is rendered
    const submitButton = screen.getByText('Send Message');
    expect(submitButton).toBeInTheDocument();
  });

//   it('should display error messages if inputs are invalid', () => {
//     render(<RdsCompContactUs />);

//     // Try to submit form without filling up required fields
//     const submitButton = screen.getByText('Send Message');
//     fireEvent.click(submitButton);

//     // Check if error messages are displayed
//     const emailError = screen.getByText('Email is invalid');
//     expect(emailError).toBeInTheDocument();
//     const fullnameError = screen.getByText('fullname is invalid');
//     expect(fullnameError).toBeInTheDocument();
//     const messageError = screen.getByText('Message is invalid');
//     expect(messageError).toBeInTheDocument();
//   });

//   it('should clear inputs when form is submitted', async () => {
//     // Fill up form inputs
//     const emailInput = screen.getByTestId('email');
//     const fullnameInput = screen.getByTestId('fullname');
//     const messageTextarea = screen.getByTestId('message');
  
//     fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
//     fireEvent.change(fullnameInput, { target: { value: 'Test User' } });
//     fireEvent.change(messageTextarea, { target: { value: 'This is a test message' } });
  
//     // Submit form
//     const submitButton = screen.getByText('Send Message');
//     fireEvent.click(submitButton);
  
//     // Assert that inputs are cleared
//     await waitFor(() => {
//       expect(emailInput).toHaveValue('');
//     });
//     await waitFor(() => {
//       expect(fullnameInput).toHaveValue('');
//     });
//     await waitFor(() => {
//       expect(messageTextarea).toHaveValue('');
//     });
//   });  
});
