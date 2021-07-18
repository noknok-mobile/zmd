const loginTabFilter = new Filter(document.body, {
    controlsClass: "js-modal-filter",
    targetClass: "js-modal-tab"
});

for(let icon of document.querySelectorAll('.js-password-toggle')){
    icon.addEventListener('click', togglePasswordVisibility);
}