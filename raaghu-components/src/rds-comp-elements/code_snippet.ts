const code_snippet = [
  {
    appDetail: `<RdsAppDetail appDetailsItem={{
          title: "Zapier",
          subtitle: "Build custom automation and intefrations with app",
          icon: "zapier",
          selected: true,
          iconHeight: "30px",
          iconWidth: "30px",
          iconFill: true,
          iconColor: "warning",
          iconStroke: true,
          routeLabel: "View integration"
      }} />`,
      name:"App Detail"
  },
  {
    accordion: ` <RdsAccordion
          accordionId='1'
          accordionType='Default' >
          <RdsAccordionItem id={'1'} defaultOpen={false} title={'Section 1 Title'}>
             <h1>Hello</h1>
          </RdsAccordionItem>
          <RdsAccordionItem id={'2'} title={'Section 2 Title'}>
             <h1>Hello2</h1>
          </RdsAccordionItem>
          <RdsAccordionItem id={'3'} title={'Section 3 Title'}>
             <h1>Hello3</h1>
          </RdsAccordionItem>
       </RdsAccordion>`,
       name:"App Detail"
  },
  {
    alert: `<RdsAlert
        alertmessage="This is default alert"
        position="top"
        dismisable={false}
        colorVariant="primary" />;`,
        name:"Alert"
  },
  {
    addressDetail: `<RdsAddressDetail
       addressLine1="Address Line 1"
      addressLine2="Address Line 2"
       addressLine3="Address Line 3"
      cardborder={true}
       header="Address Header"
       withIcon={true} children={undefined}></RdsAddressDetail>`,
       name:"Address Detail"
  },
  {avatar:` <RdsAvatar  size= "small"
  withProfilePic= {true}
  firstName= "Wai"
  lastName="Technologies"
  titleAlign= "horizontal"
  role= "Developer"`,
  name:"Avatar"},
  {
    badge:`  <RdsBadge size="medium"
    label= "Badge"
    colorVariant= "danger"
    badgeType= "rectangle"/>`,
    name:"Badge"
  }
];
export default code_snippet
