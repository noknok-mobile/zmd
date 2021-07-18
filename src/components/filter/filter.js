class Filter {
    filterControls = {
        itemClass: 'js-filter',
        activeClass: 'js-active',
        list: null,

        higlightActiveFilterItem: function (current) {
            for (let elem of this.list) {
                if (elem.dataset.filter != current.dataset.filter)
                    elem.classList.remove(this.activeClass);
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
        if (params ?.controlsClass)
            this.filterControls.itemClass = params.controlsClass;
        if (params ?.targetClass)
            this.filterTarget.itemClass = params.targetClass;

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