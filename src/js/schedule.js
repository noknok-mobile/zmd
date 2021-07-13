let labels = {
    'expanded': 'Свернуть все',
    'default': 'Развернуть все'
}
for (let button of document.querySelectorAll('.js-expand-trigger')) {
    button.addEventListener('click', expandCalendar);
}

function expandCalendar(e) {
    e.preventDefault();
    let isExpand = e.currentTarget.dataset.expand;
    e.currentTarget.dataset.expand = (isExpand) ? "" : "true";
    e.currentTarget.querySelector('.schedule__more-label').innerText = (e.currentTarget.dataset.expand) ? labels['expanded'] : labels['default'];

    e.currentTarget.closest('.schedule').querySelector('.js-expand-target').classList.toggle('schedule__inner_fold');
}