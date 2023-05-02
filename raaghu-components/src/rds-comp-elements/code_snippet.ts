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
    name: "App Detail",
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
    name: "App Detail",
  },
  {
    alert: `<RdsAlert
        alertmessage="This is default alert"
        position="top"
        dismisable={false}
        colorVariant="primary" />;`,
    name: "Alert",
  },
  {
    addressDetail: `<RdsAddressDetail
       addressLine1="Address Line 1"
      addressLine2="Address Line 2"
       addressLine3="Address Line 3"
      cardborder={true}
       header="Address Header"
       withIcon={true} children={undefined}></RdsAddressDetail>`,
    name: "Address Detail",
  },
  {
    avatar: ` <RdsAvatar  size= "small"
  withProfilePic= {true}
  firstName= "Wai"
  lastName="Technologies"
  titleAlign= "horizontal"
  role= "Developer"`,
    name: "Avatar",
  },
  {
    badge: `  <RdsBadge size="medium"
    label= "Badge"
    colorVariant= "danger"
    badgeType= "rectangle"/>`,
    name: "Badge",
  },
  {
    bankCardDetail: `<RdsBankCardDetail
    cardDatas={[
      {
        iconHeight: "30px",
        iconWidth: "30px",
        icon: "editions",
        iconFill: false,
        iconstroke: true,
        iconColorVarient: "dark",
        cardID: "1011",
        cardName: "MasterCard",
        cardExpiry: "11/2027",
        cardNumber: 3596,
        isDefault: false,
      },
    ]}
  />`,
    name: "Bank Card Detail",
  },
  {
    banner: `    <RdsBanner
    textAlign= 'start'
    bannerText='Big news! We are excited to announce a brand new product.'
    sticky= {false}
    position= 'top'
    colorVariant= 'info'
    icon='information'
    iconHeight= '20px'
    iconWidth= '20px'
    iconStroke= {true}
    iconFill= {false}
    />`,
    name: "Banner",
  },
  {
    benefit: ` <RdsBenefit
  displayType="default"
  item={{
    id: 1,
    icon: "currency_dollar_circle",
    iconHeight: "35px",
    iconWidth: "35px",
    iconFill: false,
    iconstroke: true,
    iconColorVarient: "dark",
    title: "International delivery",
    description: "Get your order in 2 days",
  }}
/>`,
    name: "Benefit",
  },
  {
    bigNumber: `   <RdsBigNumber
    subTitleColorVariant="primary"
    subTitle="Visitors"
    bigNumber="2,236"
    children={<></>}
  />`,
    name: "Big Number",
  },
  {
    breadcrumb: ` <RdsBreadcrumb
    role="advance"
    breadItems={[
      {
        label: "Home",
        id: 1,
        route: "#",
        disabled: false,
        icon: "home",
        iconFill: false,
        iconstroke: true,
        iconWidth: "15px",
        iconHeight: "15px",
        iconColor: "primary",
        active: false,
      },
      {
        label: "About",
        id: 2,
        route: "#",
        disabled: false,
        icon: "information",
        iconFill: false,
        iconstroke: true,
        iconWidth: "15px",
        iconHeight: "15px",
        iconColor: "primary",
        active: false,
      },
      {
        label: "Contact",
        id: 3,
        active: false,
        disabled: true,
        icon: "phone",
        iconFill: false,
        iconstroke: true,
        iconWidth: "15px",
        iconHeight: "15px",
        iconColor: "primary",
      },
    ]}
  />`,
    name: "BreadCrumb",
  },
  {
    button: `   <RdsButton
    colorVariant= "primary"
    label= "BUTTON"
    block= {false}
    size= "medium"
    />`,
    name: "button",
  },
  {
    buttonGroup: `    <RdsButtonGroup
    isOutline={false}
    vertical={false}
    size="medium"
    colorVariant="primary"
    role="button"
    buttonGroupItems={[
      {
        label: "Left",
        id: "",
        name: "",
      },
      {
        label: "Middle",
        id: "",
        name: "",
      },
      {
        label: "Right",
        id: "",
        name: "",
      },
    ]}
  />`,
    name: "Button group",
  },
  {
    card: `<RdsCard
    colorVariant="primary"
    borderColor=""
    cardTitle="Card title"
    cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
    buttonLabel="Button"
    showFooter={true}
  />`,
    name: "Card",
  },
  {
    carousel: `<RdsCarousel
    Indicators={true}
    crossFade={true}
    controls={true}
    carouselItems={[
      {
        id: 1,
        imgUrl:
          "https://cdn.londonandpartners.com/visit/london-organisations/tower-bridge/86830-640x360-tower-bridge-640.jpg",
        name: "Sam Smith",
        roleName: "Product Manager",
        subTitle:
          "Nulla metus metus ullamcorper vel tincidunt set euismod nibh quisque volutpat condimentum veilt class patent taciti sociosqu and litara ad litora torquent per conubia nastra.",
      },
      {
        id: 2,
        imgUrl:
          "https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/coca-cola-london-eye/the-london-eye-2-640x360.jpg?mw=640&hash=F7D574072DAD523443450DF57E3B91530064E4EE",
        name: "king John",
        roleName: "Tech Lead",
        subTitle:
          "this is the caption section were u can add the caption for the image",
      },
    ]}
  />`,
    name: "Carousel",
  },
  {
    checkbox: `   <RdsCheckbox
    state="Checkbox"
    label="default checkbox"
    checked={false}
    isDisabled={false}
    isSwitch={false}
    withlabel={true}
    id="checkboxId"
    errorMessage="error Message"
  />`,
    name: "Checkbox",
  },{
    checkboxGroup:`    <RdsCheckboxGroup
    state="Checkbox"
    isSwitch={false}
    isInline={false}
    label="Checkbox Group"
    itemList={[
      {
        id: 1,
        label: "Child Checkbox 1",
        checked: false,
        disabled: false,
      },
      {
        id: 2,
        label: "Child Checkbox 2",
        checked: false,
        disabled: false,
      },
      {
        id: 3,
        label: "Child Checkbox 3",
        checked: false,
        disabled: false,
      },
    ]}
    errorMessage="Error Message"
  />`,
  name:"checkboxGroup"
  },{
    checkboxParentChild:`<RdsCheckboxParentChild
    userData={[
      {
        id: 1,
        label: "Parent Checkbox 1",
        isSelected: false,
        isIntermediate: false,
        disabled: false,
        childList: [
          {
            id: 1,
            parent_id: 1,
            label: "Child Checkbox 1",
            isSelected: false,
            disabled: false,
          },
          {
            id: 2,
            parent_id: 1,
            label: "Child Checkbox 2",
            isSelected: false,
            disabled: false,
          },
          {
            id: 3,
            parent_id: 1,
            label: "Child Checkbox 3",
            isSelected: false,
            disabled: false,
          },
          {
            id: 4,
            parent_id: 1,
            label: "Child Checkbox 4",
            isSelected: false,
            disabled: false,
          },
        ],
      },
      {
        id: 2,
        label: "Parent Checkbox 2",
        isSelected: false,
        isIntermediate: false,
        isClosed: false,
        disabled: false,
        childList: [
          {
            id: 1,
            parent_id: 2,
            label: "Child Checkbox 1",
            isSelected: true,
            disabled: false,
          },
          {
            id: 2,
            parent_id: 2,
            label: "Child Checkbox 2",
            isSelected: true,
            disabled: false,
          },
        ],
      },
    ]}
  />`,
    name:'CheckBox Parent Child'
  },
  {
    collapse:`   <RdsCollapse
    buttonList={
  [
    {
      "colorVariant": "primary",
      "label": "Toggle Element",
      "id": "collapseExample"
    }
  ]}
    />`,
    name:'Collapse'
  },
  {
    colorPicker:` <RdsColorPicker
    value="#e1e1e1"
    isDisabled={false}
    label= "Color-Picker" 
    />`,
    name:'Color Picker'
  },
  {
    colorSwitcher:` <RdsColorSwitcher
    displayType='rounded'
    header= 'Color'
    defaultValue= {1}
    itemList={ [
      { id: 1, color: '#FFFFFF' },
      { id: 2, color: '#FDD2FF' },
      { id: 3, color: '#BFEAFF' },
    ]}
    />`,
    name:'Color Switcher'
  }
];
export default code_snippet;
