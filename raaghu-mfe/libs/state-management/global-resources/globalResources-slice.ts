import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type InitialState = {
  style: any;
  script: any;
  globalResources: any;
  loading: boolean,
  error: string,
}

const initialState: InitialState = { 
  style: {},
  script: {},
  globalResources: {},
  loading: false,
  error: "",
}

const proxy = new ServiceProxy()

export const getStyle = createAsyncThunk('GlobalResources/GetStyle', () => {
  return proxy.style().then((result: any) => {
    return result;
  })
});

export const getScript = createAsyncThunk('GlobalResources/GetScript', () => {
  return proxy.script().then((result: any) => {
    return result;
  })
});

export const getGlobalResources = createAsyncThunk('GlobalResources/GetGlobalResources', () => {
  return proxy.globalResourcesGET().then((result: any) => {
    return result;
  })
});

export const saveGlobalResources = createAsyncThunk('GlobalResources/SaveGlobalResources', (data: any) => {
  return proxy.globalResourcesPOST(data.body).then((result: any) => {
    return result;
  })
});

const scopeSlice = createSlice({
  name: 'Blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStyle.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getStyle.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.style = action.payload;
      state.error = '';
    });
    builder.addCase(getStyle.rejected, (state, action) => {
      state.loading = false;
      state.style = {};
      state.error = action.error.message || 'Something Went Wrong';
    });

    builder.addCase(getScript.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getScript.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.script = action.payload;
      state.error = '';
    });
    builder.addCase(getScript.rejected, (state, action) => {
      state.loading = false;
      state.script = {};
      state.error = action.error.message || 'Something Went Wrong';
    });

    builder.addCase(saveGlobalResources.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveGlobalResources.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = '';
    });
    builder.addCase(saveGlobalResources.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something Went Wrong';
    });

    builder.addCase(getGlobalResources.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGlobalResources.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.globalResources = action.payload;
      state.error = '';
    });
    builder.addCase(getGlobalResources.rejected, (state, action) => {
      state.loading = false;
      state.globalResources = {};
      state.error = action.error.message || 'Something Went Wrong';
    });

  },
})

export default scopeSlice.reducer