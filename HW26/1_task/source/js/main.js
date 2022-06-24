let section = document.querySelector(`.section`);
let pressTime = 0;
document.addEventListener(`keydown`, (e) => {
    if (e.key.toLowerCase() == `q` && e.ctrlKey) {
        if (pressTime === 0) {
            let text = document.querySelector(`.text`);
            let textDiv = document.querySelector(`.text__container`);
            textDiv.remove();
            let textArea = document.createElement(`textarea`);
            textArea.classList.add(`text__container`);
            section.appendChild(textArea);
            textArea.cols = `40`;
            textArea.value = text.textContent;
            return pressTime++;
        }
    }
    if (e.key == `+` && e.ctrlKey) {
        if (pressTime >= 1) {
            let textArea = document.querySelector(`.text__container`);
            let newParagraph = document.createElement(`p`);
            newParagraph.innerText = textArea.value;
            newParagraph.classList.add(`text`);
            textArea.remove();
            let newDiv = document.createElement(`div`);
            newDiv.classList.add(`text__container`);
            section.appendChild(newDiv);
            newDiv.appendChild(newParagraph);
            return (pressTime = 0);
        }
    }
});
