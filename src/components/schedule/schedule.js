let labels = {
  expanded: "Свернуть все",
  default: "Развернуть все",
};

function expandCalendar(e) {
  e.preventDefault();
  let isExpand = e.currentTarget.dataset.expand;
  e.currentTarget.dataset.expand = isExpand ? "" : "true";
  e.currentTarget.querySelector(".js-expand-label").innerText = e.currentTarget
    .dataset.expand
    ? labels["expanded"]
    : labels["default"];

  e.currentTarget
    .closest(".schedule")
    .querySelector(".js-expand-target")
    .classList.toggle("schedule__inner_fold");
}

