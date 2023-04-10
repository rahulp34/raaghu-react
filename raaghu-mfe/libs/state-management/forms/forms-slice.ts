import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  AnyAction,
} from "@reduxjs/toolkit";
import { CreateQuestionDto, ServiceProxy, UpdatePermissionsDto } from "../../shared/service-proxy";
import { unset } from "lodash-es";

type InitialStateForms = {
  loading: boolean;
  forms: any;
  editForms: any;
  formQuestion: any;
  formQuestionEdit: any;
  error: string;
  alert: boolean;
  alertMessage: string;
  success: boolean;
  getSettings:any;
  getResponses:any;
  getResponsesCount:any;
};

export const InitialStateForms: InitialStateForms = {
  loading: false,
  forms: null,
  editForms: null,
  formQuestion: null,
  formQuestionEdit: null,
  error: "",
  alert: false,
  alertMessage: "",
  success: false,
  getSettings:null,
  getResponses:null,
  getResponsesCount:null
};

const proxy = new ServiceProxy();

//effects and actions
export const fetchForms = createAsyncThunk("forms/fetchForms", () => {
  return proxy
    .formsGET(undefined, 'id DESC', 0, 30, undefined)
    .then((result: any) => {
      return result;
    });
});

export const deleteForms = createAsyncThunk(
  "forms/deleteForms",
  (id: string) => {
    return proxy.formsDELETE(id, undefined).then((result: any) => {
      return result;
    });
  }
);

export const Saveforms = createAsyncThunk("forms/Saveforms", (data: any) => {
  return proxy.formsPOST(data, undefined).then((result: any) => {
    return result;
  });
});

export const updateForms = createAsyncThunk(
  "forms/updateForms",
  (data: any) => {
    return proxy.formsPUT(data.id, data.body, undefined).then((result: any) => {
      return result;
    });
  }
);

export const getForms = createAsyncThunk("forms/getForms", (id: string) => {
  return proxy.formsGET2(id, undefined).then((result: any) => {
    return result;
  });
});

//Forms Questions

export const 
SaveformsQuestions = createAsyncThunk(
  "forms/SaveformsQuestions",
  (data:any) => {
    debugger
     let temp :CreateQuestionDto = data.body;
    //  temp.index = data.body.index
    return proxy
      .questionsPOST(data.id, temp, undefined)
      .then((result: any) => {
        return result;
      });
  }
);

export const deleteFormsQuestions = createAsyncThunk(
  "forms/deleteFormsQuestions",
  (id: string) => {
    return proxy.questionsDELETE(id, undefined).then((result: any) => {
      return result;
    });
  }
);

export const updateFormsQuestions = createAsyncThunk(
  "forms/updateFormsQuestions",
  (data: any) => {
    return proxy
      .questionsPUT(data.id, data.body, undefined)
      .then((result: any) => {
        return result;
      });
  }
);

export const getFormsQuestionsForEdit = createAsyncThunk(
  "forms/getFormsQuestionsForEdit",
  (id: string) => {
    return proxy.questionsGET(id, undefined).then((result: any) => {
      return result;
    });
  }
);

export const getAllFormsQuestions = createAsyncThunk(
  "forms/getAllFormsQuestions",
  () => {
    return proxy.questionsAll(undefined, undefined).then((result: any) => {
      return result;
    });
  }
);

export const getAll2FormsQuestions = createAsyncThunk(
  "forms/getAll2FormsQuestions",
  (id: string) => {
    return proxy.questionsAll2(id, undefined, undefined).then((result: any) => {
      return result;
    });
  }
);
export const updateFormsSettings = createAsyncThunk(
  "forms/updateFormsSettings",
  (data: any) => {
    return proxy.settingsPUT2(data.id, data.body, undefined).then((result: any) => {
      return result;
    });
  }
);
export const getFormsSettings = createAsyncThunk(
  "forms/getFormsSettings",
  (id: string) => {
    return proxy.settingsGET3(id, undefined).then((result: any) => {
      return result;
    });
  }
);

//response send
export const SaveFormsSendResponse= createAsyncThunk(
  "forms/SaveFormsSendResponse",
  (data: any) => {
    return proxy.invite(data).then((result: any) => {
      return result;
    });
  }
);

