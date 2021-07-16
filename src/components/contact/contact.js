for (let elem of document.querySelectorAll('.contact')) {
    elem.addEventListener('toggle', onToggle)
}

function onToggle(e) {
    let openElem = document.querySelector('details[open]');
    if (openElem != e.currentTarget) openElem.open = false;
}