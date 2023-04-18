import Children from "react";
const MainMenu = [
  {
    key: "0",
    label: "Dashboard",
    icon: "home",
    path: "/dashboard",
    subTitle: "Statistics and reports",
  },
  // {
  //   "key": "1",
  //   "label": "Icons",
  //   "icon": "icons",
  //   "path": "/icons",
  //   "subTitle": "icons",
  // },
  {
    key: "2",
    label: "Menu_Saas",
    icon: "pages",
    children: [
      {
        key: "2-0",
        label: "Tenants",
        icon: "tenant",
        path: "/tenant",
        subTitle: "Manage your tenants",
      },
      {
        key: "2-1",
        label: "Editions",
        icon: "editions",
        path: "/edition",
        subTitle: "Manage editions and features of the application",
      },
    ],
  },
  {
    key: "3",
    label: "Menu_Administration",
    icon: "pages",
    children: [
      {
        key: "3-0",
        label: "Menu_IdentityManagement",
        icon: "organization",
        children: [
          {
            key: "3-0-0",
            label: "Organization units",
            icon: "tenant",
            path: "/organization-unit",
            subTitle: "Use organization units to organize users and entities",
          },
          {
            key: "3-0-1",
            label: "Roles",
            icon: "roles",
            path: "/role",
            subTitle: "Use roles to group permissions",
          },
          {
            key: "3-0-2",
            label: "Users",
            icon: "users",
            path: "/users",
            subTitle: "Manage users and permissions",
          },
          {
            key: "3-0-3",
            label: "Claim Types",
            icon: "users",
            path: "/claim-types",
            subTitle: "Manage users and permissions",
          },
          {
            key: "3-0-4",
            label: "Security-logs",
            icon: "users",
            path: "/security-logs",
            subTitle: "Manage users and permissions",
          },
        ],
      },
      {
        key: "3-1",
        label: "Menu_OpenIddict",
        icon: "tenant",
        children: [
          {
            key: "3-1-0",
            label: "MySecurityLogs_Application",
            icon: "tenant",
            path: "/applications",
            subTitle: "Use organization units to organize users and entities",
          },
          {
            key: "3-1-1",
            label: "Scopes",
            icon: "tenant",
            path: "/api-scope",
            subTitle: "Use organization units to organize users and entities",
          },
        ],
      },
      {
        key: "3-2",
        label: "LanguageManagement",
        icon: "tenant",
        children: [
          {
            key: "3-2-0",
            label: "Language",
            icon: "languages",
            path: "/language",
            subTitle: "Manage user interface languages",
          },
          {
            key: "3-2-1",
            label: "Language-Text",
            icon: "languages",
            path: "/language-text",
            subTitle: "Manage user interface languages",
          },
        ],
      },
      {
        key: "3-3",
        label: "Menu_TextTemplates",
        icon: "languages",
        path: "/text-template",
        subTitle: "Manage user interface languages",
      },
      {
        key: "3-4",
        label: "Permission_AuditLogs",
        icon: "audit_logs",
        path: "/audit-logs",
        subTitle: "",
      },
      {
        key: "3-5",
        label: "Settings",
        icon: "setting",
        path: "/settings",
        subTitle: "Show and change application settings",
      },
      {
        key: "3-6",
        label: "Permission_Blogging",
        icon: "tenant",
        children: [
          {
            key: "3-6-0",
            label: "Permission_Blogging",
            icon: "blog",
            path: "/blogger",
            subTitle: "Blogs, Posts, Articles",
          },
        ],
      },
    ],
  },
  {
    key: "4",
    label: "Menu_FileManagement",
    icon: "icons",
    path: "/fileManagement",
    subTitle: "File Management",
  },
  {
    key: "5",
    label: "Permission_Forms",
    icon: "icons",
    path: "/forms",
    subTitle: "Forms",
  },

  {
    key: "6",
    label: "Menu_PaymentManagement",
    icon: "card_image",
    children: [
      {
        key: "6-0-0",
        label: "Menu_Plans",
        icon: "card_image",
        path: "/paymentPlans",
        subTitle: "Payment Plans",
      },
      {
        key: "6-0-1",
        label: "Menu_PaymentRequests",
        icon: "card_image",
        path: "/paymentRequests",
        subTitle: "Payment Requests",
      },
    ],
  },
  {
    key: "7",
    label: "Cms",
    icon: "pages",
    children: [
      {
        key: "7-0-0",
        label: "Blogs",
        icon: "tenant",
        path: "/blogs",
        subTitle: "Manage your blogs",
      },
      {
        key: "7-0-1",
        label: "Polls",
        icon: "icons",
        path: "/polls",
        subTitle: "Blogs, Posts, Articles",
      },
      {
        key: "7-0-2",
        label: "UrlForwarding",
        icon: "icons",
        path: "/url-forwarding",
        subTitle: "Blogs, Posts, Articles",
      },
      {
        key: "7-0-3",
        label: "Comments",
        icon: "question_chat",
        path: "/comments",
        subTitle: "Comments",
      },
      {
        key: "7-0-4",
        label: "Tags",
        icon: "tag",
        path: "/tags",
        subTitle: "tags",
      },
      {
        key: "7-0-5",
        label: "Menus",
        icon: "icons",
        path: "/menus",
        subTitle: "menus",
      },
      {
        key: "7-0-6",
        label: "BlogPosts",
        icon: "icons",
        path: "/blog-post",
        subTitle: "subtitle here",
      },
      {
        kay: "7-0-7",
        label: "Permission_GlobalResources",
        icon: "tag",
        path: "/globalResources",
        subTitle: "Global Resources",
      },

      {
        key: "7-0-8",
        label: "Newsletters",
        icon: "icons",
        path: "/newsletters",
        subTitle: "Newsletters",
      },
      {
        key: "7-0-9",
        label: "Pages",
        icon: "icons",
        path: "/pages",
        subTitle: "subtitle here",
      },
    ],
  },
  //   {
  //     "key": "8",
  //     "label": "Elements",
  //     "icon": "icons",
  //     "children": [
  //         {
  //             "key": "8-0-0",
  //             "label": "Accordion",
  //             "icon": "accordion",
  //             "path": "/elements/accordion",
  //             "subTitle": "Accordion",
  //         },
  //         {
  //             "key": "8-0-1",
  //             "label": "Alert",
  //             "icon": "alert",
  //             "path": "/elements/alert",
  //             "subTitle": "Alert",
  //         },
  //         {
  //             "key": "8-0-2",
  //             "label": "App Detail",
  //             "icon": "App Detail",
  //             "path": "/elements/appDetail",
  //             "subTitle": "App Detail",
  //         }
  //     ]
  // },
  // {
  //   "key": "9",
  //   "label": "Rds Components",
  //   "icon": "icons",
  //   "path": "/rds-components",
  //   "subTitle": "subtitle here"
  // }
];

export default MainMenu;
