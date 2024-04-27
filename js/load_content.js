const All = ["IHM", "weatherapp", "danmashi", "appOsyris", "dashboard", "flipper", "escape", "endless", "domolabo", "coffre", "marcus", "robolympiades", "assistant", "mecanum", "bb8", "moduleESP", "bluetooth"]
const ProjSysEmb = ["domolabo", "coffre", "marcus", "robolympiades", "assistant", "mecanum", "bb8", "moduleESP", "bluetooth"]
const ProjDev = ["IHM", "weatherapp", "danmashi", "appOsyris", "dashboard", "flipper", "escape", "endless", "domolabo"]

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
                case "All":
                    for (let i = 0; i < All.length; i++) {
                        addOpacityListeners(All[i]);
                    }
                    break;
                case "ProjSysEmb":
                    for (let i = 0; i < ProjSysEmb.length; i++) {
                        addOpacityListeners(ProjSysEmb[i]);
                    }
                    break;
                case "ProjDev":
                    for (let i = 0; i < ProjDev.length; i++) {
                        console.log(ProjDev[i])
                        addOpacityListeners(ProjDev[i]);
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

    console.log(projectDesc)
    console.log(projectDetail)
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
