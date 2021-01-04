// Запросить у пользователя два числа, n и m - вывести все числа в диапазоне между ними.
/*
let n = Number(prompt('Enter first number'));
let m = Number(prompt('Enter second number'));
if (n > m) {
    for (let i=m; i<=n; i++) {
        console.log(i);
    }
} else if (n < m) {
    for (let i=n; i<=m; i++) {
        console.log(i);
    }
} else {
    console.log('You entered equal numbers');
}
*/

// Запросить у пользователя два числа, написать функцию при помощи стрелочного синтаксиса и аналог с function expression 
// которая бы возводила первое число в степень второго введенного числа, или в степень 2 по умолчанию
/*
let firstNum = Number(prompt('Enter first number'));
let secondNum =  Number(prompt('Enter second number'));
let exponentiation = (num1, num2) => {
    if(num2) {
        console.log(Math.pow(num1, num2));
    } else {
        console.log(Math.pow(num1, 2));
    }
}
exponentiation(firstNum, secondNum);

let exponentiation2 = function(num1, num2) {
    if(num2 !== 0) {
        console.log(Math.pow(num1, num2));
    } else {
        console.log(Math.pow(num1, 2));
    }
}
exponentiation2(firstNum, secondNum);
*/


// Запросить у пользователя два числа с плавающей точкой - умножить на 0.3 и округлить 
// до ближайшего целого числа.
/*
let num1 = Number(prompt('Enter first number'));
let num2 = Number(prompt('Enter second number'));
console.log(Math.round(num1 * 0.3), Math.round(num2 * 0.3));
*/

// Запросить у пользователя два числа - вывести случайное целое число в этом диапазоне.
/*
let number1 = Number(prompt('Enter first number'));
let number2 = Number(prompt('Enter second number'));
let randomNum;
if(number1 < number2) {
    randomNum = Math.round(Math.random() * (number2 - number1) +number1);
} else if (number1 > number2) {
    randomNum = Math.round(Math.random() * (number1 - number2) +number2);
} else {
    randomNum = number1;
}
console.log(randomNum);
*/

// Запросить  у пользователя две строки, найти сколько раз повторяется вторая в первой. 
// Вывести индексы всех вхождений.
/*
let str1 = prompt('Enter first string');
let str2 = prompt('Enter second string');
let currentPosition = 0;
while (true) {
    let foundPosition = str1.indexOf(str2, currentPosition);
    if(foundPosition == -1) break;

    console.log(foundPosition);
    currentPosition = foundPosition + 1;
}
*/

// Найти все численные значения в строке “ECMAScript 2015 (6th Edition, ECMA-262)”.
/*
let str = 'ECMAScript 2015 (6th Edition, ECMA-262)';
for (let i=0; i<str.length; i++) {
    if (!isNaN(Number(str[i])) && str[i] !== ' ') {
        console.log(str[i]);
    }
}
*/

// Найти все символы в верхнем регистре ECMAScript 2015 (6th Edition, ECMA-262).
/*
let str = 'ECMAScript 2015 (6th Edition, ECMA-262)';
let forbiddenSymblols = ['(', ')', ',', '-', ' '];
for (let i=0; i<str.length; i++) {
    if(str[i] == str[i].toUpperCase() && !Number(str[i]) && !forbiddenSymblols.includes(str[i])) {
        console.log(str[i])
    }
}
*/

// Найти все значения цветов #HEX в  HTML
/*
let htmlCode = document.documentElement.innerHTML;
let regex = /#[0-9A-Za-z]{3,6}/g;
console.log(htmlCode.match(regex));
*/

// Найти все вхождения номера телефона в стандартном виде
/*
let htmlCode = document.documentElement.innerHTML;
let regex = /[(]380[)][\s-][0-9]{3}[\s][0-9]{3}[\s][0-9]{2}[\s][0-9]{2}/g;
console.log(htmlCode.match(regex));
*/