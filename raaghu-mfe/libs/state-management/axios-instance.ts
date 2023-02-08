import axios from 'axios';



const credentials = localStorage.getItem("LoginCredential");
if (credentials) {
  var parsedCredentials = JSON.parse(credentials);
}

const instance = axios.create({
  baseURL: 'https://anzdemoapi.raaghu.io',
  headers: {
    Authorization: "Bearer " + `${parsedCredentials.token?parsedCredentials.token:""}`, //the token is a variable which holds the token
  },
});

export default instance;