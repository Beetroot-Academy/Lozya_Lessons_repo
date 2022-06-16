let chooseElement;

function openModal() {
    chooseElement = document.querySelector(`.modal`);
    chooseElement.classList.add(`active`);
}

function closeModal() {
    chooseElement = document.querySelector(`.modal`);
    chooseElement.classList.remove(`active`);
}
