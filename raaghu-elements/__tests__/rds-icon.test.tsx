import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import RdsIcon from '../src/rds-icon/rds-icon';

describe('RdsIcon', ()=>{
    it("Icon renders correctly",()=>{
        render(<RdsIcon/>);
        const iconElement = screen.getByRole('img');
        expect(iconElement).toBeInTheDocument()
    })
})