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