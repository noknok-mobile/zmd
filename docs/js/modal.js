try {
    document.querySelector('.js-open').addEventListener('click', openModal);
    document.querySelector('.js-order-trigger').addEventListener('click', openModal);
} catch (e) {}
document.querySelector('.js-close').addEventListener('click', closeModal);
document.querySelector('.modal__wrapper').addEventListener('click', function (e) {
    if (!e.target.closest('.modal')) closeModal();
});


function openModal(e) {
    e.preventDefault();
    let targetModal = document.querySelector(`.modal__wrapper`);
    targetModal.classList.add('modal__wrapper_open');
    window.addEventListener('keydown', function (event) {
        if (event.code == 'Escape') closeModal();
    }, {
        once: true
    });

    setModalContent(e.currentTarget.dataset.ajax);
}

function setModalContent(url, action = null, param = null) {
    getModalContent(url)
        .then(html => {
            document.querySelector('.modal__inner').innerHTML = html;
            if (action) action(param);
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
}

function getAjaxPage(e) {
    e.preventDefault();
    setModalContent(e.currentTarget.dataset.ajax);
}

function goToOrder(e) {
    const url = 'ajax/order.html';
    const date = e.target.dataset.ordertime;
    setModalContent(url, setOrderDate, date);
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
//script for tabs
for (tab of document.querySelectorAll('.tab')) tab.addEventListener('click', tabHandler);

function tabHandler(e) {
    resetTabControl();
    setActiveTab(e);
    resetTabPages();
    setActivePage(e);
}

function resetTabPages() {
    for (let elem of document.querySelectorAll('.modal-tab__page_active')) {
        elem.classList.remove('modal-tab__page_active');
    }
}

function setActivePage(e) {
    let filter = e.target.dataset.page;
    document.querySelector(`.modal-tab__page[data-href="${filter}"]`).classList.add(
        'modal-tab__page_active');
}

function resetTabControl() {
    for (let elem of document.querySelectorAll('.modal-tab_active')) {
        elem.classList.remove('modal-tab_active');
    }
}

function setActiveTab(e) {
    e.target.classList.add('modal-tab_active');
}