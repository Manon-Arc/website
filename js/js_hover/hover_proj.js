export function addOpacityListeners(target) {

    const projectDesc = document.querySelector('.project-desc.' + target);
    console.log(projectDesc)
    const projectDetail = document.querySelector('.project-detail.' + target);
    console.log(projectDetail)

    const projectLink = document.querySelector('.link-zone.' + target);

projectDesc.addEventListener('mouseenter', () => {
    projectDesc.style.opacity = '0';
    console.log("enyer")
    projectDetail.style.opacity = '1';
});

projectDesc.addEventListener('mouseleave', () => {
    projectDesc.style.opacity = '1';
    console.log("exit")
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
