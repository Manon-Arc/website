const gear = document.getElementById('fusion');
const container = document.getElementById('meca-contain');
const containerRect = container.getBoundingClientRect();

const vitesse = 0.01;
let angleG = 0;
let rayon = 100;

function animer() {
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;

    const xGear = containerCenterX + rayon * Math.cos(angleG) - gear.offsetWidth / 2;
    const yGear = containerCenterY + rayon * Math.sin(angleG) - gear.offsetHeight / 2;

    gear.style.left = xGear + 'px';
    gear.style.top = yGear + 'px';

    angleG += vitesse;

    requestAnimationFrame(animer);
}

container.addEventListener('mouseenter', function () {
    boucleUp(170);
});

container.addEventListener('mouseleave', function () {
    boucleDown(100);
});

animer();

function boucleUp(NewRayon) {
    if (rayon < NewRayon) {
        rayon++;
        setTimeout(function() {
            boucleUp(NewRayon);
        }, 0.5);
    }
}

function boucleDown(NewRayon) {
    if (rayon > NewRayon) {
        rayon--;
        setTimeout(function() {
            boucleDown(NewRayon);
        }, 0.5);
    }
}
