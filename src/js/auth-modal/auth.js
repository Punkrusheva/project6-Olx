import registerSubm from './authRegistr';
import loginSubmit from './authLogin';
import validateInputs from './authValidate';

const registerFormRef = document.querySelector('.auth-form');
const modal = document.querySelector('[data-modal]');

const handleRegisterSubmit = event => {
  event.preventDefault();

  const { currentTarget: form } = event;
  const formData = new FormData(form);
  const body = {};

  formData.forEach((value, key) => {
    body[key] = value;
  })
  if (validateInputs()) {
    if (event.target.classList.contains('js-btn-registr')) {
      registerSubm(body);
      modal.classList.add("is-hidden");
    } else if (event.target.classList.contains('js-btn-login')) {
      loginSubmit(body);
      modal.classList.add("is-hidden");
    }
  }
}

registerFormRef.addEventListener('click', handleRegisterSubmit)