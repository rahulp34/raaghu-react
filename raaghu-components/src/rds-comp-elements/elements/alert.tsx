import React, { useState } from 'react';
import { RdsAlert } from '../../rds-elements';


export const code_actual = (props: any) => {

  const code_snippet = `<RdsAlert
   alertmessage="This is default alert"
   position="top"
   dismisable={false}
   colorVariant="primary" />;`;

  return (
    <RdsAlert
      alertmessage="This is default alert"
      position="top"
      dismisable={false}
      colorVariant="primary" />
  )
}

export default code_actual;
