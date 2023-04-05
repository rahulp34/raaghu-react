import { getAppConfig } from '../proxy/application-configurations/raaghu-application-configuration.service';
import { store} from '../utils/internal-store-utils';

export const configurationService = async (api_url:any,language:any) => {
  try {
    return await getAppConfig({api_url:api_url,language:language, includeLocalizationResources: false }).then((res:any)=>{
      store.languages = res.localization;
      store.auth = res.auth.grantedPolicies;
      return res;
    })
    
  } catch (error) {
    // Handle error
  return console.log(error)
  }
}


