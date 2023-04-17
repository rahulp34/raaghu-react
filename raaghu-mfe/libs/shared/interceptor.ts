import axios from 'axios';

 const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://raaghu-react.azurewebsites.net'
});

instance.interceptors.request.use((config:any) => {
  let token = sessionStorage.getItem('accessToken');

  if(token){
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance