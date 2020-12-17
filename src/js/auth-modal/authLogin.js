import { loginUser } from './authApi';
import { pushError } from './pnotify';

const registerFormRef = document.querySelector('.auth-form');

registerFormRef.addEventListener('click', async event => {
  if (e.target.classList.contains('js-btn-login')) {
    event.preventDefault();
  
    const { currentTarget: form } = event;
    const formData = new FormData(form);
    const body = {};

    formData.forEach((value, key) => {
      body[key] = value;
    });

    console.log(body);
  
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
  };
}
 );

