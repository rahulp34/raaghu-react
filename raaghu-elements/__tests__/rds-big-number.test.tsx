import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import RdsBigNumber, { RdsBigNumberProps } from '../src/rds-big-number/rds-big-number';

describe('RdsBigNumber', () => {
  const defaultProps: RdsBigNumberProps = {
    bigNumber: '123',
    subTitle: 'Test subtitle',
  };

  it('renders the big number and subtitle', () => {
    render(<RdsBigNumber bigNumber="123" subTitle='Test subtitle' />);
    expect(screen.getByText(defaultProps.bigNumber)).toBeInTheDocument();
    expect(screen.getByText('Test subtitle')).toBeInTheDocument();
  });

  it('renders children when provided', () => {
    render(
      <RdsBigNumber {...defaultProps}>
        <div data-testid="test-child" />
      </RdsBigNumber>
    );
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });
});
