/* ============================
   MOBILE MENU TOGGLE
============================ */
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".navbar ul");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");  // show/hide menu
        menuBtn.classList.toggle("open");    // toggle icon animation (optional)
    });
}

/* ============================
   ACTIVE NAV LINK HIGHLIGHT
============================ */
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach(link => {
    if(link.getAttribute("href") === currentPage){
        link.classList.add("active");
    }
});

/* ============================
   FADE-IN ON SCROLL
============================ */
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    });
});

elements.forEach(el => observer.observe(el));

/* ============================
   PROJECT CARD 3D TILT EFFECT
============================ */
const cards = document.querySelectorAll(".interactive-card");

cards.forEach(card => {
    card.addEventListener("mousemove", e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;
        const rotateX = ((y / rect.height) - 0.5) * -20;

        card.style.transform = 
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});
