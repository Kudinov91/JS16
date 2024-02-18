//Задача 1

// const age = prompt("Введите возраст: ");
// if (age >= 0 && age <= 2) {
//   alert("Child");
// } else if (age >= 12 && age <= 18) {
//   alert("Teen");
// } else if (age >= 18 && age <= 60) {
//   alert("Adult");
// } else if (age >= 59 && age <= 100) {
//   alert("Old");
// }

//Задача 2

// const userNum = prompt("Введите число от 0 до 9: ");

// const num = parseInt(userNum);

// if (!isNaN(num) && num >= 0 && num <= 9) {
//   const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
//   const specSym = symbols[num - 1];
//   alert("символ для числа " + num + " - " + specSym);
// } else {
//   alert("Введите число от 0 до 9. ");
// }

//Задача 3

// const userNum = prompt("Введите трехзначное число:");

// const num = parseInt(userNum);

// if (!isNaN(num) && userNum.length === 3) {
//   const digit1 = Math.floor(num / 100);
//   const digit2 = Math.floor((num % 100) / 10);
//   const digit3 = num % 10;

//   if (digit1 === digit2 || digit1 === digit3 || digit2 === digit3) {
//     alert("В числе есть одинаковые цифры.");
//   } else {
//     alert("В числе нет одинаковых цифр.");
//   }
// } else {
//   alert("Введите трехзначное число.");
// }

//Задача 4

// const userYear = prompt("Введите год: ");

// const year = parseInt(userYear);

// if (!isNaN(year)) {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     alert(year + " високосный год");
//   } else {
//     alert(year + " не високосный год");
//   }
// } else {
//   alert("Введите корректный год.");
// }

//Задача5

// const userNum = parseInt(prompt("Введите число:"));

// if (!isNaN(userNum)) {
//   if (userNum >= 10 && userNum <= 99) {
//     alert(userNum + " это двузначное число.");
//   } else {
//     alert(userNum + " не является двузначным числом.");
//   }
// } else {
//   alert("Введите корректное число. ");
// }

//Задача 6
// const userNum = parseInt(prompt("Введите число: "));

// if (!isNaN(userNum)) {
//   if (userNum >= 100 && userNum <= 999) {
//     alert(userNum + " это трехзначное число");
//   } else {
//     alert(userNum + " не является трехзначным числом. ");
//   }
// } else {
//   alert("Введите корректное число");
// }

//Задача 7

// const year = parseInt(prompt("Введите год: "));

// if (!isNaN(year)) {
//   if (year % 100 === 0) {
//     alert(year + " вековой год ");
//   } else {
//     alert(year + " не вековой год");
//   }
// } else {
//   alert("Введите корректный год");
// }

//Задача 8

// const num = parseInt(prompt("Введите число: "));

// if (!isNaN(num)) {
//   const square = Math.sqrt(num);
//   if (Number.isInteger(square)) {
//     alert(num + " является квадратом целого числа.");
//   } else {
//     alert(num + " не является квадратом целого числа.");
//   }
// } else {
//   alert("Введите корректное число.");
// }

//Задача 9

// const year = parseInt(prompt("Введите год: "));

// if (!isNaN(year)) {
//   if (year % 10 === 0) {
//     alert(year + " это юбилейный год");
//   } else {
//     alert(year + " это не юбилейный год");
//   }
// } else {
//   alert("Введите корректный год.");
// }
