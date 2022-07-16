// Burger
const menu = document.querySelector(".menu");
const nav = document.querySelector(".header__nav");

menu.addEventListener("click", () => {
    menu.classList.toggle("menu--active");
    nav.classList.toggle("header__nav--active");
});

//Splide

document.addEventListener("DOMContentLoaded", function () {
    let slider1 = new Splide(`#hero`, {
        type: "loop",
        perPage: 1,
        perMove: 1,
        autoplay: true,
        interval: 2500,
        cover: true,
        fixedHeight: `calc(100vh - 80px)`,
        arrows: false,
        rewind: true,
        classes: {
            pagination: "splide__pagination hero__pagination",
            page: "splide__pagination__page hero__pagination--page",
        },
    });
    let slider2 = new Splide(`#arrivals__slider`, {
        perPage: 5,
        perMove: 1,
        pagination: false,
        gap: `15px`,
        type: "loop",
        focus: `center`,
    });
    let slider3 = new Splide(`#partners__slider`, {
        perPage: 9,
        perMove: 1,
        pagination: false,
        gap: `20px`,
        type: "loop",
    });
    slider3.mount();
    slider2.mount();
    slider1.mount();
});
