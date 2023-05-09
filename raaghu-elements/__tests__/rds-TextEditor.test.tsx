import React from 'react';
import { render, screen } from '@testing-library/react';
import { RdsTextEditor } from '../src';
import "@testing-library/jest-dom";

module.exports = {
    //...
    setupFilesAfterEnv: ["./jest.setup.js"],
};

describe('RdsTextEditor Component', () => {
    let props = {
        label: "Sample Text Editor",
    };

    it('should render correctly', () => {
        // Render the component
        render(<RdsTextEditor {...props} />);

        // Assert that the component elements have rendered as expected
        expect(screen.getByText("Sample Text Editor")).toBeInTheDocument();
        expect(screen.getByRole("textbox")).toBeInTheDocument();
    });


});
