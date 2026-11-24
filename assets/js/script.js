const formulaire = document.querySelector("#formulaire");
const nom = document.querySelector("#nom");
const avis = document.querySelector("#avis");
const erreur = document.querySelector("#erreur");
const commentaires = document.querySelector(".avis");

formulaire.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomValeur = nom.value.trim();
    const avisValeur = avis.value.trim();

    if (nomValeur.length < 2) {
    erreur.textContent = "Le nom doit contenir au moins 2 caractères.";
    erreur.style.display = "block";
    return;
}

if (avisValeur.length < 10) {
    erreur.textContent = "Le commentaire doit contenir au moins 10 caractères.";
    erreur.style.display = "block";
    return;
}

erreur.style.display = "none";

const commentaire = document.createElement("div");
commentaire.className = "commentaire";

const auteur = document.createElement("h4");
auteur.textContent = nomValeur;

const texte = document.createElement("p");
texte.textContent = avisValeur;

const supprimer = document.createElement("button");
supprimer.type = "button";
supprimer.className = "supprimer";
supprimer.textContent = "🗑️ Supprimer";

commentaire.appendChild(auteur);
commentaire.appendChild(texte);
commentaire.appendChild(supprimer);

commentaires.appendChild(commentaire);

supprimer.addEventListener("click", function() {
    commentaire.remove();
});

formulaire.reset();
});

const boutons = document.querySelectorAll(".supprimer");

boutons.forEach(function(bouton) {
    bouton.addEventListener("click", function() {
        bouton.parentElement.remove();
    });
});