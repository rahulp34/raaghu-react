import axios from 'axios';
import { combineReducers } from 'redux';

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

var RestService = function RestService(url, config) {
  try {
    return Promise.resolve(_catch(function () {
      url = API_URL + url;
      return Promise.resolve(axios(url, config)).then(function (response) {
        return response.data;
      });
    }, function (error) {
      throw new Error("Error fetching data from " + url + ": " + error.message);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
var API_URL = "https://raaghu-react.azurewebsites.net";

var getAppConfig = function getAbpApplicationConfigurationService(options) {
  try {
    return Promise.resolve(RestService('/api/abp/application-configuration', {
      params: {
        includeLocalizationResources: options.includeLocalizationResources
      },
      headers: {
        'accept-language': options.language
      }
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};

var getAppLocalization = function getAbpApplicationLocalizationService(options) {
  try {
    return Promise.resolve(RestService('/api/abp/application-localization', {
      params: {
        cultureName: options.cultureName,
        onlyDynamics: options.onlyDynamics
      },
      method: 'GET'
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var FETCH_APPLICATION_CONFIGURATIONS_REQUEST = 'FETCH_APPLICATION_CONFIGURATIONS_REQUEST';
var FETCH_APPLICATION_CONFIGURATIONS_SUCCESS = 'FETCH_APPLICATION_CONFIGURATIONS_SUCCESS';
var FETCH_APPLICATION_CONFIGURATIONS_FAILURE = 'FETCH_APPLICATION_CONFIGURATIONS_FAILURE';
var FETCH_APPLICATION_LOCALIZATION_REQUEST = 'FETCH_APPLICATION_LOCALIZATION_REQUEST';
var FETCH_APPLICATION_LOCALIZATION_SUCCESS = 'FETCH_APPLICATION_LOCALIZATION_SUCCESS';
var FETCH_APPLICATION_LOCALIZATION_FAILURE = 'FETCH_APPLICATION_LOCALIZATION_FAILURE';

var initialState = {
  loading: false,
  config: [],
  error: ''
};
function configReducer(state, action) {
  if (state === void 0) {
    state = initialState;
  }
  switch (action.type) {
    case FETCH_APPLICATION_CONFIGURATIONS_REQUEST:
      return _extends({}, state, {
        loading: true
      });
    case FETCH_APPLICATION_CONFIGURATIONS_SUCCESS:
      return {
        loading: false,
        config: action.payload,
        error: ''
      };
    case FETCH_APPLICATION_CONFIGURATIONS_FAILURE:
      return {
        loading: false,
        config: [],
        error: action.payload
      };
    default:
      return state;
  }
}

var initialState$1 = {
  loading: false,
  localization: [],
  error: ''
};
function localizationReducer(state, action) {
  if (state === void 0) {
    state = initialState$1;
  }
  switch (action.type) {
    case FETCH_APPLICATION_LOCALIZATION_REQUEST:
      return _extends({}, state, {
        loading: true
      });
    case FETCH_APPLICATION_LOCALIZATION_SUCCESS:
      return {
        loading: false,
        localization: action.payload.resources,
        error: ''
      };
    case FETCH_APPLICATION_LOCALIZATION_FAILURE:
      return {
        loading: false,
        localization: [],
        error: action.payload
      };
    default:
      return state;
  }
}

var rootReducer = combineReducers({
  confidReducer: configReducer,
  localizationReducer: localizationReducer
});

var getToken = function getAbpApplicationTokenService(options) {
  try {
    return Promise.resolve(RestService('/connect/token', {
      params: {
        grant_type: options.grant_type,
        username: options.username,
        password: options.password,
        client_id: options.client_id,
        scope: options.scope
      },
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        grant_type: options.grant_type,
        username: options.username,
        password: options.password,
        client_id: options.client_id,
        scope: options.scope
      }
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};

var Store = /*#__PURE__*/function () {
  function Store() {
    this._accessToken = null;
    this._languages = {};
    this._localization = {};
    this._auth = {};
  }
  _createClass(Store, [{
    key: "accessToken",
    get: function get() {
      return this._accessToken;
    },
    set: function set(token) {
      this._accessToken = token;
    }
  }, {
    key: "languages",
    get: function get() {
      return this._languages;
    },
    set: function set(config) {
      this._languages = config;
    }
  }, {
    key: "localization",
    get: function get() {
      return this._localization;
    },
    set: function set(localization) {
      this._localization = localization;
    }
  }, {
    key: "auth",
    get: function get() {
      return this._auth;
    },
    set: function set(auth) {
      this._auth = auth;
    }
  }]);
  return Store;
}();
var store = new Store();

var sessionService = function sessionService(api_url, grant_type, username, password, client_id, scope) {
  try {
    return Promise.resolve(getToken({
      api_url: api_url,
      grant_type: grant_type,
      username: username,
      password: password,
      client_id: client_id,
      scope: scope
    }).then(function (data) {
      store.accessToken = data.access_token;
      return data.access_token;
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};
var clearToken = function clearToken() {
  store.accessToken = null;
};

var permissions = {
  'FeatureManagement.ManageHostFeatures': true,
  'AbpIdentity.Roles': true,
  'AbpIdentity.Roles.Create': true,
  'AbpIdentity.Roles.Update': true,
  'AbpIdentity.Roles.Delete': true,
  'AbpIdentity.Roles.ManagePermissions': true,
  'AbpIdentity.Users': true,
  'AbpIdentity.Users.Create': true,
  'AbpIdentity.Users.Update': true,
  'AbpIdentity.Users.Delete': true,
  'AbpIdentity.Users.ManagePermissions': true,
  'AbpIdentity.Users.Update.ManageRoles': true,
  'AbpIdentity.Users.Update.ManageOU': true,
  'AbpIdentity.Users.Impersonation': true,
  'AbpIdentity.Users.Import': true,
  'AbpIdentity.OrganizationUnits': true,
  'AbpIdentity.OrganizationUnits.ManageOU': true,
  'AbpIdentity.OrganizationUnits.ManageRoles': true,
  'AbpIdentity.OrganizationUnits.ManageMembers': true,
  'AbpIdentity.ClaimTypes': true,
  'AbpIdentity.ClaimTypes.Create': true,
  'AbpIdentity.ClaimTypes.Update': true,
  'AbpIdentity.ClaimTypes.Delete': true,
  'AbpIdentity.SettingManagement': true,
  'AbpIdentity.SecurityLogs': true,
  'SettingManagement.Emailing': true,
  'SettingManagement.Emailing.Test': true,
  'Saas.Tenants': true,
  'Saas.Tenants.Create': true,
  'Saas.Tenants.Update': true,
  'Saas.Tenants.Delete': true,
  'Saas.Tenants.ManageFeatures': true,
  'Saas.Tenants.ManageConnectionStrings': true,
  'Saas.Tenants.SetPassword': true,
  'Saas.Tenants.Impersonation': true,
  'Saas.Editions': true,
  'Saas.Editions.Create': true,
  'Saas.Editions.Update': true,
  'Saas.Editions.Delete': true,
  'Saas.Editions.ManageFeatures': true,
  'AuditLogging.AuditLogs': true,
  'OpenIddictPro.Application': true,
  'OpenIddictPro.Application.Update': true,
  'OpenIddictPro.Application.Delete': true,
  'OpenIddictPro.Application.Create': true,
  'OpenIddictPro.Application.ManagePermissions': true,
  'AuditLogging.ViewChangeHistory:Volo.Abp.OpenIddict.Pro.Applications.Application': true,
  'OpenIddictPro.Scope': true,
  'OpenIddictPro.Scope.Update': true,
  'OpenIddictPro.Scope.Delete': true,
  'OpenIddictPro.Scope.Create': true,
  'AuditLogging.ViewChangeHistory:Volo.Abp.OpenIddict.Pro.Scopes.Scope': true,
  'AbpAccount.SettingManagement': true,
  'LanguageManagement.LanguageTexts': true,
  'LanguageManagement.LanguageTexts.Edit': true,
  'LanguageManagement.Languages': true,
  'LanguageManagement.Languages.Create': true,
  'LanguageManagement.Languages.Edit': true,
  'LanguageManagement.Languages.ChangeDefault': true,
  'LanguageManagement.Languages.Delete': true,
  'TextTemplateManagement.TextTemplates': true,
  'TextTemplateManagement.TextTemplates.EditContents': true,
  'FileManagement.DirectoryDescriptor': true,
  'FileManagement.DirectoryDescriptor.Create': true,
  'FileManagement.DirectoryDescriptor.Update': true,
  'FileManagement.DirectoryDescriptor.Delete': true,
  'FileManagement.FileDescriptor': true,
  'FileManagement.FileDescriptor.Create': true,
  'FileManagement.FileDescriptor.Update': true,
  'FileManagement.FileDescriptor.Delete': true,
  'Forms.Form': true,
  'Forms.Form.Delete': true,
  'Forms.Response': true,
  'Forms.Response.Delete': true,
  'Blogging.Blog': true,
  'Blogging.Blog.Management': true,
  'Blogging.Blog.Update': true,
  'Blogging.Blog.Delete': true,
  'Blogging.Blog.Create': true,
  'Blogging.Blog.ClearCache': true,
  'Blogging.Post': true,
  'Blogging.Post.Update': true,
  'Blogging.Post.Delete': true,
  'Blogging.Post.Create': true,
  'Blogging.Tag': true,
  'Blogging.Tag.Update': true,
  'Blogging.Tag.Delete': true,
  'Blogging.Tag.Create': true,
  'Blogging.Comment': true,
  'Blogging.Comment.Update': true,
  'Blogging.Comment.Delete': true,
  'Blogging.Comment.Create': true,
  'Payment.Plans': true,
  'Payment.Plans.Create': true,
  'Payment.Plans.Update': true,
  'Payment.Plans.Delete': true,
  'Payment.Plans.GatewayPlans': true,
  'Payment.Plans.GatewayPlans.Create': true,
  'Payment.Plans.GatewayPlans.Update': true,
  'Payment.Plans.GatewayPlans.Delete': true,
  'Payment.PaymentRequests': true,
  'CmsKit.Comments': true,
  'CmsKit.Comments.Delete': true,
  'CmsKit.Tags': true,
  'CmsKit.Tags.Create': true,
  'CmsKit.Tags.Update': true,
  'CmsKit.Tags.Delete': true,
  'CmsKit.Pages': true,
  'CmsKit.Pages.Create': true,
  'CmsKit.Pages.Update': true,
  'CmsKit.Pages.Delete': true,
  'CmsKit.Pages.SetAsHomePage': true,
  'CmsKit.Blogs': true,
  'CmsKit.Blogs.Create': true,
  'CmsKit.Blogs.Update': true,
  'CmsKit.Blogs.Delete': true,
  'CmsKit.Blogs.Features': true,
  'CmsKit.BlogPosts': true,
  'CmsKit.BlogPosts.Create': true,
  'CmsKit.BlogPosts.Update': true,
  'CmsKit.BlogPosts.Delete': true,
  'CmsKit.BlogPosts.Publish': true,
  'CmsKit.Menus': true,
  'CmsKit.Menus.Create': true,
  'CmsKit.Menus.Update': true,
  'CmsKit.Menus.Delete': true,
  'CmsKit.GlobalResources': true,
  'CmsKit.Newsletter': true,
  'CmsKit.Poll': true,
  'CmsKit.Poll.Create': true,
  'CmsKit.Poll.Update': true,
  'CmsKit.Poll.Delete': true,
  'CmsKit.SettingManagement': true,
  'CmsKit.UrlShorting': true,
  'CmsKit.UrlShorting.Create': true,
  'CmsKit.UrlShorting.Update': true,
  'CmsKit.UrlShorting.Delete': true,
  'BookStore.Dashboard.Host': true,
  'BookStore.Books': true,
  'BookStore.Books.Create': true,
  'BookStore.Books.Delete': true
};
var grantedpolicies = function grantedpolicies(policy) {
  if (permissions.hasOwnProperty(policy)) {
    return true;
  }
};

var configurationService = function configurationService(language) {
  try {
    return Promise.resolve(_catch(function () {
      return Promise.resolve(getAppConfig({
        language: language,
        includeLocalizationResources: false
      }).then(function (res) {
        store.languages = res.localization;
        store.auth = res.auth.grantedPolicies;
        return res;
      }));
    }, function (error) {
      return console.log(error);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};

var localizationService = function localizationService(cultureName) {
  try {
    return Promise.resolve(_catch(function () {
      return Promise.resolve(getAppLocalization({
        cultureName: cultureName,
        onlyDynamics: false
      })).then(function (data) {
        store.localization = data;
        return data;
      });
    }, function (error) {
      return console.log(error);
    }));
  } catch (e) {
    return Promise.reject(e);
  }
};

var instance = axios.create({
  baseURL: "https://raaghu-react.azurewebsites.net"
});
instance.interceptors.request.use(function (config) {
  var token = store.accessToken;
  if (token) {
    var Token = JSON.parse(token);
  }
  if (token) {
    config.headers.Authorization = "Bearer " + Token;
  }
  return config;
});

export { instance as Instance, clearToken, configurationService, getAppConfig, getAppLocalization, grantedpolicies, localizationService, rootReducer as rootCoreReducer, sessionService, store };
//# sourceMappingURL=index.modern.js.map
