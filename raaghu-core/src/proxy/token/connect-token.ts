import { RestService } from '../../services/rest.service'
import {
  ApplicationConnectTokenDTO,
  ApplicationConnectTokenRequestOptions
} from '../models'

export const getToken = async function getAbpApplicationTokenService(
  options: ApplicationConnectTokenRequestOptions
): Promise<ApplicationConnectTokenDTO> {
 
  return RestService<ApplicationConnectTokenDTO>('/connect/token', {
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

// const requestBody = {
//     grant_type: 'password',
//     username: 'your_username',
//     password: 'your_password',
//     client_id: 'your_client_id',
//     scope: 'address email phone profile roles BookStore'
//   };

//   const config: AxiosRequestConfig = {
//     method: 'POST',
//     url: `${api_url}/connect/token`,
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     data: new URLSearchParams(requestBody).toString()
//   };
// const tokenResponse = await RestService<TokenResponse>(api_url, 'token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     data: requestBody.toString(),
//   });

// const loginHandler = (API_Url:any , email: any, password: any, scope:any, grant_type:any, client_id:any, ) => {
//     const requestBody = {
//       grant_type: "password",
//       username: email, // "admin",
//       password: password, //"1q2w3E*"
//       client_id: "raaghu",
//       scope: "address email phone profile roles BookStore",
//     };
//     fetch("https://raaghu-react.azurewebsites.net/connect/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: new URLSearchParams(requestBody).toString(),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       localStorage.setItem("access_token", JSON.stringify(data.access_token));

//     });
//   };
