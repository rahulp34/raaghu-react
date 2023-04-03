import { RestService } from "../../services/rest.service";
import { ApplicationConfigurationDto, ApplicationConfigurationRequestOptions } from "../models";
// import { store} from "../../utils/internal-store-utils" ;

export const getAppConfig = async function getAbpApplicationConfigurationService(options: ApplicationConfigurationRequestOptions): Promise<ApplicationConfigurationDto> {
  // const token = await store.accessToken;
  // if (token) {
  //   var Token = JSON.parse(token)
  // }
  return RestService<ApplicationConfigurationDto>('/api/abp/application-configuration', {
    params: {
      includeLocalizationResources: options.includeLocalizationResources
    },
    headers:{
     'accept-language':options.language,
    // "Authorization" : `Bearer ${Token}`
    }
  });
}


