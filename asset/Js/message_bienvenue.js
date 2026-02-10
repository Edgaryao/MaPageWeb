document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("recruiter-message");
  const overlay = document.getElementById("overlay");
  const text = document.getElementById("message-text");
  const closeBtn = document.getElementById("close-message");

  if (!localStorage.getItem("recruiterMessageSeen")) {
    // Message selon l'heure
    const hour = new Date().getHours();
    let message = "";

    if (hour >= 6 && hour < 12) {
      message =
        "Ravi de vous accueillir en début de journée. Nous vous souhaitons agréable visite du site.";
    }else if (hour >= 12 && hour < 14) {
      message =
        "Ravi de vous accueillir a ce moment clé de la journée dédié a la pause. Nous vous souhaitons agréable visite du site.";
    } else if (hour >= 14 && hour < 18) {
      message =
        "Merci de votre visite , Nous vous souhaitons agréable visite du site. Passez un bon après midi.";
    } else if (hour >= 18 && hour < 22) {
      message =
        "Merci de votre visite à ce moment clé de la journée. Nous vous souhaitons agréable visite du site et une bonne soirée.";
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


