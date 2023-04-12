import axios from 'axios';

 const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '<API_URL>'
});

instance.interceptors.request.use((config:any) => {
  let token = localStorage.getItem('accessToken');
  if (token) {
    var Token = JSON.parse(token)
  }
  if(token){
    config.headers.Authorization = `Bearer ${Token}`;
  }
  return config;
});

export default instance