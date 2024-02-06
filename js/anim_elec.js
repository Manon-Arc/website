const logoAltium = document.getElementById('altium');
const logoKicad = document.getElementById('kicad');
const logoCM = document.getElementById('circuitmaker');

const containerE = document.getElementById('elec-contain');
const containerERect = containerE.getBoundingClientRect();

const vitesseE = 0.01;
let rayonE = 80;

let angleA = 0;
let angleK = 800;
let angleCM = 400;

function animerE() {
    const containerECenterX = containerERect.left + containerERect.width / 2;
    const containerECenterY = containerERect.top + containerERect.height / 2;

    const xAltium = containerECenterX + rayonE * Math.cos(angleA) - logoAltium.offsetWidth / 2;
    const yAltium = containerECenterY + rayonE * Math.sin(angleA) - logoAltium.offsetHeight / 2;

    const xKicad = containerECenterX + rayonE * Math.cos(angleK) - logoKicad.offsetWidth / 2;
    const yKicad = containerECenterY + rayonE * Math.sin(angleK) - logoKicad.offsetHeight / 2;

    const xCM = containerECenterX + rayonE * Math.cos(angleCM) - logoCM.offsetWidth / 2;
    const yCM = containerECenterY + rayonE * Math.sin(angleCM) - logoCM.offsetHeight / 2;

    logoAltium.style.left = xAltium + 'px';
    logoAltium.style.top = yAltium + 'px';

    logoKicad.style.left = xKicad + 'px';
    logoKicad.style.top = yKicad + 'px';

    logoCM.style.left = xCM + 'px';
    logoCM.style.top = yCM + 'px';

    angleA += vitesseE;
    angleK += vitesseE;
    angleCM += vitesseE;


    requestAnimationFrame(animerE);
}

containerE.addEventListener('mouseenter', async function () {
    boucleUpE(160);
    await sleep(500)
    logoAltium.style.zIndex = 3
    logoKicad.style.zIndex = 3
    logoCM.style.zIndex = 3

});

containerE.addEventListener('mouseleave', function () {
    boucleDownE(100);
    logoAltium.style.zIndex = 1
    logoKicad.style.zIndex = 1
    logoCM.style.zIndex = 1

});

animerE();

function boucleUpE(NewRayonE) {
    if (rayonE < NewRayonE) {
        rayonE++;
        setTimeout(function() {
            boucleUpE(NewRayonE);
        }, 1);
    }
}

function boucleDownE(NewRayonE) {
    if (rayonE > NewRayonE) {
        rayonE--;
        setTimeout(function() {
            boucleDownE(NewRayonE);
        }, 1);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }