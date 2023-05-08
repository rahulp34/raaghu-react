import React from "react";
//import { render, fireEvent } from "@testing-library/react";
import { RdsPopover } from "../src";
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, waitFor } from "@testing-library/react";


describe("RdsPopover", () => {
  it("should set the position of the popover based on the 'popoverPosition' prop", () => {
    const { getByText } = render(
      <RdsPopover popoverPosition="left">Popover content</RdsPopover>
    );
    const popover = getByText("Popover content")?.parentElement;
    expect(popover?.classList.contains("popoverLeft")).toBe(true);
  });


  it('renders without crashing', () => {
    render(<RdsPopover popoverPosition="top">Test</RdsPopover>);
  });


  it("should render the popover closed by default", () => {
    const { getByText, queryByText } = render(
      <RdsPopover popoverPosition="top">Popover content</RdsPopover>
    );

    const button = getByText("Popover");
    const popover = queryByText("Popover content");
    expect(popover).toBeTruthy();
    expect(popover).not.toBeVisible();
  });




  it("toggles the display when the button is clicked", () => {
    const { getByText, queryByText } = render(
      <RdsPopover popoverPosition="bottom">Popover content</RdsPopover>
    );
    const button = getByText("Popover");
    const popover = queryByText("Popover content");
    expect(popover).not.toBeVisible();
    fireEvent.click(button);
    expect(popover).toBeVisible();
    fireEvent.click(button);
    expect(popover).not.toBeVisible();
  });




  it('renders the popover in the correct position', () => {
    const { getByText } = render(<RdsPopover popoverPosition="right">Test</RdsPopover>);
    const button = getByText('Popover');
    const popover = button.nextSibling;
    expect(popover).toHaveClass('popoverRight');
    expect(popover).toHaveClass('popoverCardRight');
  });

});

