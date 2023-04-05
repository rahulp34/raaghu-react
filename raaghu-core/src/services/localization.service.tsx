import { getAppLocalization } from '../proxy/application-configurations/raaghu-application-localization.service'
import { store } from '../utils/internal-store-utils'
export const localizationService = async (api_url:any,cultureName: any) => {
  try {
    const data = await getAppLocalization({
      api_url:api_url,
      cultureName: cultureName,
      onlyDynamics: false
    })
    store.localization = data
    return data
  } catch (error) {
    // Handle error
    return console.log(error)
  }
}
