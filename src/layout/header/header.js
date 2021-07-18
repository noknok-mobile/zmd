const openButton = document.querySelector('.js-menu-toggle');
const header = document.querySelector('.header-mobile');
openButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    header.classList.toggle('js-open');
    isOpen = header.classList.contains('js-open');
    disableWindowScroll(isOpen);
}