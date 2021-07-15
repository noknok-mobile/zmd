let labels = {
    'expanded': 'Свернуть все',
    'default': 'Развернуть все'
}
document.querySelector('.js-expand-trigger').addEventListener('click', expandCalendar);

function expandCalendar(e) {
    e.preventDefault();
    let isExpand = e.currentTarget.dataset.expand;
    e.currentTarget.dataset.expand = (isExpand) ? "" : "true";
    e.currentTarget.querySelector('.js-expand-label').innerText = (e.currentTarget.dataset.expand) ? labels['expanded'] : labels['default'];

    document.querySelector('.js-expand-target').classList.toggle('schedule__inner_fold');
}