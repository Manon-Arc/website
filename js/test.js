const logoFusion = document.getElementById('fusion');
const container = document.getElementById('meca-contain');
const containerRect = container.getBoundingClientRect();

const vitesse = 0.01;
let angleG = 0;
let rayon = 100;

function animer() {
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;

    const xGear = containerCenterX + rayon * Math.cos(angleG) - logoFusion.offsetWidth / 2;
    const yGear = containerCenterY + rayon * Math.sin(angleG) - logoFusion.offsetHeight / 2;

    logoFusion.style.left = xGear + 'px';
    logoFusion.style.top = yGear + 'px';

    angleG += vitesse;

    requestAnimationFrame(animer);
}

container.addEventListener('mouseenter', async function () {
    boucleUp(170);
    await sleep(500)
    logoFusion.style.zIndex = 3
});

container.addEventListener('mouseleave', function () {
    boucleDown(100);
    logoFusion.style.zIndex = 1
});

animer();

function boucleUp(NewRayon) {
    if (rayon < NewRayon) {
        rayon++;
        setTimeout(function() {
            boucleUp(NewRayon);
        }, 1);
    }
}

function boucleDown(NewRayon) {
    if (rayon > NewRayon) {
        rayon--;
        setTimeout(function() {
            boucleDown(NewRayon);
        }, 1);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }