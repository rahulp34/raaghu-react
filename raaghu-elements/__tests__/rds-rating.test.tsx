import React from "react";
import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react";
import RdsRating, { RdsRatingProps } from '../src/rds-rating/rds-rating';

describe("RdsRating", () => {
  test("renders correctly with default props", () => {
    const { container } = render(<RdsRating rating={2.3} />);
    expect(container.querySelector(".Stars")).toBeInTheDocument();
  });

  test("renders with provided rating and size props", () => {
    const { container } = render(<RdsRating rating={4} size="large" />);
    const stars = container.querySelector(".Stars") as HTMLElement;
    expect(stars).toHaveStyle("--rating: 4");
    expect(stars).toHaveStyle("--size: large");
  });

});
