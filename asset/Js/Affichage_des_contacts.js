// ------Affiche ma passion-------
const image = document.getElementById("ActiveLeTexte");
const texte = document.getElementById("TexteCache");
const suppression = document.getElementById("TexteAeffacer");
const disparition = document.getElementById("Disparait");

image.addEventListener("click", () => {
  texte.classList.add("show");
  suppression.classList.add("show");
  disparition.style.display = "none";
});

