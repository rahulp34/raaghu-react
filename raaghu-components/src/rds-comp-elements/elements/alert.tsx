import React, { useState } from 'react';
import RdsAccordionItem from '../../../../raaghu-elements/src/rds-accordion/rds-accordion-item';
import { RdsAlert } from 'raaghu-react-elements';

// export const code_snippet = `<RdsAccordion
//       accordionId="1"
//       accordionType="Default">
//       <RdsAccordionItem id={"1"} defaultOpen={false} title={"Section 1 Title"}>
//          <h1>Hello</h1>
//       </RdsAccordionItem>
//       <RdsAccordionItem id={"2"} title={"Section 2 Title"}>
//          <h1>Hello2</h1>
//       </RdsAccordionItem>
//       <RdsAccordionItem id={"3"} title={"Section 3 Title"}>
//          <h1>Hello3</h1>
//       </RdsAccordionItem>
//    </RdsAccordion>;`;

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
