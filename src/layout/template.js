const loginTabFilter = new Filter(document.body, {
  controlsClass: "js-modal-filter",
  targetClass: "js-modal-tab",
});

for (let icon of document.querySelectorAll(".js-password-toggle")) {
  icon.addEventListener("click", togglePasswordVisibility);
}
let forms = [document.forms.password, document.forms.change_password];
for (let form of forms) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    result = await getFormResult(e);
    if(result)
        updateModalContent(result);
    else 
        closePopup();
  });
}
