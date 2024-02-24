let count = 0;

const cat1 = ["marcus", "robolympiades", "assistant", "mecanum"]
const cat2 = ["moduleESP", "bluetooth"]
const cat3 = ["danmashi", "weatherapp"]
const cat4 = ["pince", "bb8", "hub", "ventilo"]


function selectedCategory(divCliquee, url) {
    var elements = document.getElementsByClassName('txt-category-real');
    for (let j = 0; j < elements.length; j++) {
        if (elements[j].classList.contains('selected-category')) {
            elements[j].classList.remove('selected-category');
        }
    }
    divCliquee.classList.add('selected-category');
    
    loadContent(url)
        .then(() => {
            console.log(divCliquee.classList);
            console.log(divCliquee.classList[0]);

            switch (divCliquee.classList[0]) {
                case "cat1":
                    for (let i = 0; i < cat1.length; i++) {
                        addOpacityListeners(cat1[i]);
                    }
                    break;
                case "cat2":
                    for (let i = 0; i < cat2.length; i++) {
                        addOpacityListeners(cat2[i]);
                    }
                    break;
                case "cat3":
                    for (let i = 0; i < cat3.length; i++) {
                        addOpacityListeners(cat3[i]);
                    }
                    break;
                case "cat4":
                    for (let i = 0; i < cat4.length; i++) {
                        addOpacityListeners(cat4[i]);
                    }
                    break;
                default:
                    console.log("Classe non reconnue :", divCliquee.classList[0]);
                    break;
            }

            count++; // Incrémentation du compteur après le traitement

        })
        .catch(error => console.error('Error:', error));
}



function loadContent(url) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('list').innerHTML = data;
            if (count == 1) {
                return loadFooter();
            }
        })
        .catch(error => console.error('Error:', error));
}

function loadFooter() {
    return fetch('../html/templates/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error:', error));
}

function addOpacityListeners(target) {

    var projectDesc = document.querySelector('.project-desc.' + target);
    console.log(projectDesc)
    var projectDetail = document.querySelector('.project-detail.' + target);
    console.log(projectDetail)
    var projectLink = document.querySelector('.link-zone.' + target);
    console.log(projectLink)

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
