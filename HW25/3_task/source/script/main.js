const redLight = document.querySelector(`.trafic__red`);
const yellowLight = document.querySelector(`.trafic__yellow`);
const greenLight = document.querySelector(`.trafic__green`);
let score = 0;

function changeColor() {
    if (score === 0) {
        redLight.classList.toggle(`active`);
        score++;
        return;
    } else if (score === 1) {
        redLight.classList.toggle(`active`);
        yellowLight.classList.toggle(`active`);
        score++;
        console.log(score);
        return;
    } else if (score === 2) {
        yellowLight.classList.toggle(`active`);
        greenLight.classList.toggle(`active`);
        score++;
        return;
    } else {
        greenLight.classList.toggle(`active`);
        score = 0;
        return;
    }
}
