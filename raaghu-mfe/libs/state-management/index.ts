import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./public.api";
import { forgotPasswordReducer } from "./forgot-password/forgotpassword-slice";
import editionReducer from "./edition/edition-slice";
import { subscriptionReducer } from "./subscription/subscription-slice";
import languageReducer from "./language/language-slice";
import languageTextReducer from "./language-text/language-text-slice";
import organizationReducer from "./organization-tree/organization-tree-slice";
import rolesReducer from "./roles/roles-slice";
import scopesReducer from "./apiScope/apiScope-slice";
import scopesHReducer from "./scope/scope-slice";
import auditLogsReducer from "./audit-logs/audit-log-slice";
import ClaimTypesReducer from "./claim-types/claim-types-slice";
import securityLogsReducer from "./security-logs/security-logs-slice";
import userReducer from "./user/user-slice";
import localizationReducer from "./localization/localization-slice";
import settingsReducer from "./settings/settings-slice";
import FileManagementReducer from "./file-management/file-management-slice"
import { useDispatch } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import  applicationsReducer  from "./applications/applications-slice";
import textTemplateReducer from "./text-template/text-template-slice";
import tenantReducer from './tenant/tenant-slice';
import chatsReducer from './chats/chats-slice';
import bloggerReducer from './blogger/blogger-slice';

const persistConfig={
  key: "root",
  storage,
  blacklist: ["forgotPassword"],
}; 
const rootReducer = combineReducers({
  login: loginReducer,
  forgotPassword: forgotPasswordReducer,  
  subscription: subscriptionReducer,
  edition: editionReducer,
  language: languageReducer,
  languagesText:languageTextReducer,
  organization: organizationReducer,
  roles:rolesReducer,
  claimTypes: ClaimTypesReducer,
  securityLogs:securityLogsReducer,
  applications : applicationsReducer,
  scopes: scopesReducer,
  scopesH:scopesHReducer,  
  apiScope: scopesHReducer,    
  textTemplate: textTemplateReducer,
  auditLog : auditLogsReducer,
  user: userReducer,
  settings: settingsReducer,
  tenant:tenantReducer,
  localization:localizationReducer, 
  chats: chatsReducer,
  blogger:bloggerReducer,
  fileManagement: FileManagementReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
