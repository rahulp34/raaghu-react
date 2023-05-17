import React from 'react';
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from '@testing-library/react';
import RdsCompNewRole from "../src/rds-comp-new-role/rds-comp-new-role";

describe("RdsCompNewRole", () => {
    const roleData = {
        displayName: "Role Name",
        isDefault: false,
    };

    it("renders the component with role data", () => {
        render(<RdsCompNewRole roleData={roleData} />);
        const dataone = screen.getByText(roleData.displayName);
        const datatwo = screen.getByPlaceholderText(roleData.displayName);

        // Assert that the component is rendered correctly
        expect(dataone).toBeInTheDocument();
        expect(datatwo).toBeInTheDocument();
        //Adding some more assertion
        expect(dataone).toBeEnabled();
        expect(dataone).toBeVisible();
        //Added for second one 
        expect(datatwo).toBeEnabled();
        expect(datatwo).toBeVisible();
    });

});
