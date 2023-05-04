import React from "react";
import { render, screen } from "@testing-library/react";
import RdsIllustration from "../src/rds-illustration/rds-illustration";
import '@testing-library/jest-dom/extend-expect';
import { RdsIcon } from "../src";


describe('RdsIllustration', () => {
  test('Should render the label ', () => {
    render(<RdsIllustration label='label' subLabel='subLabel' />);
    const rdsIllustrationlabelElement = screen.getByTestId('labelElement');
    expect(rdsIllustrationlabelElement).toBeInTheDocument();
  });

  test('Should render the  sublabel', () => {
    render(<RdsIllustration label='label' subLabel='subLabel' />);
    const rdsIllustrationsubElement = screen.getByTestId('sublabelElement');
    expect(rdsIllustrationsubElement).toBeInTheDocument();
  });
  test('Should render the  icon', () => {
    render(<RdsIcon />);
    const rdsIllustrationiconElement = screen.getByRole('img');
    expect(rdsIllustrationiconElement).toBeInTheDocument();
  });
})