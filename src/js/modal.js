    try{
        document.querySelector('.js-open').addEventListener('click', openModal);
    }
    catch(e){}
    document.querySelector('.js-close').addEventListener('click', (e) => closeModal(e.target.closest(
        '.modal__wrapper')));
    document.querySelector('.modal__wrapper').addEventListener('click', function (e) {
        if (e.target.className != 'modal') closeModal(e.target);
    });

    
    function openModal(e) {
        e.preventDefault();
        let targetModal = document.querySelector(`.modal__wrapper[data-modal="${e.target.dataset.modal}"]`);
        targetModal.classList.add('modal__wrapper_open');
        window.addEventListener('keydown', function (event) {
            if (event.code == 'Escape') closeModal(targetModal);
        }, {
            once: true
        });
    }

    function closeModal(modalWindow) {
        modalWindow.classList.remove('modal__wrapper_open');
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