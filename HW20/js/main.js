'use strict';
//Minimum, 1 task
/*
  1.  function newFunction (){

    }
  2. let newFunction = function (){

  }
  3. let newFunction = () =>...
*/

// Minimum, 2 task
let argumentsCounter = (...nums) => { return nums.length; }
console.log(argumentsCounter(7, 45, 11));

// Minimum. task 3

function compareNums(a, b) {
    let comparison;
    (a < b) ? comparison = -1: (a > b) ? comparison = 1 : comparison = 0;
    return comparison;
}
console.log(compareNums(6, 7));

// Minimum , 4 task

function submitOfFactorial(x) {
    let result = 1;
    while (x) {
        result *= x--;
    }
    return result;
}
console.log(submitOfFactorial(1));

// Minimum, task 5

function numbersToString(num1, num2, num3) {
    let result;
    result = `` + num1 + num2 + num3;
    return result
}
console.log(numbersToString(7, 7, 7));

// Minimum, task 6
function area(a, b) {
    let rectangleArea;
    rectangleArea = a * b;
    if (b == undefined) {
        rectangleArea = a ** 2;
    }
    return rectangleArea
}
console.log(area(7, 5));

// Normal, task 1

function isPerfect(num) {
    let result = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            result += i;
        }
    }

    if (result === num && result !== 0) {
        return true;
    } else {
        return false;
    }


}
console.log(isPerfect(500));


// normal Task 2
function isPerfectDia(min, max) {

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {
            if (isPerfect(i)) {
                console.log(`${i} is perfect`)
            }
        }
    }

}
isPerfectDia(1, 100000)