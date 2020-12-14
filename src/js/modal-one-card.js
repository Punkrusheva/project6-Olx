import openCard from '../templates/modal-one-card.hbs';


const refs = {
    openModalBtn: document.querySelectorAll('.product-card-icon-fullscreen'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),

  };

  refs.openModalBtn.forEach(icon =>
    icon.addEventListener("click", onClickOpenModal)
  );

  refs.closeModalBtn.addEventListener('click', onClickCloseModal);


function onClickOpenModal() {
    console.log('panda');
    try {

        document.body.insertAdjacentHTML("afterbegin", openCard());
    window.addEventListener("keydown", onKeyDown);
    refs.modal.addEventListener("click", onOverlayClick);
    refs.modal.classList.remove("is-hidden");
    }

    catch (error) {
        console.log(error);
    }

  }

function onClickCloseModal() {
    console.log('todo1');
    refs.openModalBtn.forEach(icon =>
        icon.removeEventListener("click", onClickOpenModal)
    );
    console.log('todo1');
    window.removeEventListener("keydown", onKeyDown);
      refs.modal.removeEventListener("click", onOverlayClick);
      modal.remove();

    refs.modal.classList.add("is-hidden");
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