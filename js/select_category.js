function selectedCategory(divCliquee) {
    var elements = document.getElementsByClassName('txt-category-real');
    for (let j = 0; j < elements.length; j++) {
        if (elements[j].classList.contains('selected-category')) {
            elements[j].classList.remove('selected-category');
        }
    }
    divCliquee.classList.add('selected-category');
}
