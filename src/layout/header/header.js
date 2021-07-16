const openButton = document.querySelector('.js-menu-open');
const closeButton = document.querySelector('.js-menu-close');
openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', hideMenu);

function openMenu(e){
    toggleMenu();
    closeButton.style.display = 'block';
    openButton.style.display = 'none';
}
function toggleMenu(){
    document.body.classList.toggle('no-scrollable');
    document.documentElement.classList.toggle('no-scrollable');
    document.querySelector('.js-menu').classList.toggle('dropdown-menu_visible');

}
function hideMenu(){
    toggleMenu();
    openButton.style.display = 'block';
    closeButton.style.display = 'none';
}