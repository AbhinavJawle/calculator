const addButton = document.querySelector(".add-btn");
const subtractdButton = document.querySelector(".subtract-btn");
const multiplyButton = document.querySelector(".multiply-btn");
const divideButton = document.querySelector(".divide-btn");
const clearButton = document.querySelector(".clear-btn");
const equalButton = document.querySelector(".equal-btn");

const currentDisplayDiv = document.querySelector(".currentDisplay");
const previousDisplayDiv = document.querySelector(".previousDisplay")

let operator = '';
let currentValue = '';
let nextValue = ''
let result = null;

let displayValue = [];

let decimalPlaced = false;

function add(a, b){
    let sum = a+b;
    return sum;
}

function subtract(a, b){
    let diff = a-b;
    return diff;
}

function multiply(a, b){
    let prod = a*b;
    return prod;
}

function divide(a, b){
    let div = a/b;
    return div;
}


clearButton.addEventListener('click', () => {
    displayValue = [];
    currentDisplayDiv.innerText = "";
    previousDisplayDiv.innerText = "";
    operator = '';
    result = null;
    decimalPlaced = false;
    document.querySelector(".decimal-btn").disabled = false;
});


function appendValue(value) {
    if(value === '.' && decimalPlaced == false) {
        document.querySelector(".decimal-btn").disabled = true;
        decimalPlaced = true;
    }

    if(currentDisplayDiv.innerText == '') currentDisplayDiv.innerText = value;

    else currentDisplayDiv.innerText += value; 

    displayValue.push(value);
    
}

function appendOperatorValue(operatorValue) {

    document.querySelector(".decimal-btn").disabled = false;
    decimalPlaced = false;

    if (operator && displayValue.length > 0) {
        operate();
    }

    if(result !== null) {
        currentValue = result;
        previousDisplayDiv.innerText = currentValue + " " + operatorValue;
    }

    else if(result == null)
    {
        currentValue = displayValue;
        currentValue = currentValue.join('');

        previousDisplayDiv.innerText += currentValue + ' ' + operatorValue;

    }
        
    currentDisplayDiv.innerText = ""
    displayValue = []
    operator = operatorValue;

}

function operate(){
    console.log(displayValue)
    console.log('displayvalue: ' + typeof displayValue)
    
    nextValue = displayValue;
    nextValue = nextValue.join('')

    currentValue = Number(currentValue);
    nextValue = Number(nextValue);

    console.log('nextvalue: ' + typeof nextValue)
    console.log(nextValue)

    switch (operator) {
        case '+':
            result = add(currentValue, nextValue)
            break;
    
        case '-':
            result = subtract(currentValue, nextValue)
            break;

        case '*':
            result = multiply(currentValue, nextValue)
            break;  

        case '/':
            result = divide(currentValue, nextValue)
            break;
            
        default:
            currentDisplayDiv.innerText = 'error';
            break;
    }

    result = result.toFixed(5)
    currentDisplayDiv.innerText = result;

}
