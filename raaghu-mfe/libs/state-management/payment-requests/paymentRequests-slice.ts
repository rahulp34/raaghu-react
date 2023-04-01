import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";

type InitialState = {
  allPaymentRequests: any,
  paymentRequest: any,
  loading: boolean,
  error: string,
}

const initialState: InitialState = {
  allPaymentRequests: {},
  paymentRequest: {},
  loading: false,
  error: "",
}

const proxy = new ServiceProxy()

export const getAllPaymentRequests = createAsyncThunk('PaymentRequests/GetAll', (data: any) => {
  return proxy.paymentRequests(data.filter, data.creationDateMax, data.creationDateMin, data.paymentType, data.status,
    data.sorting, data.skipCount, data.maxResultCount).then((result: any) => {
    return result;
  })
});

export const getPaymentRequestById = createAsyncThunk('PaymentRequests/GetPaymentRequestById', (data: any) => {
  return proxy.paymentRequests2(data.id).then((result: any) => {
    return result;
  })
});

const scopeSlice = createSlice({
  name: 'PaymentRequests',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPaymentRequests.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getAllPaymentRequests.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.allPaymentRequests = action.payload
      state.error = ''
    });
    builder.addCase(getAllPaymentRequests.rejected, (state, action) => {
      state.loading = false
      state.allPaymentRequests = {}
      state.error = action.error.message || 'Something Went Wrong'
    });

    builder.addCase(getPaymentRequestById.pending, (state) => {
      state.loading = true
    });
    builder.addCase(getPaymentRequestById.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.paymentRequest = action.payload
      state.error = ''
    });
    builder.addCase(getPaymentRequestById.rejected, (state, action) => {
      state.loading = false
      state.paymentRequest = {}
      state.error = action.error.message || 'Something Went Wrong'
    });


  },
})

export default scopeSlice.reducer