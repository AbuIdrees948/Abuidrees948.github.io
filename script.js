// SCROLL REVEAL ANIMATION

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


// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// CURRENT YEAR

const footerYear = document.querySelector("footer p");

if (footerYear) {
    footerYear.innerHTML =
        `© ${new Date().getFullYear()} Ibraheem Idrees. All rights reserved.`;
}


// SCHOOL PROJECT GALLERY

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

function showSchoolImage(index) {
    currentSchoolImage = index;

    const image = document.getElementById("schoolProjectImage");
    const counter = document.getElementById("galleryCounter");

    if (!image || !counter) {
        return;
    }

    image.src = schoolImages[currentSchoolImage].src;
    image.alt = schoolImages[currentSchoolImage].alt;

    counter.textContent =
        `${currentSchoolImage + 1} / ${schoolImages.length}`;
}

function nextSchoolImage() {
    currentSchoolImage =
        (currentSchoolImage + 1) % schoolImages.length;

    showSchoolImage(currentSchoolImage);
}

function previousSchoolImage() {
    currentSchoolImage =
        (currentSchoolImage - 1 + schoolImages.length) %
        schoolImages.length;

    showSchoolImage(currentSchoolImage);
}


// AUTOMATICALLY CHANGE SCHOOL PROJECT IMAGE

setInterval(nextSchoolImage, 4000);
