/**
 * Created by yasminhaustein on 29.09.17.
 */
document.onload = start();
var div;
var randomNumber;
var number_of_Digits;
var start;
var div = document.getElementById("number");

function start() {
    number_of_Digits = 3;
    generateNumber();
    window.setTimeout(vanishNumber(),10000);
}

function generateNumber() {
    div = document.getElementById("number");
    start = Date.now();
    randomNumber = Math.floor(Math.random() * Math.pow(10, number_of_Digits));

    div.textContent = randomNumber;
    number_of_Digits++;
}

function vanishNumber() {
    div.textContent = "";
}