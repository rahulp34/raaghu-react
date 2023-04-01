import {
  fetchApplicationConfigurationsRequest,
  fetchApplicationConfigurationsSuccess,
  fetchApplicationConfigurationsFailure,
  fetchApplicationLocalizationFailure,
  fetchApplicationLocalizationRequest,
  fetchApplicationLocalizationSuccess,
  // fetchApplicationMultiTenancyFailure,
  // fetchApplicationMultiTenancyRequest,
  // fetchApplicationMultiTenancySuccess,
} from '.'
import { getAppConfig } from '../../proxy/application-configurations/raaghu-application-configuration.service'
import { getAppLocalization } from '../../proxy/application-configurations/raaghu-application-localization.service'
// import { getTenantByName } from '../../proxy/multi-tenancy/raaghu-multi-tenancy-tenant.service'

export const fetchApplicationConfigurations = () => {
  return async (dispatch: any) => {
    dispatch(fetchApplicationConfigurationsRequest())
    try {
      getAppConfig({api_url:'https://localhost:44311',  includeLocalizationResources: false })
        .then((response) => {
          dispatch(fetchApplicationConfigurationsSuccess(response))
          dispatch(
            fetchApplicationLocalization(
              response.localization.currentCulture.cultureName,
              false
            )
          )
        })
        .catch((error) => {
          dispatch(fetchApplicationConfigurationsFailure(error))
        })
    } catch (error) {
      dispatch(fetchApplicationConfigurationsFailure(error))
    }
  }
}

export const fetchApplicationLocalization = (
  cultureName: any,
  onlyDynamics: any
) => {
  return async (dispatch: any) => {
    dispatch(fetchApplicationLocalizationRequest())
    try {
      getAppLocalization({ api_url:'https://localhost:44311',cultureName, onlyDynamics })
        .then((response) => {
          dispatch(fetchApplicationLocalizationSuccess(response))
        })
        .catch((error) => {
          dispatch(fetchApplicationLocalizationFailure(error))
        })
    } catch (error) {
      dispatch(fetchApplicationLocalizationFailure(error))
    }
  }
}

// export const fetchMultiTenancy = (name: string ) => {
//   return async (dispatch: any) => {
//     dispatch(fetchApplicationMultiTenancyRequest())
//     try {
//       getTenantByName( { name } )
//         .then((response:any) => {
//           dispatch(fetchApplicationMultiTenancySuccess(response))
//         })
//         .catch((error:any) => {
//           dispatch(fetchApplicationMultiTenancyFailure(error))
//         })
//     } catch (error) {
//       dispatch(fetchApplicationMultiTenancyFailure(error))
//     }
//   }
// }

