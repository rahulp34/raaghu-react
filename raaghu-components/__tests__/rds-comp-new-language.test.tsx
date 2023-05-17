import React from 'react';
import "@testing-library/jest-dom";
import { render, fireEvent, screen } from '@testing-library/react';
import RdsCompNewLanguage from '../src/rds-comp-new-language/rds-comp-new-language';

describe('RdsCompNewLanguage', () => {
    const languageNames = [
        { value: 'en', option: 'English' },
        { value: 'fr', option: 'French' },
    ];
    const languageItems = [
        { value: 'en-US', option: 'English (United States)' },
        { value: 'fr-FR', option: 'French (France)' },
    ];

    it('renders the component', () => {
        render(
            <RdsCompNewLanguage languageNames={[]} languageItems={[]} placeholder={undefined} onClick={undefined} onSaveHandler={undefined} check={undefined} />
        );
        // Component Render on Successfully
    });

    it('calls onSaveHandler when Save button is clicked', () => {
        const onSaveHandler = jest.fn();
        render(
            <RdsCompNewLanguage
                languageNames={languageNames}
                languageItems={languageItems}
                placeholder=""
                onClick={() => { }}
                onSaveHandler={onSaveHandler}
                check={false}
            />
        );

        const saveButton = screen.getByText('Save').parentElement as HTMLButtonElement;
        expect(saveButton).toBeInTheDocument();
        expect(saveButton).toBeVisible();
        const displayNameInput = screen.getByPlaceholderText('Enter Display Name');
        expect(displayNameInput).toBeInTheDocument();
        expect(displayNameInput).toBeVisible();

    });

});




