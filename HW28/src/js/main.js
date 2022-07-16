// Burger
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
    menu.classList.toggle("menu--active");
    nav.classList.toggle("nav--active");
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
        fixedHeight: `100vh`,
        fixedWidth: `100vh`,
        arrows: false,
        rewind: true,
    });
    slider1.mount();
});
