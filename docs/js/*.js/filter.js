class Filter {
    filterControls = {
        itemClass: 'js-filter',
        activeClass: 'js-filter_active',
        list: null,

        higlightActiveFilterItem: function (e) {
            for (let elem of this.list) {
                elem.classList.remove(this.activeClass);
            }
            e.target.classList.add(this.activeClass);
        },
    };

    filterTarget = {
        itemClass: 'js-filter-target',
        hiddenClass: 'js-filter-target_hidden',
        list: null,

        resetFilter: function() {
            for(let elem of this.list){
                elem.classList.remove(this.hiddenClass);
            }
        },

        filterItems: function(e){
            let filter = e.target.dataset.filter;
            if(filter){
                for(let elem of this.list){
                    if(elem.dataset.filter != filter) elem.classList.add(this.hiddenClass)
                }
            }
        }

    };
    constructor(block) {
        // let block = document.querySelector(selector);
        this.filterTarget.list = block.querySelectorAll(`.${this.filterTarget.itemClass}`);
        this.filterControls.list = block.querySelectorAll(`.${this.filterControls.itemClass}`);
        this.init();
    }
    
    init() {
        for (let trigger of this.filterControls.list) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.filterControls.higlightActiveFilterItem(e);
                this.filterTarget.resetFilter();
                this.filterTarget.filterItems(e);
            })
        }
    }
}

class Switch{
    params = {
        switchClass: 'js-switch',
        sectionHiddenClass: 'section_hidden',
        tabClass: 'switch__label',
        tabActiveClass: 'switch__label_active',
        sectionClass: 'js-section-switched',
    }
    constructor(){
        this.sectionList = document.querySelectorAll(`.${this.params.sectionClass}`);
        this.tabList = document.querySelectorAll(`.${this.params.tabClass}`)
        this.switch = document.querySelector(`.${this.params.switchClass}`);
        this.init();
    }
    init(){
        this.switch.addEventListener('change', (e)=>{
            for(let tab of this.tabList) this.setActiveTab(tab);
            for(let section of this.sectionList) this.toggleSection(section);
        })
    }
    setActiveTab(tab){
        tab.classList.toggle(this.params.tabActiveClass);
    }
    toggleSection(section){
        section.classList.toggle(this.params.sectionHiddenClass);
    }
}


