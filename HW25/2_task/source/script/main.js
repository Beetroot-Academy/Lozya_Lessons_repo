let chooseElement;

function openModal() {
    chooseElement = document.querySelector(`.modal`);
    chooseElement.classList.toggle(`active`);
}

function closeModal() {
    chooseElement = document.querySelector(`.modal`);
    chooseElement.classList.toggle(`active`);
}
