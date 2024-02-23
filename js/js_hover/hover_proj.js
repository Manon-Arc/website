export function addOpacityListeners(target) {

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

module.exports = addOpacityListeners