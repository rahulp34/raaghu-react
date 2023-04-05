import { RestService } from '../../services/rest.service'
import {
  ApplicationConnectTokenDTO,
  ApplicationConnectTokenRequestOptions
} from '../models'

export const getToken = async function getAbpApplicationTokenService(
  options: ApplicationConnectTokenRequestOptions
): Promise<ApplicationConnectTokenDTO> {
 
  return RestService<ApplicationConnectTokenDTO>(options.api_url,'/connect/token', {
    params: {
      grant_type: options.grant_type,
      username: options.username,
      password: options.password,
      client_id: options.client_id,
      scope: options.scope
    },
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: {
      grant_type: options.grant_type,
      username: options.username,
      password: options.password,
      client_id: options.client_id,
      scope: options.scope
    }
  })
}


