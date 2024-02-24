let count = 0

function selectedCategory(divCliquee, url) {
    var elements = document.getElementsByClassName('txt-category-real');
    for (let j = 0; j < elements.length; j++) {
        if (elements[j].classList.contains('selected-category')) {
            elements[j].classList.remove('selected-category');
        }
    }
    divCliquee.classList.add('selected-category');
    loadContent(url).then(() => {
        console.log("yop")
        addOpacityListeners("bluetooth")
        addOpacityListeners("moduleESP")
        count++
    })
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

function loadFooter() {
    fetch('../html/templates/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error:', error));
}

function addOpacityListeners(target) {

    var projectDesc = document.querySelector('.project-desc.' + target);
    var projectDetail = document.querySelector('.project-detail.' + target);
    var projectLink = document.querySelector('.link-zone.' + target);

projectDesc.addEventListener('mouseenter', () => {
    projectDesc.style.opacity = '0';
    projectDetail.style.opacity = '1';
});

projectDesc.addEventListener('mouseleave', () => {
    projectDesc.style.opacity = '1';
    projectDetail.style.opacity = '0';
});

projectLink.addEventListener('mouseenter', () => {
    projectDesc.style.opacity = '0';
    projectDetail.style.opacity = '1';
});

projectLink.addEventListener('mouseleave', () => {
    projectDesc.style.opacity = '1';
    projectDetail.style.opacity = '0';
});
}
