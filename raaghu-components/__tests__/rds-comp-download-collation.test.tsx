import React from 'react';
import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import RdsCompDownloadCollation, { RdsCompDownloadCollationProps } from '../src/rds-comp-download-collation/rds-comp-download-collation';

describe('RdsCompDownloadCollation', () => {
  const defaultProps: RdsCompDownloadCollationProps = {
    downloadTable: [
      {
        DateofData: '2022-01-01',
        NummberofDay: '1 day ago',
      },
      {
        DateofData: '2022-01-02',
        NummberofDay: '2 days ago',
      },
    ],
  };
  
  it('should render download table with correct information and icons', () => {
    render(<RdsCompDownloadCollation {...defaultProps} />);
    
    // Check if download table rows are rendered
    expect(screen.getByText('2022-01-01')).toBeInTheDocument();
    expect(screen.getByText('1 day ago')).toBeInTheDocument();
    expect(screen.getByText('2022-01-02')).toBeInTheDocument();
    expect(screen.getByText('2 days ago')).toBeInTheDocument();
    
    // Check if icons are rendered
    const informationIcons = screen.getAllByRole('img');
    expect(informationIcons).toHaveLength(4);
  });
});
