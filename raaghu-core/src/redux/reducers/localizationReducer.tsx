import {
    FETCH_APPLICATION_LOCALIZATION_FAILURE,
    FETCH_APPLICATION_LOCALIZATION_REQUEST,
    FETCH_APPLICATION_LOCALIZATION_SUCCESS,
 } from '../actions/action.types'
  
  const initialState = {
    loading: false,
    localization: [] as any,
    error: ''
  }
  
  export default function localizationReducer(state = initialState, action: any) {
    switch (action.type) {
      case FETCH_APPLICATION_LOCALIZATION_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_APPLICATION_LOCALIZATION_SUCCESS:
        return {
          loading: false,
          localization: action.payload.resources,
          error: ''
        }
      case FETCH_APPLICATION_LOCALIZATION_FAILURE:
        return {
          loading: false,
          localization: [] as any,
          error: action.payload
        }
      default:
        return state
    }
  }
  