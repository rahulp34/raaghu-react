import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AuditLogsService } from "../../proxy/services/AuditLogsService";
import { id } from "date-fns/locale";

type initialState = {
  loading: boolean;
  audits: { items: any[] };
  error: string;
};

const initialState: initialState = {
  loading: false,
  audits: { items: [] },
  error: "",
};


export const auditLogsData = createAsyncThunk(
  "audit/auditLogsData",
  (data: any) => {
    return AuditLogsService.getAuditLogs({
      startTime: data?.startTime,
      endTime: data?.endTime,
      url: data?.url,
      userName: data?.userName,
      applicationName: data?.applicationName,
      clientIpAddress: data?.clientIpAddress,
      correlationId: data?.correlationId,
      httpMethod: data?.httpMethod,
      httpStatusCode: data?.httpStatusCode,
      maxExecutionDuration: data?.maxExecutionDuration,
      minExecutionDuration: data?.minExecutionDuration,
      hasException: data?.hasException,
      sorting: data?.sorting,
      skipCount: 0,
      maxResultCount: 1000,
    });
  }
);

export const auditActionData = createAsyncThunk(
  "audit/auditActionData",
  (id: any) => {
    return AuditLogsService.getAuditLogs1(id).then((result: any) => {
      console.log("result", result);
      return result;
    });
  }
);

const auditSlice = createSlice({
  name: "audit",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(auditLogsData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      auditLogsData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.audits = action.payload;
        state.error = "";
      }
    );

    builder.addCase(auditLogsData.rejected, (state, action) => {
      state.loading = false;
      state.audits = { items: [] };
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(auditActionData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      auditActionData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.audits = action.payload;
        state.error = "";
      }
    );

    builder.addCase(auditActionData.rejected, (state, action) => {
      state.loading = false;
      state.audits = { items: [] };
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default auditSlice.reducer;
