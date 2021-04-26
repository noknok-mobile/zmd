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