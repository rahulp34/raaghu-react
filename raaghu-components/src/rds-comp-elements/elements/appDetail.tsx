import React, { useEffect, useState } from 'react';
import RdsAccordionItem from '../../../../raaghu-elements/src/rds-accordion/rds-accordion-item';
import { RdsAddressDetail } from '../../rds-elements';


export const code_actual = () => {

   const code_snippet = ` <RdsAddressDetail
    addressLine1="Address Line 1"
   addressLine2="Address Line 2"
    addressLine3="Address Line 3"
   cardborder={true}
    header="Address Header"
    withIcon={true} children={undefined}></RdsAddressDetail>`;

   const setChildCode = () => {
      return code_snippet;
   };

   return (
    <RdsAddressDetail
     addressLine1="Address Line 1"
     addressLine2="Address Line 2"
     addressLine3="Address Line 3"
     cardborder={true}
     header="Address Header"
     withIcon={true} children={undefined}></RdsAddressDetail>
   )
}

export default code_actual;
