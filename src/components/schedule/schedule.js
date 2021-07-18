let labels = {
    'expanded': 'Свернуть все',
    'default': 'Развернуть все'
}

function expandCalendar(e) {
    e.preventDefault();
    let isExpand = e.currentTarget.dataset.expand;
    e.currentTarget.dataset.expand = (isExpand) ? "" : "true";
    e.currentTarget.querySelector('.js-expand-label').innerText = (e.currentTarget.dataset.expand) ? labels['expanded'] : labels['default'];
    
    e.currentTarget.closest('.schedule').querySelector('.js-expand-target').classList.toggle('schedule__inner_fold');
}

for (let button of document.querySelectorAll('.js-expand-trigger')) {
    button.addEventListener('click', expandCalendar);
}

for(let schedule of document.querySelectorAll('.spec-row__calendar .schedule__inner')){
    new SimpleBar(schedule);
}