import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type InitialState = {
  allPaymentPlans: any,
  paymentPlan: any,
  allGatewayPlans: any;
  gatewayPlan: any,
  loading: boolean,
  error: string,
}

const initialState: InitialState = {
  allPaymentPlans: {},
  paymentPlan: {},
  allGatewayPlans: {},
  gatewayPlan: {},
  loading: false,
  error: "",
}

const proxy = new ServiceProxy()

// Plans
export const getAllPaymentPlans = createAsyncThunk('PaymentPlans/GetAll', (data: any) => {
  return proxy.plansGET3(data.filter, data.sorting, 0, 1000, data.cancelToken).then((result: any) => {
    return result;
  })
});

export const createNewPlan = createAsyncThunk('PaymentPlans/CreatePlan', (data: any) => {
  return proxy.plansPOST(data.body, data.cancelToken).then((result: any) => {
    return result;
  })
});

export const deletePlan = createAsyncThunk('PaymentPlans/DeletePlan', (data: any) => {
  return proxy.plansDELETE(data.id, data.cancelToken).then((result: any) => {
    return result;
  })
});

export const getPlanById = createAsyncThunk('PaymentPlans/GetPlanById', (data: any) => {
  return proxy.plansGET4(data.id).then((result: any) => {
    return result;
  })
});

export const updatePlan = createAsyncThunk('PaymentPlans/UpdatePlan', (data: any) => {
  return proxy.plansPUT(data.id, data.body, data.cancelToken).then((result: any) => {
    return result;
  })
});

// Gateway Plan
export const createGatewayPlan = createAsyncThunk('PaymentPlans/CreateGatewayPlan', (data: any) => {
  return proxy.externalPlansPOST(data.planId, data.body, data.cancelToken).then((result: any) => {
    return result;
  })
});

export const getAllGatewayPlansByPlanId = createAsyncThunk('PaymentPlans/GetAllGatewayPlansByPlanId', (data: any) => {
  return proxy.externalPlansGET(data.planId, data.filter, data.sorting, data.skipCount, data.maxResultCount, data.cancelToken).then((result: any) => {
    return result;
  })
});

export const deleteGatewayPlan = createAsyncThunk('PaymentPlans/DeleteGatewayPlan', (data: any) => {
  return proxy.externalPlansDELETE(data.planId, data.gateway, data.cancelToken).then((result: any) => {
    return result;
  })
});

export const updateGatewayPlan = createAsyncThunk('PaymentPlans/UpdateGatewayPlan', (data: any) => {
  return proxy.externalPlansPUT(data.planId, data.gateway, data.body, data.cancelToken).then((result: any) => {
    return result;
  })
});


const scopeSlice = createSlice({
  name: 'PaymentPlans',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //Plans
    builder.addCase(getAllPaymentPlans.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getAllPaymentPlans.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.allPaymentPlans = action.payload
      state.error = ''
    });
    builder.addCase(getAllPaymentPlans.rejected, (state, action) => {
      state.loading = false
      state.allPaymentPlans = {}
      state.error = action.error.message || 'Something Went Wrong'
    });

    builder.addCase(createNewPlan.pending, (state) => {
      state.loading = true
    });
    builder.addCase(createNewPlan.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.error = ''
    });
    builder.addCase(createNewPlan.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });

    builder.addCase(deletePlan.pending, (state) => {
      state.loading = true
    });
    builder.addCase(deletePlan.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.error = ''
    });
    builder.addCase(deletePlan.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });

    builder.addCase(getPlanById.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getPlanById.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.paymentPlan = action.payload;
      state.error = ''
    });
    builder.addCase(getPlanById.rejected, (state, action) => {
      state.loading = false;
      state.paymentPlan = {};
      state.error = action.error.message || 'Something Went Wrong'
    });

    builder.addCase(updatePlan.pending, (state) => {
      state.loading = true
    });
    builder.addCase(updatePlan.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = ''
    });
    builder.addCase(updatePlan.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });

    // Gateway Plan
    builder.addCase(createGatewayPlan.pending, (state) => {
      state.loading = true
    });
    builder.addCase(createGatewayPlan.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.error = ''
    });
    builder.addCase(createGatewayPlan.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Something Went Wrong'
    });

    builder.addCase(getAllGatewayPlansByPlanId.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getAllGatewayPlansByPlanId.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.allGatewayPlans = action.payload;
      state.error = ''
    });
    builder.addCase(getAllGatewayPlansByPlanId.rejected, (state, action) => {
      state.loading = false;
      state.allGatewayPlans = {};
      state.error = action.error.message || 'Something Went Wrong'
    });

    builder.addCase(deleteGatewayPlan.pending, (state) => {
      state.loading = true
    });
    builder.addCase(deleteGatewayPlan.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = ''
    });
    builder.addCase(deleteGatewayPlan.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something Went Wrong'
    });

    builder.addCase(updateGatewayPlan.pending, (state) => {
      state.loading = true
    });
    builder.addCase(updateGatewayPlan.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = ''
    });
    builder.addCase(updateGatewayPlan.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something Went Wrong'
    });
  },
})

export default scopeSlice.reducer