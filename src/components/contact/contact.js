function onAccordionItemToggle(e) {
    let openElements = document.querySelectorAll('details[open]');
    if (!e.target.open) return;
    for(let elem of openElements){
        if (elem != e.target) {
            elem.open = false;
        }
    }
}