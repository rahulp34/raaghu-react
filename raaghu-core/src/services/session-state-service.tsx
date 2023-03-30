import { getToken } from '../proxy/token/connect-token'
import { store } from '../utils/internal-store-utils'

export const sessionService = async (
  api_url: any,
  grant_type: string,
  username: string,
  password: string,
  client_id: string,
  scope: string
) => {
  return await getToken({
    api_url: api_url,
    grant_type: grant_type,
    username: username,
    password: password,
    client_id: client_id,
    scope: scope
  }).then((data: any) => {
    store.accessToken = data.access_token
    return data.access_token
  })
}

export const clearToken = () => {
  store.accessToken = null
}