export const getFormsResponses = createAsyncThunk(
  "forms/getFormsResponses",
  (id: string) => {
    return proxy.responsesGET3(id, undefined,undefined,0,30).then((result: any) => {
      return result;
    });
  }
);

export const deleteFormsResponses = createAsyncThunk(
  "forms/deleteFormsResponses",
  (id: string) => {
    return proxy.responsesDELETE2(id, undefined).then((result: any) => {
      return result;
    });
  }
);

export const getFormsResponsesCount = createAsyncThunk(
  "forms/getFormsResponsesCount",
  (id: string) => {
    return proxy.responsesCount(id, undefined).then((result: any) => {
      return result;
    });
  }
);

//reducer
const formsSlice = createSlice({
  name: "forms",
  initialState: InitialStateForms,
  reducers: {},

  extraReducers: (builder) => {
    //get
    builder.addCase(fetchForms.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      fetchForms.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.forms = action.payload;
        
      }
    );

    builder.addCase(fetchForms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    //delete
    builder.addCase(
      deleteForms.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data deleted Successfully";
        state.success = true;
      }
    );

    //Save
    builder.addCase(Saveforms.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      Saveforms.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data added Successfully";
        state.success = true;
      }
    );
    builder.addCase(Saveforms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

    //update
    builder.addCase(updateForms.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(
      updateForms.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.alert = true;
        state.alertMessage = "Data edited successfully";
        state.success = true;
      }
    );
    builder.addCase(updateForms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

    //getUpdate
    builder.addCase(getForms.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getForms.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.editForms = action.payload;
    });
    builder.addCase(getForms.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Somethingwentwrong";
    });

    //Forms Questions
    builder.addCase(getAll2FormsQuestions.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      getAll2FormsQuestions.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.formQuestionEdit = action.payload;
      }
    );

    builder.addCase(getAll2FormsQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });
    
    builder.addCase(getFormsQuestionsForEdit.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      getFormsQuestionsForEdit.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.formQuestion = action.payload;
      }
    );

    builder.addCase(getFormsQuestionsForEdit.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(SaveformsQuestions.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      SaveformsQuestions.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data added Successfully";
        state.success = true;
      }
    );
    builder.addCase(SaveformsQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

    builder.addCase(
      deleteFormsQuestions.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data deleted Successfully";
        state.success = true;
      }
    );
    builder.addCase(updateFormsQuestions.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(
      updateFormsQuestions.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.alert = true;
        state.alertMessage = "Data edited successfully";
        state.success = true;
      }
    );
    builder.addCase(updateFormsQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });
 
    //settings
    builder.addCase(getFormsSettings.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getFormsSettings.fulfilled, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.getSettings= action.payload;
    });
    builder.addCase(getFormsSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Somethingwentwrong";
    });

    builder.addCase(updateFormsSettings.pending, (state) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(
      updateFormsSettings.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.alert = true;
        state.alertMessage = "Data edited successfully";
        state.success = true;
      }
    );
    builder.addCase(updateFormsSettings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something Went Wrong";
      state.alert = true;
      state.alertMessage = "Something Went Wrong";
      state.success = false;
    });

        //Save response
        builder.addCase(SaveFormsSendResponse.pending, (state) => {
          state.loading = true;
        });
    
        builder.addCase(
          SaveFormsSendResponse.fulfilled,
          (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = "";
            state.alert = true;
            state.alertMessage = "Data added Successfully";
            state.success = true;
          }
        );
        builder.addCase(SaveFormsSendResponse.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Something Went Wrong";
          state.alert = true;
          state.alertMessage = "Something Went Wrong";
          state.success = false;
        });

        builder.addCase(getFormsResponses.pending, (state) => {
          state.loading = true;
        });
    
        builder.addCase(getFormsResponses.fulfilled, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.getResponses= action.payload;
        });
        builder.addCase(getFormsResponses.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Somethingwentwrong";
        });

        builder.addCase(getFormsResponsesCount.pending, (state) => {
          state.loading = true;
        });
    
        builder.addCase(getFormsResponsesCount.fulfilled, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.getResponsesCount= action.payload;
        });
        builder.addCase(getFormsResponsesCount.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || "Somethingwentwrong";
        });
        
    builder.addCase(
      deleteFormsResponses.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = "";
        state.alert = true;
        state.alertMessage = "Data deleted Successfully";
        state.success = true;
      }
    );
  },
});

export default formsSlice.reducer;
