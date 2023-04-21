import React, { Suspense, useEffect, useState } from "react";
import { Route, useNavigate, Routes, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.scss";
import {
  configurationService,
  localizationService,
  sessionService,
  clearToken,
} from "raaghu-react-core";
import { useAppDispatch, useAppSelector } from "../../../libs/state-management/hooks";
import {
  RdsCompSideNavigation,
  RdsCompTopNavigation,
} from "../../rds-components";
// const menus = <Record<string, any>>require("../../../libs/main-menu");
import * as menus from "../../../libs/main-menu/index";
//import { localizationService,configurationService, sessionService } from "../../../../raaghu-react-core/src"

import RdsCompPageNotFound from "../../../../raaghu-components/src/rds-comp-page-not-found/rds-comp-page-not-found";
import { callLoginAction, } from "../../../libs/state-management/host/host-slice";
import {
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
  FormsViewCompo,
  FormsPreviewCompo,
  CommentsCompo,
  TagsCompo,
  ElementsCompo,
  PersonalDataCompo,
  PaymentRequestsCompo,
  MenusCompo,
  MyAccountCompo,
  ComponentsCompo,
  PagesCompo,
  BlogPostCompo,
  GlobalResourcesCompo,
  NewslettersCompo,
} from "./PageComponent";
export interface MainProps {
  toggleTheme?: React.MouseEventHandler<HTMLInputElement>;
}

const Main = (props: MainProps) => {
  const [languageData, setLanguageData] = useState([]);
  // const [storeData, setStoreData] = useState({
  //   languages: store.languages,
  //   auth: store.auth,
  //   localization: store.localization,
  // });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const dataHost = useAppSelector((state) => state.persistedReducer.host.callLogin);
  let currentPath = window.location.pathname;

  useEffect(() => {
    sessionStorage.setItem('REACT_APP_API_URL', process.env.REACT_APP_API_URL || '');
    if (localStorage.getItem("auth") && true) {
      if (currentPath !== "/dashboard" && currentPath !== "/") {
        navigate(currentPath);
      } else {
        navigate("/dashboard");
      }
    } else {
      navigate("/login");
    }
  }, [localStorage.getItem("auth")]);
  const toggleItems = [
    {
      label: "Light",
      val: "light",
      icon: "sun",
      iconWidth: "20px",
      iconHeight: "20px",
    },
    {
      label: "Dark",
      val: "dark",
      icon: "moon",
      iconWidth: "17px",
      iconHeight: "17px",
    },
  ];
  const componentsList = [
    {
      label: "Account",
      val: "Account",
    },
    {
      label: "AddressInput",
      val: "AddressInput",
    },
  ];
  useEffect(() => {
    dispatch(callLoginAction(null) as any)
  }, [dispatch]);

  
  const objectArray = Object.entries(menus);
  const index = objectArray.findIndex(([key, value]) => key === "MainMenu");

  if (index !== -1) {
    objectArray.splice(0, 0, objectArray.splice(index, 1)[0]);
  }
  let newobjectArray = objectArray.map((item) => {
    return item[1];
  });
  const concatenated = newobjectArray.reduce(
    (acc: any, arr: any) => acc.concat(arr),
    []
  );

  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem("currentLang") || "en-GB"
  );

  const onClickHandler = (e: any, val: any) => {
    setCurrentLanguage(val);
    localStorage.setItem("currentLang", val);
  };

  useEffect(() => {
    configurationService(currentLanguage).then( (res: any) => {
      const tempdata = res.localization?.languages?.map((item: any) => {
        return {
          label: item.displayName,
          val: item.cultureName,
          icon: item.flagIcon !== null ? item.flagIcon : "isNull",
          iconWidth: "20px",
          iconHeight: "20px",
        };
      });
      setLanguageData(tempdata);
    });
    localizationService(currentLanguage).then(
       (resp: any) => {
        let data2 = {};
        const translation = resp?.resources;
        if (translation) {
          Object.keys(translation).forEach((key) => {
            Object.keys(translation[key].texts).forEach((k1)=>{
              let k2 = k1.replace(/[^\w\s]/gi,'_');
              let value1 = translation[key].texts[k1]
              data2 = {...data2,[k2]:value1}
            })              
          });
          i18n.addResourceBundle(
            currentLanguage,
            "translation",
            data2,
            false,
            true
          );
          i18n.changeLanguage(currentLanguage);
        }
      }
    );
  }, [currentLanguage]);

  const sideNavItems = concatenated;

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
  const [breacrumItem, setBreadCrumItem] = useState<any[]>([])

  const sideNavOnClickHandler = (e: any) => {
    const pageName = e.target.getAttribute("data-name");
    const subTitle = getSubTitle(
      pageName,
      sideNavItems
    );
    setCurrentSubTitle(subTitle);
    setCurrentTitle(pageName);
    let a = recursiveFunction(concatenated, pageName)
    a = a.filter((res: any) => res ? true : false);
    if (a[0].id) {
      setBreadCrumItem(a);
    }
    else {
      a = a[0].reverse();
      setBreadCrumItem(a);
    }
  };

  useEffect(()=>{
    const lang =localStorage.getItem("currentLang")||"en-GB";
    localizationService(lang).then((resp: any) => {
      i18n.changeLanguage(lang);
      var data1 = {};
      const translation = resp?.resources;
      if (translation) {
        Object.keys(translation).forEach((key) => {
          data1 = { ...data1, ...translation[key].texts };
        });
        i18n.addResourceBundle(lang, "translation", data1, false, true);
      }
    });
  },[])

  function hello(res: any) {
      localStorage.setItem("auth", JSON.stringify(true));
      const lang =localStorage.getItem("currentLang")||"en-GB"
      navigate('/dashboard')
      configurationService(lang).then(async (res: any) => {
        const lang =localStorage.getItem("currentLang")||"en-GB"
      });
  }

  useEffect(()=>{
    if(dataHost && dataHost.email != '' && dataHost.password != ''){
      sessionStorage.setItem('REACT_APP_API_URL', process.env.REACT_APP_API_URL || '');
      sessionService('password', dataHost.email, dataHost.password, 'raaghu', 'address email roles profile phone BookStore').then(async(res:any)=>{
        if(res){
          sessionStorage.setItem('accessToken',res)
          await hello(res)
        }
      });
      dispatch(callLoginAction(null) as any);
    }
  }, [dataHost])


  function recursiveFunction(menus: any, searchName: string) {
    return menus.map((res: any) => {
      if (res.label == searchName) {
        const item = {
          id: res.label,
          label: res.label,
          icon: ''
        }
        return item;
      }
      else {
        if (res.children) {
          let item = recursiveFunction(res.children, searchName);
          item = item.filter((res: any) => res ? true : false)
          if (item != null && item[0] != null) {
            if (!item[0].id) {
              return item[0].concat([{ id: res.label, label: res.label, icon: '' }])
            }
            else {
              return item.concat([{ id: res.label, label: res.label, icon: '' }])
            }
          }
        }
        return null;
      }
    })
  }
  function recursiveFunction1(menus: any, searchName: string) {
    return menus.map((res: any) => {
      if (res.path && res.path == searchName) {
        const item = {
          id: res.label,
          label: res.label,
          icon: ''
        }
        return item;
      }
      else {
        if (res.children) {
          let item = recursiveFunction1(res.children, searchName);
          item = item.filter((res: any) => res ? true : false)
          if (item != null && item[0] != null) {
            if (!item[0].id) {
              return item[0].concat([{ id: res.label, label: res.label, icon: '' }])
            }
            else {
              return item.concat([{ id: res.label, label: res.label, icon: '' }])
            }
          }
        }
        return null;
      }
    })
  }

  const logout = () => {
    localStorage.clear();
    //store.accessToken = null;
    navigate("/login");
  };
  useEffect(() => {
    let a = recursiveFunction1(concatenated, currentPath)
    a = a.filter((res: any) => res ? true : false)
    if (a.length && a[0].id) {
      setBreadCrumItem(a);
    }
    else if (a.length) {
      setBreadCrumItem(a[0].reverse());
    }
  }, [menus.MainMenu])

  let logo = "./assets/raaghu_logs.png";
  return (
    <Suspense>
      <Routes>
        <Route
          path="/login"
          element={
            <LoginCompo />
          }
        ></Route>
        <Route
          path="/forgot-password"
          element={<ForgotPasswordCompo />}
        ></Route>
      </Routes>
      {/* {auth && isAuth && (        have to implement this one we get started with service proxy for abp        */}
      {location.pathname != '/login' && location.pathname != '/forgot-password' && (
        <div className="d-flex flex-column flex-root">
          <div className="page d-flex flex-column flex-column-fluid">
            <div
              className="
							page
        d-flex
        flex-column-fluid
        align-items-stretch
        container-fluid
        px-0"
            >
              <div className="d-flex flex-column-fluid align-items-stretch container-fluid px-0">
                <div className="aside ng-tns-c99-0" id="aside">
                  <div>
                    <img
                      className="ms-1 cursor-pointer sidenav-logo"
                      src={logo}
                      alt="logo"
                    ></img>
                  </div>
                  <div className="mx-2 mt-6">
                    <RdsCompSideNavigation
                      sideNavItems={sideNavItems}
                      onClick={sideNavOnClickHandler}
                      toggleTheme={props.toggleTheme}
                    ></RdsCompSideNavigation>
                  </div>
                </div>
                <div
                  className="wrapper d-flex flex-column flex-row-fluid rds-scrollable-wrapper px-sm-0"
                  id="FixedHeaderOverFlow"
                >
                      <div className="header align-items-stretch">
              <RdsCompTopNavigation
                //languageLable={storeData.languages?.currentCulture?.displayName || "English (United Kingdom)"}
                languageLable ="English"
                // languageLable={
                //   storeData.languages?.currentCulture?.displayName ||
                //   "English (United Kingdom)"
                // }
                breacrumItem={breacrumItem}
                languageIcon="gb"
                languageItems={languageData}
                toggleItems={toggleItems}
                componentsList={componentsList}
                // brandName="raaghu"
                onClick={onClickHandler}
                profileTitle="Host Admin"
                profileName="admin"
                onLogout={logout}
                logo={logo}
                toggleTheme={props.toggleTheme}
                navbarTitle={t(currentTitle) || ""}
                navbarSubTitle={t(currentSubTitle) || ""}
                onChatClickHandler={() => {
                  console.log(" session Hey Chat Button Clicked!!");
                }} elementList={[]} />
            </div>
            <div className="m-3">
                  <Suspense>
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
                      <Route
                        path="/claim-types"
                        element={<ClaimTypesCompo />}
                      />
                      <Route
                        path="/text-template"
                        element={<TextTemplateCompo />}
                      ></Route>
                      <Route
                        path="/applications"
                        element={<ApplicationsCompo />}
                      ></Route>
                      <Route path="/scope" element={<ScopeCompo />}></Route>
                      <Route
                        path="/identityResources"
                        element={<IdentityResourcesCompo />}
                      />

                      <Route path="/api-scope" element={<ApiScopeCompo />} />
                      <Route
                        path="/apiResources"
                        element={<ApiResourcesCompo />}
                      />
                      <Route path="/blogs" element={<BlogsCompo />} />
                      <Route path="/chats" element={<ChatsCompo />} />
                      <Route
                        path="/fileManagement"
                        element={<FileManagementCompo />}
                      />
                      <Route path="/forms" element={<FormsCompo />} />
                      <Route
                        path="/formsView/:id"
                        element={<FormsViewCompo />}
                      />
                      <Route
                        path="/formsPreview/:id"
                        element={<FormsPreviewCompo />}
                      />
                      <Route path="/polls" element={<PollsCompo />} />
                      <Route path="/blogger" element={<BloggerCompo />} />
                      <Route path="/client" element={<ClientCompo />} />
                      <Route
                        path="/url-forwarding"
                        element={<UrlForwardingCompo />}
                      />
                      <Route
                        path="/paymentPlans"
                        element={<PaymentPlansCompo />}
                      />
                      <Route
                        path="/paymentRequests"
                        element={<PaymentRequestsCompo />}
                      />
                      <Route path="/comments" element={<CommentsCompo />} />
                      <Route path="/tags" element={<TagsCompo />} />
                      <Route path="/globalResources" element={<GlobalResourcesCompo />} />
                      <Route path="/elements/:type" element={<ElementsCompo />} />
                      <Route path="/personal-data" element={<PersonalDataCompo />} />
                      <Route path="/my-account" element={<MyAccountCompo />} />
                      <Route path="/menus" element={<MenusCompo />} />
                      <Route path="/components" element={<ComponentsCompo />} />
                      <Route path="/pages" element={<PagesCompo />} />
                      <Route path="/**/*" element={<RdsCompPageNotFound />} />
                      <Route path="/pages" element={<PagesCompo />} />
                      <Route path="/blog-post" element={<BlogPostCompo />} />
                      <Route path="/newsletters" element={<NewslettersCompo />} />
                    </Routes>
                  </Suspense>
                  </div>
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
