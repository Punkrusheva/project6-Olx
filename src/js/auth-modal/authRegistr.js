import { pushError } from './pnotify';

export default async function registerSubm(log) {
    const regOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(log)
    };
  
   try {
      fetch("https://callboard-backend.herokuapp.com/auth/register", regOptions)
        .then(response => response.json())
        .then(result => {
          if (result.message === `User with ${JSON.parse(regOptions.body).email} email already exists`) {
            pushError(result.message)
          }
          else if (result.message === '"email" is not allowed to be empty') {
            pushError(result.message)
          }
          else if (result.message === '"password" is not allowed to be empty'){
            pushError(result.message)
          }
          else {
            console.log(result)
          }
        })
    }
    catch (error) { console.log('error', error) };
  }
