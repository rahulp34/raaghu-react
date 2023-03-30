import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type InitialState = {
    personalData: { items : any[]};
     // permission:any;
    // allClaims:any;
    // claims:any;
    error: string;
    status: "pending" | "loading" | "error" | "success";
};

export const initialState: InitialState = {
    personalData: { items : []},
    // permission:[],
    // allClaims:null,
    // claims:null,
    error: "",
    status: "pending",
};

const proxy = new ServiceProxy()

export const getPersonalData = createAsyncThunk(
    "PersonalData/getPersonalData",
    async (userId: any) => {
        return proxy.list(userId, undefined, undefined, undefined, undefined).then(
            (result: any) => {
                console.log('fetched data , ', result.items)
                return result;

            }
        );
    }
);
export const requestPersonalData = createAsyncThunk(
    "PersonalData/requestPersonalData",
    async () => {
        return proxy.prepareData(undefined).then(
            (result: any) => {
                console.log('fetched data , ', result.items)
                return result.items

            }
        );
    }
);

export const deletePersonalData = createAsyncThunk(
    "PersonalData/deletePersonalData",
    async () => {
        return proxy.requestsDELETE(undefined).then(
            (result: any) => {
                console.log('fetched data , ', result.items)
                return result.items

            }
        );
    }
);

export const downloadTokenPersonalData = createAsyncThunk(
    "PersonalData/downloadTokenPersonalData",
    async () => {
        return proxy.downloadToken(undefined).then(
            (result: any) => {
                console.log('fetched data , ', result.items)
                return result.items

            }
        );
    }
);








const PersonalDataSlice = createSlice({
    name: "PersonalData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(requestPersonalData.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(
            requestPersonalData.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.status = "success";
                state.personalData = action.payload;
                state.error = "";
            }
        );
        builder.addCase(requestPersonalData.rejected, (state, action) => {
            state.status = "error";
            state.personalData = { items : []};;
            state.error = action.error.message || "Something went wrong";
        });

        builder.addCase(getPersonalData.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(
            getPersonalData.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.status = "success";
                state.personalData = action.payload;
                state.error = "";
            }
        );
        builder.addCase(getPersonalData.rejected, (state, action) => {
            state.status = "error";
            state.personalData = { items : []};;
            state.error = action.error.message || "Something went wrong";
        });


        builder.addCase(deletePersonalData.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(
            deletePersonalData.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.status = "success";
                state.personalData = action.payload;
                state.error = "";
            }
        );
        builder.addCase(deletePersonalData.rejected, (state, action) => {
            state.status = "error";
            state.personalData = { items : []};;
            state.error = action.error.message || "Something went wrong";
        });


        builder.addCase(downloadTokenPersonalData.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(
            downloadTokenPersonalData.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.status = "success";
                state.personalData = action.payload;
                state.error = "";
            }
        );
        builder.addCase(downloadTokenPersonalData.rejected, (state, action) => {
            state.status = "error";
            state.personalData = { items : []};;
            state.error = action.error.message || "Something went wrong";
        });

        
    }

});
export default PersonalDataSlice.reducer;