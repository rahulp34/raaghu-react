import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  ServiceProxy } from "../../shared/service-proxy";

export interface TenantState {
  loading:boolean;
  tenants: any;
  edition:any;
  editTenant:any
  error: string | null;
  feature:any;

}

export const tenantInitialState: TenantState = {
  loading:false,
  tenants: [],
  edition:{items:[]},
  error: null,
  editTenant:null,
  feature:null,

};





const proxy= new ServiceProxy()
 
export const fetchTenant= createAsyncThunk(
  "tenant/fetchTenant",
  ()=>{
    return proxy.tenantsGET2(undefined, undefined, undefined, undefined, undefined, undefined,'id DESC', undefined, 1000).then((result:any)=>{
      console.log("result",result)
      return result.items;
    }
    )
  }
)
 
export const fetchEdition= createAsyncThunk(
  "tenant/fetchEdition",
  ()=>{
    return proxy.editionsGET2(undefined, undefined, undefined, 1000 ).then((result:any)=>{
      return result
    })
  }
  
)

export const createTenant= createAsyncThunk(
  "tenant/createTenant",
  (data:any)=>{
    return proxy.tenantsPOST(data.data).then((result:any)=>{
      return result
    })
  }
)

export const featureTenant= createAsyncThunk(
  "tenant/featureTenant",
  (data:any)=>{
    return proxy.featuresGET("T", "").then((result:any)=>{
      return result
    })
  }
)

export const deleteTenant= createAsyncThunk(
  "tenant/deleteTenant",
  (id:string)=>{
    return proxy.tenantsDELETE(id).then((result:any)=>{
      return result
    })
  }
)


export const editTenant= createAsyncThunk(
  "tenant/editTenant",
  (id:any)=>{
    return proxy.tenantsGET(id).then((result:any)=>{
      return result
    })
  }
)

export const fetchFeature = createAsyncThunk(
  "tenant/fetchFeature",
  (id:any)=>{
    return proxy.tenantsGET(id).then((result:any)=>{
      return result
    })
  }
)

export const editEdition= createAsyncThunk(
  "tenant/editEdition",
  (id:string)=>{
    return proxy.editionsGET(id).then((result:any)=>{
      return result
    })
  }
)

export const tenantPut= createAsyncThunk(
  "tenant/tenantPut",
  (data:any)=>{
    return proxy.tenantsPUT(data.id,data.body).then((result:any)=>{
      return result
    })
  }
)

export const tenantFeaturesGet= createAsyncThunk(
  "tenant/tenantFeaturesGet",
  (data:any)=>{
    return proxy.featuresGET("T",data.id).then((result:any)=>{
      // debugger;
      return result
    })
  }
)

export const saveFeaturesEdition = createAsyncThunk(
  "edition/saveFeaturesEdition",
  (data: any) => { 
    return proxy.featuresPUT("T", data.id, data.body).then((result: any) => {
      return result;
    });
  }
);
export const restoreToDefaultFeaturesEdition = createAsyncThunk(
  "edition/restoreToDefaultFeaturesEdition",
  (id: any) => { 
    return proxy.featuresDELETE("T", id, undefined).then((result: any) => {
      return result;
    });
  }
);
// export const tenantFeaturesPut= createAsyncThunk(
//   "tenant/tenantPut",
//   (data:any)=>{
//     return proxy.featuresPUT(providerName: string | undefined, providerKey: string | undefined, body: UpdateFeaturesDto | undefined, cancelToken?: CancelToken | undefined).then((result:any)=>{
//       return result
//     })
//   }
// )




const tenantSlice= createSlice({
  name:"tenant",
  initialState:tenantInitialState,

  reducers :{},
  extraReducers:(builder)=>{
    builder.addCase(fetchTenant.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      fetchTenant.fulfilled,
      (state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.tenants= action.payload;
        state.error= "";
      }
    );
    builder.addCase(fetchTenant.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message || "Something went wrong";
    })

    builder.addCase(fetchEdition.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      fetchEdition.fulfilled,
      (state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.edition= action.payload;
        state.error= "";
      }
    );
    builder.addCase(fetchEdition.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message || "Something went wrong";
    })

    builder.addCase(createTenant.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      createTenant.fulfilled,
      (state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.error= "";
      }
    );
    builder.addCase(createTenant.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message || "Something went wrong";
    })

    builder.addCase(editTenant.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      editTenant.fulfilled,
      (state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.editTenant= action.payload;
        state.error= "";
      }
    );
    builder.addCase(editTenant.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message || "Something went wrong";
    })

    builder.addCase(editEdition.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      editEdition.fulfilled,
      (state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.editTenant= action.payload;
        state.error= "";
      }
    );
    builder.addCase(editEdition.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message || "Something went wrong";
    })

    builder.addCase(tenantPut.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      tenantPut.fulfilled,
      (state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.editTenant= action.payload;
        state.error= "";
      }
    );
    builder.addCase(tenantPut.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message || "Something went wrong";
    })
     builder.addCase(tenantFeaturesGet.pending,(state)=>{
      state.loading=true;
    });

    builder.addCase(
      tenantFeaturesGet.fulfilled,
      (state,action:PayloadAction<any>)=>{
        state.loading=false;
        state.feature= action.payload;
        state.error= "";
      }
    );
    builder.addCase(tenantFeaturesGet.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.error.message || "Something went wrong";
    })

    
    builder.addCase(saveFeaturesEdition.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      saveFeaturesEdition.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.feature = action.payload;
      }
    );
    builder.addCase(saveFeaturesEdition.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    builder.addCase(restoreToDefaultFeaturesEdition.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(
      restoreToDefaultFeaturesEdition.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.feature = action.payload;
      }
    );
    builder.addCase(
      restoreToDefaultFeaturesEdition.rejected,
      (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      }
    );

    // builder.addCase(tenantFeaturesPut.pending,(state)=>{
    //   state.loading=true;
    // });

    // builder.addCase(
    //   tenantFeaturesPut.fulfilled,
    //   (state,action:PayloadAction<any>)=>{
    //     state.loading=false;
    //     state.editTenant= action.payload;
    //     state.error= "";
    //   }
    // );
    // builder.addCase(tenantFeaturesPut.rejected,(state,action)=>{
    //   state.loading=false;
    //   state.error=action.error.message || "Something went wrong";
    // })
  }
})

export default tenantSlice.reducer;
