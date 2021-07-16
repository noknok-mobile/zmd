for (let modalTrigger of document.querySelectorAll('.js-open')) {
    modalTrigger.addEventListener('click', openModal);
}
try {
    document.querySelector('.js-order-trigger').addEventListener('click', openModal);
} catch (e) {}
document.querySelector('.js-close').addEventListener('click', closeModal);
document.querySelector('.modal__wrapper').addEventListener('click', function (e) {
    if (!e.target.closest('.modal')) closeModal();
});


function openModal(e) {
    e.preventDefault();
    let targetModal = document.querySelector(`.modal__wrapper`);
    document.documentElement.classList.add('scroll-disabled');
    targetModal.classList.add('modal__wrapper_open');
    window.addEventListener('keydown', function (event) {
        if (event.code == 'Escape') closeModal();
    }, {
        once: true
    });

    setModalContent(e.currentTarget.dataset.ajax, e.currentTarget.dataset.page);

}

function initModalPage(modal, pageId) {
    const filter = new Filter(modal, pageId);
    console.log(filter);
}

function setModalContent(url, page = null, action = null, param = null) {
    getModalContent(url)
        .then(html => {
            let modal = document.querySelector('.modal__inner');
            modal.innerHTML = html;
            const expandButton = modal.querySelector('.js-expand-trigger');
            if (expandButton) expandButton.addEventListener('click', expandCalendar);

            if (action) action(param);

            if (page)
                initModalPage(modal, page);
            try {
                for(let input of document.querySelectorAll('.js-password-toggle')) input.addEventListener('click', togglePasswordIcon)
            } catch (e) {}
        });



}

async function getModalContent(url) {
    const response = await fetch(url);
    const result = await response.text();
    return result;
}

function closeModal() {
    modalWindow = document.querySelector('.modal__wrapper');
    modalWindow.classList.remove('modal__wrapper_open');
    document.documentElement.classList.remove('scroll-disabled');
}

function getAjaxPage(e) {
    e.preventDefault();
    setModalContent(e.currentTarget.dataset.ajax);
}

function goToOrder(e) {
    const url = 'ajax/order.html';
    const date = e.target.dataset.ordertime;
    setModalContent(url, null, setOrderDate, date);
}

function setOrderDate(datestring) {
    options = {
        month: "long",
        day: "numeric",
        hour: 'numeric',
        minute: 'numeric'
    };
    let datetime = new Date(datestring);
    document.querySelector('.input__value[name="date"]').value = datetime.toLocaleString('ru', options);

}

function completeOrder(e) {
    e.preventDefault();
    const url = 'ajax/result.html';
    setModalContent(url);
}