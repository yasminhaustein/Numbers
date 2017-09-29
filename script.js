/**
 * Created by yasminhaustein on 29.09.17.
 */
document.onload = start();
var randomNumber;
function start() {
    generateNumber();
}

function generateNumber() {
    randomNumber = Math.random();
    alert(randomNumber);
    document.getElementById("number").innerHTML = randomNumber;
}