import { pushError } from './pnotify';

export default async function loginSubmit(log) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(log),
  };

  try {
    await fetch(
      'https://callboard-backend.herokuapp.com/auth/login',
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        if (result.message === 'Password is wrong') {
          pushError(result.message);
        } else if (
          result.message ===
          `User with ${
            JSON.parse(requestOptions.body).email
          } email doesn't exist`
        ) {
          pushError(result.message);
        } else if (result.message === '"email" is not allowed to be empty') {
          pushError(result.message);
        } else if (result.message === '"password" is not allowed to be empty') {
          pushError(result.message);
        } else {
          sessionStorage.setItem('token', result.accessToken);
          sessionStorage.setItem('sid', result.sid);
          sessionStorage.setItem('refresh', result.refreshToken);
          console.log(result.user);
          return result.user;
        }
      })
     
  } catch (error) {
    console.log('error', error);
  }
}
