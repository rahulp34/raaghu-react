import React from 'react';
import "@testing-library/jest-dom"
import { render, fireEvent, screen } from '@testing-library/react';
import RdsCompDeliveryMethod, { RdsCompDeliveryMethodProps } from '../src/rds-comp-delivery-method/rds-comp-delivery-method';

describe('RdsCompDeliveryMethod', () => {
  const defaultProps: RdsCompDeliveryMethodProps = {
    sizeDataWithDescription: [
      {
        id: 1,
        type: 'Standard',
        days: 'Delivery in 3-4 days',
        cost: '$10'
      },
      {
        id: 2,
        type: 'Express',
        days: 'Delivery in 1-2 days',
        cost: '$20'
      }
    ],
    sizeType: 'withDescription',
  };
  
  it('should render delivery methods with checkboxes', () => {
    render(<RdsCompDeliveryMethod {...defaultProps} />);
    
    // Check if delivery method types are rendered
    expect(screen.getByText('Standard')).toBeInTheDocument();
    expect(screen.getByText('Express')).toBeInTheDocument();
  });
});
