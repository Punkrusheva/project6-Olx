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
            alert({
              title: "Pеєстрація пройшла успішно, натисніть кнопку 'Увійти'",
              delay: 200
            })
          }
        })
    }
    catch (error) { console.log('error', error) };
  }

// // const registerFormRef = document.querySelector('.auth-form');
// export default function registerSubmit(event) {
//     // event.preventDefault();
    
//     // const { currentTarget: form } = event;
//     // const formData = new FormData(form);
//     const body = {}

//     formData.forEach((value, key) => {
//         body[key] = value;
//     })
//     registerUser(body)
//         .then(({ data }) => {
//             console.log(data);
            
//       sessionStorage.setItem('token', data.token)
//     })
//         .catch(error => {
//             console.dir(error)
//             pushError(
//       'Цей email вже використовується!',
//     );
//     });
// };


// registerFormRef.addEventListener('submit', registerSubmit);

// import { registerUser, loginUser } from './authApi';
// import { pushError } from './pnotify';

// const registerFormRef = document.querySelector('.auth-form');
// registerFormRef.addEventListener('click', async event => {
//         event.preventDefault();
    
//         const { currentTarget: form } = event;
//         const formData = new FormData(form);
//         const body = {}

//         formData.forEach((value, key) => {
//             body[key] = value;
//         })
//     if (e.target.classList.contains('js-btn-registr')) {
//         registerUser(body)
//             .then(({ data }) => {
//                console.log(data);
//                localStorage.setItem('token', data.token)
//             })
//             .catch(error => {
//                 console.dir(error)
//                 pushError( 'Цей email вже використовується!');
//             });
//         } else if (e.target.classList.contains('js-btn-login')) { 
//     try {
//       const { response } = await loginUser(body);
//       sessionStorage.setItem('accessToken', response.accessToken);
//       sessionStorage.setItem('refreshToken', response.refreshToken);
//       sessionStorage.setItem('sid', response.sid);
//     }
//     catch (error) {
//       pushError(
//         'Помилка!',
//       );
//     };
//     }
// }
// )