let count = 0;

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
            count++;
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
