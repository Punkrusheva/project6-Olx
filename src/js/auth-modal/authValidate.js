const refs = {
    inpEmail: document.querySelector('#userEmail'),
    inpPassword: document.querySelector('#userPassword'),
    messageEmail: document.querySelector('.email-error'),
    messagePassword: document.querySelector('.password-error'),
};

export default function validateInputs() {
    let result = true;
    if (
      validate(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        refs.inpEmail.value,
      )
    ) {
      valid(refs.inpEmail, refs.messageEmail, '');
    } else {
      notValid(refs.inpEmail, refs.messageEmail, 'Не валідний email');
      result = false;
    }
    if (
      validate(
        /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/g,
        refs.inpPassword.value,
      )
    ) {
      valid(refs.inpPassword, refs.messagePassword, '');
    } else {
      notValid(
        refs.inpPassword,
        refs.messagePassword,
        'Ваш пароль повинен бути від 6 символів, мати великі та маленькі літери і цифри.',
      );
    }
    return result;
  }

  function validate(reg, input) {
    return reg.test(input);
  }

  function notValid(input, element, message) {
    input.classList.add('is-invalid');
    element.innerHTML = message;
  }

  function valid(input, element, message) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    element.innerHTML = message;
  }
