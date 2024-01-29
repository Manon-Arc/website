const element = document.getElementById('element');
const container = document.getElementById('container');

const vitesse = 0.01;
let angle = 0;
let rayon = 100;

function animer() {
    const rect = container.getBoundingClientRect();
    const containerCenterX = rect.left + rect.width / 2 + element.offsetWidth / 2;
    const containerCenterY = rect.top + rect.height / 2;

    const x = containerCenterX + rayon * Math.cos(angle) - element.offsetWidth / 2;
    const y = containerCenterY + rayon * Math.sin(angle) - element.offsetHeight / 2; 

    element.style.left = x + 'px';
    element.style.top = y + 'px';

    angle += vitesse;

    requestAnimationFrame(animer);
}

container.addEventListener('mouseenter', function() {
    rayon = 220;
});

container.addEventListener('mouseleave', function() {
    rayon = 100;
});

animer();
