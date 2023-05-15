import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RdsCompBillingAddress, { RdsCompBillingAddressDetails, RdsCompBillingAddressProps } from '../src/rds-comp-billing-address/rds-comp-billing-address';


describe('RdsCompBillingAddress', () => {
  const countryList = [{ option: 'Country 1' }, { option: 'Country 2' }];
  const IndianStateList = [{ option: 'State 1' }, { option: 'State 2' }];

  const mockBillingAddressDetails = jest.fn();

  const props: RdsCompBillingAddressProps = {
    countryList,
    IndianStateList,
    BillingAddressDetails: mockBillingAddressDetails,
  };

  it('should render without errors', () => {
    render(<RdsCompBillingAddress {...props} />);
    // You can add assertions here to check if the component rendered correctly
  });

  it('should call onbackHandler when the "Back" button is clicked', () => {
    const { getByText } = render(<RdsCompBillingAddress {...props} />);
    const backButton = getByText('Back');
    fireEvent.click(backButton);
    // You can add assertions here to check if the onbackHandler function was called
  });


  // Add more test cases for validation functions and error messages if needed
});



const countryList = [
  { option: 'Country 1' },
  { option: 'Country 2' },
  { option: 'Country 3' },
];

const IndianStateList = [
  { option: 'State 1' },
  { option: 'State 2' },
  { option: 'State 3' },
];

describe('RdsCompBillingAddress', () => {
  it('should render the component', () => {
    render(
      <RdsCompBillingAddress
        countryList={countryList}
        IndianStateList={IndianStateList}
        BillingAddressDetails={() => {}}
      />
    );
  });


});








