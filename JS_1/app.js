// Part 1
console.log(2 + "2" == "2" + 2); // "22" == "22" -> true
console.log(2 + "3" == "3" + 2); // "23" == "32" -> false
console.log("3" + "2" == 3 + 2); // "32" == 5 -> false
console.log("3" + "2" == "3" + 2); // "32" == "32" -> true
console.log("3" + "2" == 2 + "3"); // "32" == "23" -> false
console.log(2 + Number("3") == Number("3") + 2); // 5 == 5 -> true

console.log(12 / "6"); // 2
console.log("number" + 15 + 3); // на першому кроці результат "number15", на другому "number153"
console.log(15 + 3 + "number"); // на першому кроці результат 18, на другому "18number"
console.log([1] > null); // true, оскільки масив не порожній
console.log("foo" + + "bar"); // "fooNaN"; + "bar" сприймається як спроба утворити число зі стрічки "bar", тому у цьому місці результатом є NaN
console.log("true" == true); // false, true конвертується в число 1, "true" в NaN, кінцеве порівняння NaN == 1
console.log(false == "false"); // false, кінцеве порівняння 0 == NaN
console.log(null == ""); // false, "" є стрічкою, а null ні на що не вказує
console.log(!!"false" == !!"true") // true, відбудеться порівняння true == true
console.log(['x'] == 'x'); // true, відбудеться порівняння 'x' == 'x'

// Part 2
const enemy = {
    name: "Bob"
};
const friend = {
    name: "Alex"
};
const me = friend;

me.name = "Bob";

console.log(friend.name); // "Bob", властивість name об'єкта було змінено раніше
console.log(me === friend); // true, бо me та friend є посиланнями на один і той самий об'єкт
console.log(me === enemy); // false, бо це різні об'єкти, хоч і з однаковим вмістом

// Part 3
const month = prompt("Введіть номер місяць: ");
if(!isNaN(Number(month))) {
    const monthNumber = Number(month);
    switch(monthNumber) {
        case 1:
            alert("January");
            break;
        case 2:
            alert("February");
            break;
        case 3:
            alert("March");
            break;
        case 4:
            alert("April");
            break;
        case 5:
            alert("May");
            break;
        case 6:
            alert("June");
            break;
        case 7:
            alert("July");
            break;
        case 8:
            alert("August");
            break;
        case 9:
            alert("September");
            break;
        case 10:
            alert("October");
            break;
        case 11:
            alert("November");
            break;
        case 12:
            alert("December");
            break;
        default:
            alert("Invalid number");
    }
} else {
    switch(month) {
        case "January":
            alert(1);
            break;
        case "February":
            alert(2);
            break;
        case "March":
            alert(3);
            break;
        case "April":
            alert(4);
            break;
        case "May":
            alert(5);
            break;
        case "June":
            alert(6);
            break;
        case "July":
            alert(7);
            break;
        case "August":
            alert(8);
            break;
        case "September":
            alert(9);
            break;
        case "October":
            alert(10);
            break;
        case "November":
            alert(11);
            break;
        case "December":
            alert(12);
            break;
        default:
            alert("Invalid input");
    }
}