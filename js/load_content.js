const Proto = ["marcus", "robolympiades", "assistant", "mecanum"]
const ConcElec = ["moduleESP", "bluetooth"]
const ProjDev = ["danmashi", "weatherapp"]
const ConcMeca = ["pince", "bb8", "hub", "ventilo"]

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
            switch (divCliquee.classList[0]) {
                case "Proto":
                    for (let i = 0; i < Proto.length; i++) {
                        addOpacityListeners(Proto[i]);
                    }
                    break;
                case "ConcElec":
                    for (let i = 0; i < ConcElec.length; i++) {
                        addOpacityListeners(ConcElec[i]);
                    }
                    break;
                case "ProjDev":
                    for (let i = 0; i < ProjDev.length; i++) {
                        addOpacityListeners(ProjDev[i]);
                    }
                    break;
                case "ConcMeca":
                    for (let i = 0; i < ConcMeca.length; i++) {
                        addOpacityListeners(ConcMeca[i]);
                    }
                    break;
                default:
                    console.log("Classe non reconnue :", divCliquee.classList[0]);
                    break;
            }
        })
        .catch(error => console.error('Error:', error));
}



function loadContent(url) {
    return fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('list').innerHTML = data;
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
