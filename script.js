
"use strict";

// ========================================
// IBRAHEEM IDREES — PORTFOLIO INTERACTIONS
// ========================================


// 1. SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card"
);

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px"
        }
    );

    revealElements.forEach((element, index) => {
        element.classList.add("hidden");

        if (
            element.classList.contains("project-card") ||
            element.classList.contains("skill-card")
        ) {
            element.style.transitionDelay = `${(index % 4) * 0.08}s`;
        }

        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("show");
    });
}


// 2. NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

function updateNavbar() {
    if (!navbar) return;

    navbar.classList.toggle("scrolled", window.scrollY > 30);
}

window.addEventListener("scroll", updateNavbar, {
    passive: true
});

updateNavbar();


// 3. CLOSE MOBILE NAVIGATION AFTER CLICKING A LINK

const navigationLinks = document.querySelectorAll(
    ".navbar nav a, .nav-links a"
);

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        const nav = link.closest("nav");

        if (nav) {
            nav.classList.remove("active");
        }

        if (navbar) {
            navbar.classList.remove("menu-open");
        }
    });
});


// 4. CURRENT YEAR IN FOOTER

const footer = document.querySelector("footer");

if (footer) {
    const yearElement = footer.querySelector("[data-year]");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}


// 5. NEXT LEVEL SCHOOL PROJECT IMAGE GALLERY

const schoolImages = [
    {
        src: "images/home.png",
        alt: "Next Level School homepage"
    },
    {
        src: "images/contact.png",
        alt: "Next Level School contact page"
    },
    {
        src: "images/dashboard.png",
        alt: "Next Level School dashboard"
    },
    {
        src: "images/ai.png",
        alt: "Next Level School AI page"
    }
];

let currentSchoolImage = 0;
let galleryTimer = null;

function showSchoolImage(index) {
    const image = document.getElementById("schoolProjectImage");
    const counter = document.getElementById("galleryCounter");

    if (!image || !counter) return;

    currentSchoolImage =
        (index + schoolImages.length) % schoolImages.length;

    image.src = schoolImages[currentSchoolImage].src;
    image.alt = schoolImages[currentSchoolImage].alt;

    counter.textContent =
        `${currentSchoolImage + 1} / ${schoolImages.length}`;
}

function nextSchoolImage() {
    showSchoolImage(currentSchoolImage + 1);
}

function previousSchoolImage() {
    showSchoolImage(currentSchoolImage - 1);
}

function startSchoolGallery() {
    if (galleryTimer) {
        clearInterval(galleryTimer);
    }

    const image = document.getElementById("schoolProjectImage");

    if (!image) return;

    galleryTimer = setInterval(() => {
        // Pause automatic changes while the browser tab is hidden.
        if (!document.hidden) {
            nextSchoolImage();
        }
    }, 4000);
}

function stopSchoolGallery() {
    if (galleryTimer) {
        clearInterval(galleryTimer);
        galleryTimer = null;
    }
}

if (document.getElementById("schoolProjectImage")) {
    showSchoolImage(0);
    startSchoolGallery();

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stopSchoolGallery();
        } else {
            startSchoolGallery();
        }
    });
}


// 6. MAKE GALLERY FUNCTIONS AVAILABLE TO HTML BUTTONS

window.nextSchoolImage = nextSchoolImage;
window.previousSchoolImage = previousSchoolImage;


// 7. SMOOTH SCROLL FOR INTERNAL LINKS

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
