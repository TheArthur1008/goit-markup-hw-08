(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", closeModal);
  refs.backdrop.addEventListener("click", onBackdropClick);

  function openModal() {
    window.addEventListener("keydown", onEscapePress);
    refs.modal.classList.remove("is-hidden");
  };

  function closeModal() {
    window.removeEventListener("keydown", onEscapePress);
    refs.modal.classList.add("is-hidden");
  };



  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  }

  function onEscapePress(event) {
    closeModal();
  }
})();