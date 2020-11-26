class Filter {
    filterControls = {
        itemClass: 'js-filter',
        activeClass: 'js-filter-active',
        higlightActiveItem: function (e) {
            scope.querySelector(`.${this.activeClass}`).classList.remove(this.activeClass);
            e.target.classList.add(this.activeClass);

        },
        list: null
    };
    filterTarget = {
        itemClass: 'filter-item',
        hiddenClass: 'filter-item_hidden',
        parentBlock: '',
        resetFilter: this.resetFilter
    };
    constructor(selector) {
        this.filterTarget.parentBlock = document.querySelector(selector);
        this.filterControls.list = document.querySelectorAll(`${selector} .${this.filterControls.itemClass}`)
    }
    resetFilter() {
        /* for(elem of this.filterTarget.parentBlock.querySelectorAll(hiddenClass)){
            elem.classList.remove(hiddenClass);
        } */
        console.log(this);
    }
    init() {
        for (let trigger of this.filterControls.list) {
            trigger.addEventListener('click', (e) => {
                this.filterControls.higlightActiveItem(e, this.filterTarget.parentBlock)
            })
        }
    }
    higlightActiveControlsItem() {
        // let activeClass = this.filterControls.activeClass;
        // this.filterTarget.parentBlock.querySelector(activeClass).classList.remove(activeClass);
        // e.target.classList.add(activeClass);
        console.log(this);
    }

}
let filter = new Filter('.dictionary');
filter.init();