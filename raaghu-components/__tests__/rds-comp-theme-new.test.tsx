import React from "react";
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react";
import RdsCompThemeNew, { RdsCompThemeNewProps } from "../src/rds-comp-theme-new/rds-comp-theme-new";

describe("RdsCompThemeNew", () => {
  const mockProps: RdsCompThemeNewProps = {
    StyleList: ["Style1", "Style2"],
    WebList: ["Web1", "Web2"],
    MenuList: ["Menu1", "Menu2"],
    StatusList: ["Status1", "Status2"],
  };

  it("renders all select lists", () => {
    render(<RdsCompThemeNew {...mockProps} />);

    const styleSelectList = screen.getByTestId("style-select-list");
    const webSelectList = screen.getByTestId("web-select-list");
    const menuSelectList = screen.getByTestId("menu-select-list");
    const statusSelectList = screen.getByTestId("status-select-list");

    expect(styleSelectList).toBeInTheDocument();
    expect(webSelectList).toBeInTheDocument();
    expect(menuSelectList).toBeInTheDocument();
    expect(statusSelectList).toBeInTheDocument();
  });

  it("calls submitData function on form submission", () => {
    render(<RdsCompThemeNew {...mockProps} />);
  
    const form = screen.getByTestId("form");
    const consoleLogSpy = jest.spyOn(console, "log");
  
    fireEvent.submit(form);
  
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith({
      styleList: "",
      webList: "",
      menuList: "",
      StatusList: "",
    });
  
    consoleLogSpy.mockRestore();
  });
});
