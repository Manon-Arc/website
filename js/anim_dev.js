const logoPython = document.getElementById('python');
const logoCS = document.getElementById('csharpe');
const logoArduino = document.getElementById('arduino');
const logoJava = document.getElementById('java');
const logoCplus = document.getElementById('cplus');
const logoC = document.getElementById('c');

const containerD = document.getElementById('dev-contain');
const containerDRect = containerD.getBoundingClientRect();

const vitesseD = 0.01;
let rayonD = 80;

let angleA = 0;
let angleK = 800;
let angleCM = 400;

function animerD() {
    const containerECenterX = containerDRect.left + containerDRect.width / 2;
    const containerECenterY = containerDRect.top + containerDRect.height / 2;

    const xAltium = containerECenterX + rayonD * Math.cos(angleA) - logoAltium.offsetWidth / 2;
    const yAltium = containerECenterY + rayonD * Math.sin(angleA) - logoAltium.offsetHeight / 2;

    const xKicad = containerECenterX + rayonD * Math.cos(angleK) - logoKicad.offsetWidth / 2;
    const yKicad = containerECenterY + rayonD * Math.sin(angleK) - logoKicad.offsetHeight / 2;

    const xCM = containerECenterX + rayonD * Math.cos(angleCM) - logoCM.offsetWidth / 2;
    const yCM = containerECenterY + rayonD * Math.sin(angleCM) - logoCM.offsetHeight / 2;

    logoAltium.style.left = xAltium + 'px';
    logoAltium.style.top = yAltium + 'px';

    logoKicad.style.left = xKicad + 'px';
    logoKicad.style.top = yKicad + 'px';

    logoCM.style.left = xCM + 'px';
    logoCM.style.top = yCM + 'px';

    angleA += vitesseD;
    angleK += vitesseD;
    angleCM += vitesseD;


    requestAnimationFrame(animerD);
}

containerD.addEventListener('mouseenter', async function () {
    boucleUpD(160);
    await sleep(500)
    logoAltium.style.zIndex = 3
    logoKicad.style.zIndex = 3
    logoCM.style.zIndex = 3

});

containerD.addEventListener('mouseleave', function () {
    boucleDownD(100);
    logoAltium.style.zIndex = 1
    logoKicad.style.zIndex = 1
    logoCM.style.zIndex = 1

});

animerD();

function boucleUpD(NewRayonD) {
    if (rayonD < NewRayonD) {
        rayonD++;
        setTimeout(function() {
            boucleUpD(NewRayonD);
        }, 1);
    }
}

function boucleDownD(NewRayonD) {
    if (rayonD > NewRayonD) {
        rayonD--;
        setTimeout(function() {
            boucleDownD(NewRayonD);
        }, 1);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }