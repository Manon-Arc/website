const gear = document.getElementById('gear');
const pcb = document.getElementById('pcb');
const container = document.getElementById('container');

const vitesse = 0.01;
let angleG = 0;
let angleP = 180;
let rayon = 100;

function animer() {
    const rect = container.getBoundingClientRect();
    const containerCenterX = rect.left + rect.width / 2 + gear.offsetWidth / 2;
    const containerCenterY = rect.top + rect.height / 2 + gear.offsetHeight / 2;

    const xGear = containerCenterX + rayon * Math.cos(angleG) - gear.offsetWidth / 2;
    const yGear = containerCenterY + rayon * Math.sin(angleG) - gear.offsetHeight / 2;

    const xPcb = containerCenterX + rayon * Math.cos(angleP) - pcb.offsetWidth / 2;
    const yPcb = containerCenterY + rayon * Math.sin(angleP) - pcb.offsetHeight / 2;

    gear.style.left = xGear + 'px';
    gear.style.top = yGear + 'px';

    pcb.style.left = xPcb + 'px';
    pcb.style.top = yPcb + 'px';

    angleP += vitesse;
    angleG += vitesse;

    requestAnimationFrame(animer);
}

container.addEventListener('mouseenter', function () {
    boucleUp(220)

});

container.addEventListener('mouseleave', function () {
    boucleDown(100)
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

