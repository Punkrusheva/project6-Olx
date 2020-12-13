import axios from 'axios';
const BASE_URL = 'https://callboard-backend.herokuapp.com/';


export const registerUser = userData => {
  const {email, password } = userData;

  return axios.post(`${BASE_URL}auth/register`, { email, password});
}

//регистрация

// export default async function addregisterUser() {
//     const options = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(user),
//     };
    
//     const response = await fetch(`${BASE_URL}auth/register`,options);
//   const responseJson = await response.json();
//   return responseJson
//   }
 
//   //авторизация
//   export  async function fetchAuthorisLogin(BASE_URL, dataRegistry) {
//     const options = {
//   method: 'POST',
//   body: JSON.stringify(dataRegistry),
//   headers: {
//     'Content-Type': 'application/json',
//     'accept': 'application/json',
//   },
// }
//     const response = await fetch(`${BASE_URL}auth/login`,options);
//     const responseJson = await response.json();
//     return  localStorage.setItem('key', `${responseJson.accessToken}`);

// }; 