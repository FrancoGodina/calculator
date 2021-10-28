function add(value, value2) {
    let addResult = value + value2;
    return addResult;
}

function substract(value, value2) {
    let subResult = value - value2;
    return subResult;
}

function multiply(value, value2) {
    let multiplyResult = value * value2;
    return multiplyResult;
}

function divide(value, value2) {
    let divideResult = value / value2;
    return divideResult;
}

let value;
let value2;
let currentOperator;
let solution;
let oddCounter = 0;
let decimalCounter = 0;


function operate() {
    if (currentOperator === "+") {
        solution = add(value, value2);
        document.getElementById("display").value = solution;
    }
    else if (currentOperator === "*") {
        solution = multiply(value, value2);
        document.getElementById("display").value = solution;
    }
    else if (currentOperator === "/" && value2 != 0) {
        solution = divide(value, value2);
        document.getElementById("display").value = solution;
    }
    else if (currentOperator === "-") {
        solution = substract(value, value2);
        document.getElementById("display").value = solution;
    }
}

function operateIndicator() {
    if (oddCounter % 2 != 0) {
        storeValue();
        clearDisplay();
    }
    else if (oddCounter % 2 == 0) {
        storeValue2();
        operate();
        storeValue();
    }
}

function decimalCount() {
    decimalCounter++;
}
function clickCounter() {
    oddCounter++;
}
function restartCounter() {
    oddCounter = 0;
}


function storeValue() {
    value = document.getElementById("display").value;
    value = parseFloat(value);
    return value;
}
function storeValue2() {
    value2 = document.getElementById("display").value;
    value2 = parseFloat(value2);
    return value2;
}


function clearDisplay(){
    document.getElementById("display").value = "";
}
function clearData() {
    document.getElementById("display").value = "";
    value = "";
    value2= "";
    oddCounter = 0;
    decimalCounter = 0;
}
function deleteChar() {
    document.getElementById("display").value = document.getElementById("display").value.substring(0, document.getElementById("display").value.length - 1)
}

function secondOperation() {
    if (oddCounter === 2) {
        clearDisplay();
        oddCounter = 1;
    }
}


function numberSeven() {
    document.getElementById("display").value += "7";
}
function numberEight() {
    document.getElementById("display").value += "8";
}
function numberNine() {
    document.getElementById("display").value += "9";
}
function numberFour() {
    document.getElementById("display").value += "4";
}
function numberFive() {
    document.getElementById("display").value += "5";
}
function numberSix() {
    document.getElementById("display").value += "6";
}
function numberOne() {
    document.getElementById("display").value += "1";
}
function numberTwo() {
    document.getElementById("display").value += "2";
}
function numberThree() {
    document.getElementById("display").value += "3";
}
function numberZero() {
    document.getElementById("display").value += "0";
}
function decimal() {
    if (decimalCounter === 0) {
        document.getElementById("display").value += ".";
    }
}


function addOperator() {
    currentOperator = "+";
    decimalCounter = 0;
}
function substractOperator() {
    currentOperator = "-";
    decimalCounter = 0;
}
function multiplyOperator() {
    currentOperator = "*";
    decimalCounter = 0;
}
function divideOperator() {
    currentOperator = "/";
    decimalCounter = 0;
}