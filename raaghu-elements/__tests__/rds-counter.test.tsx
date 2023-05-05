import React from 'react';
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from '@testing-library/react';
import  RdsCounter, {RdsCounterProps} from '../src/rds-counter/rds-counter';

describe('RdsCounter', () => {
  const defaultProps: RdsCounterProps = {
    counterValue: 0,
    min: -5,
    max: 5,
    width: 100
  };

  it('renders label and counter', () => {
    render(<RdsCounter {...defaultProps} label="Counter Label" />);
    expect(screen.getByText(/counter label/i)).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('increments counter when plus button is clicked', () => {
    render(<RdsCounter {...defaultProps} position='top'/>);
    fireEvent.click(screen.getByTestId('plusButton'));

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  it('does not increment counter beyond max value', () => {
    render(<RdsCounter {...defaultProps} counterValue={5} />);
    fireEvent.click(screen.getByTestId('plusButton'));

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('decrements counter when minus button is clicked', () => {
    render(<RdsCounter {...defaultProps} />);
    fireEvent.click(screen.getByTestId('minusButton'));

    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  it('does not decrement counter beyond min value', () => {
    render(<RdsCounter {...defaultProps} counterValue={-5} />);
    fireEvent.click(screen.getByTestId('minusButton'));

    expect(screen.getByText('-5')).toBeInTheDocument();
  });
});
