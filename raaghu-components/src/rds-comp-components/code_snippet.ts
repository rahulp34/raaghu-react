const code_snippet = [
  {
    account: `<RdsCompAccount
  versionList={[{ option: "1" }, { option: "2" }, { option: "3" }]}
  twoFactList={[
    { option: "Optional" },
    { option: "Disabled" },
    { option: "Forced" },
  ]}`,
    name: "Account",
  },
  { addressInput: ` <RdsCompAddressInput/>`, name: "Address Input" },
  { adminDashboard: ` <RdsCompAdminDashboard/>`, name: "Admin Dashboard" },
  {
    apiResourceBasic: ` <RdsCompApiResourceBasic
email="xyz@xyz"
fullname="xyz"
message="xyz"
accessTokenSigningAlgorithm="abc"
/>`,
    name: "Api Resource Basic",
  },
  {
    apiScopeResource: ` <RdsCompApiScopeBasicResource
email="xyz@xyz"
fullname="xyz"
message=" this is message"
/>`,
    name: "Api Scope Resource",
  },
  {
    appDetail: ` <RdsCompAppDetail
appDetailList={[
  {
    id: 1,
    iconHeight: "30px",
    iconWidth: "30px",
    iconFill: false,
    iconColor: "dark",
    iconStroke: true,
    title: "Zapier",
    subtitle: "Build custom automation and intefrations with app",
    icon: "zapier",
    route: "/home",
    selected: true,
  },
  {
    id: 2,
    iconHeight: "30px",
    iconWidth: "30px",
    iconFill: false,
    iconColor: "dark",
    iconStroke: true,
    title: "Zapier",
    subtitle: "Build custom automation and intefrations with app",
    icon: "zapier",
    route: "/home",
    selected: true,
  },
  {
    id: 3,
    iconHeight: "30px",
    iconWidth: "30px",
    iconFill: false,
    iconColor: "dark",
    iconStroke: true,
    title: "Zapier",
    subtitle: "Build custom automation and intefrations with app",
    icon: "zapier",
    route: "/home",
    selected: true,
  },
]}
/>`,
    name: "App Detail",
  },
  {
    applyForPosition: `<RdsCompApplyForPosition />`,
    name: "Apply For Position",
  },
  {
    backgroundImage: `<RdsCompBackgroundImage
imageUrl="https=//cdn.pixabay.com/photo/2020/12/18/16/56/laptop-5842509_960_720.jpg"
title="New arrivals are here"
btnLabel="CHECK NEW ARRIVALS HERE"
subtitle="The new arrivals have, well newly arrived. Check out the latest options from our summer small-batch release while they are still in stock."
backgroundRepeat="no-repeat"
backgroundSize="cover"
/>`,
    name: "Background Image",
  },
  {
    benefit: `<RdsCompBenefit
displayType="default"
colsize={4}
itemList={[
  {
    id: 1,
    icon: "currency_dollar_circle",
    iconHeight: "35px",
    iconWidth: "35px",
    iconFill: false,
    iconstroke: true,
    iconColorVarient: "dark",
    title: "Royalty Rewards",
    description: "Dont look at other tees",
  },
  {
    id: 2,
    icon: "roles",
    iconHeight: "35px",
    iconWidth: "35px",
    title: "International delivery",
    description: "Get your order in 2 years",
    iconFill: false,
    " iconstroke": true,
    iconColorVarient: "dark",
  },
  {
    id: 3,
    iconHeight: "40px",
    iconWidth: "40px",
    icon: "truck",
    iconFill: false,
    iconstroke: true,
    iconColorVarient: "dark",
    title: "Free shipping",
    description: "Free delivery is our main part of company.",
  },
]}
/>`,
    name: "Benefit",
  },
  {
    billing: ` <RdsCompBilling
  subscriptionData={[
    {
      name: "BASIC",
      price: "$232",
      duration: "2 Year",
      colorVariant: "info",
      icon: "basic_subscription",
      recommended: false,
      features: [
        { title: "Maximum User Count", isInclude: true },
        { title: "Test Check feature", isInclude: false },
        { title: "Test check feature count 2", isInclude: false },
      ],
    },
    {
      name: "STANDARD",
      price: "$432",
      duration: "2 Year",
      colorVariant: "success",
      icon: "standard_subscription",
      recommended: false,
      features: [
        { title: "Maximum User Count", isInclude: true },
        { title: "Test Check feature", isInclude: true },
        { title: "Test check feature count 2", isInclude: false },
      ],
    },
    {
      name: "PREMIUM",
      price: "$532",
      duration: "2 Year",
      colorVariant: "primary",
      icon: "premium_subscription",
      recommended: true,
      features: [
        { title: "Maximum User Count", isInclude: true },
        { title: "Test Check feature", isInclude: true },
        { title: "Test check feature count 2", isInclude: true },
      ],
    },
  ]}
  billingHeaders={[
    {
      displayName: "Invoice",
      key: "invoice",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Amount",
      key: "amount",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Date",
      key: "expiry",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Status",
      key: "status",
      datatype: "badge",
      sortable: true,
    },
  ]}
  billingData={[
    {
      id: 1,
      invoice: "Standard Plan -jan 2022",
      amount: "USD $250.00",
      expiry: " Jan 23, 2022",
      status: { badgeColorVariant: "success", content: "Paid" },
    },
    {
      id: 2,
      invoice: "Standard Plan -dec 2021",
      amount: "USD $300.00",
      expiry: " Dec 23, 2021",
      status: { badgeColorVariant: "success", content: "Paid" },
    },
  ]}
  actions={[{ id: "Download", displayName: "Download" }]}
  onActionSelection={() => {}}
/>`,
    name: "Billing",
  },
  {
    billingAddress: ` <RdsCompBillingAddress countryList = {[
    { option: "Afghanistan" },
    { option: "Albania" },
    { option: "Belgium" },
    { option: "Belize" },
    { option: "Benin" },
    { option: "Bermuda" },
    { option: "Bhutan" },
    { option: "Cambodia" },
    { option: "Cameroon" },
    { option: "Canada" },
    { option: "Cayman Islands (the)" },
    { option: "Central African Republic (the)" },
    { option: "Chad" },
    { option: "Chile" },
    { option: "Falkland Islands (the) [Malvinas]" },
    { option: "Faroe Islands (the)" },
    { option: "Fiji" },
    { option: "Gibraltar" },
    { option: "Greece" },
    { option: "Hong Kong" },
    { option: "Hungary" },
    { option: "Iceland" },
    { option: "India" },
    { option: "Indonesia" },
    { option: "Iran (Islamic Republic of)" },
    { option: "Iraq" },
    { option: "Ireland" },
    { option: "Isle of Man" },
    { option: "Israel" },
    { option: "Italy" },
    { option: "Jamaica" },
    { option: "Japan" },
    { option: "Jersey" },
    { option: "Jordan" },
    { option: "Kazakhstan" },
    { option: "Kenya" },
    { option: "Kyrgyzstan" },
    { option: "Lao People's Democratic Republic (the)" },
    { option: "Latvia" },
    { option: "Lebanon" },
    { option: "Lesotho" },
    { option: "Marshall Islands (the)" },
    { option: "Martinique" },
    { option: "Namibia" },
    { option: "Nauru" },
    { option: "Nepal" },
    { option: "Netherlands (the)" },
    { option: "New Caledonia" },
    { option: "New Zealand" },
    { option: "Nicaragua" },
    { option: "Niger (the)" },
    { option: "Nigeria" },
    { option: "Niue" },
    { option: "Norfolk Island" },
    { option: "Northern Mariana Islands (the)" },
    { option: "Norway" },
    { option: "Oman" },
    { option: "Singapore" },
    { option: "Sint Maarten (Dutch part)" },
    { option: "Slovakia" },
    { option: "Slovenia" },
    { option: "Solomon Islands" },
    { option: "Somalia" },
    { option: "South Africa" },
    { option: "South Georgia and the South Sandwich Islands" },
    { option: "South Sudan" },
    { option: "Spain" },
    { option: "Sri Lanka" },
    { option: "Zimbabwe" },
    { option: "Åland Islands" }
]}
IndianStateList = {[
    { option: "Andhra Pradesh" },
    { option: "Arunachal Pradesh" },
    { option: "Assam" },
    { option: "Bihar" },
    { option: "Chhattisgarh" },
    { option: "Goa" },
    { option: "Gujarat" },
    { option: "Haryana" },
    { option: "Himachal Pradesh" },
    { option: "Jammu and Kashmir" },
    { option: "Jharkhand" },
    { option: "Karnataka" },
    { option: "Kerala" },
    { option: "Madhya Pradesh" },
    { option: "Maharashtra" },
    { option: "Manipur" },
    { option: "Meghalaya" },
    { option: "Mizoram" },
    { option: "Nagaland" },
    { option: "Odisha" },
    { option: "Punjab" },
    { option: "Rajasthan" },
    { option: "Sikkim" },
    { option: "Tamil Nadu" },
    { option: "Telangana" },
    { option: "Tripura" },
    { option: "Uttarakhand" },
    { option: "Uttar Pradesh" },
    { option: "West Bengal" },
    { option: "Andaman and Nicobar Islands" },
    { option: "Chandigarh" },
    { option: "Dadra and Nagar Haveli" },
    { option: "Daman and Diu" },
    { option: "Delhi" },
    { option: "Lakshadweep" },
    { option: "Puducherry" }
]}
BillingAddressDetails={()=>{}}
/>`,
    name: "Billing Address",
  },
  {
    cache: ` <RdsCompCache cachedata={[
    { name: "AbpUserSettingsCache", id: 1 },
    { name: "AbpZeroRolePermissions", id: 2 },
    { name: "AbpZeroTenantCache", id: 3 },
    { name: "AbpZeroEditionFeatures", id: 4 },
    { name: "AbpTenantSettingsCache", id: 5 }
  ]} recordsperpage ={10}></RdsCompCache>`,
    name: "Cache",
  },
  {
    calender: `<RdsCompCalendar events={[
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 10),
    end: new Date(2021, 6, 12),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
]}
/>`,
    name: "Calender",
  },
  {
    cardDetailList: `<RdsCompCardDetailList   cardDatas= {[
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
  ></RdsCompCardDetailList>`,
    name: "Card Detail List",
  },
  {
    claim: ` <RdsCompClaim
  resources= {[
      {
        id: 1,
        displayName: "A - E",
        selected: false,
        children: [
          {
            id: 1,
            p_id: 1,
            displayName: "Availability",
            selected: false,
          },
          {
            id: 2,
            p_id: 1,
            displayName: "Apiopolis",
            selected: false,
          },
          {
            id: 3,
            p_id: 1,
            displayName: "Apigenix",
            selected: false,
          },
          {
            id: 4,
            p_id: 1,
            displayName: "Best Selector",
            selected: false,
          },
          {
            id: 5,
            p_id: 1,
            displayName: "Best Selector",
            selected: false,
          },
          {
            id: 6,
            p_id: 1,
            displayName: "Creative",
            selected: false,
          },
          {
            id: 7,
            p_id: 1,
            displayName: "ALT Genix Api",
            selected: false,
          },
          {
            id: 8,
            p_id: 1,
            displayName: "Dev Support Api",
            selected: false,
          },
        ],
      },
      {
        id: 2,
        displayName: "F - O",
        selected: false,
        children: [
          {
            id: 1,
            p_id: 2,
            displayName: "Availability",
            selected: false,
          },
          {
            id: 2,
            p_id: 2,
            displayName: "Apiopolis",
            selected: false,
          },
          {
            id: 3,
            p_id: 2,
            displayName: "Apigenix",
            selected: false,
          },
          {
            id: 4,
            p_id: 2,
            displayName: "Best Selector",
            selected: false,
          },
          {
            id: 5,
            p_id: 2,
            displayName: "Best Selector",
            selected: false,
          },
          {
            id: 6,
            p_id: 2,
            displayName: "Creative",
            selected: false,
          },
          {
            id: 7,
            p_id: 2,
            displayName: "ALT Genix Api",
            selected: false,
          },
          {
            id: 8,
            p_id: 2,
            displayName: "Dev Support Api",
            selected: false,
          },
        ],
      },
      {
        id: 3,
        displayName: "P - Z",
        selected: false,
        children: [
          {
            id: 1,
            p_id: 3,
            displayName: "Availability",
            selected: false,
          },
          {
            id: 2,
            p_id: 3,
            displayName: "Apiopolis",
            selected: false,
          },
          {
            id: 3,
            p_id: 3,
            displayName: "Apigenix",
            selected: false,
          },
          {
            id: 4,
            p_id: 3,
            displayName: "Best Selector",
            selected: false,
          },
          {
            id: 5,
            p_id: 3,
            displayName: "Best Selector",
            selected: false,
          },
          {
            id: 6,
            p_id: 3,
            displayName: "Creative",
            selected: false,
          },
          {
            id: 7,
            p_id: 3,
            displayName: "ALT Genix Api",
            selected: false,
          },
          {
            id: 8,
            p_id: 3,
            displayName: "Dev Support Api",
            selected: false,
          },
        ],
      },
    ]}
  />`,
    name: "Claim",
  },
  {
    clientResource: `<RdsCompClientResource
  role="basic"
  resources={[
    {
      id: 1,
      displayName: "A - E",
      selected: false,
      select: false,
      children: [
        {
          id: 1,
          p_id: 1,
          displayName: "Availability",
          selected: false,
        },
        {
          id: 2,
          p_id: 1,
          displayName: "Apiopolis",
          selected: false,
        },
        {
          id: 3,
          p_id: 1,
          displayName: "Apigenix",
          selected: false,
        },
        {
          id: 4,
          p_id: 1,
          displayName: "Best Selector",
          selected: false,
        },
        {
          id: 5,
          p_id: 1,
          displayName: "Best Selector",
          selected: false,
        },
        {
          id: 6,
          p_id: 1,
          displayName: "Creative",
          selected: false,
        },
        {
          id: 7,
          p_id: 1,
          displayName: "ALT Genix Api",
          selected: false,
        },
        {
          id: 8,
          p_id: 1,
          displayName: "Dev Support Api",
          selected: false,
        },
      ],
    },
    {
      id: 2,
      displayName: "F - O",
      selected: false,
      select: false,
      children: [
        {
          id: 1,
          p_id: 2,
          displayName: "Availability",
          selected: false,
        },
        {
          id: 2,
          p_id: 2,
          displayName: "Apiopolis",
          selected: false,
        },
        {
          id: 3,
          p_id: 2,
          displayName: "Apigenix",
          selected: false,
        },
        {
          id: 4,
          p_id: 2,
          displayName: "Best Selector",
          selected: false,
        },
        {
          id: 5,
          p_id: 2,
          displayName: "Best Selector",
          selected: false,
        },
        {
          id: 6,
          p_id: 2,
          displayName: "Creative",
          selected: false,
        },
        {
          id: 7,
          p_id: 2,
          displayName: "ALT Genix Api",
          selected: false,
        },
        {
          id: 8,
          p_id: 2,
          displayName: "Dev Support Api",
          selected: false,
        },
      ],
    },
    {
      id: 3,
      displayName: "P - Z",
      selected: false,
      select: false,
      children: [
        {
          id: 1,
          p_id: 3,
          displayName: "Availability",
          selected: false,
        },
        {
          id: 2,
          p_id: 3,
          displayName: "Apiopolis",
          selected: false,
        },
        {
          id: 3,
          p_id: 3,
          displayName: "Apigenix",
          selected: false,
        },
        {
          id: 4,
          p_id: 3,
          displayName: "Best Selector",
          selected: false,
        },
        {
          id: 5,
          p_id: 3,
          displayName: "Best Selector",
          selected: false,
        },
        {
          id: 6,
          p_id: 3,
          displayName: "Creative",
          selected: false,
        },
        {
          id: 7,
          p_id: 3,
          displayName: "ALT Genix Api",
          selected: false,
        },
        {
          id: 8,
          p_id: 3,
          displayName: "Dev Support Api",
          selected: false,
        },
      ],
    },
  ]}
/>`,
    name: "Client Resource",
  },
  {
    contactInformation: `<RdsCompContactInformation/>`,
    name: "Contact Information",
  },
  { contactUs: `<RdsCompContactUs/>`, name: "Contact Us" },
  { cookiesSection: `<RdsCompCookiesSection />`, name: "Cookies Section" },
  {
    customerReview: `<RdsCompCustomerReviews
  itemList={[
    { value: 1, count: 1017 },
    { value: 2, count: 313 },
    { value: 3, count: 704 },
    { value: 4, count: 1722 },
    { value: 5, count: 4069 },
  ]}
/>`,
    name: "Customer Reviews",
  },
  {
    dataTable: `<RdsCompDatatable
  tableHeaders={[
    {
      displayName: "Edition Name",
      key: "editionName",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Price ($)",
      key: "price",
      datatype: "number",
      dataLength: 5,
      required: false,
      sortable: true,
    },
    {
      displayName: "Trial Period(Day(s))",
      key: "trialPeriod",
      datatype: "number",
      dataLength: 5,
      required: true,
    },
    {
      displayName: "Status",
      key: "status",
      datatype: "badge",
      dataLength: 5,
      required: true,
    },
  ]}
  tableData={[
    {
      id: 1,
      editionName: "Standard",
      price: 60,
      trialPeriod: 5,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 2,
      editionName: "Basic",
      price: 120,
      trialPeriod: 10,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 3,
      editionName: "Premium",
      price: 250,
      trialPeriod: 5,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 4,
      editionName: "Standard",
      price: 60,
      trialPeriod: 7,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 5,
      editionName: "Basic",
      price: 100,
      trialPeriod: 15,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 6,
      editionName: "Standard",
      price: 60,
      trialPeriod: 5,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 7,
      editionName: "Premium",
      price: 100,
      trialPeriod: 47,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 8,
      editionName: "Standard",
      price: 100,
      trialPeriod: 53,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 9,
      editionName: "Standard",
      price: 100,
      trialPeriod: 35,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 10,
      editionName: "Basic",
      price: 100,
      trialPeriod: 35,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 11,
      editionName: "Premium",
      price: 100,
      trialPeriod: 95,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 12,
      editionName: "Standard",
      price: 100,
      trialPeriod: 75,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 13,
      editionName: "Premium",
      price: 100,
      trialPeriod: 15,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 14,
      editionName: "Basic",
      price: 100,
      trialPeriod: 45,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 15,
      editionName: "Standard",
      price: 100,
      trialPeriod: 3,
      status: { badgeColorVariant: "success", content: "active" },
    },
    {
      id: 16,
      editionName: "Basic",
      price: 100,
      trialPeriod: 1,
      status: { badgeColorVariant: "success", content: "active" },
    },
  ]}
  actions={[
    { id: "delete", displayName: "Delete" },
    { id: "edit", displayName: "Edit" },
  ]}
  pagination={false}
/>`,
    name: "Data Table",
  },
  {
    deliveryMethod: ` <RdsCompDeliveryMethod
  sizeDataWithDescription={[
    { id: 1, type: "Standard", days: "4-10 buisness days", cost: "$5.00" },
    { id: 2, type: "Express", days: "2-5 buisness days", cost: "$16.00" },
    { id: 3, type: "Free", days: "10-12 buisness days", cost: "$0.00" },
  ]}
  sizeType="withDescription"
/>`,
    name: "Delivery Method",
  },
  {
    edition: `<RdsCompEdition
  EditionItems={{
    EditionName: "Corporate",
    EditionTitle: "Strong Application for large team",
    Price: "45",
    Plan: "Per month",
  }}
  features={[
    "Maximum User Count",
    "Test Check feature",
    "Test check feature count 2",
  ]}
/>`,
    name: "Edition",
  },
  {
    editionList: `<RdsCompEditionList
  tableHeaders={[
    {
      displayName: "Edition Name",
      key: "editionName",
      datatype: "text",
      sortable: true,
    },
    {
      displayName: "Price ($)",
      key: "price",
      datatype: "number",
      sortable: true,
    },
    {
      displayName: "Trial Period(Day(s))",
      key: "trialPeriod",
      datatype: "number",
    },
    {
      displayName: "Expiring Edition",
      key: "expiringEdition",
      datatype: "text",
    },
  ]}
  tableData={[
    { id: 1, editionName: "Standard" },
    {
      id: 2,
      editionName: "apple",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 3,
      editionName: "tesla",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 4, editionName: "google", price: 1200, trialPeriod: 2 },
    { id: 5, editionName: "Standard" },
    {
      id: 6,
      editionName: "amazon",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 7,
      editionName: "bing",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 8, editionName: "stack", price: 1200, trialPeriod: 2 },
    { id: 9, editionName: "slack" },
    {
      id: 10,
      editionName: "disc",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 11,
      editionName: "HD",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 12, editionName: "dell", price: 1200, trialPeriod: 2 },
    { id: 13, editionName: "logi" },
    {
      id: 14,
      editionName: "mcdonald",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 15,
      editionName: "perl",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 16, editionName: "proton", price: 1200, trialPeriod: 2 },
    { id: 17, editionName: "express" },
    {
      id: 18,
      editionName: "nord",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 19,
      editionName: "mern",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 20, editionName: "ruby", price: 1200, trialPeriod: 2 },
    { id: 21, editionName: "rails" },
    {
      id: 22,
      editionName: "asus",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 23,
      editionName: "code",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 24, editionName: "nick", price: 1200, trialPeriod: 2 },
    { id: 25, editionName: "plex" },
    {
      id: 26,
      editionName: "senti",
      price: 2000,
      trialPeriod: 10,
      expiringEdition: "Standard",
    },
    {
      id: 27,
      editionName: "prick",
      price: 20,
      trialPeriod: 3,
      expiringEdition: "Standard",
    },
    { id: 28, editionName: "solar", price: 1200, trialPeriod: 2 },
  ]}
  actions={[
    { id: "delete", displayName: "Delete" },
    { id: "edit", displayName: "Edit" },
  ]}
  pagination={true}
  recordsPerPage={5}
  recordsPerPageSelectListOption={true}
  onActionSelection={() => {}}
  onNewTenantClick={() => {}}
/>`,
    name: "Edition List",
  },
  {
    editionNewBasic: `<RdsCompEditionNewBasic
  planList={[
    {
      isFree: true,
      value: "standard",
      option: "Standard",
      isSelected: false,
    },
    {
      isFree: false,
      value: "advanced",
      option: "Advanced",
      isSelected: false,
    },
  ]}
/>`,
    name: "Edition New Basic",
  },
  {
    editLanguageText: `<RdsCompEditLanguageText />`,
    name: "Edit Language Text",
  },
  { email: `<RdsCompEmail />`, name: "Email" },
  {
    emailSetting: `<RdsCompEmailSettings
  emailSettings={{
    currentEmail: "niphy.anto@waiin.com",
    newEmail: "abc@waiin.com",
    confirmEmail: "abc@waiin.com",
  }}
/>`,
    name: "Email Settings",
  },
  { emailSettingNew: `<RdsCompEmailSettingsNew/>`, name: "Email Setting New" },
  {
    faq: `<RdsCompFaq
  questionList={[
    {
      question: "What's the best thing about Switzerland?",
      description:
        "The flag has a with plus on it and red for the background here is an explanation about it-The flag of Switzerland displays a white cross in the centre of a square red field.",
    },
    {
      question: "Where is the Niagara waterfall?",
      description:
        "Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the New York.",
    },
    {
      question: "Which is the best part of Himalayas?",
      description:
        "The snow-capped mountains set against the backdrop of wide-open skies, Nubra Valley, is among the most beautiful Himalaya places to visit.",
    },
    {
      question: "Why Elephant size is too big?",
      description:
        "Being so large puts elephants at a survival advantage. Their size has helped them defend themselves, store fats and water better, digest more efficiently and develop a larger brain.",
    },
    {
      question: "Where is the Niagara waterfall?",
      description:
        "Niagara Falls is a group of three waterfalls at the southern end of Niagara Gorge, spanning the border between the province of Ontario in Canada and the New York.",
    },
    {
      question: "Which is the best part of Himalayas?",
      description:
        "The snow-capped mountains set against the backdrop of wide-open skies, Nubra Valley, is among the most beautiful Himalaya places to visit.",
    },
    {
      question: "Why Elephant size is too big?",
      description:
        "Being so large puts elephants at a survival advantage. Their size has helped them defend themselves, store fats and water better, digest more efficiently and develop a larger brain.",
    },
  ]}
  QuestionHeading={{
    question: "Frequently asked questions",
    description:
      "Can't find the answer you're looking for? Reach out to our customer support team.",
  }}
/>`,
    name: "Faq",
  },
  {
    feeds: ` <RdsCompFeeds
  variantType="Basic"
  itemList={[
    {
      name: "Jijo Fleshman",
      username: "@jijolife123",
      date: new Date(),
      feedIcon: "person",
      imageUrl:
        "https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1",
      description:
        "This bag is of the quality expected for the price. The lining inside the bag seems like satin and it is very strong one It has huge space inside inside as the zipper can be opened in either side.",
      hashtags: "#newbag #fancybag #designerbag",
      reviews: "See all 125 reviews",
      replies: "Show replies (3)",
      rating: 1,
    },
    {
      name: "Jijo Fleshman",
      username: "@jijolife123",
      date: new Date(),
      feedIcon: "person",
      imageUrl:
        "https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1",
      description:
        "This bag is of the quality expected for the price. The lining inside the bag seems like satin and it is very strong one It has huge space inside inside as the zipper can be opened in either side.",
      hashtags: "#newbag #fancybag #designerbag",
      reviews: "See all 125 reviews",
      replies: "Show replies (3)",
      rating: 1,
    },
    {
      name: "Jijo Fleshman",
      username: "@jijolife123",
      date: new Date(),
      feedIcon: "person",
      imageUrl:
        "https://th.bing.com/th/id/OIP.3IsXMskZyheEWqtE3Dr7JwHaGe?pid=ImgDet&rs=1",
      description:
        "This bag is of the quality expected for the price. The lining inside the bag seems like satin and it is very strong one It has huge space inside inside as the zipper can be opened in either side.",
      hashtags: "#newbag #fancybag #designerbag",
      reviews: "See all 125 reviews",
      replies: "Show replies (3)",
      rating: 1,
    },
  ]}
/>`,
    name: "Feeds",
  },
  {
    forgotPassword: `<RdsCompForgotPassword />`,
    name: "Forgot Password",
  },
  {
    identityMangement: `<RdsCompIdentityManagement
    handleIdentity={() => {}}
    lockoutSettings={{
      allowedForNewUsers: false,
      lockoutDuration: 10,
      maxFailedAccessAttempts: "",
    }}
    passwordSettings={{
      requiredLength: "",
      requiredUniqueChars: "",
      requireDigit: false,
      requireNonAlphanumeric: false,
      requireUppercase: false,
      requireLowercase: false,
    }}
    signSettings={{
      requireConfirmedEmail: false,
      requireConfirmedPhoneNumber: false,
      enablePhoneNumberConfirmation: false,
    }}
    userSettings={{
      isEmailUpdateEnabled: false,
      isUserNameUpdateEnabled: false,
    }}
  />`,
    name: "Identity Management",
  },
  {
    identityResourcesBasic: ` <RdsCompIdentiyResourcseBasic/>`,
    name: "Identity Resources Basic",
  },
  {
    information: `<RdsCompInformation
    inputTypeList={[
      {
        label: "One",
      },
      {
        label: "two",
      },
      {
        label: "three",
      },
      {
        label: "four",
      },
    ]}
    informationItemInitial={{
      propertyName: "demo",
      displayName: "demo",
      inputValue: "demo",
    }}
    reset={false}
  />`,
    name: "Information",
  },
  {
    integration: `<RdsCompIntegration
  integrationList={[
    {
      title: "Zapier",
      subtitle: "Build custom automation and intefrations with app",
      icon: "zapier",
      route: "/home",
      selected: true,
      iconHeight: "25px",
      iconWidth: "25px",
      iconStroke: true,
      iconFill: false,
      id: 1,
      iconColor: "dark",
    },
    {
      title: "Adobe XD",
      subtitle: "Build custom automation and intefrations with app",
      icon: "adobeXD",
      route: "/home",
      selected: true,
      iconHeight: "25px",
      iconWidth: "25px",
      iconStroke: false,
      iconFill: false,
    },
    {
      title: "Figma",
      subtitle: "Build custom automation and intefrations with app",
      icon: "figma",
      route: "/home",
      selected: true,
      iconHeight: "25px",
      iconWidth: "25px",
      iconStroke: false,
      iconFill: false,
    },
    {
      title: "Dropbox",
      subtitle: "Build custom automation and intefrations with app",
      icon: "dropbox",
      route: "/home",
      selected: true,
      iconHeight: "25px",
      iconWidth: "25px",
      iconStroke: false,
      iconFill: false,
    },
    {
      title: "Jira",
      subtitle: "Build custom automation and intefrations with app",
      icon: "jira",
      route: "/home",
      selected: true,
      iconHeight: "25px",
      iconWidth: "25px",
      iconStroke: false,
      iconFill: false,
    },
    {
      title: "Notion",
      subtitle: "Build custom automation and intefrations with app",
      icon: "notion_colored",
      route: "/home",
      selected: true,
      iconHeight: "25px",
      iconWidth: "25px",
      iconStroke: true,
      iconFill: false,
    },
    {
      title: "GitHub",
      subtitle: "Build custom automation and intefrations with app",
      icon: "github_colored",
      route: "/home",
      selected: true,
      iconHeight: "25px",
      iconWidth: "25px",
      iconStroke: true,
      iconFill: false,
    },
    {
      title: "Slack",
      subtitle: "Build custom automation and intefrations with app",
      icon: "slack_colored",
      route: "/home",
      selected: true,
      iconHeight: "25px",
      iconWidth: "25px",
      iconStroke: false,
      iconFill: false,
    },
    {
      title: "Linear",
      subtitle: "Build custom automation and intefrations with app",
      icon: "linear",
      route: "/home",
      selected: true,
      iconHeight: "25px",
      iconWidth: "25px",
      iconStroke: false,
      iconFill: false,
    },
  ]}
/>`,
    name: "Integration",
  },
  {
    invoice: `<RdsCompInvoice />`,
    name: "Invoice",
  },
  {
    linkedAccount: `<RdsCompLinkedAccount/>`,
    name: "Linked Account",
  },
  {
    login: `<RdsCompLogin onLogin={() => {}} onForgotPassword={() => {}} />`,
    name: "Login",
  },
  {
    loginAttempt: `<RdsCompLoginAttempts
    selectvalue={[
      { value: "All", displayText: "All" },
      { value: "Success", displayText: "Success" },
      {
        value: "InvalidUserNameOrEmailAddress",
        displayText: "Invalid Username or email Address",
      },
      { value: "InvalidPassword", displayText: "Invalid Password" },
      { value: "UserIsNotActive", displayText: "User is Not Active" },
      { value: "InvalidTenancyName", displayText: "Invalid Tenancy name" },
      { value: "TenantIsNotActive", displayText: "Tenant Is Not Active" },
      {
        value: "UserEmailIsNotConfirmed",
        displayText: "User Email Is Not Confirmed",
      },
      {
        value: "UnknownExternalLogin",
        displayText: "Unknown External Login",
      },
      { value: "LockedOut", displayText: "Locked Out" },
      {
        value: "UserPhoneNumberIsNotConfirmed",
        displayText: "User PhoneNumber IsNot Confirmed",
      },
    ]}
    tableHeaders={[
      {
        displayName: "IP Address",
        key: "ipaddress",
        datatype: "text",
        sortable: true,
      },
      {
        displayName: "Clients",
        key: "icon",
        datatype: "iconAvatarTitle",
        //   sortable: true,
      },
      {
        displayName: "Name",
        key: "name",
        datatype: "avatarTitleInfo",
        sortable: true,
      },
      {
        displayName: "Date&Time",
        key: "time",
        datatype: "number",
        sortable: true,
      },
      {
        displayName: "Result",
        key: "result",
        datatype: "text",
        sortable: true,
      },
    ]}
    tableData={[
      {
        id: 1,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 60,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("12/03/2022").toISOString(),
        result: "InvalidPassword",
      },
      {
        id: 2,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 120,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("12/04/2022").toISOString(),
        result: "UserIsNotActive",
      },
      {
        id: 3,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 250,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("12/05/2022").toISOString(),
        result: "InvalidPassword",
      },
      {
        id: 4,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 60,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("12/06/2022").toISOString(),
        result: "Success",
      },
      {
        id: 5,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 100,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("12/07/2022").toISOString(),
        result: "UserIsNotActive",
      },
      {
        id: 6,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 60,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("12/08/2022").toISOString(),
        result: "Success",
      },
      {
        id: 7,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 100,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("11/03/2022").toISOString(),
        result: "Success",
      },
      {
        id: 8,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 100,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("11/04/2022").toISOString(),
        result: "UserIsNotActive",
      },
      {
        id: 9,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 100,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("11/05/2022").toISOString(),
        result: "Success",
      },
      {
        id: 10,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 100,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("12/02/2022").toISOString(),
        result: "Success",
      },
      {
        id: 11,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 100,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("12/01/2022").toISOString(),
        result: "Success",
      },
      {
        id: 12,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 100,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("11/09/2022").toISOString(),
        result: "Success",
      },
      {
        id: 13,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 100,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("12/03/2022").toISOString(),
        result: "Success",
      },
      {
        id: 14,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 100,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("12/03/2022").toISOString(),
        result: "Success",
      },
      {
        id: 15,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 100,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("12/03/2022").toISOString(),
        result: "UserEmailIsNotConfirmed",
      },
      {
        id: 16,
        name: {
          avatar:
            "https://design.firefox.com/product-identity/firefox/firefox/firefox-logo.png",
          title: "Firefox",
          info: "Window NT 10",
        },
        ipaddress: 100,
        icon: {
          iconName: "Computer",
          iconFill: true,
          iconStroke: true,
          iconColor: "dark",
          iconWidth: "20px",
          withavatar: false,
          iconHeight: "20px",
        },
        time: new Date("12/03/2022").toISOString(),
        result: "UserEmailIsNotConfirmed",
      },
    ]}
    onActionSelection={() => {}}
  />`,
    name: "Login Attempt",
  },
  {
    editProfile: `<RdsCompProfileEdit />`,
    name: "Edit Profile",
  },
  {
    mySetting: `<RdsCompMySettings />`,
    name: "My Setting",
  },
  {
    newClaimType: `<RdsCompNewClaimType onSubmit ={()=>{}}/>`,
    name: "New Claim Type",
  },
  {
    newLanguage: `<RdsCompNewLanguage
    onSaveHandler={() => {}}
    placeholder="Select Country"
    languageItems={[
      { option: "Invariant Language ()" },
      { option: "Afar (aa)" },
      { option: "Afar (Djibouti) (aa-DJ)" },
      { option: "Afar (Eritrea) (aa-ER)" },
      { option: "Afar (Ethiopia) (aa-ET)" },
      { option: "Afrikaans (af)" },
      { option: "Afrikaans (Namibia) (af-NA)" },
      { option: "Afrikaans (South Africa) (af-ZA)" },
      { option: "Aghem (agq)" },
      { option: "Aghem (Cameroon) (agq-CM)" },
      { option: "Akan (ak)" },
    ]}
    languageNames={[
      { option: "Invariant Language ()" },
      { option: "Afar (aa)" },
      { option: "Afar (Djibouti) (aa-DJ)" },
      { option: "Afar (Eritrea) (aa-ER)" },
      { option: "Afar (Ethiopia) (aa-ET)" },
      { option: "Afrikaans (af)" },
      { option: "Afrikaans (Namibia) (af-NA)" },
      { option: "Afrikaans (South Africa) (af-ZA)" },
      { option: "Aghem (agq)" },
      { option: "Aghem (Cameroon) (agq-CM)" },
      { option: "Akan (ak)" },
    ]}
    onClick={undefined}
    check={false}
    edit={false}
  ></RdsCompNewLanguage>`,
    name: "NewLanguage",
  },
  {
    newProperties: `<RdsCompPropertiesNew />`,
    name: "New Properties",
  },
  {
    newRole: ` <RdsCompNewRole
    roleData={{
      displayName: "Role Name",
      isDefault: false,
    }}
  />`,
    name: "New Role",
  },
];
export default code_snippet;
