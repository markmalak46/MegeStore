let backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add("active");
    } else {
        backToTopButton.classList.remove("active");
    }
});

backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
});