window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.querySelectorAll(".form");
    const header = document.querySelector(".header");
    const nav = document.querySelector(".header .nav");
    const link = document.querySelectorAll(".nav .list_item");
    const logo = document.querySelector(".header .logo");

    // Form
    form.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("is-active");
        });
    });

    // Handle header animation
    function animateHeader() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            header.classList.add("is-active");
        } else {
            header.classList.remove("is-active");
        }
    }

    window.onscroll = function () {
        animateHeader();
    };

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

    // Swiper
    let swiperPopular = new Swiper(".swiper", {
        loop: true,
        spaceBetween: 24,
        slidesPerView: "auto",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        breakpoints: {
            720: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});
