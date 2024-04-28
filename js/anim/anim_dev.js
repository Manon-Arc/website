const logoPython = document.getElementById('python');
const logoCS = document.getElementById('csharpe');
const logoJS = document.getElementById('js');
const logoJava = document.getElementById('java');
const logoCplus = document.getElementById('cplus');
const logoC = document.getElementById('c');

const containerD = document.getElementById('dev-contain');
const containerDRect = containerD.getBoundingClientRect();

const vitesseD = 0.01;
let rayonD = 80;

let anglePython = 0;
let angleCS = 200;
let angleJS = 400;
let angleJava = 600;
let angleCplus = 800;
let angleC = 1000;


function animerD() {
    const containerECenterX = containerDRect.left + containerDRect.width / 2;
    const containerECenterY = containerDRect.top + containerDRect.height / 2;

    const xPython = containerECenterX + rayonD * Math.cos(anglePython) - logoPython.offsetWidth / 2;
    const yPython = containerECenterY + rayonD * Math.sin(anglePython) - logoPython.offsetHeight / 2;

    const xCS= containerECenterX + rayonD * Math.cos(angleCS) - logoCS.offsetWidth / 2;
    const yCS= containerECenterY + rayonD * Math.sin(angleCS) - logoCS.offsetHeight / 2;

    const xJS = containerECenterX + rayonD * Math.cos(angleJS) - logoJS.offsetWidth / 2;
    const yJS = containerECenterY + rayonD * Math.sin(angleJS) - logoJS.offsetHeight / 2;

    const xJava = containerECenterX + rayonD * Math.cos(angleJava) - logoJava.offsetWidth / 2;
    const yJava = containerECenterY + rayonD * Math.sin(angleJava) - logoJava.offsetHeight / 2;

    const xCplus = containerECenterX + rayonD * Math.cos(angleCplus) - logoCplus.offsetWidth / 2;
    const yCplus = containerECenterY + rayonD * Math.sin(angleCplus) - logoCplus.offsetHeight / 2;

    const xC = containerECenterX + rayonD * Math.cos(angleC) - logoC.offsetWidth / 2;
    const yC = containerECenterY + rayonD * Math.sin(angleC) - logoC.offsetHeight / 2;

    logoPython.style.left = xPython + 'px';
    logoPython.style.top = yPython + 'px';

    logoCS.style.left = xCS + 'px';
    logoCS.style.top = yCS + 'px';

    logoJS.style.left = xJS + 'px';
    logoJS.style.top = yJS + 'px';

    logoJava.style.left = xJava + 'px';
    logoJava.style.top = yJava + 'px';

    logoCplus.style.left = xCplus + 'px';
    logoCplus.style.top = yCplus+ 'px';

    logoC.style.left = xC + 'px';
    logoC.style.top = yC + 'px';

    anglePython += vitesseD;
    angleCS += vitesseD;
    angleJS += vitesseD;
    angleJava += vitesseD;
    angleCplus += vitesseD;
    angleC += vitesseD;

    requestAnimationFrame(animerD);
}

containerD.addEventListener('mouseenter', async function () {
    logoPython.style.opacity = 1
    logoCS.style.opacity = 1
    logoJS.style.opacity = 1
    logoJava.style.opacity = 1
    logoCplus.style.opacity = 1
    logoC.style.opacity = 1

    boucleUpD(160);
    await sleep(500)

    logoPython.style.zIndex = 3
    logoCS.style.zIndex = 3
    logoJS.style.zIndex = 3
    logoJava.style.zIndex = 3
    logoCplus.style.zIndex = 3
    logoC.style.zIndex = 3
});

containerD.addEventListener('mouseleave', async function () {
    boucleDownD(80);
    logoPython.style.zIndex = 1
    logoCS.style.zIndex = 1
    logoJS.style.zIndex = 1
    logoJava.style.zIndex = 1
    logoCplus.style.zIndex = 1
    logoC.style.zIndex = 1

    await sleep(200)

    logoPython.style.opacity = 0
    logoCS.style.opacity = 0
    logoJS.style.opacity = 0
    logoJava.style.opacity = 0
    logoCplus.style.opacity = 0
    logoC.style.opacity = 0



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