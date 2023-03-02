import { createSlice, createAsyncThunk, PayloadAction, AnyAction, } from "@reduxjs/toolkit";
import {ServiceProxy} from '../../shared/service-proxy'

type InitialStateSettings = {
  loading: boolean;
  emailSettings: any;
  accountSettings: any;
  identitySettings:any;
  accountGeneralSettings:any;
  accountTwoFactorSettings:any;
  accountCaptchaSettings:any;
  accountExternalProvider:any;
  featureIdentitySettings:any;
  error: string;
}; 

export const initialStateSettings:InitialStateSettings= {
  loading: false,
  emailSettings: null,
  accountSettings: null,
  identitySettings:null,
  accountGeneralSettings:null,
  accountTwoFactorSettings:null,
  accountCaptchaSettings:null,
  accountExternalProvider:null,
  featureIdentitySettings:null,
  error: ""
};

// Generates pending, fulfilled and rejected action types
const proxy = new ServiceProxy();

export const fetchEmailSettings = createAsyncThunk("settings/fetchEmailSettings", () => {
  return proxy.emailingGET(undefined).then((result:any)=>{
      return result;
  })   
});

export const saveEmailSettings = createAsyncThunk("settings/saveEmailSettings", (formData:any) => {
  return proxy.emailingPOST(formData,undefined).then((result:any)=>{
      return result;
  })   
});
export const fetchIdentitySettings = createAsyncThunk("settings/fetchIdentitySettings", () => {
  return proxy.settingsGET2(undefined).then((result:any)=>{
      return result;
  })   
});
export const saveIdentitySettings = createAsyncThunk("settings/saveIdentitySettings", (data:any) => {
  return proxy.settingsPUT2(data,undefined).then((result:any)=>{
      return result;
  })   
});
export const fetchAccountGeneralSettings = createAsyncThunk("settings/saveIdentitySettings", () => {
  return proxy.settingsGET(undefined).then((result:any)=>{
      return result;
  }) 
}); 
  export const fetchTwoFactorSettings = createAsyncThunk("settings/fetchTwoFactorSettings", () => {
    return proxy.twoFactorGET(undefined).then((result:any)=>{
        return result;
    })  
});
export const fetchCaptchaSettings = createAsyncThunk("settings/fetchCaptchaSettings", () => {
  return proxy.recaptchaGET(undefined).then((result:any)=>{
      return result;
  })  
});
export const fetchExternalProviderSettings = createAsyncThunk("settings/fetchExternalProviderSettings", () => {
  return proxy.externalProviderGET2(undefined).then((result:any)=>{
      return result;
  })  
});
export const saveAccountGeneralSettings = createAsyncThunk("settings/saveAccountGeneralSettings", (data:any) => {
  return proxy.settingsPUT(data,undefined).then((result:any)=>{
      return result;
  })   
});
export const saveAccountTwoFactorSettings = createAsyncThunk("settings/saveAccountTwoFactorSettings", (data:any) => {
  return proxy.twoFactorPUT(data,undefined).then((result:any)=>{
      return result;
  })   
});
export const saveAccountCaptchaSettings = createAsyncThunk("settings/saveAccountCaptchaSettings", (data:any) => {
  return proxy.recaptchaPUT(data,undefined).then((result:any)=>{
      return result;
  })   
});
export const saveAccountExternalProviderSettings = createAsyncThunk("settings/saveAccountExternalProviderSettings", (data:any) => {
  return proxy.externalProviderPUT(data,undefined).then((result:any)=>{
      return result;
  })   
});
export const fetchFeaturesSettings = createAsyncThunk("settings/fetchFeaturesSettings ", () => {

  return proxy.featuresGET("T",undefined,undefined).then((result:any)=>{
      return result;
  })  
});
export const saveFeaturesSettings = createAsyncThunk("settings/saveFeaturesSettings ", (data:any) => {
  
  return proxy.featuresPUT("T",undefined, data).then((result:any)=>{
      return result;
  })  
});

export const restoreToDefaultFeaturesSettings = createAsyncThunk("settings/restoreToDefaultFeaturesSettings", (data:any) => {
  
  return proxy.featuresDELETE("T",undefined,undefined).then((result:any)=>{
      return result;
  })  
});

