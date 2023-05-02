import React, { useEffect } from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RdsCompEdition from "../src/rds-comp-edition/rds-comp-edition";

describe("RdsCompEdition", () => {
  // const mockProps: RdsCompEditionProps = {
  //   EditionItems: {
  //     EditionName: "Premium",
  //     EditionTitle: "Best value for money",
  //     Price: 100,
  //     Plan: "Monthly",
  //   },
  //   features: ["Feature 1", "Feature 2"],
  // };

  test("should render edition details and features", () => {
    render(
      <RdsCompEdition
        EditionItems={{
          EditionName: "Corporate",
          EditionTitle: "Strong Application for large team",
          Price: "45",
          Plan: "Per month",
        }}
        features={[
          "Maximum User Count",
          "Test Check feature",
          "Test check feature count 2",
        ]}
      />
    );

    expect(screen.getByText("Strong Application for large team")).toBeInTheDocument();
    expect(screen.getByText("Maximum User Count")).toBeInTheDocument();
    expect(screen.getByText("Test Check feature")).toBeInTheDocument();
  });
});
