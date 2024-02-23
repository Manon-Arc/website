import { addOpacityListeners } from './js_hover/hover_proj'
function loadFooter() {
    fetch('../html/templates/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error:', error));
}

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('list').innerHTML = data;
            if (count == 1) {
                loadFooter()
            }
        })
        .catch(error => console.error('Error:', error));
}

let count = 0
function selectedCategory(divCliquee, url) {
    var elements = document.getElementsByClassName('txt-category-real');
    count ++
    for (let j = 0; j < elements.length; j++) {
        if (elements[j].classList.contains('selected-category')) {
            elements[j].classList.remove('selected-category');
        }
    }
    divCliquee.classList.add('selected-category');
    loadContent(url).then(()=>{
        console.log("yop")
        addOpacityListeners("bluetooth")
        addOpacityListeners("moduleESP")
    })
}