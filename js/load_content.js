function selectedCategory(divCliquee, url) {
    var elements = document.getElementsByClassName('txt-category-real');
    for (let j = 0; j < elements.length; j++) {
        if (elements[j].classList.contains('selected-category')) {
            elements[j].classList.remove('selected-category');
        }
    }
    divCliquee.classList.add('selected-category');
    loadContent(url)
}


function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('list').innerHTML = data;
            loadFooter()
        })
        .catch(error => console.error('Error:', error));
}

function loadFooter() {
    fetch('../html/templates/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data); // Insère le pied de page à la fin du corps du document
        })
        .catch(error => console.error('Error:', error));
}
