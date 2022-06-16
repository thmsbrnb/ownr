window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.querySelectorAll(".form");

    form.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("is-active");
        });
    });
});