const settingsSlice = createSlice({
  name: "settings",
  initialState :initialStateSettings, 
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmailSettings.pending, (state) => {
      state.loading = true;
    });     

    builder.addCase(
      fetchEmailSettings.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.emailSettings= action.payload;
      }     
    );
    builder.addCase(fetchEmailSettings.rejected, (state, action) => {       
      state.loading = false;            
      state.error = action.error.message || "Something went wrong";     
    });   
    builder.addCase(saveEmailSettings.pending, (state) => {
      state.loading = true;
    });     

    builder.addCase(
      saveEmailSettings.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.emailSettings= action.payload;
      }     
    );
    builder.addCase(saveEmailSettings.rejected, (state, action) => {       
      state.loading = false;            
      state.error = action.error.message || "Something went wrong";     
    }); 

    builder.addCase(fetchIdentitySettings.pending, (state) => {
      state.loading = true;
    });     

    builder.addCase(
      fetchIdentitySettings.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.identitySettings= action.payload;
      }     
    );
    builder.addCase(fetchIdentitySettings.rejected, (state, action) => {       
      state.loading = false;            
      state.error = action.error.message || "Something went wrong";     
    });
     
    builder.addCase(fetchAccountGeneralSettings.pending, (state) => {
      state.loading = true;
    });     

    builder.addCase(
      fetchAccountGeneralSettings.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.accountGeneralSettings= action.payload;
      }     
    );
    builder.addCase(fetchAccountGeneralSettings.rejected, (state, action) => {       
      state.loading = false;            
      state.error = action.error.message || "Something went wrong";     
    });
    
    builder.addCase(fetchTwoFactorSettings.pending, (state) => {
      state.loading = true;
    });     

    builder.addCase(
      fetchTwoFactorSettings.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.accountTwoFactorSettings= action.payload;
      }     
    );
    builder.addCase(fetchTwoFactorSettings.rejected, (state, action) => {       
      state.loading = false;            
      state.error = action.error.message || "Something went wrong";     
    }); 


    builder.addCase(fetchCaptchaSettings.pending, (state) => {
      state.loading = true;
    });     

    builder.addCase(
      fetchCaptchaSettings.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.accountCaptchaSettings= action.payload;
      }     
    );
    builder.addCase(fetchCaptchaSettings.rejected, (state, action) => {       
      state.loading = false;            
      state.error = action.error.message || "Something went wrong";     
    }); 
    
    builder.addCase(fetchExternalProviderSettings .pending, (state) => {
      state.loading = true;
    });     

    builder.addCase(
      fetchExternalProviderSettings .fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.accountExternalProvider= action.payload;
      }     
    );
    builder.addCase(fetchExternalProviderSettings .rejected, (state, action) => {       
      state.loading = false;            
      state.error = action.error.message || "Something went wrong";     
    }); 
    

    builder.addCase(saveAccountGeneralSettings.pending, (state) => {
      state.loading = true;
    });     

    builder.addCase(
      saveAccountGeneralSettings.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.accountGeneralSettings= action.payload;
      }     
    );
    builder.addCase(saveAccountGeneralSettings.rejected, (state, action) => {       
      state.loading = false;            
      state.error = action.error.message || "Something went wrong";     
    }); 


    builder.addCase(fetchFeaturesSettings.pending, (state) => {
      state.loading = true;
    });     

    builder.addCase(
      fetchFeaturesSettings.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.featureIdentitySettings= action.payload;
      }     
    );
    builder.addCase(fetchFeaturesSettings.rejected, (state, action) => {       
      state.loading = false;            
      state.error = action.error.message || "Something went wrong";     
    }); 

    builder.addCase(saveFeaturesSettings.pending, (state) => {
      state.loading = true;
    });     

    builder.addCase(
      saveFeaturesSettings.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.featureIdentitySettings= action.payload;
      }     
    );
    builder.addCase(saveFeaturesSettings.rejected, (state, action) => {       
      state.loading = false;            
      state.error = action.error.message || "Something went wrong";     
    }); 

    builder.addCase(restoreToDefaultFeaturesSettings.pending, (state) => {
      state.loading = true;
    });     

    builder.addCase(
      restoreToDefaultFeaturesSettings.fulfilled,(state, action: PayloadAction<any>) => {
        state.loading = false;
        state.featureIdentitySettings= action.payload;
      }     
    );
    builder.addCase(restoreToDefaultFeaturesSettings.rejected, (state, action) => {       
      state.loading = false;            
      state.error = action.error.message || "Something went wrong";     
    }); 


    

  }, 
});



export default settingsSlice.reducer;