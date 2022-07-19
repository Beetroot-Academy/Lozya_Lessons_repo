var mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "46.185.114.91",
    port: "3306",
    user: "Maykun",
    database: "vitek",
    password: "123456789d",
});

const form = document.querySelector(`.form`);

form.addEventListener(`submit`, logIn);

async function logIn(event) {
    event.preventDefault();
    const name = document.querySelector(`#name`).value;
    const age = document.querySelector(`#age`).value;
    connection.connect(function (err) {
        if (err) {
            return console.error("Ошибка: " + err.message);
        }
        let sql = `INSERT INTO clients (name, age) VALUES ('${name}', '${age}')`;
        connection.query(sql, function (err, result, fields) {
            if (err) throw err;
            console.log(`success`);
        });
        connection.query(
            "SELECT * FROM clients",
            function (err, result, fields) {
                if (err) throw err;
                console.log(result);
            }
        );
    });
}

//task_2

let textarea = document.querySelector("#area");
let textareaValue;

textarea.addEventListener("change", function () {
    textareaValue = textarea.value;
    localStorage.setItem("areavalue", textareaValue);
    // console.log('Hi')
});

//task_3

let button = document.querySelector(".light__theme");
let body = document.querySelector("body");

button.addEventListener("click", function () {
    body.classList.toggle("dark__theme");
    let bodyClass = body.className;
    localStorage.setItem("theme", bodyClass);
});
document.addEventListener("DOMContentLoaded", function () {
    let bodyClass = localStorage.getItem("theme");
    body.classList.add(`${bodyClass}`);
});
