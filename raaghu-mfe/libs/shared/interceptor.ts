import axios from 'axios';


const instance = axios.create({
<<<<<<< HEAD
  baseURL: 'https://localhost:44346',
=======
  // baseURL: 'https://abpdemoapi.raaghu.io/',
  baseURL: 'https://localhost:44347',
  // baseURL: process.env.REACT_APP_API_URL,
>>>>>>> a1927f99b1c4f5f7f2483d0112fb2d1dd5e8c0b1
});

instance.interceptors.request.use((config) => {
  let token = localStorage.getItem('access_token');
  if(token){
    var Token = JSON.parse(token) 
  }
  

  if (token) {
    config.headers.Authorization = `Bearer ${Token}`;
  }

  return config;
});

export default instance;



