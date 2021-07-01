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

let slider = document.querySelector('.big-carousel');
let swiper = new Swiper(slider, {
    loop: true,
    speed: 500,
    pagination: {
        el: '.big-carousel__pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.big-carousel__navigation-area_next',
        prevEl: '.big-carousel__navigation-area_prev',
    },
    autoplay: {
        delay: 5000,
    },
});