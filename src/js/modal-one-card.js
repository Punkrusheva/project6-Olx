import openCard from '../templates/modal-one-card.hbs';
console.log(openCard);

document.body.addEventListener('click', modalOperations, )



async function modalOperations(evt) {

    const aboutSellerContOpened = document.querySelector(
        '.modal-button-box-info');

    const aboutSellerContClosed = document.querySelector('.modal-button-box');

    const mainModalPhoto = document.querySelector('.main-modal-product-photo');

    if (evt.target.classList.contains('product-card-icon-fullscreen')) {
        refs.backdrop.classList.remove('is-hidden');
    }

    if (evt.target.classList.contains('product-photo-list-item-img'))
    return changePhoto(evt);

    if (evt.target.classList.contains('modal-button-box')) {
        {
            aboutSellerContClosed.style.opacity = '0';
            aboutSellerContOpened.style.opacity = '1';

            setTimeout(() => {
                console.log(aboutSellerContClosed);
                aboutSellerContClosed.style.opacity = '1';
                aboutSellerContOpened.style.opacity = '0';
            }, 2500);
          }
    };

    // if (evt.target.nodeName === 'SPAN') return;
    // if (evt.target.nodeName === 'BUTTON') return;

    if (evt.target.classList.contains("button-close")) {
        console.log('what');
        refs.backdrop.classList.add("is-hidden");
        }
}

function changePhoto(evt) {
    mainModalPhoto.src = evt.target.src;
  }

const refs = {
    openModalBtn: document.querySelectorAll('.product-card-icon-fullscreen'),
    // parentCloseModalBtn: document.querySelector('.open-card'),
    сloseModalBtn: document.querySelector('[data-close]'),
    modal: document.querySelector('[data-modal-one]'),
    cont: document.getElementsByTagName('.open-card'),
    backdrop: document.querySelector('.backdrop-modal-product'),

  };

async function startListening() {
  refs.openModalBtn.forEach( icon =>
    icon.addEventListener("click", onClickOpenModal)
  );
}

function onClickOpenModal(ev) {

  ev.preventDefault();

    try {
        refs.cont.insertAdjacentHTML("afterbegin", openCard());
    window.addEventListener("keydown", onKeyDown);
    refs.modal.addEventListener("click", onOverlayClick);
      refs.modal.classList.remove("is-hidden");

    }

    catch (error) {
        console.log(error);
    }

}

console.log('refs.cont=', refs.cont);

refs.cont.addEventListener('click', onClickCloseModal);

function onClickCloseModal(e) {
  e.preventDefault();

  if (e.target.classList.contains("close-form")) {
    console.log('what');
    }
    // refs.openModalBtn.forEach(icon =>
    //     icon.removeEventListener("click", onClickOpenModal)
    // );
    // console.log('todo1');
    // window.removeEventListener("keydown", onKeyDown);
    //   refs.modal.removeEventListener("click", onOverlayClick);
    //   modal.remove();

    // refs.modal.classList.add("is-hidden");
  }

  function onOverlayClick(event) {
    if (event.currentTarget === event.target) {
      onClickCloseModal()
    }
  }

  function onKeyDown(event) {
    if (event.code === "Escape") {
      onClickCloseModal()
    }
}