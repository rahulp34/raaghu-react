import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { result } from "lodash-es";
import { ServiceProxy } from "../../shared/service-proxy";


type InitialStateMyAccount = {
    loading: boolean,
    personalInfo:any,
    changePasswordData:any
    error:string
};

 export const initialStateMyAccount:InitialStateMyAccount={
    loading:false,
    personalInfo:null,
    changePasswordData:null,
    error:""
 }

  const myAccountService=new ServiceProxy();

  export const fetchMyProfile = createAsyncThunk(
    "myProfile/fetchMyProfile",()=>{
    return myAccountService.myProfileGET(undefined).then((result:any)=>{
        return result;
    })
    }
  )
  

  export const saveMyProfile = createAsyncThunk(
    "myProfile/saveMyProfile",(data:any)=>{
    return myAccountService.myProfilePUT(data).then((result:any)=>{
        return result;
    })
    }
  )

  export const sendEmailVerifyProfile = createAsyncThunk(
    "myProfile/sendEmailVerifyProfile",(data:any)=>{
    return myAccountService.sendEmailConfirmationToken(data).then((result:any)=>{
        return result;
    })
    }
  )

  export const changepasswordProfile = createAsyncThunk(
    "myProfile/changepasswordProfile",(data:any)=>{
    return myAccountService.changePasswordPOST(data).then((result:any)=>{
        return result;
    })
    }
  )

  const myAccount = createSlice({
    name: "myAccount",
    initialState: initialStateMyAccount,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(saveMyProfile.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(
        saveMyProfile.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          state.personalInfo= action.payload;
        }     
      );
      builder.addCase(saveMyProfile.rejected, (state, action) => {       
        state.loading = false;            
        state.error = action.error.message || "Something went wrong";     
      });   

      builder.addCase(fetchMyProfile.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(
        fetchMyProfile.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          state.personalInfo= action.payload;
        }     
      );
      builder.addCase(fetchMyProfile.rejected, (state, action) => {       
        state.loading = false;            
        state.error = action.error.message || "Something went wrong";     
      });   

      builder.addCase(sendEmailVerifyProfile.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(
        sendEmailVerifyProfile.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          state.personalInfo= action.payload;
        }     
      );
      builder.addCase(sendEmailVerifyProfile.rejected, (state, action) => {       
        state.loading = false;            
        state.error = action.error.message || "Something went wrong";     
      });   

      builder.addCase(changepasswordProfile.pending, (state) => {
        state.loading = true;
      });
  
      builder.addCase(
        changepasswordProfile.fulfilled,(state, action: PayloadAction<any>) => {
          state.loading = false;
          state.changePasswordData= action.payload;
        }     
      );
      builder.addCase(changepasswordProfile.rejected, (state, action) => {       
        state.loading = false;            
        state.error = action.error.message || "Something went wrong";     
      });   
    },
  });

  export default myAccount.reducer;

