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
  if (data.status == 200) {
    let json = await data.json();
    accessToken = json.data.accessToken;
    document.cookie = `Authorization=${accessToken}`;
    window.location.href = "user.html";
  }
}

//task_2

let textarea = document.querySelector('#area');
let textareaValue;

textarea.addEventListener('change', function() {
textareaValue = textarea.value;
localStorage.setItem('areavalue', textareaValue);
// console.log('Hi')
})

//task_3

let button = document.querySelector('.light__theme');
let body = document.querySelector('body');

button.addEventListener('click', function(){
body.classList.toggle('dark__theme')
let bodyClass = body.className;
localStorage.setItem('theme', bodyClass);

})
document.addEventListener('DOMContentLoaded', function() {
    let bodyClass = localStorage.getItem('theme');
    body.classList.add(`${bodyClass}`);
})
