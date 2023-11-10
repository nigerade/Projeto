// Swiper - AnimaÃ§Ã£o Produtos
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        520: {
            slidesPerView: 1,
        },

        950: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        1400: {
            slidesPerView: 3,
        },
    },
});
//  ESTE SITE FOI DESENVOLVIDO POR NICHOLAS GERADE - COPYRIGHT Â© 2023 