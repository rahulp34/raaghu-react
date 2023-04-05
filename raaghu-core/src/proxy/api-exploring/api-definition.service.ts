import { RestService } from "../../services/rest.service";
import {ApplicationApiDescriptionModel,
      ApplicationApiDescriptionModelRequestDto,} from "../models";

export const getAppConfig = async function getAbpApplicationConfigurationService(options: ApplicationApiDescriptionModelRequestDto): Promise<ApplicationApiDescriptionModel> {
  return RestService<ApplicationApiDescriptionModel>(options.api_url, '/api/abp/api-definition', {
    params: {includeTypes: options.includeTypes 
    },
   });
}