import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import RdsSearch from "../src/rds-search/rds-search";

describe("RdsSearch component", () => {
  it("renders the component with placeholder and default props", () => {
    render(
      <RdsSearch placeholder="Search" size="medium" />
    );
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("triggers onChange event handler when user types in the input", () => {
    const onChange = jest.fn();
    render(
      <RdsSearch placeholder="Search..." size="medium" onChange={onChange} />
    );
    const input = screen.getByPlaceholderText("Search...")as HTMLInputElement;

    fireEvent.change(input, { target: { value: "hello" } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe("hello");
  });

  it("triggers onKeyPress event handler when user types a key in the input", () => {
    const onKeyDown = jest.fn(()=>{console.log("Key Pressed")});
    render(
      <RdsSearch placeholder="Search..." size="medium" onKeyPress={onKeyDown} />
    );
    const input = screen.getByPlaceholderText("Search...");

    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it("renders search icon", ()=>{
    render(
      <RdsSearch
        placeholder="Search..."
        size="medium"
      />
    );
    const searchIcon = screen.getByRole('img');
    expect(searchIcon).toBeInTheDocument();
  })

  it("triggers onSearchClick event handler when user clicks on the search icon", () => {
    const onSearchClick = jest.fn();
    render(
      <RdsSearch
        placeholder="Search..."
        size="medium"
        onSearchClick={onSearchClick}
      />
    );
    const searchIcon = screen.getByTestId("search-icon");

    fireEvent.click(searchIcon);

    expect(onSearchClick).toHaveBeenCalledTimes(1);
  });

  it("renders the search icon on the right side by default", () => {
    render(
      <RdsSearch placeholder="Search..." size="medium" />
    );
    const searchIcon = screen.getByTestId("search-icon");

    expect(searchIcon).toHaveClass("iconButton__right");
  });

  it("renders the search icon on the left side when iconside prop is set to 'left'", () => {
    render(
      <RdsSearch placeholder="Search..." size="medium" iconside="left" />
    );
    const searchIcon = screen.getByTestId("search-icon");

    expect(searchIcon).toHaveClass("iconButton__left");
  });
});
