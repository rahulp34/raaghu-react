import { RestService } from "../../services/rest.service";
import { ApplicationLocalizationConfigurationDto, ApplicationLocalizationRequestDto } from "../models";

export const getAppLocalization = async function getAbpApplicationLocalizationService(options: ApplicationLocalizationRequestDto): Promise<ApplicationLocalizationConfigurationDto> {
    
    return RestService<ApplicationLocalizationConfigurationDto>(options.api_url,'/api/abp/application-localization', {
        params: {
            cultureName: options.cultureName, onlyDynamics: options.onlyDynamics
        },
        method: 'GET',
    });
}


