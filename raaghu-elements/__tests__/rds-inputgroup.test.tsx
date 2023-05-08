import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import RdsInputGroup from '../src/rds-input-group/rds-input-group';
import "@testing-library/jest-dom";


/* 
import { render, screen, fireEvent } from "@testing-library/react";
import RdsInputGroup from "./RdsInputGroup";
 */
describe("RdsInputGroup", () => {
    test("calls inputValue function with input value when form is submitted", () => {
        const mockInputValueFn = jest.fn();
        render(
            <RdsInputGroup
                buttonColorVariant="primary"
                inputValue={mockInputValueFn}
            />
        );
        const inputElement = screen.getByRole("textbox");
        const buttonElement = screen.getByRole("button");
        fireEvent.change(inputElement, { target: { value: "test" } });
        fireEvent.click(buttonElement);
        expect(mockInputValueFn).toHaveBeenCalledTimes(1);
        expect(mockInputValueFn).toHaveBeenCalledWith("test");
    });

    test("renders input and button elements", () => {
        render(<RdsInputGroup buttonColorVariant="primary" inputValue={function (arg: string) {
            throw new Error('Function not implemented.');
        }} />);
        const inputElement = screen.getByRole("textbox");
        expect(inputElement).toBeInTheDocument();
        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();
    });

    test("the input value can be updated", () => {
        render(<RdsInputGroup buttonColorVariant="primary" inputValue={function (arg: string) {
            throw new Error('Function not implemented.');
        }} />);
        const inputElement = screen.getByRole("textbox");
        fireEvent.change(inputElement, { target: { value: "test" } });
        expect(inputElement).toHaveValue("test");
    });

   /*  test("calls inputValue prop function when button is clicked", () => {
        const mockInputValueFn = jest.fn();
        render(
            <RdsInputGroup
                buttonColorVariant="primary"
                inputValue={mockInputValueFn}
            />
        );
        const inputElement = screen.getByRole("textbox");
        const buttonElement = screen.getByRole("button");
        fireEvent.change(inputElement, { target: { value: "test" } });
        fireEvent.click(buttonElement);
        expect(mockInputValueFn).toHaveBeenCalledWith("test");
    }); */

    
});
