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
    moveDirectory:any;
    error: string;
    status: "pending" | "loading" | "error" | "success";
  };
  export const fileInitialState: fileInitialState = {
    subDirectories: null,
    directoryDescriptor: null,
    moveDirectory:null,
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
      return proxy.directoryDescriptorGET2(undefined,data,undefined,undefined,1000).then((result:any)=>{
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

  export const fetchFileDescriptorId= createAsyncThunk(
    "FileManagement/fetchFileDescriptor",
    (data:any)=>{
      return proxy.fileDescriptorGET(data.id).then((result:any)=>{
        return result;
      })
    }
  )  

  export const updateFileDescriptor= createAsyncThunk(
    "FileManagement/updateFileDescriptor",
    (data:any)=>{
      return proxy.fileDescriptorPOST(data.id,data.body).then((result:any)=>{
        return result
      })
    }
  )

  export const DeleteFileDescriptor= createAsyncThunk(
    "FileManagement/DeleteFileDescriptor",
    (data:any)=>{
      return proxy.fileDescriptorDELETE(data.id).then((result:any)=>{
        return result
      })
    }
  )

  export const fetchFileDescriptor= createAsyncThunk(
    "FileManagement/fetchFileDescriptor",
    (data:any)=>{
      return proxy.fileDescriptorGET2(data.directoryId).then((result:any)=>{
        return result
      })
    }
  )

  export const uploadFileDescriptor= createAsyncThunk(
    "FileManagement/uploadFileDescriptor",
    (data:any)=>{
      return proxy.upload2(data.directoryId, data.name, 
       data.extraProperties,data.file,undefined).then((result:any)=>{
        return result
      })
    }
  )

  export const moveFileDescriptor= createAsyncThunk(
    "FileManagement/moveFileDescriptor",
    (data:any)=>{
      return proxy.movePOST2(data.body, undefined).then((result:any)=>{
        return result
      })
    }
  )

  export const infoFileDescriptor= createAsyncThunk(
    "FileManagement/infoFileDescriptor",
    (data:any)=>{
      return proxy.preUploadInfo(data, undefined).then((result:any)=>{
        return result
      })
    }
  )

  export const fetchFileContentDescriptor= createAsyncThunk(
    "FileManagement/fetchFileContentDescriptor",
    (data:any)=>{
      return proxy.content(data.id, undefined).then((result:any)=>{
        return result
      })
    }
  )

  export const fetchFileTokenDescriptor= createAsyncThunk(
    "FileManagement/fetchFileTokenDescriptor",
    (data:any)=>{
      return proxy.token(data.id, undefined).then((result:any)=>{
        return result
      })
    }
  )

  export const fetchFileDownloadDescriptor= createAsyncThunk(
    "FileManagement/fetchFileDownloadDescriptor",
    (data:any)=>{
      return proxy.download(data.id, data.token).then((result:any)=>{
        return result
      })
    }
  )


  
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

      builder.addCase(uploadFileDescriptor.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(
        uploadFileDescriptor.fulfilled,
        (state, action: PayloadAction<any>) => {
          state.status = "success";
          state.error = "";
        }
      );

  
    },
  });
  export default FileManagementSlice.reducer;