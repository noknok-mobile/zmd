function initListeners() {
  for (let button of document.querySelectorAll(".js-expand-trigger")) {
    button.addEventListener("click", expandCalendar);
  }
  for (let schedule of document.querySelectorAll(
    ".spec-row__calendar .schedule__inner"
  )) {
    new SimpleBar(schedule);
  }
  for (let time of document.querySelectorAll(".js-order-time")) {
    time.addEventListener("click", setOrderTime);
  }
  for (let modalTrigger of document.querySelectorAll(".js-open")) {
    modalTrigger.addEventListener("click", openModal);
  }
}
initListeners();

Inputmask({"mask": "+7 (999) 999-99-99"}).mask('[name="phone"]');
Inputmask({"mask": "+7 (999) 999-99-99"}).mask('[inputmode="tel"]');
