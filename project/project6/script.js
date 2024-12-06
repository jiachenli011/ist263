document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".card, .route-card");
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
});