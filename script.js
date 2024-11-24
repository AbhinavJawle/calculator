const addButton = document.querySelector(".add-btn");
const subtractdButton = document.querySelector(".subtract-btn");
const multiplyButton = document.querySelector(".multiply-btn");
const divideButton = document.querySelector(".divide-btn");
const clearButton = document.querySelector(".clear-btn");
const equalButton = document.querySelector(".equal-btn");


const currentDisplayDiv = document.querySelector(".currentDisplay");
const previousDisplayDiv = document.querySelector(".previousDisplay")

// let num2 = parseInt(prompt("Enter a number: "))

//let inputArray = [num1, operator, num2];

let operator = '';
let currentValue = '';
let previousValue = ''

let displayValue = [];

clearButton.addEventListener('click', () => {
    currentDisplayDiv.innerText = '';
})

function add(a, b){
    let sum;
    return sum = a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function clear() {
    currentDisplayDiv.innerText = '';
    previousDisplayDiv.innerText = '';
}

function appendValue(value) {
    if(currentDisplayDiv.innerText == '') currentDisplayDiv.innerText = value;
    else currentDisplayDiv.innerText += value;
    displayValue.push(value);
    
}

function appendOperatorValue(operatorValue) {
    if(currentDisplayDiv.innerText == '') {
        currentDisplayDiv.innerText = '';
        operator = '';
    }

    else {
        currentValue = displayValue;
        currentValue = currentValue.join('')
        previousDisplayDiv.innerText += currentValue + ' ' + operatorValue;
        currentDisplayDiv.innerText = ""
        operator = operatorValue;
        // displayValue = '';

    }
    
    console.log(operator)
    console.log(currentValue)
}

function operate(){
    
    appendValue(currentDisplayDiv.innerText)
    console.log(displayValue)
    console.log("operate");
}

// addButton.addEventListener("click", () => calculateDisplayvalue.innerText += "+");

// equalButton.addEventListener("click", () => {
//     if(calculateDisplayvalue.innerText.includes("+")){
//         console.log(add(num1, num2))
//     }
// });