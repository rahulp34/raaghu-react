import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";

import { RdsCompDatatable, RdsCompUserBasics } from "../../../rds-components";
import { RdsBadge, RdsButton, RdsNavtabs, RdsOffcanvas } from "../../../rds-elements";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../libs/state-management/hooks";

import { createUser, fetchEditUser, fetchOrganizationUnits, fetchRoles, fetchUsers } from "../../../../libs/state-management/user/user-slice";

const Users = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.persistedReducer.user);
  const [userData, setUserData] = useState<any>({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    twoFactorEnabled: false,
    userName: "",
    password:""
  })
  
  const [tableData, setTableData] = useState([
    {
      id: 1,
      userName: "tet04",
      name: "test04",
      roles: "Admin, HR",
      emaiAddress: "test04@yopmail.com",
      emailConfirm: { badgeColorVariant: "primary", content: "Yes" },
      status: { badgeColorVariant: "success", content: "Active" },
      creationTime: "01/04/2023, 09:20:51 AM",
    },
  ]);

  const permissionData = [
    {
      name: "FeatureManagement",
      displayName: "Feature management",
      permissions: [
        {
          name: "FeatureManagement.ManageHostFeatures",
          displayName: "Manage Host features",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
      ],
    },
    {
      name: "AbpIdentity",
      displayName: "Identity management",
      permissions: [
        {
          name: "AbpIdentity.Roles",
          displayName: "Role management",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.Roles.Create",
          displayName: "Create",
          parentName: "AbpIdentity.Roles",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.Roles.Update",
          displayName: "Edit",
          parentName: "AbpIdentity.Roles",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.Roles.Delete",
          displayName: "Delete",
          parentName: "AbpIdentity.Roles",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.Roles.ManagePermissions",
          displayName: "Change permissions",
          parentName: "AbpIdentity.Roles",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.Users",
          displayName: "User management",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.Users.Create",
          displayName: "Create",
          parentName: "AbpIdentity.Users",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.Users.Update",
          displayName: "Edit",
          parentName: "AbpIdentity.Users",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.Users.Delete",
          displayName: "Delete",
          parentName: "AbpIdentity.Users",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.Users.ManagePermissions",
          displayName: "Change permissions",
          parentName: "AbpIdentity.Users",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.Users.Impersonation",
          displayName: "Impersonation",
          parentName: "AbpIdentity.Users",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.Users.Import",
          displayName: "Permission:Import",
          parentName: "AbpIdentity.Users",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.OrganizationUnits",
          displayName: "Organization Unit Management",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.OrganizationUnits.ManageOU",
          displayName: "Managing organization tree",
          parentName: "AbpIdentity.OrganizationUnits",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.OrganizationUnits.ManageRoles",
          displayName: "Managing roles",
          parentName: "AbpIdentity.OrganizationUnits",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.OrganizationUnits.ManageMembers",
          displayName: "Managing users",
          parentName: "AbpIdentity.OrganizationUnits",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.ClaimTypes",
          displayName: "Claim management",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.ClaimTypes.Create",
          displayName: "Create",
          parentName: "AbpIdentity.ClaimTypes",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.ClaimTypes.Update",
          displayName: "Edit",
          parentName: "AbpIdentity.ClaimTypes",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.ClaimTypes.Delete",
          displayName: "Delete",
          parentName: "AbpIdentity.ClaimTypes",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.SettingManagement",
          displayName: "Setting management",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AbpIdentity.SecurityLogs",
          displayName: "Security logs",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
      ],
    },
    {
      name: "SettingManagement",
      displayName: "Setting Management",
      permissions: [
        {
          name: "SettingManagement.Emailing",
          displayName: "Emailing",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
      ],
    },
    {
      name: "Saas",
      displayName: "Saas",
      permissions: [
        {
          name: "Saas.Tenants",
          displayName: "Tenant management",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "Saas.Tenants.Create",
          displayName: "Create",
          parentName: "Saas.Tenants",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "Saas.Tenants.Update",
          displayName: "Edit",
          parentName: "Saas.Tenants",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "Saas.Tenants.Delete",
          displayName: "Delete",
          parentName: "Saas.Tenants",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "Saas.Tenants.ManageFeatures",
          displayName: "Manage features",
          parentName: "Saas.Tenants",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "Saas.Tenants.ManageConnectionStrings",
          displayName: "Manage connection strings",
          parentName: "Saas.Tenants",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "Saas.Tenants.Impersonation",
          displayName: "Impersonation",
          parentName: "Saas.Tenants",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "Saas.Editions",
          displayName: "Edition management",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "Saas.Editions.Create",
          displayName: "Create",
          parentName: "Saas.Editions",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "Saas.Editions.Update",
          displayName: "Edit",
          parentName: "Saas.Editions",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "Saas.Editions.Delete",
          displayName: "Delete",
          parentName: "Saas.Editions",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "Saas.Editions.ManageFeatures",
          displayName: "Manage features",
          parentName: "Saas.Editions",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
      ],
    },
    {
      name: "AuditLogging",
      displayName: "Audit Logging",
      permissions: [
        {
          name: "AuditLogging.AuditLogs",
          displayName: "Audit Logs",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
      ],
    },
    {
      name: "IdentityServer",
      displayName: "Identity Server",
      permissions: [
        {
          name: "IdentityServer.ApiScope",
          displayName: "Api Scopes",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.ApiScope.Update",
          displayName: "Edit",
          parentName: "IdentityServer.ApiScope",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.ApiScope.Delete",
          displayName: "Delete",
          parentName: "IdentityServer.ApiScope",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.ApiScope.Create",
          displayName: "Create",
          parentName: "IdentityServer.ApiScope",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.ApiScopes.ApiScope",
          displayName: "View change history",
          parentName: "IdentityServer.ApiScope",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.IdentityResource",
          displayName: "Identity Resources",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.IdentityResource.Update",
          displayName: "Edit",
          parentName: "IdentityServer.IdentityResource",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.IdentityResource.Delete",
          displayName: "Delete",
          parentName: "IdentityServer.IdentityResource",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.IdentityResource.Create",
          displayName: "Create",
          parentName: "IdentityServer.IdentityResource",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.ApiResource",
          displayName: "Api Resources",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.ApiResource.Update",
          displayName: "Edit",
          parentName: "IdentityServer.ApiResource",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.ApiResource.Delete",
          displayName: "Delete",
          parentName: "IdentityServer.ApiResource",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.ApiResource.Create",
          displayName: "Create",
          parentName: "IdentityServer.ApiResource",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.Client",
          displayName: "Clients",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.Client.Update",
          displayName: "Edit",
          parentName: "IdentityServer.Client",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.Client.Delete",
          displayName: "Delete",
          parentName: "IdentityServer.Client",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.Client.Create",
          displayName: "Create",
          parentName: "IdentityServer.Client",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "IdentityServer.Client.ManagePermissions",
          displayName: "Manage Permissions",
          parentName: "IdentityServer.Client",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
      ],
    },
    {
      name: "AbpAccount",
      displayName: "Account",
      permissions: [
        {
          name: "AbpAccount.SettingManagement",
          displayName: "Setting management",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
      ],
    },
    {
      name: "LanguageManagement",
      displayName: "Language Management",
      permissions: [
        {
          name: "LanguageManagement.LanguageTexts",
          displayName: "Language Texts",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "LanguageManagement.LanguageTexts.Edit",
          displayName: "Edit Language Texts",
          parentName: "LanguageManagement.LanguageTexts",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "LanguageManagement.Languages",
          displayName: "Languages",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "LanguageManagement.Languages.Create",
          displayName: "Create Language",
          parentName: "LanguageManagement.Languages",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "LanguageManagement.Languages.Edit",
          displayName: "Edit Language",
          parentName: "LanguageManagement.Languages",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "LanguageManagement.Languages.ChangeDefault",
          displayName: "Change Default Language",
          parentName: "LanguageManagement.Languages",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "LanguageManagement.Languages.Delete",
          displayName: "Delete Language",
          parentName: "LanguageManagement.Languages",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
      ],
    },
    {
      name: "LeptonThemeManagement",
      displayName: "Lepton Theme management",
      permissions: [
        {
          name: "LeptonThemeManagement.Settings",
          displayName: "Lepton Theme settings",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
      ],
    },
    {
      name: "TextTemplateManagement",
      displayName: "Text Template Management",
      permissions: [
        {
          name: "TextTemplateManagement.TextTemplates",
          displayName: "Text Templates",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
        {
          name: "TextTemplateManagement.TextTemplates.EditContents",
          displayName: "Edit Contents",
          parentName: "TextTemplateManagement.TextTemplates",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
      ],
    },
    {
      name: "BookStore",
      displayName: "BookStore",
      permissions: [
        {
          name: "BookStore.Dashboard.Host",
          displayName: "Dashboard",
          parentName: null,
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }],
        },
      ],
    },
  ];
  const tableHeaders = [
    {
      displayName: "User Name",
      key: "userName",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Name",
      key: "name",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Roles",
      key: "roles",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Email Address",
      key: "emaiAddress",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
    {
      displayName: "Email Confirm",
      key: "emailConfirm",
      datatype: "badge",
      dataLength: 5,
      required: true,
      sortable: true,
    },
    {
      displayName: "Status",
      key: "status",
      datatype: "badge",
      dataLength: 20,
      required: true,
      sortable: true,
    },
    {
      displayName: "Creation Time",
      key: "creationTime",
      datatype: "text",
      dataLength: 30,
      required: true,
      sortable: true,
    },
  ];

  const actions = [
    { id: "delete", displayName: "Delete" },
    { id: "edit", displayName: "Edit" },
  ];

  const editionList = [
    { option: "Not assigned" },
    { option: "Standard" },
    { option: "apple" },
    { option: "Apple1" },
  ];

  const navtabsItems = [
    { label: "User Information", tablink: "#nav-home", id: 0 },
    { label: "Roles", tablink: "#nav-profile", id: 1 },
    { label: "Organization Units", tablink: "#nav-organization-unit", id: 2 },
  ];

  const offCanvasHandler = () => {};
  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [organizationUnit, setOrganizationUnit] = useState([
    { option: "a", value: "aa" },
    { option: "b", value: "bb" },
    { option: "c", value: "cc" },
    { option: "d", value: "dd" },
  ]);
  const [roles, setRoles] = useState([
    { option: "t", value: "tt" },
    { option: "r", value: "rr" },
    { option: "w", value: "ww" },
    { option: "q", value: "qq" },
  ]);
  const fabMenuListItems: any[] = [
    {
      value: "New User",
      some: "value",
      key: "new",
      icon: "plus",
      iconWidth: "20px",
      iconHeight: "20px",
    },
  ];
  const canvasTitle = "Create New User";
  function onSelectMenu(event: any) {
    console.log(event);
    // if (event.key === 'new') {
    //   event = new PointerEvent("click")
    //   this.newUser(event);
    // }
  }

  function onActionSelection(event: any) {
    console.log(event);
  }

  function getSelectedPermissions(data: any) {
    console.log("Granted Permissions", data);
  }
  function getSelectedNavTab(event: any) {
    console.log(event);
  }

  // const exportToExcel = () => {
  //   // create an empty excel workbook
  //   const wb = XLSX.utils.book_new();

  //   // create the headers and data arrays
  //   const headers = tableHeaders.map(header => header.displayName);
  //   const data = tableData.map(row => {
  //     let dataRow = {}
  //     tableHeaders.forEach(header => {
  //       dataRow[header.displayName] = row[header.key]
  //     })
  //     return dataRow
  //   });

  //   // create a worksheet and add the headers and data
  //   const ws = XLSX.utils.json_to_sheet([headers, ...data]);

  //   // add the worksheet to the workbook
  //   XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  //   // write the workbook to a file
  //   XLSX.writeFile(wb, "data.xlsx")
  // }

  const exportToExcel = () => {
    // create an empty excel workbook
    const wb = XLSX.utils.book_new();

    // create the headers and data arrays
    const headers = tableHeaders.map((header) => header.displayName);
    type DataRow = { [key: string]: any };
    const data = tableData.map((row: any) => {
      let dataRow: DataRow = {};
      tableHeaders.forEach((header) => {
        dataRow[header.displayName] = row[header.key];
      });
      return dataRow;
    });

    // create a worksheet and add the headers and data
    const ws = XLSX.utils.json_to_sheet([headers, ...data]);

    // add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // write the workbook to a file
    XLSX.writeFile(wb, "data.xlsx");
  };

  function newUser(e: any) {
    console.log(e);
  }

  function createNewUser(data:any){
    debugger
    dispatch(createUser(data) as any)
  }
  useEffect(() => {
    dispatch(fetchUsers() as any);
    dispatch(fetchOrganizationUnits() as any)
    dispatch(fetchRoles() as any)
    dispatch(fetchEditUser("d58fa786-41a6-b110-d3e4-3a0922833270") as any)

  }, [dispatch]);



  useEffect(() => {
    if (data.users) {
      let tempTableData: any[] = [];
      data.users.items.map((item: any) => {
        const data = {
          id: item.id,
          userName: item.userName,
          name: item.name,
          roles: item.roleNames,
          emaiAddress: item.email,
          emailConfirm: { badgeColorVariant: "primary", content: "Yes" },
          status: { badgeColorVariant: "success", content: "Active" },
          creationTime: "01/04/2023, 09:20:51 AM",
          // roleNames: item.roleNames,
          // emaiAddress: "test04@yopmail.com",
          // emailConfirmed:(<> { 
          //   item.emailConfirmed ? (
          //       <RdsBadge
          //         label={"Active"}
          //         size={"medium"}
          //         badgeType={"rectangle"}
          //         colorVariant={"success"}
          //       ></RdsBadge>
          //     ) : (
          //       <RdsBadge
          //         label={"Inactive"}
          //         size={"medium"}
          //         badgeType={"rectangle"}
          //         colorVariant={"danger"}
          //       ></RdsBadge>
          //     )
          //     } </>)
          // status: { badgeColorVariant: "success", content: "Active" },
          // creationTime: "01/04/2023, 09:20:51 AM",
        };
        tempTableData.push(data);
      });
      setTableData(tempTableData);
    }

    if(data.organizationUnit){
      debugger
      console.log(data.organizationUnit)
      let tempOrgData : any[] = [];
      data.organizationUnit.items.map((item:any) =>{
        const data = {
          option:item.displayName,
          value:item.id
        }
        tempOrgData.push(data);
      })
      setOrganizationUnit(tempOrgData);
    }

    if(data.roles){
      debugger
      console.log(data.roles)
      let tempRoleData : any[] = [];
      data.roles.items.map((item:any) =>{
        const data = {
          option:item.name,
          value:item.id
        }
        tempRoleData.push(data);
      })
      setRoles(tempRoleData);
    }
  }, [data]);

  return (
    <>
      <div className="row">
        <div className="col-md-12 text-end pb-3 desktop-btn">
          <RdsButton
            label="New User"
            type="button"
            size="medium"
            colorVariant="primary"
            showLoadingSpinner={false}
            databstoggle="offcanvas"
            databstarget="#userOffcanvas"
            icon={"plus"}
            iconWidth={"12px"}
            iconHeight={"12px"}
          ></RdsButton>
        </div>
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
          <RdsCompDatatable
            tableData={tableData}
            tableHeaders={tableHeaders}
            actions={actions}
            noDataTitle={"Currently you do not have user"}
            classes="table__userTable"
            pagination={true}
            onActionSelection={(e) => {
              onActionSelection(e);
            }}
            recordsPerPageSelectListOption={true}
          ></RdsCompDatatable>
        </div>
      </div>
      {/* <div className="mobile-btn position-absolute bottom-0 end-0 my-5 me-5">
        <RdsFabMenu
          listItems={fabMenuListItems}
          menuIcon={"plus"}
          colorVariant={"primary"}
          menuiconWidth={"12px"}
          menuiconHeight={"12px"}
          onClick={(e: any) => {
            onSelectMenu(e);
          }}
        ></RdsFabMenu>
      </div> */}
      <RdsOffcanvas
        backDrop={false}
        scrolling={true}
        preventEscapeKey={false}
        canvasTitle={canvasTitle}
        offId="userOffcanvas"
        offcanvaswidth={650}
        placement={"end"}
        onClose={(e) => {
          close();
        }}
      >
        <RdsNavtabs
          navtabsItems={navtabsItems}
          type={"tabs"}
          activeNavTabId={activeNavTabId}
          activeNavtabOrder={(activeNavTabId) => {
            setActiveNavTabId(activeNavTabId);
          }}
          justified={false}
        >
          {activeNavTabId == 0 && (
            <RdsCompUserBasics
              organizationUnit={organizationUnit}
              roles={roles}
              userData={userData}
              createUser={(e:any)=>{createNewUser(e)}}
              // userInfo="getUserData($event)"
              // userData="userinfo"
              // roleListItem={roleListItem}
              // orgUnitListItem={orgUnitListItem}
            />
          )}
          {/* <div naveContent class="row tab-content navsm-p-0" id="nav-tabContent">
      <div
        class="tab-pane fade px-3 mt-3"
        [ngClass]="{ 'show active': activePage === 0 }"
        id="basics"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <rds-comp-user-basic-profile-right
          (userInfo)="getUserData($event)"
          [userData]="userinfo"
          [roleListItem]="roleListItem"
          [orgUnitListItem]="orgUnitListItem"
          (onCancel)="close()"
        >
        </rds-comp-user-basic-profile-right>
      </div>
      <div
        class="tab-pane fade px-3"
        [ngClass]="{ 'show active': activePage === 1 }"
        id="permissions"
        role="permissionspanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="tab-content">
          <div class="row">
            <rds-comp-permission-tree
              [treeData]="permissionTreeData"
              [isEdit]="isEdit"
              (getAllselectedPermissions)="getAllselectedPermissions($event)"
            >
            </rds-comp-permission-tree>
          </div>
          <div class="footer-buttons my-2">
            <rds-button
              [label]="translate.instant('Cancel')"
              (click)="close()"
              [isOutline]="true"
              [colorVariant]="'primary'"
              [size]="'small'"
              data-bs-dismiss="offcanvas"
            >
            </rds-button>
            <rds-button
              [label]="translate.instant('Save')"
              [isDisabled]="!user || !user.userInfo"
              [size]="'small'"
              class="ms-2"
              [colorVariant]="'primary'"
              data-bs-dismiss="offcanvas"
              (click)="save()"
            >
            </rds-button>
          </div>
        </div>
      </div>
      <div
        class="tab-pane fade px-3 mt-3"
        [ngClass]="{ 'show active': activePage === 2 }"
        id="organizationUnits"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="tab-content">
          <rds-comp-claim-type-role
            [claimValueData]="claimValueData"
            [claimDisplayArray]="claimDisplayArray"
            [claimsActions]="claims_actions"
            (addClaim)="addClaim($event)"
            (onCancel)="close()"
            (deleteClaim)="deleteClaim($event)"
          ></rds-comp-claim-type-role>
        </div>
        <div class="footer-buttons my-2">
          <rds-button
            [label]="translate.instant('Cancel')"
            (click)="close()"
            [isOutline]="true"
            [colorVariant]="'primary'"
            [size]="'small'"
            data-bs-dismiss="offcanvas"
          >
          </rds-button>
          <rds-button
            [label]="translate.instant('Save')"
            class="ms-2"
            [size]="'small'"
            [colorVariant]="'primary'"
            (click)="save()"
            data-bs-dismiss="offcanvas"
          >
          </rds-button>
        </div>
      </div>
      <div
        class="tab-pane fade"
        [ngClass]="{ 'show active': activePage === 3 }"
        id="permissions"
        role="tabpanel"
        *ngIf="selectedId"
        aria-labelledby="nav-home-tab"
      >
        <div class="tab-content">
          <!-- <app-rds-comp-permission-tree [treeData]="orgTreeData" [selectedItems]="selectedOrganizations"
            (getAllSelectedNodes)="getSelectedorganizationunits($event)"></app-rds-comp-permission-tree> -->
        </div>
        <div class="footer-buttons my-2">
          <rds-button
            [label]="translate.instant('Cancel')"
            (click)="close()"
            [isOutline]="true"
            [colorVariant]="'primary'"
            [size]="'small'"
            data-bs-dismiss="offcanvas"
          >
          </rds-button>
          <rds-button
            [label]="translate.instant('Save')"
            class="ms-2"
            [colorVariant]="'primary'"
            [size]="'small'"
            (click)="savePermission()"
            data-bs-dismiss="offcanvas"
          >
          </rds-button>
        </div>
      </div>
      <div
        class="tab-pane fade"
        [ngClass]="{ 'show active': activePage === 4 }"
        id="claim"
        role="tabpanel"
        *ngIf="selectedId"
        aria-labelledby="nav-home-tab"
      >
        <div class="tab-content"></div>
        <div class="footer-buttons my-2">
          <rds-button
            [label]="translate.instant('Cancel')"
            (click)="close()"
            [isOutline]="true"
            [colorVariant]="'primary'"
            [size]="'small'"
            data-bs-dismiss="offcanvas"
          >
          </rds-button>
          <rds-button
            [label]="translate.instant('Save')"
            class="ms-2"
            [colorVariant]="'primary'"
            [size]="'small'"
            (click)="savePermission()"
            data-bs-dismiss="offcanvas"
          >
          </rds-button>
        </div>
      </div>
    </div> */}
        </RdsNavtabs>
      </RdsOffcanvas>
    </>
  );
};

export default Users;
