import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RdsCompUserBasics from '../src/rds-comp-user-basics/rds-comp-user-basics';


describe('RdsCompUserBasics', () => {
    const mockUserData = {
        name: 'John',
        surname: 'Doe',
        email: 'john@example.com',
        password: 'password',
        userName: 'johndoe',
        phoneNumber: '1234567890',
        twoFactorEnabled: true,
        isActive: true,
        lockoutEnabled: true,
    };

    const mockCreateUser = jest.fn();
    it('updates isActive and lockoutEnabled when corresponding checkboxes change', () => {
        const { getByLabelText } = render(
            <RdsCompUserBasics userData={mockUserData} createUser={mockCreateUser} />
        );

        fireEvent.click(getByLabelText('Active'));
        fireEvent.click(getByLabelText('Account Lockout'));

        expect(mockCreateUser).toHaveBeenCalledTimes(2);
        expect(mockCreateUser).toHaveBeenNthCalledWith(1, {
            ...mockUserData,
            isActive: false,
        });
        expect(mockCreateUser).toHaveBeenNthCalledWith(2, {
            ...mockUserData,
            lockoutEnabled: true,
        });
    });
})