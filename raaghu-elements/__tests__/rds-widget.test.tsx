import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import { RdsWidget } from '../src';
import { RdsWidgetProps } from '../src/rds-widget/rds-widget';
import '@testing-library/jest-dom';
import { RenderResult } from "@testing-library/react";

describe('RdsWidget', () => {
  const defaultProps: RdsWidgetProps = {
    headerTitle: 'My Widget',
  };

  it('should render without crashing', () => {
    render(<RdsWidget {...defaultProps} />);
  });

  it('should render the header title', () => {
    const { getByText } = render(<RdsWidget {...defaultProps} />);
    expect(getByText('My Widget')).toBeInTheDocument();
  });
})