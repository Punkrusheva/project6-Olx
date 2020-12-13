 export function onClickOpenModal() {
    window.addEventListener("keydown", onKeyDown);
    refs.modal.addEventListener("click", onOverlayClick);
    refs.modal.classList.remove("is-hidden");
  };

  export function onClickCloseModal() {
    window.removeEventListener("keydown", onKeyDown);
    refs.modal.removeEventListener("click", onOverlayClick);
    refs.modal.classList.add("is-hidden");
  };

  export function onOverlayClick(event) {
    if (event.currentTarget === event.target) {
      onClickCloseModal()
    }
  };
  export function onKeyDown(event) {
    if (event.code === "Escape") {
      onClickCloseModal()
    }
};
export{onKeyDown, onOverlayClick,onClickCloseModal,onClickOpenModal};