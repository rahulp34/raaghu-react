import axios from "axios";

const instance = axios.create({
  baseURL: sessionStorage.getItem("REACT_APP_API_URL") || '<API_URL>',
});

instance.interceptors.request.use((config: any) => {
  let token = sessionStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
