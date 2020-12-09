export const BASE_URL = 'https://callboard-backend.herokuapp.com';

//бяка какя-то

function addregisterUser() {
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