let activeModal;
for (let modalTrigger of document.querySelectorAll('.js-open')) {
    modalTrigger.addEventListener('click', openModal);
}

function openModal(e) {
    e.preventDefault();
    const modalId = e.target.dataset.modal;
    openPopup(modalId);
}

function openPopup(modalId) {
    const modal = document.querySelector(`.modal__wrapper[data-modal="${modalId}"]`);
    if (activeModal) closeModal(activeModal);
    activeModal = modal;
    modal.classList.add('modal__wrapper_open');
    addCloseModalHandler(modal);
    disableWindowScroll(true);
}

function addCloseModalHandler(modal) {
    const eventParams = {
        once: true
    };
    modal.querySelector('.js-close').addEventListener('click', () =>
        closeModal(modal), eventParams);

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) closeModal(modal);
    }, eventParams)

    window.addEventListener('keydown', function (event) {
        if (event.code == 'Escape') closeModal(modal);
    }, eventParams);

}

function closeModal(modal) {
    activeModal.classList.remove('modal__wrapper_open');
    disableWindowScroll(false);
}

function disableWindowScroll(flag) {
    if (flag)
        document.documentElement.classList.add('scroll-disabled');
    else
        document.documentElement.classList.remove('scroll-disabled');
}