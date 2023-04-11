import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import {EmailSettingsService} from "../../proxy/services/EmailSettingsService"
import {SettingsService} from "../../proxy/services/SettingsService"
import {FormService} from "../../proxy/services/FormService"
import {AccountSettingsService} from "../../proxy/services/AccountSettingsService"
import {BlogFeatureService} from "../../proxy/services/BlogFeatureService"
import {BlogFeatureAdminService} from "../../proxy/services/BlogFeatureAdminService"
import {FeaturesService} from "../../proxy/services/FeaturesService"

type InitialStateSettings = {
  loading: boolean;
  emailSettings: any;
  accountSettings: any;
  identitySettings: any;
  accountGeneralSettings: any;
  accountTwoFactorSettings: any;
  accountCaptchaSettings: any;
  accountExternalProvider: any;
  featureIdentitySettings: any;
  error: string;
};
export const initialStateSettings: InitialStateSettings = {
  loading: false,
  emailSettings: null,
  accountSettings: null,
  identitySettings: null,
  accountGeneralSettings: null,
  accountTwoFactorSettings: null,
  accountCaptchaSettings: null,
  accountExternalProvider: null,
  featureIdentitySettings: null,
  error: "",
};

// Generates pending, fulfilled and rejected action types

export const fetchEmailSettings = createAsyncThunk(
  "settings/fetchEmailSettings",
  () => {
    return EmailSettingsService.getEmailing().then((result: any) => {
      return result;
    });
  }
);

export const saveEmailSettings = createAsyncThunk(
  "settings/saveEmailSettings",
  (formData: any) => {
    return EmailSettingsService.postEmailing(formData).then((result: any) => {
      return result;
    });
  }
);
export const fetchIdentitySettings = createAsyncThunk(
  "settings/fetchIdentitySettings",
  () => {
    return SettingsService.getSettings().then((result: any) => {
      return result;
    });
  }
);
export const saveIdentitySettings = createAsyncThunk(
  "settings/saveIdentitySettings",
  (data: any) => {
    return FormService.putSettings(data).then((result: any) => {
      return result;
    });
  }
);
export const fetchAccountGeneralSettings = createAsyncThunk(
  "settings/saveIdentitySettings",
  () => {
    return AccountSettingsService.getSettings().then((result: any) => {
      return result;
    });
  }
);
export const fetchTwoFactorSettings = createAsyncThunk(
  "settings/fetchTwoFactorSettings",
  () => {
    return AccountSettingsService.getSettingsTwoFactor().then((result: any) => {
      return result;
    });
  }
);
export const fetchCaptchaSettings = createAsyncThunk(
  "settings/fetchCaptchaSettings",
  () => {
    return AccountSettingsService.getSettingsRecaptcha().then((result: any) => {
      return result;
    });
  }
);
export const fetchExternalProviderSettings = createAsyncThunk(
  "settings/fetchExternalProviderSettings",
  () => {
    return AccountSettingsService.getSettingsExternalProvider().then((result: any) => {
      return result;
    });
  }
);
export const saveAccountGeneralSettings = createAsyncThunk(
  "settings/saveAccountGeneralSettings",
  (data: any) => {
    return AccountSettingsService.putSettings(data).then((result: any) => {
      return result;
    });
  }
);
export const saveAccountTwoFactorSettings = createAsyncThunk(
  "settings/saveAccountTwoFactorSettings",
  (data: any) => {
    return AccountSettingsService.putSettingsTwoFactor(data).then((result: any) => {
      return result;
    });
  }
);
export const saveAccountCaptchaSettings = createAsyncThunk(
  "settings/saveAccountCaptchaSettings",
  (data: any) => {
    return AccountSettingsService.putSettingsRecaptcha(data).then((result: any) => {
      return result;
    });
  }
);
export const saveAccountExternalProviderSettings = createAsyncThunk(
  "settings/saveAccountExternalProviderSettings",
  (data: any) => {
    return AccountSettingsService.putSettingsExternalProvider(data).then((result: any) => {
      return result;
    });
  }
);
export const fetchFeaturesSettings = createAsyncThunk(
  "settings/fetchFeaturesSettings ",
  () => {
    return BlogFeatureService.getBlogsFeatures({blogId:"T", featureName:""}).then((result: any) => {
      return result;
    });
  }
);
export const saveFeaturesSettings = createAsyncThunk(
  "settings/saveFeaturesSettings ",
  (data: any) => {
    return BlogFeatureAdminService.putBlogsFeatures({blogId:"T",  requestBody:data}).then((result: any) => {
      return result;
    });
  }
);

export const restoreToDefaultFeaturesSettings = createAsyncThunk(
  "settings/restoreToDefaultFeaturesSettings",
  (data: any) => {
    return FeaturesService
      .deleteFeatures({providerName:"T", providerKey:undefined})
      .then((result: any) => {
        return result;
      });
  }
);

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialStateSettings,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmailSettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchEmailSettings.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.emailSettings = action.payload;
      }
    );
    builder.addCase(fetchEmailSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(saveEmailSettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      saveEmailSettings.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.emailSettings = action.payload;
      }
    );
    builder.addCase(saveEmailSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(fetchIdentitySettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchIdentitySettings.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.identitySettings = action.payload;
      }
    );
    builder.addCase(fetchIdentitySettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(fetchAccountGeneralSettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchAccountGeneralSettings.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.accountGeneralSettings = action.payload;
      }
    );
    builder.addCase(fetchAccountGeneralSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(fetchTwoFactorSettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchTwoFactorSettings.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.accountTwoFactorSettings = action.payload;
      }
    );
    builder.addCase(fetchTwoFactorSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(fetchCaptchaSettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCaptchaSettings.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.accountCaptchaSettings = action.payload;
      }
    );
    builder.addCase(fetchCaptchaSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(fetchExternalProviderSettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchExternalProviderSettings.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.accountExternalProvider = action.payload;
      }
    );
    builder.addCase(fetchExternalProviderSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(saveAccountGeneralSettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      saveAccountGeneralSettings.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.accountGeneralSettings = action.payload;
      }
    );
    builder.addCase(saveAccountGeneralSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(fetchFeaturesSettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchFeaturesSettings.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.featureIdentitySettings = action.payload;
      }
    );
    builder.addCase(fetchFeaturesSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(saveFeaturesSettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      saveFeaturesSettings.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.featureIdentitySettings = action.payload;
      }
    );
    builder.addCase(saveFeaturesSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    builder.addCase(restoreToDefaultFeaturesSettings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      restoreToDefaultFeaturesSettings.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.featureIdentitySettings = action.payload;
      }
    );
    builder.addCase(
      restoreToDefaultFeaturesSettings.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      }
    );
  },
});

export default settingsSlice.reducer;
