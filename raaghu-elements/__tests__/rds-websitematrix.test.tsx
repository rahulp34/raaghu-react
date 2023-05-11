import React from "react";
import { render, screen } from "@testing-library/react";
import { RdsWebsiteMatrix } from "../src";

const item = {
    title: "John Doe",
    subtitle: "This is a subtitle",
    icon: "right",
    iconHeight: 18,
    iconWidth: 18,
    link: "https://example.com/link",
};

describe("RdsWebsiteMatrix", () => {
    it("should render the component with the correct props", () => {
        const { getByText } = render(<RdsWebsiteMatrix item={item} />);
        expect(getByText("John Doe")).toBeTruthy();
        expect(getByText("This is a subtitle")).toBeTruthy();
        expect(getByText("https://example.com/link")).toBeTruthy();
    });

    it("should render the component with the correct icon", () => {
        const { getByTestId } = render(<RdsWebsiteMatrix item={item} />);
        expect(getByTestId("icon")).toBeTruthy();
    });
});
