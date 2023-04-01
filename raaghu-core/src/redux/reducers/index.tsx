// reducers.js
import { combineReducers } from "redux";
import confidReducer from "./configReducer";
import localizationReducer from "./localizationReducer";
// import multiTenancyReducer from "./multiTenancyReducer";

const rootReducer = combineReducers({
    confidReducer,
    localizationReducer,
    // multiTenancyReducer,
});

export default rootReducer;