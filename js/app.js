function onAccordionItemToggle(e) {
    let openElements = document.querySelectorAll('details[open]');
    if (!e.target.open) return;
    for(let elem of openElements){
        if (elem != e.target) {
            elem.open = false;
        }
    }
}
class Filter {
    filterControls = {
        itemClass: 'js-filter',
        activeClass: 'js-active',
        list: null,

        higlightActiveFilterItem: function (current) {
            for (let elem of this.list) {
                if (elem.dataset.filter != current.dataset.filter)
                    elem.classList.remove(this.activeClass);
                else elem.classList.add(this.activeClass);
            }
            current.classList.add(this.activeClass);
        },
    };

    filterTarget = {
        itemClass: 'js-filter-target',
        activeClass: 'js-active',
        list: null,

        resetFilter: function () {
            for (let elem of this.list) {
                elem.classList.add(this.activeClass);
            }
        },

        filterItems: function (filter) {
            if (filter) {
                for (let elem of this.list) {
                    if (elem.dataset.filter == filter) elem.classList.add(this.activeClass);
                    else elem.classList.remove(this.activeClass);
                }
            }
        }

    };
    constructor(block, params = null) {
        try {
            if (params.controlsClass)
                this.filterControls.itemClass = params.controlsClass;
            if (params.targetClass)
                this.filterTarget.itemClass = params.targetClass;
        } catch (e) {}

        this.filterTarget.list = block.querySelectorAll(`.${this.filterTarget.itemClass}`);
        this.filterControls.list = block.querySelectorAll(`.${this.filterControls.itemClass}`);
        this.init();
    }

    init() {
        this.filterTarget.resetFilter();
        for (let trigger of this.filterControls.list) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.filterControls.higlightActiveFilterItem(e.target);
                this.filterTarget.resetFilter();
                this.filterTarget.filterItems(e.target.dataset.filter);
            })
        }
    }
}
class Switch {
    params = {
        switchClass: 'js-switch',
        sectionHiddenClass: 'section_hidden',
        tabClass: 'switch__label',
        tabActiveClass: 'switch__label_active',
        sectionClass: 'js-section-switched',
    }
    constructor() {
        this.sectionList = document.querySelectorAll(`.${this.params.sectionClass}`);
        this.tabList = document.querySelectorAll(`.${this.params.tabClass}`)
        this.switch = document.querySelector(`.${this.params.switchClass}`);
        this.init();
    }
    init() {
        this.switch.addEventListener('change', (e) => {
            for (let tab of this.tabList) this.setActiveTab(tab);
            for (let section of this.sectionList) this.toggleSection(section);
        })
    }
    setActiveTab(tab) {
        tab.classList.toggle(this.params.tabActiveClass);
    }
    toggleSection(section) {
        section.classList.toggle(this.params.sectionHiddenClass);
    }
}
function togglePasswordVisibility(e) {
    const input = e.target.previousSibling;
    input.type = (input.type == 'password') ? "text" : "password";
}
let activeModal;

function openModal(e) {
  e.preventDefault();
  const modalId = e.target.dataset.modal;
  openPopup(modalId);
}

function openPopup(modalId) {
  const modal = document.querySelector(
    `.modal__wrapper[data-modal="${modalId}"]`
  );
  if (activeModal) closeModal(activeModal);
  activeModal = modal;
  modal.classList.add("modal__wrapper_open");
  addCloseModalHandler(modal);
  disableWindowScroll(true);
}

function addCloseModalHandler(modal) {
  const eventParams = {
    once: true,
  };
  modal
    .querySelector(".js-close")
    .addEventListener("click", () => closeModal(modal), eventParams);

  modal.addEventListener(
    "click",
    (e) => {
      if (!e.target.closest(".modal")) closeModal(modal);
    },
    eventParams
  );

  window.addEventListener(
    "keydown",
    function (event) {
      if (event.code == "Escape") closeModal(modal);
    },
    eventParams
  );
}

function closeModal() {
  activeModal.classList.remove("modal__wrapper_open");
  disableWindowScroll(false);
}

function disableWindowScroll(flag) {
  if (flag) document.documentElement.classList.add("scroll-disabled");
  else document.documentElement.classList.remove("scroll-disabled");
}

async function getFormResult(e) {
  const resultUrl = e.target.action;
  if (resultUrl) {
    const formData = new FormData(e.target);
    let request = await fetch(
      resultUrl
      // {
      //     method: 'POST',
      //     body: formData
      // }
    );
    let result = await request.text();
    return result;
  }
}

function updateModalContent(content, modal = activeModal) {
  modal.querySelector(".modal__body").innerHTML = content;
}

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


const loginTabFilter = new Filter(document.body, {
  controlsClass: "js-modal-filter",
  targetClass: "js-modal-tab",
});

for (let icon of document.querySelectorAll(".js-password-toggle")) {
  icon.addEventListener("click", togglePasswordVisibility);
}
let forms = [document.forms.password, document.forms.change_password];
for (let form of forms) {
  try {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      result = await getFormResult(e);
      if (result) updateModalContent(result);
      else closeModal();
    });
  } catch (e) {}
}

const orderForm = document.forms.order;

function setOrderTime(e) {
  let datestring = e.target.dataset.ordertime;
  orderForm.ordertime.value = datestring;

  const options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  let datetime = new Date(datestring);
  orderForm.ordertime_format.value = datetime.toLocaleString("ru", options);
}



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

//# sourceMappingURL=../app.js.map
