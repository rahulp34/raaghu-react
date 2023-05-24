import Children from "react";
const MainMenu = [
  {
    "key": "0",
    "label": "Dashboard",
    "icon": "home",
    "path": "/dashboard",
    "subTitle": "Statistics and reports",
  },
  {
    "key": "2",
    "label": "Saas",
    "icon": "saas",
    "children": [
      {
        "key": "2-0",
        "label": "Tenants",
        "icon": "bullet",
        "path": "/tenant",
        "subTitle": "Manage your tenants",
      },
      {
        "key": "2-1",
        "label": "Editions",
        "icon": "bullet",
        "path": "/edition",
        "subTitle": "Manage editions and features of the application",
      },
    ],
  },
  {
    "key": "3",
    "label": "Administration",
    "icon": "administration",
    "children": [
      {
        "key": "3-0",
        "label": "IdentityManagement",
        "icon": "bullet",
        "children": [
          {
            "key": "3-0-0",
            "label": "Organizationunits",
            "icon": "bullet",
            "path": "/organization-unit",
            "subTitle": "Use organization units to organize users and entities",
          },
          {
            "key": "3-0-1",
            "label": "Roles",
            "icon": "bullet",
            "path": "/role",
            "subTitle": "Use roles to group permissions",
          },
          {
            "key": "3-0-2",
            "label": "Users",
            "icon": "bullet",
            "path": "/users",
            "subTitle": "Manage users and permissions",
          },
          {
            "key": "3-0-3",
            "label": "Claim Types",
            "icon": "bullet",
            "path": "/claim-types",
            "subTitle": "Manage users and permissions",
          },
          {
            "key": "3-0-4",
            "label": "Security-logs",
            "icon": "bullet",
            "path": "/security-logs",
            "subTitle": "Manage users and permissions",
          },
        ],
      },
      {
        "key": "3-1",
        "label": "OpenIddict",
        "icon": "bullet",
        "children": [
          {
            "key": "3-1-0",
            "label": "Application",
            "icon": "bullet",
            "path": "/applications",
            "subTitle": "Use organization units to organize users and entities",
          },
          {
            "key": "3-1-1",
            "label": "Scopes",
            "icon": "bullet",
            "path": "/api-scope",
            "subTitle": "Use organization units to organize users and entities",
          },
        ],
      },
      {
        "key": "3-2",
        "label": "LanguageManagement",
        "icon": "bullet",
        "children": [
          {
            "key": "3-2-0",
            "label": "Language",
            "icon": "bullet",
            "path": "/language",
            "subTitle": "Manage user interface languages",
          },
          {
            "key": "3-2-1",
            "label": "LanguageTexts",
            "icon": "bullet",
            "path": "/language-text",
            "subTitle": "Manage user interface languages",
          },
        ],
      },
      {
        "key": "3-3",
        "label": "TextTemplates",
        "icon": "bullet",
        "path": "/text-template",
        "subTitle": "Manage user interface languages",
      },
      {
        "key": "3-4",
        "label": "AuditLogs",
        "icon": "bullet",
        "path": "/audit-logs",
        "subTitle": "",
      },
      {
        "key": "3-5",
        "label": "Settings",
        "icon": "bullet",
        "path": "/settings",
        "subTitle": "Show and change application settings",
      },
      {
        "key": "3-6",
        "label": "Blogging",
        "icon": "bullet",
        "children": [
          {
            "key": "3-6-0",
            "label": "Blogging",
            "icon": "bullet",
            "path": "/blogger",
            "subTitle": "Blogs, Posts, Articles",
          },
        ],
      },
    ],
  },
  {
    "key": "4",
    "label": "File Management",
    "icon": "file_management",
    "path": "/fileManagement",
    "subTitle": "File Management",
  },
  {
    "key": "5",
    "label": "Forms",
    "icon": "forms",
    "path": "/forms",
    "subTitle": "Forms",
  },
  {
    "key": "6",
    "label": "Payment Management",
    "icon": "payment",
    "children": [
      {
        "key": "6-0-0",
        "label": "Plans",
        "icon": "bullet",
        "path": "/paymentPlans",
        "subTitle": "Payment Plans",
      },
      {
        "key": "6-0-1",
        "label": "Payment Requests",
        "icon": "bullet",
        "path": "/paymentRequests",
        "subTitle": "Payment Requests",
      }
    ]
  },
  {
    "key": "7",
    "label": "Cms",
    "icon": "cms",
    "children": [
      {
        "key": "7-0-0",
        "label": "Blogs",
        "icon": "bullet",
        "path": "/blogs",
        "subTitle": "Manage your blogs",
      },
      {
        "key": "7-0-1",
        "label": "Polls",
        "icon": "bullet",
        "path": "/polls",
        "subTitle": "Blogs, Posts, Articles",
      },
      {
        "key": "7-0-2",
        "label": "Url Forwarding",
        "icon": "bullet",
        "path": "/url-forwarding",
        "subTitle": "Blogs, Posts, Articles",
      },
      {
        "key": "7-0-3",
        "label": "Comments",
        "icon": "bullet",
        "path": "/comments",
        "subTitle": "Comments",
      },
      {
        "key": "7-0-4",
        "label": "Tags",
        "icon": "bullet",
        "path": "/tags",
        "subTitle": "tags",
      },
      {
        "key": "7-0-5",
        "label": "Menus",
        "icon": "bullet",
        "path": "/menus",
        "subTitle": "menus"
      },
      {
        "key": "7-0-6",
        "label": "BlogPosts",
        "icon": "bullet",
        "path": "/blog-post",
        "subTitle": "subtitle here"
      },
      {
        "kay": "7-0-7",
        "label": "Global Resources",
        "icon": "bullet",
        "path": "/globalResources",
        "subTitle": "Global Resources",
      },
      {
        "key": "7-0-8",
        "label": "News letters",
        "icon": "bullet",
        "path": "/newsletters",
        "subTitle": "Newsletters"
      },
      {
        "key": "7-0-9",
        "label": "Pages",
        "icon": "bullet",
        "path": "/pages",
        "subTitle": "subtitle here"
      }
    ]
  }
];

export default MainMenu;
