document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("recruiter-message");
  const overlay = document.getElementById("overlay");
  const text = document.getElementById("message-text");
  const closeBtn = document.getElementById("close-message");

  if (!localStorage.getItem("recruiterMessageSeen")) {
    // Message selon l'heure
    const hour = new Date().getHours();
    let message = "";

    if (hour >= 5 && hour < 12) {
      message =
        "Ravi de vous accueillir en début de journée. Nous vous souhaitons agréable visite du site.";
    } else if (hour >= 12 && hour < 18) {
      message =
        "Merci de votre visite à ce moment clé de la journée. Nous vous souhaitons agréable visite du site. Passez un bon après midi.";
    } else if (hour >= 18 && hour < 22) {
      message =
        "Merci de prendre ce temps pour découvrir mon travail.Passez une bonne soirée.";
    } else {
      message =
        "Merci de consulter mon profil dans un moment plus calme. Le développement demande parfois concentration et précision.";
    }

    text.textContent = message;

    // Affiche le message et le flou
    box.classList.add("show");
    overlay.classList.add("show");
    localStorage.setItem("recruiterMessageSeen", "true");
  }

  // Fermeture du message
  closeBtn.addEventListener("click", () => {
    box.classList.remove("show");
    overlay.classList.remove("show");
  });

  // Optionnel : clique sur overlay ferme aussi
  overlay.addEventListener("click", () => {
    box.classList.remove("show");
    overlay.classList.remove("show");
  });
});
