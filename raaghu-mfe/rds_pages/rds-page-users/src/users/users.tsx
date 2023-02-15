import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  RdsCompDatatable,
  RdsCompPermissionTree,
  RdsCompTenantInformation,
  RdsCompTenantSettings,
  RdsCompUserBasics,
} from "../../../rds-components";
import {
  RdsButton,
  RdsCheckbox,
  RdsNavtabs,
  RdsOffcanvas,
  RdsInput
} from "../../../rds-elements";

const Users = () => {
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
          grantedProviders: [{ providerName: "R", providerKey: "admin" }]
        }
      ]
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
          grantedProviders: [{ providerName: "R", providerKey: "admin" }]
        },
        {
          name: "AbpIdentity.Roles.Create",
          displayName: "Create",
          parentName: "AbpIdentity.Roles",
          isGranted: false,
          allowedProviders: [],
          grantedProviders: [{ providerName: "R", providerKey: "admin" }]
        },
        { name: "AbpIdentity.Roles.Update", displayName: "Edit", parentName: "AbpIdentity.Roles", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.Roles.Delete", displayName: "Delete", parentName: "AbpIdentity.Roles", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.Roles.ManagePermissions", displayName: "Change permissions", parentName: "AbpIdentity.Roles", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.Users", displayName: "User management", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.Users.Create", displayName: "Create", parentName: "AbpIdentity.Users", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.Users.Update", displayName: "Edit", parentName: "AbpIdentity.Users", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.Users.Delete", displayName: "Delete", parentName: "AbpIdentity.Users", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.Users.ManagePermissions", displayName: "Change permissions", parentName: "AbpIdentity.Users", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.Users.Impersonation", displayName: "Impersonation", parentName: "AbpIdentity.Users", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.Users.Import", displayName: "Permission:Import", parentName: "AbpIdentity.Users", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.OrganizationUnits", displayName: "Organization Unit Management", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.OrganizationUnits.ManageOU", displayName: "Managing organization tree", parentName: "AbpIdentity.OrganizationUnits", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.OrganizationUnits.ManageRoles", displayName: "Managing roles", parentName: "AbpIdentity.OrganizationUnits", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.OrganizationUnits.ManageMembers", displayName: "Managing users", parentName: "AbpIdentity.OrganizationUnits", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.ClaimTypes", displayName: "Claim management", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.ClaimTypes.Create", displayName: "Create", parentName: "AbpIdentity.ClaimTypes", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.ClaimTypes.Update", displayName: "Edit", parentName: "AbpIdentity.ClaimTypes", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.ClaimTypes.Delete", displayName: "Delete", parentName: "AbpIdentity.ClaimTypes", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.SettingManagement", displayName: "Setting management", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AbpIdentity.SecurityLogs", displayName: "Security logs", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }]
    }, { name: "SettingManagement", displayName: "Setting Management", permissions: [{ name: "SettingManagement.Emailing", displayName: "Emailing", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }] }, { name: "Saas", displayName: "Saas", permissions: [{ name: "Saas.Tenants", displayName: "Tenant management", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "Saas.Tenants.Create", displayName: "Create", parentName: "Saas.Tenants", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "Saas.Tenants.Update", displayName: "Edit", parentName: "Saas.Tenants", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "Saas.Tenants.Delete", displayName: "Delete", parentName: "Saas.Tenants", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "Saas.Tenants.ManageFeatures", displayName: "Manage features", parentName: "Saas.Tenants", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "Saas.Tenants.ManageConnectionStrings", displayName: "Manage connection strings", parentName: "Saas.Tenants", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "Saas.Tenants.Impersonation", displayName: "Impersonation", parentName: "Saas.Tenants", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "Saas.Editions", displayName: "Edition management", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "Saas.Editions.Create", displayName: "Create", parentName: "Saas.Editions", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "Saas.Editions.Update", displayName: "Edit", parentName: "Saas.Editions", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "Saas.Editions.Delete", displayName: "Delete", parentName: "Saas.Editions", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "Saas.Editions.ManageFeatures", displayName: "Manage features", parentName: "Saas.Editions", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }] }, { name: "AuditLogging", displayName: "Audit Logging", permissions: [{ name: "AuditLogging.AuditLogs", displayName: "Audit Logs", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }] }, { name: "IdentityServer", displayName: "Identity Server", permissions: [{ name: "IdentityServer.ApiScope", displayName: "Api Scopes", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.ApiScope.Update", displayName: "Edit", parentName: "IdentityServer.ApiScope", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.ApiScope.Delete", displayName: "Delete", parentName: "IdentityServer.ApiScope", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.ApiScope.Create", displayName: "Create", parentName: "IdentityServer.ApiScope", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "AuditLogging.ViewChangeHistory:Volo.Abp.IdentityServer.ApiScopes.ApiScope", displayName: "View change history", parentName: "IdentityServer.ApiScope", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.IdentityResource", displayName: "Identity Resources", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.IdentityResource.Update", displayName: "Edit", parentName: "IdentityServer.IdentityResource", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.IdentityResource.Delete", displayName: "Delete", parentName: "IdentityServer.IdentityResource", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.IdentityResource.Create", displayName: "Create", parentName: "IdentityServer.IdentityResource", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.ApiResource", displayName: "Api Resources", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.ApiResource.Update", displayName: "Edit", parentName: "IdentityServer.ApiResource", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.ApiResource.Delete", displayName: "Delete", parentName: "IdentityServer.ApiResource", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.ApiResource.Create", displayName: "Create", parentName: "IdentityServer.ApiResource", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.Client", displayName: "Clients", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.Client.Update", displayName: "Edit", parentName: "IdentityServer.Client", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.Client.Delete", displayName: "Delete", parentName: "IdentityServer.Client", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.Client.Create", displayName: "Create", parentName: "IdentityServer.Client", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "IdentityServer.Client.ManagePermissions", displayName: "Manage Permissions", parentName: "IdentityServer.Client", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }] }, { name: "AbpAccount", displayName: "Account", permissions: [{ name: "AbpAccount.SettingManagement", displayName: "Setting management", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }] }, { name: "LanguageManagement", displayName: "Language Management", permissions: [{ name: "LanguageManagement.LanguageTexts", displayName: "Language Texts", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "LanguageManagement.LanguageTexts.Edit", displayName: "Edit Language Texts", parentName: "LanguageManagement.LanguageTexts", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "LanguageManagement.Languages", displayName: "Languages", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "LanguageManagement.Languages.Create", displayName: "Create Language", parentName: "LanguageManagement.Languages", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "LanguageManagement.Languages.Edit", displayName: "Edit Language", parentName: "LanguageManagement.Languages", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "LanguageManagement.Languages.ChangeDefault", displayName: "Change Default Language", parentName: "LanguageManagement.Languages", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "LanguageManagement.Languages.Delete", displayName: "Delete Language", parentName: "LanguageManagement.Languages", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }] }, { name: "LeptonThemeManagement", displayName: "Lepton Theme management", permissions: [{ name: "LeptonThemeManagement.Settings", displayName: "Lepton Theme settings", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }] }, { name: "TextTemplateManagement", displayName: "Text Template Management", permissions: [{ name: "TextTemplateManagement.TextTemplates", displayName: "Text Templates", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }, { name: "TextTemplateManagement.TextTemplates.EditContents", displayName: "Edit Contents", parentName: "TextTemplateManagement.TextTemplates", isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }] }, { name: "BookStore", displayName: "BookStore", permissions: [{ name: "BookStore.Dashboard.Host", displayName: "Dashboard", parentName: null, isGranted: false, allowedProviders: [], grantedProviders: [{ providerName: "R", providerKey: "admin" }] }] }
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

  const tableData = [
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
    {
      id: 2,
      userName: "neethu",
      name: "neethu",
      roles: "Admin, Engineer11, HR",
      emaiAddress: "neethu@gmail.com",
      emailConfirm: { badgeColorVariant: "danger", content: "No" },
      status: { badgeColorVariant: "primary", content: "Inactive" },
      creationTime: "12/21/2022, 08:35:26 AM",
    },
    {
      id: 3,
      userName: "nithya",
      name: "nithya1",
      roles: "Admin, HR, Manager, Role211",
      emaiAddress: "nithya.menon@gmaol.com",
      emailConfirm: "Yes",
      status: { badgeColorVariant: "success", content: "Active" },
      creationTime: "12/19/2022, 09:14:44 AM",
    },
    {
      id: 4,
      userName: "009",
      name: "test009",
      roles: "Admin, HR",
      emaiAddress: "009@yopmail.com",
      emailConfirm: "Yes",
      status: { badgeColorVariant: "success", content: "Active" },
      creationTime: "12/15/2022, 06:50:15 AM",
    },
    {
      id: 5,
      userName: "admin",
      name: "admin",
      roles: "Admin",
      emaiAddress: "admin@aspnetzero.com",
      emailConfirm: "Yes",
      status: { badgeColorVariant: "success", content: "Active" },
      creationTime: "12/13/2022, 11:48:03 AM",
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

  const offCanvasHandler = () => { };
  const [activeNavTabId, setActiveNavTabId] = useState(0);
  const [showTenantSettings, setShowTenantSettings] = useState(false);

  function getSelectedPermissions(data: any) {
    console.log('Granted Permissions', data);
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

  return (
    <div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-end mb-3">
          <RdsInput></RdsInput>
          <RdsButton
            type={"button"}
            size="small"
            label="FILTER BY PERMISSION"
            colorVariant="primary"
            isOutline={true}
            class="me-2"
          ></RdsButton>
          <RdsButton
            type={"button"}
            size="small"
            label="EXPORT TO EXCEL"
            onClick={exportToExcel}
            colorVariant="primary"
            isOutline={true}
            class="me-2"
          ></RdsButton>
          <RdsOffcanvas
            canvasTitle={"NEW USER"}
            onclick={offCanvasHandler}
            placement="end"
            offcanvaswidth={830}
            offcanvasbutton={
              <div className="d-flex justify-content-end">
                <RdsButton
                  type={"button"}
                  size="small"
                  label="NEW USER"
                  icon="plus"
                  iconColorVariant="light"
                  iconFill={false}
                  iconStroke={true}
                  iconHeight="15px"
                  iconWidth="15px"
                  colorVariant="primary"
                  class="me-2"
                ></RdsButton>
              </div>
            }
            backDrop={false}
            scrolling={false}
            preventEscapeKey={false}
            offId={"tenant"}
          >
            <RdsNavtabs
              navtabsItems={navtabsItems}
              type="tabs"
              isNextPressed={showTenantSettings}
              activeNavTabId={activeNavTabId}
              activeNavtabOrder={(activeNavTabId) => {
                setActiveNavTabId(activeNavTabId), setShowTenantSettings(false);
              }}
            />
            {activeNavTabId == 0 && showTenantSettings === false && (
              <RdsCompUserBasics></RdsCompUserBasics>
              // <RdsCompTenantInformation
              //   editionList={editionList}
              //   tenantInfo={(showTenantSettings) => {
              //     setShowTenantSettings(showTenantSettings),
              //       setActiveNavTabId(1);
              //   }}
              // />
            )}
            {(activeNavTabId == 1 || showTenantSettings == true) && (
              <div className="tab-content py-4 vh-100 d-flex flex-column justify-content-between">
                <div className="row ps-4">
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"Admin"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"Engineer11"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox label={"HR"} checked={false}></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"Manager"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"Role211"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"test0012"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"test09"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox label={"wef"} checked={false}></RdsCheckbox>
                    </div>
                  </div>
                  <div className="col-md-12 ng-started">
                    <div className="form-group mb-3">
                      <RdsCheckbox
                        label={"wefrwf"}
                        checked={false}
                      ></RdsCheckbox>
                    </div>
                  </div>
                </div>
                <div className="d-flex">
                  <RdsButton
                    label="CANCEL"
                    databsdismiss="offcanvas"
                    type={"button"}
                    size="small"
                    isOutline={true}
                    colorVariant="primary"
                    class="me-2"
                  ></RdsButton>
                  <RdsButton
                    label="SAVE"
                    type={"button"}
                    size="small"
                    isDisabled={true}
                    colorVariant="primary"
                    class="me-2"
                  ></RdsButton>
                </div>
              </div>
            )}
            {(activeNavTabId == 2 || showTenantSettings == true) &&
              <div className="p-4">
               <RdsCompPermissionTree permissions={permissionData} selectedPermissions={getSelectedPermissions} />
              </div>}
          </RdsOffcanvas>
        </div>
        <div className="col-md-12 mb-3">
          <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch">
            <RdsCompDatatable
              tableHeaders={tableHeaders}
              tableData={tableData}
              actions={actions}
              pagination={true}
              recordsPerPage={5}
              recordsPerPageSelectListOption={true}
              onActionSelection={function (
                clickEvent: any,
                tableDataRow: any,
                tableDataRowIndex: number,
                action: {
                  displayName: string;
                  id: string;
                  offId?: string | undefined;
                }
              ): void {
                throw new Error("Function not implemented.");
              }}
            ></RdsCompDatatable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
