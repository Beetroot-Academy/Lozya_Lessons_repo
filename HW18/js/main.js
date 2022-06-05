// Додавання 0.1 та 0.2;
let a = 0.1;
let b = 0.2;
let c = 0.1 + 0.2;
alert("0.1 + 0.2 =" + c.toFixed(1));
//Додавання рядка
let str = "1";
let num = 2;
let summ = num + +str;
alert("'1' + 2 =" + summ);
//Задача з флешкою
let usersToken = +prompt("Який розмір вашої флешки у ГБ?")
let usersTokenSpace = usersToken * 1000;
const file = 820;
let numberOfFiles = Math.floor(usersTokenSpace / file);
alert(`На Вашому пристрої поміститься ${numberOfFiles} файли розміром 820 ГБ.`);
// Я тоже хочу шоколадку....
let usersCash = +prompt(`Яка у Вас є сумма у гривнях?`);
let chocoPrice = +prompt('Яка вартість шоколадки?');
let chocoNumber = Math.floor(usersCash / chocoPrice);
let chocoSummaryPrice = chocoNumber * chocoPrice;
let usersChange = usersCash - chocoSummaryPrice;
alert(`На ту сумму, яку Ви вказали, Ви можете придбати: ${chocoNumber}. Ваша решта: ${usersChange.toFixed(2)} гривень.`);
//Перевернути число (скажу честно- нагуглил, немного не понял логику)
let usersNumber = +prompt(`Назвіть одне тризначне число.`);
let result = 0;
while (usersNumber) {
    result *= 10;
    result += usersNumber % 10;
    usersNumber = Math.floor(usersNumber / 10)
}
alert(`Ваше перевернуте число: ${ result }.`);
// Розрахунки депозиту
let usersCredit = +prompt("Яку кількість грошей Ви бажаєте покласти на депозит у гривнях?")
const depositPercent = (0.05 / 12) * 2;
let usersReceivedMoney = usersCredit * depositPercent.toFixed(5);
alert(`При умові, що ви покладете ${usersCredit} гривень на депозитний рахунок, під 5% річних на 2 місяця,
Ви отримаєте сумму нарахованих відсотків: ${usersReceivedMoney.toFixed(2)} гривень.`);
//Що повернуть вираження :
let x = 2 && 0 && 3; //0
let y = 2 || 0 || 3; //2
let z = 2 && 0 || 3; //3
console.log(x, y, z);