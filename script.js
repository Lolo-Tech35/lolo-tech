// 1. On récupère le bouton HTML grâce à son identifiant (ID)
const backToTopButton = document.getElementById("backToTop");

// 2. On écoute le défilement (scroll) de l'utilisateur sur la page
window.addEventListener("scroll", () => {
    // Si l'utilisateur descend de plus de 300 pixels
    if (window.scrollY > 300) {
        // On ajoute la classe "show" pour faire apparaître le bouton avec l'effet Glow
        backToTopButton.classList.add("show");
    } else {
        // Sinon, on lui enlève la classe pour le cacher de nouveau
        backToTopButton.classList.remove("show");
    }
});

// 3. On écoute le clic sur le bouton
backToTopButton.addEventListener("click", () => {
    // On remonte tout en haut (x: 0, y: 0) de façon fluide
    window.scrollTo({
        top: 0,
        behavior: "smooth" // C'est ça qui fait l'effet de glissement agréable
    });
});