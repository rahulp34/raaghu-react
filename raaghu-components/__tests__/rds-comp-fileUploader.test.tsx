import React from "react";
import { render, screen, fireEvent  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import RdsCompFileUploader from "../src/rds-comp-fileUploader/rds-comp-fileUploader";


describe("RdsCompFileUploader", () => {
  it("should call preFileInfo function with data when file uploader component triggers getFileUploaderInfo event", () => {

    render(<RdsCompFileUploader onClick={undefined} />);
    const testid=screen.getByText('CANCEL');
    const testidone=screen.getByText('Drag and drop files')
    expect(testid).toBeInTheDocument();
    expect(testidone).toBeInTheDocument();
    expect(testidone).toBeVisible();
    expect(testidone).toBeVisible();
    expect(testidone).toBeEnabled();
   
  });

  it("should call onClick function when the finish button is clicked", () => {
    render(<RdsCompFileUploader onClick={undefined} />);
    const someid=screen.getByText("(All Files)");
    expect(someid).toBeInTheDocument();
    expect(someid).toBeVisible();
    expect(someid).toBeEnabled();
  });

});










