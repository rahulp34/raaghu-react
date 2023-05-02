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
  },
  {
    checkboxGroup: `    <RdsCheckboxGroup
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
    name: "checkboxGroup",
  },
  {
    checkboxParentChild: `<RdsCheckboxParentChild
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
    name: "CheckBox Parent Child",
  },
  {
    collapse: `   <RdsCollapse
    buttonList={
  [
    {
      "colorVariant": "primary",
      "label": "Toggle Element",
      "id": "collapseExample"
    }
  ]}
    />`,
    name: "Collapse",
  },
  {
    colorPicker: ` <RdsColorPicker
    value="#e1e1e1"
    isDisabled={false}
    label= "Color-Picker" 
    />`,
    name: "Color Picker",
  },
  {
    colorSwitcher: ` <RdsColorSwitcher
    displayType='rounded'
    header= 'Color'
    defaultValue= {1}
    itemList={ [
      { id: 1, color: '#FFFFFF' },
      { id: 2, color: '#FDD2FF' },
      { id: 3, color: '#BFEAFF' },
    ]}
    />`,
    name: "Color Switcher",
  },
  {
    counter: `  <RdsCounter
    counterValue={0}
    min={0}
    max={50}
    width={125}
    colorVariant="primary"
    position="top"
    label="Counter"
  />`,
    name: "Counter",
  },
  {
    datePicker: ` <RdsDatePicker
    onDatePicker={()=>{}}
    DatePickerLabel= "Select Date"
    type= "default"
    /> `,
    name: "Date Picker",
  },
  {
    doubleRange: ` <RdsDoubleRange
    max={200}
    min={10}
    doubleRangeType="default"
    />`,
    name: "DoubleRange",
  },
  {
    dropdown: ` <RdsDropdown
    colorVariant= "primary"
    id="dropdownlist"
    size="mid"
    darkDropdown={false}
    label="Dropdown Button"
    direction="Drop-Down"
    split={false}
    listItems={[
      {
        label: "Export To Excel",
        id: "1",
        path: "",
      },
      {
        label: "Import From Excel",
        id: "2",
        path: "",
      },
      {
        label: "Click here download sample import file",
        id: "3",
        path: "",
      },
    ]}
    /> `,
    name: "DropDown",
  },
  {
    dropdownList: ` <RdsDropdownList
    placeholder="Filter"
    borderDropdown={true}
    listItems={[
      {
        label: "EN(US)",
        val: "en",
        iconWidth: "20px",
        iconHeight: "20px",
      },
      {
        label: "English(IND)",
        val: "en",
        iconWidth: "20px",
        iconHeight: "20px",
      },
      {
        label: "Français",
        val: "fr",
        iconWidth: "20px",
        iconHeight: "20px",
      },
      {
        label: "Deutsch",
        val: "de",
        iconWidth: "20px",
        iconHeight: "20px",
      },
      {
        label: "Português (Brasil)",
        val: "pt-BR",
        iconWidth: "20px",
        iconHeight: "20px",
      },
      {
        label: "Türkçe",
        val: "tr",
        iconWidth: "20px",
        iconHeight: "20px",
      },
      {
        label: "Italiano",
        val: "it",
        iconWidth: "20px",
        iconHeight: "20px",
      },
    ]}
  /> `,
    name: "Dropdown List",
  },
  {
    fabMenu: `   <RdsFabMenu
    colorVariant="primary"
    listItems = {[
        { value: 'New Role', some: 'value', key: 'new', icon: 'users', iconWidth: '20px', iconHeight: '20px' },
        { value: 'Refresh', some: 'value', key: 'refresh', icon: 'refresh', iconWidth: '20px', iconHeight: '20px' },
        { value: 'Export to excel', some: 'value', key: 'export', icon: 'export', iconWidth: '20px', iconHeight: '20px' },
        { value: 'Delete', some: 'value', key: 'delete', icon: 'delete', iconWidth: '20px', iconHeight: '20px' },
        { value: 'Click here download sample import file.', some: 'value', key: 'download', icon: 'download', iconWidth: '20px', iconHeight: '20px' },
    ]}
    /> `,
    name: "FabMenu",
  },
  {
    featureList: `<RdsFeatureList
    heading="Features"
    itemList={[
      "Only the best materials",
      "Ethically and locally made",
      "Pre-washed and pre-shrunk",
      "Machine wash cold with similar colors",
      "Stainless strap loops",
      "Double stitched construction",
      "Water-resistant",
    ]}
    columns={0}
  />`,
    name: "Feature List",
  },
  {
    fileUploader: ` <RdsFileUploader
    size="mid"
    multiple={false}
    extensions=""
    colorVariant="dark"
    limit={5}
    label="Upload file here"
  />`,
    name: "File Uploader",
  },
  {
    icon: `<RdsIcon
    name="users"
    width="20px"
    height="20px"
    fill={true}
    stroke={true}
    colorVariant="primary"
    isAnimate={true}
  />`,
    name: "Icon",
  },
  {
    iconLabel: `<RdsIconLabel
    fill={false}
    label="User Name"
    icon="users"
    size="medium"
    iconSize="medium"
  /> `,
    name: "Icon Label",
  },
  {
    illustration: ` <RdsIllustration
    colorVariant="light"
    label="Currently you don't have any data"
    subLabel="Click on the button above to add data"
  /> `,
    name: "Illustration",
  },
  {
    input: ` <RdsInput
    size="medium"
    inputType="text"
    placeholder="Add Placeholder"
    label="Label"
    labelPositon="top"
    id=""
    value=""
    required={true}
  />`,
    name: "Input",
  },
  {
    inputGroup: ` <RdsInputGroup
    buttonLabel="BUTTON"
    buttonColorVariant="primary"
    placeholder="Placeholder text"
    size="large"
    outline={true}
    inputValue={() => {}}
    inputGroupLabel="Field Label"
  /> `,
    name: "Input Group",
  },
  {
    label: `<RdsLabel label="Label" />`,
    name: "Label",
  },
  {
    likeDislike: `  <RdsLikeDislike
    like={30}
    dislike={23}
    /> `,
    name: "Like Dislike",
  },
  {
    listGroup: ` <RdsListGroup
    labelPosition="top"
    label="List Group"
    listItem={[
      {
        label: " label 1",
        disabled: true,
        badgeLabel: "10",
        listHeading: "",
        listContent: "",
        listTime: "",
        type: "",
      },
      {
        label: " label 2",
        disabled: false,
        badgeLabel: "2",
        listHeading: "",
        listContent: "",
        listTime: "",
        type: "",
      },
      {
        label: " label 3",
        disabled: false,
        badgeLabel: "5",
        listHeading: "",
        listContent: "",
        listTime: "",
        type: "",
      },
    ]}
  />`,
    name: "List Group",
  },{
    modal: `<RdsModal
    modalId="modal1234"
    modalAnimation="modal fade"
    showModalFooter={true}
    showModalHeader={true}
    scrollable={false}
    verticallyCentered={false}
    modalTitle="Title"
    saveChangesName="Save Changes"
    cancelButtonName="Close"
    modalbutton={<button className="btn btn-primary">Default</button>}
  >
    <p>
      This is some placeholder content to show the scrolling behavior for
      modals. Instead of repeating the text the modal, we use an inline style
      set a minimum height, thereby extending the length of the overall modal
      and demonstrating the overflow scrolling. When content becomes longer
      than the height of the viewport, scrolling will move the modal as
      needed.
    </p>
  </RdsModal> `,
    name: "Modal",
  },
  {
    navbar: `  <RdsNavbar
    title="Navbar"
    size="small"
    navbarItems={[
      {
        label: "Home",
        isActive: true,
        navclass: "",
        href: "",
      },
      {
        label: "Features",
        isActive: false,
        navclass: "",
        href: "",
      },
      {
        label: "Pricing",
        isActive: false,
        navclass: "",
        href: "",
      },
    ]}
  />`,
    name: "Navbar",
  },
  {
    navtabs: `<RdsNavtabs
    navtabsItems={[
      {
        label: "Active",
        tablink: "#nav-home",
        ariacontrols: "nav-home",
        subText: "Active subtext",
        id: "active",
      },
      {
        label: "Link",
        tablink: "#nav-profile",
        ariacontrols: "nav-profile",
        id: "home",
      },
      {
        label: "Link",
        tablink: "#nav-contact",
        ariacontrols: "nav-contact",
        subText: "Home subtext",
        id: "about",
      },
      {
        label: "Disabled",
        tablink: "#nav-deabled",
        disabled: true,
        subText: "Disble subtext",
        id: "disabled",
      },
    ]}
    type="default"
  /> `,
    name: "Navtabs",
  },
  {
    notification: `    <RdsNotification
    colorVariant="primary"
    footerText="2 days ago"
    notifications={[
      {
        status: "success",
        title: "Tenant added",
        urlTitle: "hello",
        // url:" " ,
        time: "a month ago",
        state: 1,
        userNotificationId: 0,
        selected: false,
      },

      {
        status: "error",
        title: "Tenant deleted",
        urlTitle: "hello",
        time: "a month ago",
        state: 1,
        userNotificationId: 1,
        selected: false,
      },

      {
        status: "warn",
        title: "Tenant added  warn",
        urlTitle: "hello",
        time: "a month ago",
        state: 1,
        userNotificationId: 2,
        selected: false,
      },

      {
        status: "info",
        title: "Tenant deleted info",
        urlTitle: "hello",
        time: "a month ago",
        state: 1,
        userNotificationId: 3,
        selected: false,
      },
    ]}
  />`,
    name: "Notification",
  },
  {
    offcanvas: ` <RdsOffcanvas
    offId="canvasExample"
    canvasTitle="Offcanvas Title"
    scrolling={false}
    placement="end"
    backDrop="static"
    offcanvaswidth={650}
    children={
      <>
        <h2 className="p-3">
          Hello Offcanvas Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </h2>
      </>
    }
    offcanvasbutton={
      <a
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#canvasExample"
        aria-controls="canvasExample"
      >
        Button
      </a>
    }
  /> `,
    name: "Offcanvas",
  },
  {
    pagination: `<RdsPagination
    paginationType="default"
    totalRecords={22}
    recordsPerPage={5}
    size="lg"
    alignmentType="start"
  /> `,
    name: "Pagination",
  },
  {
    popover: `<RdsPopover popoverPosition="top" children={<p>Popover</p>} /> `,
    name: "Popover",
  },
  {
    popularPage: ` <RdsPopularPage
    itemList={[
      {
        title: "Documentation",
        subtitle: "Learn how to integrate our tools with your app",
        icon: "folder",
        route: "/home",
      },
      {
        title: "API References",
        subtitle: "A Complete API references of our libraries",
        icon: "code_computer",
        route: "/home",
      },
      {
        title: "Guides",
        subtitle: "Installation guides that cover popular setups",
        icon: "features",
        route: "/home",
      },
      {
        title: "Blog",
        subtitle: "Read our latest news and articles",
        icon: "blog",
        route: "/home",
      },
    ]}
  /> `,
    name: "Popular Page",
  },
  {
    price: `<RdsPrice mrp={100} currentPrice={90} withDiscount={true} /> `,
    name: "Price",
  },
  {
    productImage: `<RdsProductImage
    displayType="basic"
    itemList={[
      "https://www.waiin.com/wp-content/uploads/2021/07/Framework-Expertise_01.png",
    ]}
    images={[
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://www.waiin.com/wp-content/uploads/2021/07/Framework-Expertise_01.png",
      "https://www.waiin.com/wp-content/uploads/2021/07/Framework-Expertise_01.png",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    ]}
  /> `,
    name: "Product Image",
  },
  {
    progressBar: ` <RdsProgressBar
    role="single"
    colorVariant="primary"
    striped="default"
    progressWidth={40}
    animation={false}
    height={15}
    displayLevel={true}
    displaypercentage={true}
  /> `,
    name: "ProgressBar",
  },
  {
    radioButton: `<RdsRadioButton
    displayType="Default"
    label="Radio Button"
    itemList={[
      {
        id: 1,
        label: "Radio Button 1",
        checked: false,
        name: "radio_button",
      },
      {
        id: 2,
        label: "Radio Button 2",
        checked: false,
        name: "radio_button",
      },
      {
        id: 3,
        label: "Radio Button 3",
        checked: true,
        name: "radio_button",
      },
    ]}
  /> `,
    name: "Radio Button",
  },
  {
    range: ` <RdsRange max={200} min={10} colorVariant="danger" rangeType="default" /> `,
    name: "Range",
  },
];
export default code_snippet;
