import {
    FETCH_APPLICATION_CONFIGURATIONS_REQUEST,
    FETCH_APPLICATION_CONFIGURATIONS_SUCCESS,
    FETCH_APPLICATION_CONFIGURATIONS_FAILURE,
  } from '../actions/action.types'
  
  const initialState = {
    loading: false,
    config: [] as any,
    error: ''
  }
  
  export default function configReducer(state = initialState, action: any) {
    switch (action.type) {
      case FETCH_APPLICATION_CONFIGURATIONS_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_APPLICATION_CONFIGURATIONS_SUCCESS:
        return {
          loading: false,
          config: action.payload,
          error: ''
        }
      case FETCH_APPLICATION_CONFIGURATIONS_FAILURE:
        return {
          loading: false,
          config: [] as any,
          error: action.payload
        }
    
      default:
        return state
    }
  }
  