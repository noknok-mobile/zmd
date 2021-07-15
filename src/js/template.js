const sidebarMenu = document.querySelector('.sidebar-menu');
if(sidebarMenu)
    document.querySelector('.js-sidebar-open').addEventListener('click', function (e) {
    sidebarMenu.classList.toggle('sidebar-menu_unfold');
})