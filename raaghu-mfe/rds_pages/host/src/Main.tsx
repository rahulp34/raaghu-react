import React, { Suspense, useEffect, useState } from "react";
import { Route, useNavigate, Routes, Navigate, Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../../libs/state-management";
import "./App.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../libs/state-management/hooks";
import {fetchLocalization} from "../../../libs/state-management/localization/localization-slice";
import {
  RdsCompSideNavigation,
  RdsCompTopNavigation,
} from "../../rds-components";
import { AuthGuard } from "../../../libs/public.api";
import RdsCompPageNotFound from "../../../../raaghu-components/src/rds-comp-page-not-found/rds-comp-page-not-found";
import MyComponent from "./MyComponent";
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
const SecurityLogsCompo = React.lazy(() => import("SecurityLogs/SecurityLogs"));

export interface MainProps {
  toggleTheme?: React.MouseEventHandler<HTMLInputElement>;
}

const Main = (props: MainProps) => {
  const [isAuth, setIsAuth] = useState<boolean>();
  const navigate = useNavigate();
  let accessToken: string | undefined | null =
    localStorage.getItem("access_token");
  let currentPath = window.location.pathname;
  console.log("This is the current path ",currentPath);

  const auth: any = useSelector(
    (state: RootState) => state.persistedReducer.login.isAuth
  );

  console.log("auth", isAuth);
  // const isLoggedIn = localStorage.getItem('access_token');
  const location = useLocation();

  useEffect(() => {
    const loginCredentials = localStorage.getItem("persist:root");
    if (loginCredentials != null) {
      let credentials = JSON.parse(loginCredentials);
      let parsedCredentials = JSON.parse(credentials.login);
      accessToken = parsedCredentials.accessToken;
    }
    // setIsAuth(true);
    if (localStorage.getItem("access_token")) {
      setIsAuth(true);
      navigate(currentPath);
    }
    if (localStorage.getItem("access_token") == null) {
      navigate("/login");
    }
  }, []);

  // datas for changing language from dropdown on top-nav in dashboard

  const languageItems = [
    {
      label: "EN(US)",
      val: "en",
      icon: "us",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "English(IND)",
      val: "en",
      icon: "in",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Français",
      val: "fr",
      icon: "fr",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Deutsch",
      val: "de",
      icon: "de",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Português (Brasil)",
      val: "pt-BR",
      icon: "br",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Türkçe",
      val: "tr",
      icon: "tr",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Italiano",
      val: "it",
      icon: "it",
      iconWidth: "20px",
      iconHeight: "20px",
    },
  ];

  // OnClickHandler for language change

  const { t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const onClickHandler = (e: any) => {
    setCurrentLanguage(e.target.getAttribute("data-name"));
  };
  const dispatch = useAppDispatch();
  const Data = useAppSelector((state:any) => state.persistedReducer.localization) as any;

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
    dispatch(fetchLocalization(currentLanguage) as any);
  }, [currentLanguage]);
console.log('localization ', Data.localization)
  // Datas for side nav

  const sideNavItems = [
    {
      key: "0",
      label: t("Dashboard"),
      icon: "home",
      path: "/dashboard",
      subTitle: "Statistics and reports",
    },
    {
      key: "1",
      label: t("Icons"),
      icon: "icons",
      path: "/icons",
      subTitle: t("icons"),
    },
    {
      key: "2",
      label: t("Saas"),
      icon: "pages",
      children: [
        {
          key: "2-0",
          label: t("Tenants"),
          icon: "tenant",
          path: "/tenant",
          subTitle: t("Manage your tenants"),
        },
        {
          key: "2-1",
          label: t("Editions"),
          icon: "editions",
          path: "/edition",
          subTitle: t("Manage editions and features of the application"),
        },
      ],
    },
    {
      key: "3",
      label: t("Administration"),
      icon: "pages",
      children: [
        {
          key: "3-0",
          label: t("Identity Management"),
          icon: "organization",
          children: [
            {
              key: "3-0-0",
              label: t("Organization units"),
              icon: "tenant",
              path: "/organization-unit",
              subTitle: t(
                "Use organization units to organize users and entities"
              ),
            },
            {
              key: "3-0-1",
              label: t("Roles"),
              icon: "roles",
              path: "/role",
              subTitle: t("Use roles to group permissions"),
            },
            {
              key: "3-0-2",
              label: t("Users"),
              icon: "users",
              path: "/users",
              subTitle: t("Manage users and permissions"),
            },
            {
              key: "3-0-3",
              label: t("Claim Types"),
              icon: "users",
              path: "/claim-types",
              subTitle: t("Manage users and permissions"),
            },
            {
              key: "3-0-4",
              label: t("Security-logs"),
              icon: "users",
              path: "/security-logs",
              subTitle: t("Manage users and permissions"),
            },
          ],
        },
        {
          key: "3-1",
          label: t("OpenId"),
          icon: "tenant",
          children: [
            {
              key: "3-1-0",
              label: t("Applications"),
              icon: "tenant",
              path: "/applications",
              subTitle: t(
                "Use organization units to organize users and entities"
              ),
            },
            {
              key: "3-1-1",
              label: t("Scopes"),
              icon: "tenant",
              path: "/api-scope",
              subTitle: t(
                "Use organization units to organize users and entities"
              ),
            },
          ],
        },
        {
          key: "3-2",
          label: t("Language Management"),
          icon: "tenant",
          children: [
            {
              key: "3-2-0",
              label: t("Language"),
              icon: "languages",
              path: "/language",
              subTitle: t("Manage user interface languages"),
            },
            {
              key: "3-2-1",
              label: t("Language-Text"),
              icon: "languages",
              path: "/language-text",
              subTitle: t("Manage user interface languages"),
            },
          ],
        },
        {
          key: "3-3",
          label: t("Text-Template"),
          icon: "languages",
          path: "/template-text",
          subTitle: t("Manage user interface languages"),
        },
        {
          key: "3-4",
          label: t("Audit Logs"),
          icon: "audit_logs",
          path: "/audit-logs",
          subTitle: "",
        },
        {
          key: "3-5",
          label: t("Settings"),
          icon: "setting",
          path: "/settings",
          subTitle: t("Show and change application settings"),
        },
      ],
    },
  ];

  // OnClickHandler for side nav to reflect title and subtitle on TopNav

  const getLabelForPath: any = (path: string, navItems: any) => {
    let label = null;
    for (const navItem of navItems) {
      if (navItem.path === path) {
        return navItem.label;
      }
      if (navItem.children) {
        label = getLabelForPath(path, navItem.children);
        if (label) {
          return label;
        }
      }
    }
    return label;
  };

  const getSubTitle: any = (label: string, navItems: any) => {
    let subTitle = null;
    for (const navItem of navItems) {
      if (navItem.label === label) {
        return navItem.subTitle;
      }
      if (navItem.children) {
        subTitle = getSubTitle(label, navItem.children);
        if (subTitle) {
          return subTitle;
        }
      }
    }
    return subTitle;
  };

  const displayName = getLabelForPath(currentPath, sideNavItems);
  const subTitle = getSubTitle(displayName, sideNavItems);
  const [currentTitle, setCurrentTitle] = useState(displayName);
  const [currentSubTitle, setCurrentSubTitle] = useState(subTitle);

  const sideNavOnClickHandler = (e: any) => {
    const subTitle = getSubTitle(
      e.target.getAttribute("data-name"),
      sideNavItems
    );
    setCurrentSubTitle(subTitle);
    setCurrentTitle(e.target.getAttribute("data-name"));
  };

  const logout = () => {
    localStorage.clear();
    setIsAuth(false);
    navigate("/login");
  };
  let logo = "./assets/raaghu_icon.png";
  return (
    <Suspense fallback="loading...">
      <Routes>
        <Route
          path="/login"
          element={
            <AuthGuard>
              <LoginCompo />
            </AuthGuard>
          }
        ></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPasswordCompo />}
        ></Route>
      </Routes>
      {/* {auth && isAuth && (        have to implement this one we get started with service proxy for abp        */}
      {isAuth && (
        <div className="d-flex flex-column flex-root">
          <div className="page d-flex flex-column flex-column-fluid">
            <div className="header align-items-stretch">
              <RdsCompTopNavigation
                languageItems={languageItems}
                brandName="raaghu"
                onClick={onClickHandler}
                profileTitle="Host Admin"
                profileName="admin"
                onLogout={logout}
                logo={logo}
                navbarTitle={t(currentTitle) || ""}
                navbarSubTitle={t(currentSubTitle) || ""}
              />
            </div>
            <div
              className="
							page
        d-flex
        flex-column-fluid
        align-items-stretch
        container-fluid
        px-0"
            >
              <div className="d-flex flex-column-fluid align-items-stretch container-fluid px-0 main-body">
                <div className="aside ng-tns-c99-0" id="aside">
                  <div className="mx-2 pt-2">
                    <MyComponent/>
                    <RdsCompSideNavigation
                      sideNavItems={sideNavItems}
                      onClick={sideNavOnClickHandler}
                      toggleTheme={props.toggleTheme}
                    ></RdsCompSideNavigation>
                  </div>
                </div>
                <div
                  className="wrapper d-flex flex-column flex-row-fluid rds-scrollable-wrapper pt-3 px-sm-0 px-lg-3 "
                  id="FixedHeaderOverFlow"
                >
                  <Routes>
                    <Route
                      path="/dashboard"
                      element={<DashboardCompo />}
                    ></Route>
                    <Route
                      path="/tenant"
                      element={<TenantCompo></TenantCompo>}
                    ></Route>
                    <Route
                      path="/edition"
                      element={<EditionCompo></EditionCompo>}
                    ></Route>
                    <Route
                      path="/settings"
                      element={<SettingsCompo></SettingsCompo>}
                    ></Route>
                    <Route
                      path="/audit-logs"
                      element={<AuditlogsCompo></AuditlogsCompo>}
                    ></Route>
                    <Route path="/users" element={<UsersCompo />}></Route>
                    <Route
                      path="/role"
                      element={<RolesCompo></RolesCompo>}
                    ></Route>
                    <Route
                      path="/organization-unit"
                      element={
                        <OrganizationUnitsCompo></OrganizationUnitsCompo>
                      }
                    ></Route>
                    <Route
                      path="/language"
                      element={<LanguageCompo></LanguageCompo>}
                    ></Route>
                    <Route
                      path="/language-text"
                      element={<LanguageTextCompo></LanguageTextCompo>}
                    ></Route>
                    <Route
                      path="/dynamic-properties"
                      element={<DynamicPropertyCompo></DynamicPropertyCompo>}
                    ></Route>
                    <Route
                      path="/security-logs"
                      element={<SecurityLogsCompo />}
                    ></Route>

                    <Route path="/icons" element={<IconListCompo />}></Route>
                    <Route path="/claim-types" element={<ClaimTypesCompo />} />
                    <Route
                      path="/text-template"
                      element={<TextTemplateCompo />}
                    ></Route>
                    <Route
                      path="/applications"
                      element={<ApplicationsCompo />}
                    ></Route>

                    <Route path="/api-scope" element={<ApiScopeCompo />} />
                    <Route path="/**/*" element={<RdsCompPageNotFound />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Suspense>
  );
};
export default Main;