import React from "react";

const DashboardCompo = React.lazy(() => import("Dashboard/Dashboard"));
const LoginCompo = React.lazy(() => import("Login/Login"));
const ForgotPasswordCompo = React.lazy(
  () => import("ForgotPassword/ForgotPassword")
);
const TenantCompo = React.lazy(() => import("Tenant/Tenant"));
const EditionCompo = React.lazy(() => import("Edition/Edition"));
const SettingsCompo = React.lazy(() => import("Settings/Settings"));
const UsersCompo = React.lazy(() => import("Users/Users"));
const AuditlogsCompo = React.lazy(() => import("AuditLogs/AuditLogs"));
const RolesCompo = React.lazy(() => import("Roles/Roles"));
const OrganizationUnitsCompo = React.lazy(
  () => import("OrganizationUnits/OrganizationUnits")
);
const LanguageCompo = React.lazy(() => import("Language/Language"));
const LanguageTextCompo = React.lazy(() => import("LanguageText/LanguageText"));
const DynamicPropertyCompo = React.lazy(
  () => import("DynamicProperties/DynamicProperties")
);
const IconListCompo = React.lazy(() => import("IconList/IconList"));
const ClaimTypesCompo = React.lazy(() => import("ClaimTypes/ClaimTypes"));
const ApplicationsCompo = React.lazy(() => import("Applications/Applications"));
const TextTemplateCompo = React.lazy(() => import("TextTemplate/TextTemplate"));
const ApiScopeCompo = React.lazy(() => import("ApiScope/ApiScope"));
const ScopeCompo = React.lazy(() => import("Scope/Scope"));
const IdentityResourcesCompo = React.lazy(
  () => import("IdentityResources/IdentityResources")
);
const SecurityLogsCompo = React.lazy(() => import("SecurityLogs/SecurityLogs"));
const ChatsCompo = React.lazy(() => import("Chats/Chats"));
const FileManagementCompo = React.lazy(
  () => import("FileManagement/FileManagement")
);
const FormsCompo = React.lazy(() => import("Forms/Forms"));

const FormsViewCompo = React.lazy(() => import("FormsView/FormsView"));
const FormsPreviewCompo = React.lazy(() => import("FormsPreview/FormsPreview"));
const BloggerCompo = React.lazy(() => import("Blogger/Blogger"));
const ClientCompo = React.lazy(() => import("Client/Client"));
const PollsCompo = React.lazy(() => import("Polls/Polls"));
const UrlForwardingCompo = React.lazy(
  () => import("UrlForwarding/UrlForwarding")
);
const PaymentPlansCompo = React.lazy(() => import("PaymentPlans/PaymentPlans"));
const BlogsCompo = React.lazy(() => import("Blogs/Blogs"));
const ApiResourcesCompo = React.lazy(() => import("ApiResources/ApiResources"));
const CommentsCompo = React.lazy(() => import("Comments/Comments"));
const TagsCompo = React.lazy(() => import("Tags/Tags"));
const ElementsCompo = React.lazy(() => import("Elements/Elements"));
const PersonalDataCompo = React.lazy(() => import("PersonalData/PersonalData"));
const MyAccountCompo = React.lazy(() => import("MyAccount/MyAccount"));
const PaymentRequestsCompo = React.lazy(
  () => import("PaymentRequests/PaymentRequests")
);
const MenusCompo = React.lazy(() => import("Menus/Menus"));
const GlobalResourcesCompo = React.lazy(
  () => import("GlobalResources/GlobalResources")
);

const ComponentsCompo = React.lazy(() => import("Components/Components"));
const PagesCompo = React.lazy(() => import("Pages/Pages"));
const BlogPostCompo = React.lazy(() => import("BlogPost/BlogPost"));

const NewslettersCompo = React.lazy(() => import("Newsletters/Newsletters"));
const ChangePasswordCompo = React.lazy(() => import("ChangePassword/ChangePassword"));


const ChartCompo = React.lazy(() => import("Chart/Chart"));
const RegisterCompo = React.lazy(() => import("Register/Register"));
 export {
  DashboardCompo,
  LoginCompo,
  ForgotPasswordCompo,
  TenantCompo,
  EditionCompo,
  SettingsCompo,
  UsersCompo,
  AuditlogsCompo,
  RolesCompo,
  OrganizationUnitsCompo,
  LanguageCompo,
  LanguageTextCompo,
  DynamicPropertyCompo,
  IconListCompo,
  ClaimTypesCompo,
  ApplicationsCompo,
  TextTemplateCompo,
  ApiScopeCompo,
  ScopeCompo,
  IdentityResourcesCompo,
  SecurityLogsCompo,
  ChatsCompo,
  FileManagementCompo,
  FormsCompo,
  BloggerCompo,
  ClientCompo,
  PollsCompo,
  UrlForwardingCompo,
  PaymentPlansCompo,
  BlogsCompo,
  ApiResourcesCompo,
  PersonalDataCompo,
  ElementsCompo,
  MyAccountCompo,
  FormsViewCompo,
  FormsPreviewCompo,
  CommentsCompo,
  TagsCompo,
  PaymentRequestsCompo,
  MenusCompo,
  ComponentsCompo,
  PagesCompo,
  BlogPostCompo,
  GlobalResourcesCompo,
  NewslettersCompo,
  ChartCompo,
  ChangePasswordCompo,

RegisterCompo,};