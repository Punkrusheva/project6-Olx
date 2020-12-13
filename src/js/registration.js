


import {registerUser} from './apiService';


const registerFormRef = document.querySelector('.auth-form'); 
const handleRegisterSubmit = event => {
  event.preventDefault();
  const { currentTarget: form } = event;
  const formData = new FormData(form);
  const body = {};
console.log(formData)
  formData.forEach((value, key) => {
    body[key] = value;
  });

  registerUser(body)
    .then(({ data }) => console.log(data))
    .catch(error => {
      alert({
        error
      });
    });
};
registerFormRef.addEventListener('submit', handleRegisterSubmit); 


