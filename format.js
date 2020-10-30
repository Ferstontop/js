var readline = require('readline-sync');

let str = readline.question("enter number: ");

numberWithCommas(str);
console.log(numberWithCommas(str));

function numberWithCommas(str) {
    let str1 = str;
    return str1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}