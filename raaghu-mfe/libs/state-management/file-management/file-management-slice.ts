import {
    createSlice,
    createAsyncThunk,
    PayloadAction,
    AnyAction,
  } from "@reduxjs/toolkit";
  import {ServiceProxy} from '../../shared/service-proxy'
 
  
  type fileInitialState = {
    subDirectories: any;
    directoryDescriptor: any;
    editDirectory:any;
    error: string;
    status: "pending" | "loading" | "error" | "success";
  };
  export const fileInitialState: fileInitialState = {
    subDirectories: null,
    directoryDescriptor: null,
    editDirectory:null,
    error: "",
    status: "pending",
  };
  const proxy = new ServiceProxy()
 
   

  export const fetchSubDirectory = createAsyncThunk(
    "FileManagement/fetchSubDirectory",
    (data:any)=>{
      return proxy.subDirectories(data).then((result:any)=>{
        return result;
      })
    }
  );

  export const fetchDirectoryDescriptor = createAsyncThunk(
    "FileManagement/fetchDirectoryDescriptor",
    (data:any)=>{
      return proxy.directoryDescriptorGET2(undefined,undefined,undefined,undefined,1000).then((result:any)=>{
        return result;
      })
    
    }
  );
  
  export const saveDirectoryDescriptor = createAsyncThunk(
    "FileManagement/saveDirectoryDescriptor",
    (data:any)=>{
      return proxy.directoryDescriptorPOST2(data).then((result:any)=>{
        return result;
      })
    }
  );


  export const fetchEditDirectory = createAsyncThunk(
    "FileManagement/fetchEditDirectory",
    (data:any)=>{
      return proxy.directoryDescriptorGET(data).then((result:any)=>{
        return result;
      })
    }
  );

  export const updateDirectoryDescriptor = createAsyncThunk(
    "FileManagement/updateDirectoryDescriptor",
    (data:any)=>{
      return proxy.directoryDescriptorPOST(data.id,data.body).then((result:any)=>{
        return result;
      })
    }
  );

  export const deleteDirectoryDescriptor = createAsyncThunk(
    "FileManagement/deleteDirectoryDescriptor",
    (data:any)=>{
      return proxy.directoryDescriptorDELETE(data).then((result:any)=>{
        return result;
      })
    }
  );
  
  const FileManagementSlice = createSlice({
    name: "FileManagement",
    initialState:fileInitialState,
    reducers:{},
    extraReducers: (builder) => {
      builder.addCase(fetchSubDirectory.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        fetchSubDirectory.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.subDirectories = action.payload;
          state.error = "";
        }
      );
      builder.addCase(fetchSubDirectory.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "Something went wrong";
      });


      builder.addCase(fetchDirectoryDescriptor.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        fetchDirectoryDescriptor.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.directoryDescriptor = action.payload;
          state.error = "";
        }
      );
      builder.addCase(fetchDirectoryDescriptor.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message || "Something went wrong";
      });



      builder.addCase(deleteDirectoryDescriptor.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        deleteDirectoryDescriptor.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.error = "";
        }
      );
      
      
      builder.addCase(updateDirectoryDescriptor.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        updateDirectoryDescriptor.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.error = "";
        }
      );


      builder.addCase(fetchEditDirectory.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        fetchEditDirectory.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.editDirectory = action.payload;
          state.error = "";
        }
      );
      builder.addCase(fetchEditDirectory.rejected, (state, action: PayloadAction<any>) => {
        state.status = "error";
        //state.error = action.error.message || "Something went wrong";
      });
      


      builder.addCase(saveDirectoryDescriptor.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        saveDirectoryDescriptor.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.error = "";
        }
      );

  
    },
  });
  export default FileManagementSlice.reducer;