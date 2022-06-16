window.addEventListener("DOMContentLoaded", (event) => {
    const nav = document.querySelector(".header .nav");
    const link = document.querySelectorAll(".nav .list_item");
    const logo = document.querySelector(".header .logo");

    // Handle nav display on click :
    document.querySelectorAll(".nav_trigger").forEach((trigger) => {
        trigger.addEventListener("click", () => {
            nav.classList.toggle("is-active");
            document.querySelector(".burger").classList.toggle("is-active");
        });
    });

    // Handle active state of nav links :
    link.forEach((li) => {
        li.addEventListener("click", (e) => {
            link.forEach((el) => el.classList.remove("is-active"));
            li.classList.add("is-active");
        });
    });

    // Remove active state of nav links when clicking on logo(home) :
    logo.addEventListener("click", (e) => {
        link.forEach((el) => el.classList.remove("is-active"));
    });
});
