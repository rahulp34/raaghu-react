import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ServiceProxy } from "../../shared/service-proxy";
import { useAppDispatch } from "../../state-management/hooks";
type InitialState = {
  loading: boolean;
  users: any;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  users: [],
  error: "",
};

const proxy = new ServiceProxy();

export const fetchEditionData = createAsyncThunk(
  "edition/fetchEditionData",
  async () => {
    const result = await proxy.editionsGET2(
      undefined,
      "false",
      undefined,
      1000
    );
    console.log("result", result);
    return result;
  }
);

export const deleteEditionData = createAsyncThunk(
  "edition/deleteEditionData",
  async (id: any) => {
    const result = await proxy.editionsDELETE(id);
    return result;
  }
);

export const addEditionData = createAsyncThunk(
  "edition/addEditionData",
  async (value: any) => {
    const result = await proxy.editionsPOST(value);
    return result;
  }
);

export const editEditionData = createAsyncThunk(
  "edition/editEditionData",
  async ({ id, dTo }: { id: any; dTo: any }) => {
    const result = await proxy.editionsPUT(id, dTo);
    return result;
  }
);

const editionSlice = createSlice({
  name: "edition",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEditionData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchEditionData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchEditionData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(deleteEditionData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      deleteEditionData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(deleteEditionData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(addEditionData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      addEditionData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(addEditionData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
    });

    builder.addCase(editEditionData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      editEditionData.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(editEditionData.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Something Went Wrong";
    });
  },
});

export default editionSlice.reducer;
