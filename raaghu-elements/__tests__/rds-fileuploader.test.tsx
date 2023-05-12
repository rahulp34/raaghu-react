import React from "react";
import { RdsFileUploader } from "../src";
import { findByText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { RdsFileUploaderProps } from "../src/rds-file-uploader/rds-file-uploader";
import '@testing-library/jest-dom/extend-expect';


describe("RdsFileUploader", () => {
    it("should call the onFileArray callback function when a file is uploaded", () => {
        const props = {
            placeholder: "Select a file",
            size: "small",
            colorVariant: "primary",
            multiple: true,
            extensions: "jpg,jpeg,png",
            limit: 10,
            label: "My File Uploader",
            onFileArray: jest.fn(),
            getFileUploaderInfo: jest.fn(),
        };
        const { getByText, getByTestId } = render(<RdsFileUploader {...props} />);
        const fileInput = getByTestId("rds-file-uploader-input") as HTMLInputElement;
        fileInput.click();
        const file = fileInput.files && fileInput.files[0];
        expect(props.onFileArray).toBeCalledWith([file]);

    });
})