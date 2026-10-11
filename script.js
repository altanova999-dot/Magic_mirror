// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll(
    ".service-card, .about-text, .booking"
);

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================
// BOOKING BUTTON
// =========================

const bookingButtons = document.querySelectorAll(
    ".primary-btn, .book-btn"
);

bookingButtons.forEach((button) => {

    button.addEventListener("click", () => {

        alert(
            "✨ Thank you for choosing Lumière!\n\nYour appointment booking section is coming soon."
        );

    });

});


// =========================
// HERO TEXT ANIMATION
// =========================

window.addEventListener("load", () => {

    const heroContent = document.querySelector(".hero-content");

    heroContent.classList.add("loaded");

});
