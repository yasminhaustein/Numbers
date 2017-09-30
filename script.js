/**
 * Created by yasminhaustein on 29.09.17.
 */
document.onload = start();
var randomNumber;
var currentInput = [];
var number_of_Digits;
var div = document.getElementById("number");

function start() {
    number_of_Digits = 3;
    generateNumber();
}

function generateNumber() {
    div = document.getElementById("number");
    start = Date.now();
    randomNumber = Math.floor(Math.random() * Math.pow(10, number_of_Digits));

    div.textContent = randomNumber;
    number_of_Digits++;
    window.setTimeout(vanishNumber,3000);
}

function vanishNumber() {
    div.textContent = "";
}

function numberInput(n) {
    currentInput.push(n);
    div.textContent = currentInput.toString();
}

function eraseNumber() {
    currentInput.pop();
    div.textContent = currentInput.toString();
}

function checkNumber() {
    generateNumber();
}