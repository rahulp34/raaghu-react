import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./public.api";
import { forgotPasswordReducer } from "./forgot-password/forgotpassword-slice";
import editionReducer from "./edition/edition-slice";
import { subscriptionReducer } from "./subscription/subscription-slice";
import languageReducer from "./language/language-slice";
import organizationReducer from "./organization-tree/organization-tree-slice";
import ClaimTypesReducer from "./claim-types/claim-types-slice"
import { useDispatch } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import  applicationsReducer  from "./applications/applications-slice";
const persistConfig = {
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
  organization: organizationReducer,
  claimTypes: ClaimTypesReducer,
  applications : applicationsReducer,

});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: [thunk],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
