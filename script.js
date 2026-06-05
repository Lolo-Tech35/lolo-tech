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
// --- GENERATION AUTOMATIQUE DU CALENDRIER ---
function initLoloCalendar() {
    const monthYearEl = document.getElementById("calendar-month-year");
    const daysEl = document.getElementById("calendar-days");
    
    // Sécurité : si on n'est pas sur la page contact, on ne fait rien
    if (!daysEl) return;

    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    const monthsFR = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];

    // Écrit le mois actuel (ex: "Juin 2026")
    monthYearEl.innerText = `${monthsFR[currentMonth]} ${currentYear}`;

    // Index du 1er jour du mois (0 = Dimanche, 1 = Lundi...)
    let firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    // Re-calcul pour commencer la semaine par le Lundi
    firstDayIndex = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

    // Nombre de jours total dans le mois
    const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    daysEl.innerHTML = ""; // Clean le container

    // 1. Placement des cases blanches pour le décalage du début de mois
    for (let i = 0; i < firstDayIndex; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("calendar-day-empty");
        daysEl.appendChild(emptyCell);
    }

    // 2. Création et tri des jours du mois
    for (let day = 1; day <= totalDaysInMonth; day++) {
        const dayCell = document.createElement("div");
        dayCell.classList.add("calendar-day");
        dayCell.innerText = day;

        const weekday = new Date(currentYear, currentMonth, day).getDay();

        // CONDITION DE TES DISPOS : dispo le week-end (Samedi = 6, Dimanche = 0)
        // Dis-moi si tu veux inverser ou modifier !
        if (weekday === 6 || weekday === 0) {
            dayCell.classList.add("dispo"); // Vert si c'est le week-end
        } else {
            dayCell.classList.add("occupe"); // Rouge en semaine
        }

        // Illumine la case si c'est le jour d'aujourd'hui
        if (day === now.getDate() && currentMonth === now.getMonth() && currentYear === now.getFullYear()) {
            dayCell.classList.add("today");
        }

        daysEl.appendChild(dayCell);
    }
}

// On attend que la page soit prête pour lancer le calendrier
window.addEventListener("DOMContentLoaded", initLoloCalendar);