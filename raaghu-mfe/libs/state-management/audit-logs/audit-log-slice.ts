import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";
import { id } from "date-fns/locale";

type initialState = {
    loading: boolean;
    audits: { items : any[]};
    error: string;
}

const initialState: initialState = {
    loading: false,
    audits: { items : []},
    error: ""
}

const proxy = new ServiceProxy()

export const auditLogsData = createAsyncThunk('audit/auditLogsData', (data : any) => {
    return proxy.auditLogs (data?.startTime, data?.endTime, data?.url, data?.userName, data?.applicationName, data?.clientIpAddress, data?.correlationId, data?.httpMethod, data?.httpStatusCode,data?. maxExecutionDuration, data?.minExecutionDuration, data?.hasException, data?.sorting, 0, 1000, undefined);
})

export const auditActionData = createAsyncThunk('audit/auditActionData', (id : any) => {
    return proxy.auditLogs2(id).then((result: any) => {    
        console.log("result", result)
        return result
    })
})

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
            state.audits = { items : []};
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
            state.audits = { items : []};
            state.error = action.error.message || "Something went wrong";
        });
    },
});

export default auditSlice.reducer


