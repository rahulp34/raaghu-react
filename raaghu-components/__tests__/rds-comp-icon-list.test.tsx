import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import RdsCompIconList from "../src/rds-comp-icon-list/rds-comp-icon-list";

describe("RdsCompIconList", () => {
  it("renders search input", () => {
    render(<RdsCompIconList />);
    const searchInput = screen.getByPlaceholderText("Search Icon");
    expect(searchInput).toBeInTheDocument();
  });

  it("updates search value on change", () => {
    render(<RdsCompIconList />);
    const searchInput = screen.getByPlaceholderText(
      "Search Icon"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "search term" } });
    expect(searchInput.value).toBe("search term");
  });

  it("renders icon list", () => {
    render(<RdsCompIconList />);
    const iconList = screen.getAllByTestId("icon-list");
    iconList.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });

  // it("copies icon name to clipboard", () => {
  //   // Mock the clipboard API
  //   const mockWriteText = jest.fn();
  //   Object.assign(navigator, {
  //     clipboard: {
  //       writeText: mockWriteText,
  //     },
  //   });

  //   render(<RdsCompIconList />);

  //   // Find an icon
  //   const icon = screen.getByTestId("icon-name");

  //   // Trigger click event
  //   fireEvent.click(icon);

  //   // Expect clipboard API to be called with the icon name
  //   // expect(mockWriteText).toHaveBeenCalledWith(icon.textContent);
  // });
});
