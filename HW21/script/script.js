//  Min 1
let gelik = {
    manufacturer: `Mercedes - Benz`,
    model: `G 63 AMG`,
    year: 2021,
    averageSpeed: 150,
    fuelVolume: 96,
    fuelConsume: 13.8,
    driver: 'Vasya',
    actualFuel: 0
}


//Min 1.1

function showInfo(vehicle) {
    console.log(`
    Виробник: ${vehicle.manufacturer},
    Модель: ${vehicle.model},
    Рік виготовлення: ${vehicle.year},
    Середня швидкість: ${vehicle.averageSpeed},
    Ємність паливного бака: ${vehicle.fuelVolume},
    Середня витрата палива: ${vehicle.fuelConsume},
    Залишок палива: ${vehicle.actualFuel}.
    `);
}
//Min 1.2

function driverAdding(vehicle, driver) {
    return vehicle.driver = driver
}


//Min 1.3
function fuelUp(vehicle, litres) {
    vehicle.actualFuel = vehicle.actualFuel + litres;
    if (vehicle.actualFuel > vehicle.fuelVolume) {
        console.log(`Розлилося по штанам. Ви можете налити бензин в запасний бак.`);
        vehicle.actualFuel = vehicle.fuelVolume
    }
}

// Min 1.4
function countTravelTime(vehicle, driver, distance) {
    if (vehicle.driver != driver) {
        console.log(`Геть від машини, вона не твоя.`);
        return
    }
    let fuelNeeded = (vehicle.fuelConsume / 100) * distance;
    fuelNeeded = fuelNeeded.toFixed(2)
    if (fuelNeeded > vehicle.actualFuel) {
        let awnser = confirm(`Потрібно заправитися. Чи бажаєте Ви це зробити зараз?`)
        if (awnser) {
            fuelUp(vehicle, fuelNeeded - vehicle.actualFuel)
            console.log(`Заправились) Можемо їхати.`);
        }
    }

    let rideTime = distance / +vehicle.averageSpeed;
    let stopTime = Math.round(rideTime / 4);
    let travelTime = (rideTime + stopTime).toFixed(1);
    console.log(`Тобі потрібно ${travelTime} годин, щоб дістатись до місця прибуття.`);
}
showInfo(gelik)
driverAdding(gelik, `Ivan`)
countTravelTime(gelik, `Ivan`, 540)

//Norm 1
let time = {
    hours: 20,
    minutes: 1,
    seconds: 0,
}


//Norm 1.1
function addingZero(value) {
    if (value < 10) {
        return "0" + value
    } else {
        return value
    }
}

function displayTime(time) {
    console.log(`
    ${addingZero(time.hours)}:${addingZero(time.minutes)}:${addingZero(time.seconds)}
    `);
}
displayTime(time)
    //Norm 1.2
function addSecond(time, seconds) {
    result = time.seconds + seconds
    if (result >= 60) {
        time.seconds = result % 60;
        addMinutes(time, result / 60)
    } else {

        return time.seconds = time.seconds + result
    }
}
addSecond(time, 60)
displayTime(time);

// Norm 1.3
function addMinutes(time, minutes) {
    result = time.minutes + minutes
    if (result >= 60) {
        time.minutes = result % 60;
        addHours(time, Math.floor(result / 60))
    } else {

        return time.minutes = time.seconds + result
    }
}
addMinutes(time, 100)
displayTime(time);

// Norm 1.4 
function addHours(time, hours) {
    result = time.hours + hours
    if (result >= 24) {
        time.hours = result % 24;

    } else {
        return time.hours = result
    }
}
addHours(time, 5)
displayTime(time);

let sqrt = 7.15 % 1;
console.log(sqrt)

function getMiddle(s) {
    var middle = s.length / 2;
    return s.slice(middle - 1, middle + 1);
}

console.log(getMiddle(`testing`));