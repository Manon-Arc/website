const texteComplet = "Développeuse informatique";
  
// Temps de délai entre chaque lettre (en millisecondes)
const vitesseEcriture = 110;
const vitesseEffacement = 50;
const pauseAvantEffacement = 1200;

function ecrireTexte() {
  let index = 0;
  var intervalEcriture = setInterval(function() {
    var texteActuel = document.getElementById("animation_machine").textContent;
    document.getElementById("animation_machine").textContent = texteActuel + texteComplet.charAt(index);
    index++;
    if (index >= texteComplet.length) {
      clearInterval(intervalEcriture);
      setTimeout(function() {
        effacerTexte();
      }, pauseAvantEffacement);
    }
  }, vitesseEcriture);
}

function effacerTexte() {
  var index = texteComplet.length - 1;
  var intervalEffacement = setInterval(function() {
    var texteActuel = document.getElementById("animation_machine").textContent;
    document.getElementById("animation_machine").textContent = texteActuel.slice(0, index);
    index--;
    if (index < 0) {
      clearInterval(intervalEffacement);
      setTimeout(function() {
        ecrireTexte();
      }, pauseAvantEffacement);
    }
  }, vitesseEffacement);
}

window.onload = function() {
  ecrireTexte();
};