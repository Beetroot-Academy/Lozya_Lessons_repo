// Splide API
let splide = new Splide("#hero__slider", {
    autoplay: true,
    interval: 2500,
    paginationDirection: "ttb",
    direction: "ltr",
    arrows: false,
    type: "loop",
    cover: true,
    fixedHeight: `100vh`,
    pauseOnHover: false,
    classes: {
        pagination: "splide__pagination pagination",
        page: "splide__pagination__page pagination__dots",
    },
});
let splide2 = new Splide("#slider2", {
    type: "loop",
    autoplay: true,
    interval: 3000,
    perPage: 3,
    perMove: 1,
    height: `700px`,
    gap: "30px",
    pauseOnHover: false,
    classes: {
        pagination: "splide__pagination pagination news__pagination",
        page: "splide__pagination__page pagination__dots",
    },
});
splide.mount();
splide2.mount();

//GMaps maps
const displayMap = document.getElementById("map");

function initMap(newLat, newLng) {
    const myLatLng = { lat: newLat, lng: newLng };

    const map = new google.maps.Map(displayMap, {
        zoom: 13,
        center: myLatLng,
        disableDefaultUI: true,
        styles: [
            {
                stylers: [
                    {
                        saturation: -90,
                    },
                ],
            },
        ],
    });

    const image = new google.maps.MarkerImage(
        "./source/img/map-dot.png",
        null, // size
        null, // origin
        new google.maps.Point(8, 8), // anchor (move to center of marker)
        new google.maps.Size(25, 25) // scaled size (required for Retina display icon)
    );

    const marker = new google.maps.Marker({
        flat: true,
        optimized: false,
        position: myLatLng,
        map: map,
        icon: image,
        title: "We are here!",
    });
    marker.setMap(map);
}

window.initMap = initMap(50.458309842219066, 30.46494879270167);

//
