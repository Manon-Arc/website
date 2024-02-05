function selected(divCliquee) {
    var elements = document.getElementsByClassName('txt-category');
    for (let j = 0; j < elements.length; j++) {
        if (elements[j].classList.contains('selected')) {
            elements[j].classList.remove('selected');
        }
    }
    divCliquee.classList.add('selected');
}
