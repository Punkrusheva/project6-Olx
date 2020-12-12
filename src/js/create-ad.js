

const openModalCreateAdBtn = document.querySelector('[data-create-ad-modal-open]');
const closeModalCreateADBtn = document.querySelector('[data-create-ad-modal-close]');
const createAdModalRef = document.querySelector('[data-create-ad-modal]');

openModalCreateAdBtn.addEventListener('click', openModalCreateAd);
closeModalCreateADBtn.addEventListener('click', closeModalCreateAd)

function openModalCreateAd() {

  // addregisterUser(body)

  // fetchAuthorisLogin(body)
  
  // if (localStorage.getItem('key')) {
    window.addEventListener("keydown", onKeyDown);
    createAdModalRef.addEventListener("click", onOverlayClick);
    createAdModalRef.classList.remove("is-hidden");
  // }
  // else {
  //   //открытие модалки регистрации
  // }
}

console.log(openModalCreateAd())

function closeModalCreateAd() {
    window.removeEventListener("keydown", onKeyDown);
    createAdModalRef.removeEventListener("click", onOverlayClick);
    createAdModalRef.classList.add("is-hidden");
}

function onOverlayClick(event) {
    if (event.currentTarget === event.target) {
      closeModalCreateAd()
    }
}
  
function onKeyDown(event) {
    if (event.code === "Escape") {
      closeModalCreateAd()
    }
}

