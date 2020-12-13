
import axios from 'axios';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';


export const registerUser = userData => {
  const {email, password } = userData;

  return axios.post(`${BASE_URL}auth/register`, { email, password});
};




