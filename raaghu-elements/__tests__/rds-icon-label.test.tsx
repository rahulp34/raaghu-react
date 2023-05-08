
import '@testing-library/jest-dom';
import RdsIconLabel from '../src/rds-icon-label/rds-icon-label';
import React from 'react';
import { render, screen } from '@testing-library/react';

test('should render the label', () => {
  render(<RdsIconLabel label="Icon Label" icon='user' size='medium' iconSize='large' fill={false} />);
  const rdsIconLabelElement = screen.getByText('Icon Label');
  expect(rdsIconLabelElement).toBeInTheDocument();
})

test('should render the icon', () => {
  render(<RdsIconLabel label="Icon Label" icon='user' size='medium' iconSize='large' fill={false} />);
  const rdsIconElement = screen.getByRole('img');
  expect(rdsIconElement).toBeInTheDocument();
})