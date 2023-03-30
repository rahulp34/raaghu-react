import { RestService } from "../../services/rest.service";
import { ApplicationLocalizationConfigurationDto, ApplicationLocalizationRequestDto } from "../models";
// import { store} from "../../utils/internal-store-utils" ;

export const getAppLocalization = async function getAbpApplicationLocalizationService(options: ApplicationLocalizationRequestDto): Promise<ApplicationLocalizationConfigurationDto> {
    // const token = store.accessToken;
    // if (token) {
    //   var Token = JSON.parse(token)
    // }
    return RestService<ApplicationLocalizationConfigurationDto>('/api/abp/application-localization', {
        params: {
            cultureName: options.cultureName, onlyDynamics: options.onlyDynamics
        },
        method: 'GET',
        // headers:{
        //     "Authorization" : `Bearer ${Token}`
        // }
    });
}


