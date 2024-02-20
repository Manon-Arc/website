function addOpacityListeners(target) {

    const projectDesc = document.querySelector('.project-desc.' + target);
    const projectDetail = document.querySelector('.project-detail.' + target);
    const projectLink = document.querySelector('.link-zone.' + target);

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

addOpacityListeners("marcus")
addOpacityListeners("robolympiades")
addOpacityListeners("assistant")
addOpacityListeners("mecanum")
addOpacityListeners("moduleESP")