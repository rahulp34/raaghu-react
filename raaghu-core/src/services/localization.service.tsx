import { getAppLocalization } from '../proxy/application-configurations/raaghu-application-localization.service'
import { store } from '../utils/internal-store-utils'
export const localizationService = async (cultureName: any) => {
  try {
    const data = await getAppLocalization({
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
// export const localizationService = (cultureName:any) => {
//     return getAppLocalization({   cultureName: cultureName,
//     onlyDynamics:false   }).then((data) => {
//     store.localization =data;
//     return data;
//    })
//   }
