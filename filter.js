class Filter {
    filterControls = {
        itemClass: 'js-filter',
        activeClass: 'js-filter-active',
        higlightActiveItem: function (e) {
            for (let elem of this.list) {
                elem.classList.remove(filter.filterControls.activeClass);
            }
            e.target.classList.add(this.activeClass);

        },
        list: null
    };

    filterTarget = {
        itemClass: 'filter-item',
        hiddenClass: 'filter-item_hidden',
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
                    if(elem.dataset.filter != filter)elem.classList.add(this.hiddenClass)
                }
            }
        }

    };
    constructor(selector) {
        this.filterTarget.list = document.querySelectorAll(`${selector} .${this.filterTarget.itemClass}`);
        this.filterControls.list = document.querySelectorAll(`${selector} .${this.filterControls.itemClass}`)
    }
    
    init() {
        for (let trigger of this.filterControls.list) {
            trigger.addEventListener('click', (e) => {
                this.filterControls.higlightActiveItem(e);
                this.filterTarget.resetFilter();
                this.filterTarget.filterItems(e);
            })
        }
    }

}
let filter = new Filter('.dictionary');
filter.init();