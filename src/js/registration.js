
import addregisterUser from './apiService';


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

  addregisterUser(body)
    .then(({ data }) => console.log(data))
    .catch(error => {
      alert({
        text: error.response.data.message,
      });
    });
};
registerFormRef.addEventListener('submit', handleRegisterSubmit); 

// -----------------------------------------------------------------
//  function closeModal() {
//       window.addEventListener('click', );
//       модалкарегистраци--El.classList.remove('is-open')
//        модалкарегистрации.innerHTML = ''
//   }