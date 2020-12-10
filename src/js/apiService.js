export const BASE_URL = 'https://callboard-backend.herokuapp.com/';

//регистрация

export default async function addregisterUser() {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataRegistry),
    };
  
    const response = await fetch(`${url}auth/register`,options);
  const responseJson = await response.json();
  return responseJson
  }

  //авторизация
  export default async function fetchAuthorisLogin(url, dataRegistry) {
    const options = {
  method: 'POST',
  body: JSON.stringify(dataRegistry),
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json',
  },
}
    const response = await fetch(`${url}auth/login`,options);
    const responseJson = await response.json();
    return  localStorage.setItem('key', `${responseJson.accessToken}`);

};