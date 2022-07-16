// Burger
const menu = document.querySelector(".menu");
const nav = document.querySelector(".header__nav");
const footerWrapper = document.querySelector(`.footer__wrapper`);
const flexFooter = document.querySelector(".footer--flex");
let footerLogo = document.querySelector(".footer__logo");

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
        // autoplay: true,
        // interval: 2500,
        cover: true,
        fixedHeight: `calc(100vh - 80px)`,
        arrows: false,
        rewind: true,
        classes: {
            pagination: "splide__pagination hero__pagination",
            page: "splide__pagination__page hero__pagination--page",
        },
        breakpoints: {
            768: {
                fixedHeight: `calc(100vh - 60px)`,
            },
        },
    });
    let slider2 = new Splide(`#arrivals__slider`, {
        perPage: 5,
        perMove: 1,
        pagination: false,
        type: "loop",
        focus: `center`,
        gap: `15px`,
        breakpoints: {
            768: {
                perPage: 3,
                width: `90%`,
                gap: `5px`,
            },
            430: {
                arrows: false,
                pagination: true,
                perPage: 1,
                width: `100%`,
            },
        },
    });
    let slider3 = new Splide(`#partners__slider`, {
        perPage: 9,
        perMove: 1,
        pagination: false,
        gap: `20px`,
        type: "loop",
        breakpoints: {
            768: {
                perPage: 6,
                width: `90%`,
            },
            430: {
                arrows: false,
                pagination: true,
                perPage: 2,
                width: `100%`,
            },
        },
    });
    slider3.mount();
    slider2.mount();
    slider1.mount();
    // replace of logo
    if (window.outerWidth < 585) {
        let logoContainer = document.createElement(`div`);
        logoContainer.classList.add(`logo-430`);
        footerWrapper.prepend(logoContainer);
        logoContainer.prepend(footerLogo);
        footerLogo = document.querySelector(".footer__logo");
        logoContainer.style.textAlign = `center`;
        footerLogo.style.display = `inline-block`;
        return;
    } else if (window.outerWidth <= 768 && window.outerWidth > 430) {
        let logoContainer = document.createElement(`div`);
        logoContainer.classList.add(`logo-768`);
        flexFooter.prepend(logoContainer);
        logoContainer.prepend(footerLogo);
        return;
    } else {
        return;
    }
});
