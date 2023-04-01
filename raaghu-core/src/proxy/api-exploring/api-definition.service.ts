import { RestService } from "../../services/rest.service";
import {ApplicationApiDescriptionModel,
      ApplicationApiDescriptionModelRequestDto,} from "../models";

export const getAppConfig = async function getAbpApplicationConfigurationService(model: ApplicationApiDescriptionModelRequestDto): Promise<ApplicationApiDescriptionModel> {
  return RestService<ApplicationApiDescriptionModel>(model.api_url, '/api/abp/api-definition', {
    params: {includeTypes: model.includeTypes 
    },
   });
}