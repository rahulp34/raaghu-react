import axios from 'axios';
import {store} from '../../../raaghu-mfe/libs/raaghu-core'

 const instance = axios.create({
  baseURL: "https://raaghu-react.azurewebsites.net"
});

instance.interceptors.request.use((config:any) => {
  const token = store.accessToken;
  if (token) {
    var Token = JSON.parse(token)
  }
  if(token){
    config.headers.Authorization = `Bearer ${Token}`;
  }
  return config;
});



export default instance
