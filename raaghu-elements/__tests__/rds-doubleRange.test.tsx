import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { RdsDoubleRange } from "../src";

test('RdsDoubleRange component renders without crashing', () => {
    render(<RdsDoubleRange min={0} max={100} doubleRangeType="default" />);
});
