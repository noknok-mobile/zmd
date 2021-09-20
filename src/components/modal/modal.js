let activeModal;

function openModal(e) {
  e.preventDefault();
  const modalId = e.target.dataset.modal;
  openPopup(modalId);
}

function openPopup(modalId) {
  const modal = document.querySelector(
    `.modal__wrapper[data-modal="${modalId}"]`
  );
  if (activeModal) closeModal(activeModal);
  activeModal = modal;
  modal.classList.add("modal__wrapper_open");
  addCloseModalHandler(modal);
  disableWindowScroll(true);
}

function addCloseModalHandler(modal) {
  const eventParams = {
    once: true,
  };
  modal
    .querySelector(".js-close")
    .addEventListener("click", () => closeModal(modal), eventParams);

  modal.addEventListener(
    "click",
    (e) => {
      if (!e.target.closest(".modal")) closeModal(modal);
    },
    eventParams
  );

  window.addEventListener(
    "keydown",
    function (event) {
      if (event.code == "Escape") closeModal(modal);
    },
    eventParams
  );
}

function closeModal() {
  activeModal.classList.remove("modal__wrapper_open");
  disableWindowScroll(false);
}

function disableWindowScroll(flag) {
  if (flag) document.documentElement.classList.add("scroll-disabled");
  else document.documentElement.classList.remove("scroll-disabled");
}

async function getFormResult(e) {
  const resultUrl = e.target.action;
  if (resultUrl) {
    const formData = new FormData(e.target);
    let request = await fetch(
      resultUrl
      // {
      //     method: 'POST',
      //     body: formData
      // }
    );
    let result = await request.text();
    return result;
  }
}

function updateModalContent(content, modal = activeModal) {
  modal.querySelector(".modal__body").innerHTML = content;
}
