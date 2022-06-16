window.addEventListener("DOMContentLoaded", (event) => {
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
