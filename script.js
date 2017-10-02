/**
 * Created by yasminhaustein on 29.09.17.
 */
window.onload = initiate;
var randomNumber = [];
var currentInput = [];
var number_of_digits;
var speed;
var div = document.getElementById("number");
var numberpad = document.getElementById("numberpad");

function initiate() {
    document.getElementById("ingame").style.display = "none";
    document.getElementById("settings").style.display = "block";
}

function start() {
    document.getElementById("ingame").style.display = "block";
    document.getElementById("settings").style.display = "none";
    number_of_digits = document.getElementById("number_of_digits").value;
    speed = document.getElementById("number_of_seconds").value;
    generateNumber();
}

function generateNumber() {
    numberpad.style.display = "none";
    randomNumber = [];
    currentInput = [];
    div = document.getElementById("number");
    for (var i = 0; i < number_of_digits; i++) {
        randomNumber.push(Math.floor(Math.random() * 10));
    }
    div.textContent = stringOf(randomNumber);
    number_of_digits++;
    window.setTimeout(vanishNumber, (1000 * (10 - speed)));
}

function vanishNumber() {
    div.textContent = "";
    numberpad.style.display = "block";

}

function numberInput(n) {
    currentInput.push(n);
    div.textContent = stringOf(currentInput);
}

function eraseNumber() {
    currentInput.pop();
    div.textContent = stringOf(currentInput);
}

function checkNumber() {
    var check;
    if (randomNumber.length == currentInput.length) {
        for (var i = 0; i < randomNumber.length; i++) {
            if (randomNumber[i] != currentInput[i]) {
                check = true;
            }
        }
        if (!check) generateNumber();
        else gameOver();
    }
    else gameOver();
}

function stringOf(x) {
    var string = [];
    for (var i = 0; i < x.length; i++) {
        string = string + x[i];
    }
    return string;
}

function gameOver() {
    alert("Game Over! The right number was " + stringOf(randomNumber));
    initiate();

}