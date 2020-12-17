// import { registerUser } from './authApi';
// import { pushError } from './pnotify';

// const registerFormRef = document.querySelector('.auth-form');
// const handleRegisterSubmit = event => {
//     event.preventDefault();
    
//     const { currentTarget: form } = event;
//     const formData = new FormData(form);
//     const body = {}

//     formData.forEach((value, key) => {
//         body[key] = value;
//     })
//     registerUser(body)
//         .then(({ data }) => {
//             console.log(data);
            
//       localStorage.setItem('token', data.token)
//     })
//         .catch(error => {
//             console.dir(error)
//             pushError(
//       'Цей email вже використовується!',
//     );
//     });
// };


// registerFormRef.addEventListener('submit', handleRegisterSubmit);

import { registerUser, loginUser } from './authApi';
import { pushError } from './pnotify';

const registerFormRef = document.querySelector('.auth-form');
registerFormRef.addEventListener('click', async event => {
        event.preventDefault();
    
        const { currentTarget: form } = event;
        const formData = new FormData(form);
        const body = {}

        formData.forEach((value, key) => {
            body[key] = value;
        })
    if (e.target.classList.contains('js-btn-registr')) {
        registerUser(body)
            .then(({ data }) => {
               console.log(data);
               localStorage.setItem('token', data.token)
            })
            .catch(error => {
                console.dir(error)
                pushError( 'Цей email вже використовується!');
            });
        } else if (e.target.classList.contains('js-btn-login')) { 
    try {
      const { response } = await loginUser(body);
      sessionStorage.setItem('accessToken', response.accessToken);
      sessionStorage.setItem('refreshToken', response.refreshToken);
      sessionStorage.setItem('sid', response.sid);
    }
    catch (error) {
      pushError(
        'Помилка!',
      );
    };
    }
}
)