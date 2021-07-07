const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
}

var callback = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('intro_moved');
            observer.unobserve(entry.target);
        }
    });
};

var observer = new IntersectionObserver(callback, options);
let targets = document.querySelectorAll('.intro_animated');
for (let target of targets) {
    observer.observe(target);
}

const slider = new Swiper('.big-carousel', {
    loop: true,
    speed: 500,
    pagination: {
        el: '.big-carousel__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "slider-pagination__bullet",
        bulletActiveClass: "slider-pagination__bullet_active",
        modifierClass: "slider-pagination_",
        clickableClass: "slider-pagination_clickable"
    },
    navigation: {
        nextEl: '.big-carousel__nav_next',
        prevEl: '.big-carousel__nav_prev',
    },
    autoplay: {
        delay: 5000,
    },
});


const branches = new Swiper(".js-branch-slider", {
    slideClass: "branch",
    breakpoints: {
        320: {
            cssMode: true
        },
        768: {
            loop: true,
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            spaceBetween: 30,
            pagination: {
                el: '.branch-list__pagination',
                type: 'bullets',
                clickable: true,
                bulletClass: "slider-pagination__bullet",
                bulletActiveClass: "slider-pagination__bullet_active",
                modifierClass: "slider-pagination_",
                clickableClass: "slider-pagination_clickable"
            }
        }

    },
    navigation: {
        prevEl: '.branch-list__nav .button-arrow_prev',
        nextEl: '.branch-list__nav .button-arrow_next'
    },
});

const reviews = new Swiper(".js-review-slider", {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    slideClass: "review",
    pagination: {
        el: '.review-list__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "slider-pagination__bullet",
        bulletActiveClass: "slider-pagination__bullet_active",
        modifierClass: "slider-pagination_",
        clickableClass: "slider-pagination_clickable"
    },
    navigation: {
        nextEl: '.review-list__nav .button-arrow_next',
        prevEl: '.review-list__nav .button-arrow_prev',
    },
})