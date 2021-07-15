// document.querySelector('.js-ajax').addEventListener('click', getAjaxPage);
document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('js-ajax')) {
        getAjaxPage(e);
    }
})
document.querySelector(".js-order-trigger").addEventListener("click", (e) => {
    e.preventDefault();
    
});


function openOrderModal(orderDatetime) {
    let targetModal = document.querySelector(`.js-order-target`);
    targetModal.classList.add("modal__wrapper_open");
    setOrderTime(orderDatetime);
    window.addEventListener("keydown", function (event) {
        if (event.code == "Escape") closeModal(targetModal)
    }, {
        once: true
    });
}

function setOrderTime(datestring) {
    options = {
        month: "long",
        day: "numeric",
        hour: 'numeric',
        minute: 'numeric'
    };
    let datetime = new Date(datestring);
    document.querySelector('.input__value_date').value = datetime.toLocaleString('ru', options);
}

function getAjaxPage(e) {
    e.preventDefault();
    fetch(e.target.href)
    .then(res => res.text())
    .then(html => {
        document.querySelector('.modal__body').innerHTML = html;
        if (e.target.dataset.ordertime) {
            let orderDatetime = e.target.dataset.ordertime;
            openOrderModal(orderDatetime);
        };
    });
}
function getResultPage(e){
    e.preventDefault();
    console.log(e.target.action)
    fetch(e.target.action)
    .then(res => res.text())
    .then(html => {
        document.querySelector('.modal__inner').innerHTML = html;
    });
}


// document.querySelector('.js-order-trigger')