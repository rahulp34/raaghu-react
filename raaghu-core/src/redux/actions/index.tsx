import {
  FETCH_APPLICATION_CONFIGURATIONS_FAILURE,
  FETCH_APPLICATION_CONFIGURATIONS_REQUEST,
  FETCH_APPLICATION_CONFIGURATIONS_SUCCESS,
  FETCH_APPLICATION_LOCALIZATION_FAILURE,
  FETCH_APPLICATION_LOCALIZATION_REQUEST,
  FETCH_APPLICATION_LOCALIZATION_SUCCESS,
  FETCH_APPLICATION_MULTITENANCY_FAILURE,
  FETCH_APPLICATION_MULTITENANCY_REQUEST,
  FETCH_APPLICATION_MULTITENANCY_SUCCESS,
} from './action.types'

export const fetchApplicationConfigurationsRequest = () => {
  return {
    type: FETCH_APPLICATION_CONFIGURATIONS_REQUEST
  }
}

export const fetchApplicationConfigurationsSuccess = (data: any) => {
  return {
    type: FETCH_APPLICATION_CONFIGURATIONS_SUCCESS,
    payload: data
  }
}

export const fetchApplicationConfigurationsFailure = (error: any) => {
  return {
    type: FETCH_APPLICATION_CONFIGURATIONS_FAILURE,
    payload: error
  }
}

export const fetchApplicationLocalizationRequest = () => {
  return {
    type: FETCH_APPLICATION_LOCALIZATION_REQUEST
  }
}

export const fetchApplicationLocalizationSuccess = (data: any) => {
  return {
    type: FETCH_APPLICATION_LOCALIZATION_SUCCESS,
    payload: data
  }
}

export const fetchApplicationLocalizationFailure = (error: any) => {
  return {
    type: FETCH_APPLICATION_LOCALIZATION_FAILURE,
    payload: error
  }
}

export const fetchApplicationMultiTenancyRequest = () => {
  return {
    type: FETCH_APPLICATION_MULTITENANCY_REQUEST
  }
}

export const fetchApplicationMultiTenancySuccess = (data: any) => {
  return {
    type: FETCH_APPLICATION_MULTITENANCY_SUCCESS,
    payload: data
  }
}

export const fetchApplicationMultiTenancyFailure = (error: any) => {
  return {
    type: FETCH_APPLICATION_MULTITENANCY_FAILURE,
    payload: error
  }
}