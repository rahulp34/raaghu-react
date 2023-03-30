// import {
//     FETCH_APPLICATION_MULTITENANCY_REQUEST,
//     FETCH_APPLICATION_MULTITENANCY_SUCCESS,
//     FETCH_APPLICATION_MULTITENANCY_FAILURE,
//   } from '../actions/action.types'
  
//   const initialState = {
//     loading: false,
//     multiTenancy: [] as any,
//     error: ''
//   }
  
//   export default function multiTenancyReducer(state = initialState, action: any) {
//     switch (action.type) {
//       case FETCH_APPLICATION_MULTITENANCY_REQUEST:
//         return {
//           ...state,
//           loading: true
//         }
//       case FETCH_APPLICATION_MULTITENANCY_SUCCESS:
//         return {
//           loading: false,
//           multiTenancy: action.payload,
//           error: ''
//         }
//       case FETCH_APPLICATION_MULTITENANCY_FAILURE:
//         return {
//           loading: false,
//           multiTenancy: [] as any,
//           error: action.payload
//         }
    
//       default:
//         return state
//     }
//   }
  