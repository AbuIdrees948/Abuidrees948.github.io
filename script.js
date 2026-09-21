// ================================
// SCROLL REVEAL ANIMATION
// ================================

const sections = document.querySelectorAll(".section");
const projectCards = document.querySelectorAll(".project-card");
const skillCards = document.querySelectorAll(".skill-card");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
});

projectCards.forEach((card, index) => {
    card.classList.add("hidden");

    card.style.transitionDelay = `${index * 0.1}s`;

    observer.observe(card);
});

skillCards.forEach((card, index) => {
    card.classList.add("hidden");

    card.style.transitionDelay = `${index * 0.1}s`;

    observer.observe(card);
});


// ================================
// NAVBAR SCROLL EFFECT
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ================================
// CURRENT YEAR
// ================================

const footerYear = document.querySelector("footer p");

if (footerYear) {
    footerYear.innerHTML =
        `© ${new Date().getFullYear()} Ibraheem Idrees. All rights reserved.`;
}