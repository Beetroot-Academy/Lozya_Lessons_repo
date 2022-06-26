const API = `https://awesome-wallet-app.herokuapp.com/auth/login`;

const form = document.querySelector(`.form`);
let accessToken;

form.addEventListener(`submit`, logIn);

async function logIn(event) {
    event.preventDefault();
    const emailValue = document.querySelector(`#email`).value;
    const passValue = document.querySelector(`#password`).value;
    let data = await fetch(API, {
        headers: { "Content-Type": "application/json" },
        method: `post`,
        body: JSON.stringify({
            email: emailValue,
            password: passValue,
        }),
    });
    let json = await data.json();
    accessToken = json.data.accessToken
}
