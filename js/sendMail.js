emailjs.init("99umhq8lrWPBSiJLM");

function SendEmail() {
  var nom = document.getElementById('nom').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  if (!validerEmail(email)) {
    alert('Veuillez saisir une adresse e-mail valide.');
    return;
  }

  emailjs.send("service_test", "template_fnf2u67", {
    nom: nom,
    email: email,
    message: message
  })
  .then(function(response) {
    alert('Votre message a été envoyé avec succès !');
    document.getElementById('contactForm').reset();
  })
  .catch(function(error) {
    alert('Une erreur est survenue. Veuillez réessayer plus tard.');
  });
}

function validerEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}