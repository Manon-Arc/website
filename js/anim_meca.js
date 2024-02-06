const logoFusion = document.getElementById('fusion');

const containerM = document.getElementById('meca-contain');
const containerMRect = containerM.getBoundingClientRect();

const vitesseM = 0.01;
let rayonM = 80;

let angleF = 0;

function animerM() {
    const containerMCenterX = containerMRect.left + containerMRect.width / 2;
    const containerMCenterY = containerMRect.top + containerMRect.height / 2;

    const xFusion = containerMCenterX + rayonM * Math.cos(angleF) - logoFusion.offsetWidth / 2;
    const yFusion = containerMCenterY + rayonM * Math.sin(angleF) - logoFusion.offsetHeight / 2;

    logoFusion.style.left = xFusion + 'px';
    logoFusion.style.top = yFusion + 'px';

    angleF += vitesseM;

    requestAnimationFrame(animerM);
}

containerM.addEventListener('mouseenter', async function () {
    boucleUpM(170);
    await sleep(500)
    logoFusion.style.zIndex = 3
});

containerM.addEventListener('mouseleave', function () {
    boucleDownM(100);
    logoFusion.style.zIndex = 1
});

animerM();

function boucleUpM(NewRayonM) {
    if (rayonM < NewRayonM) {
        rayonM++;
        setTimeout(function() {
            boucleUpM(NewRayonM);
        }, 1);
    }
}

function boucleDownM(NewRayonM) {
    if (rayonM > NewRayonM) {
        rayonM--;
        setTimeout(function() {
            boucleDownM(NewRayonM);
        }, 1);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }