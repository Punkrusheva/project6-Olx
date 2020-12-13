
import registerUser from './apiService';


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

// -----------------------------------------------------------------
//  function closeModal() {
//       window.addEventListener('click', );
//       модалкарегистраци--El.classList.remove('is-open')
//        модалкарегистрации.innerHTML = ''
//   }



     //function onCloseModal() {
    //     window.removeEventListener('keydown', onEscCloseModal);
    //     modal.classList.remove('is-open');
    //   }
    
// Закрытие модалки клавишей Escape

    // function onEscCloseModal(e) {
    //     if (e.code === 'Escape') {
    //       onCloseModal();
    //     }
    //   }
    // Закрытие модалки кликом на оверлей
    // modal.addEventListener('click', onOverlayAndBtnClick);

    // function onOverlayAndBtnClick(e) {
    //     if (e.target === overlayEl || e.target === closeBtn) {
    //       onCloseModal();
    //     }
    //   }