const BASE_URL = 'https://callboard-backend.herokuapp.com/';

//регистрация пользователя

export default async function addregisterUser() {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataRegistry),
    };
  
    const response = await fetch(`${BASE_URL}auth/register`,options);
  const responseJson = await response.json();
  return responseJson
  }

  //авторизация и получение токина и id
  export default async function fetchAuthorisLogin(BASE_URL, dataRegistry) {
    const options = {
  method: 'POST',
  body: JSON.stringify(dataRegistry),
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json',
  },
}
    const response = await fetch(`${BASE_URL}auth/login`,options);
    const responseJson = await response.json();
    return  localStorage.setItem('key', `${responseJson.accessToken}`);

};