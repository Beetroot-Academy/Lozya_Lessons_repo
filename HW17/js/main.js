// Імена
alert('Коректні імена для змінних в JS: userName, usersFullName, _userName, user1');
// Неправильні імена
alert("Некоректні імена змінних: UserName (not CamelCase), 1user, let(Використання зарезервованих імен), user Name, user-name");
// коментування коду
alert(' Способи коментування коду: // (строковий коментар), /**/ (необмежений коментар)');
// Стилі написання змінних
alert('Стилі написання змінних: CamelCase, lowerCamelCase, const у верхньому регістрі (COLOR_RED)');
//  Виведення імені
let userName = prompt("Яке у Вас ім'я?");
alert("Привіт, " + userName + ".");
// Підрахунок Віку
let userYear = prompt("Який у Вас рік народження?");
const serverYear = 2022;
let userAge = serverYear - userYear;
alert("Ваш вік: " + userAge + ".");
// Вирахування периметру квадрата
let squareSize = prompt("Яка довжина сторони квадрата у сантиметрах?");
let squarePerim = squareSize * 4;
alert("Периметр квадрату: " + squarePerim + " см.");
//  вирахування площі кола
let radius = prompt("Яка довжина радіуса кола у сантиметрах?");
let pi = 3.14;
let doubleRadius = radius * radius;
let area = doubleRadius * pi;
alert("Площа кола ≈" + area + " см.");
//  Вирахування швидкості
let distance = prompt("Яка відстань між двома містами у кілометрах?");
let time = prompt("За який час Ви бажаєте дістатися до другого міста в годинах?");
let velocity = distance / time;
alert("Швидкість, з якою Вам необхідно рухатись: " + velocity + "км/год, щоб дістатися вечірки вчасно :)");
// Конвертер Валют
const course = 29.57;
let dollar = prompt("Скільки долларів Ви бажаєте обміняти?");
let grn = course * dollar;
alert("Нічого собі, це: " + grn + " гривень! Можеш їх задонатити ЗСУ ♥.");
