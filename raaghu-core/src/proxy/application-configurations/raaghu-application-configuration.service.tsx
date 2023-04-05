import { RestService } from "../../services/rest.service";
import { ApplicationConfigurationDto, ApplicationConfigurationRequestOptions } from "../models";

export const getAppConfig = async function getAbpApplicationConfigurationService(options: ApplicationConfigurationRequestOptions): Promise<ApplicationConfigurationDto> {

  return RestService<ApplicationConfigurationDto>(options.api_url ,'/api/abp/application-configuration', {
    params: {
      includeLocalizationResources: options.includeLocalizationResources
    },
    headers:{
     'accept-language':options.language,
    }
  });
}


