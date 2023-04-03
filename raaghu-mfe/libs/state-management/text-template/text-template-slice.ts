import { TextTemplate } from "./text-template.models";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";
import { ServiceProxy, UpdateTemplateContentInput } from "../../shared/service-proxy";
import { isNullOrUndef } from "chart.js/dist/helpers/helpers.core";
import { useDispatch } from "react-redux";

export interface TextTemplateState {
  textTemplate: any;
  templateData: any;
  languages: any;
  error: string | null;
  loading: boolean;
}

export const textTemplateInitialState: TextTemplateState = {
  textTemplate: { items: [] },
  templateData: null,
  languages: null,
  error: null,
  loading: false,
};

const proxy = new ServiceProxy();

export const getAllTemplates = createAsyncThunk("TextTemplate/GetAllTemplates", () => {
  return proxy.templateDefinitions(undefined, undefined, 0, 10).then((result:any) => {
    return result;
  });
});

export const getTemplateContent = createAsyncThunk("TextTemplate/GetTemplate", (data: any) => {
  return proxy.templateContentsGET(data.template, data.culture).then((result:any) => {
    return result;
  })
});

export const saveTemplateContent = createAsyncThunk("TextTemplate/SaveTemplate", (data: any) => {
  return proxy.templateContentsPUT(data).then((result:any) => {
    return result;
  })
});

export const restoreToDefault = createAsyncThunk("TextTemplate/RestoreToDefault", (data: any) => {
  return proxy.restoreToDefault(data).then((result:any) => {
    return result;
  }).then(() => {
    return proxy.templateContentsGET(data.templateName, undefined).then((result:any) => {
      return result;
    })
  })
});

export const allLanguagesCulture = createAsyncThunk("TextTemplate/AllLanguagesCulture", () => {
  return proxy.applicationConfiguration(false).then((result:any) => {
    return result;
  })
});



const textTemplateSlice = createSlice({
  name: "TextTemplate",
  initialState: textTemplateInitialState,
  reducers: {
    // getTextTemplates: (state) => {
    //   state.loading = true;
    // },
    // getTextTemplateSuccess: (state, action: PayloadAction<TextTemplate>) => {
    //   (state.loading = false), (state.textTemplate = action.payload);
    // },
    // getTextTemplateFailure: (state, action: PayloadAction<string>) => {
    //   (state.loading = false), (state.error = action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllTemplates.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllTemplates.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.textTemplate = action.payload;
    });
    builder.addCase(getAllTemplates.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Someting went wrong';
    });

    builder.addCase(getTemplateContent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getTemplateContent.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.templateData = action.payload;
    });
    builder.addCase(getTemplateContent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Someting went wrong';
    });

    builder.addCase(restoreToDefault.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(restoreToDefault.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.templateData = action.payload;
    });
    builder.addCase(restoreToDefault.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Someting went wrong';
    });

    builder.addCase(saveTemplateContent.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveTemplateContent.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
    });
    builder.addCase(saveTemplateContent.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Someting went wrong';
    });

    builder.addCase(allLanguagesCulture.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(allLanguagesCulture.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.languages = action.payload;
    });
    builder.addCase(allLanguagesCulture.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Someting went wrong';
    });
  }
});


export default textTemplateSlice.reducer;