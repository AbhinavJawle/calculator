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


clearButton.addEventListener('click', (x,y) => {
    displayValue = [];
    currentDisplayDiv.innerText = "";
    previousDisplayDiv.innerText = "";
    operator = '';
    // currentValue = 0;
    // nextValue = 0;
    result = null;
});


function appendValue(value) {
    if(currentDisplayDiv.innerText == '') currentDisplayDiv.innerText = value;
    else currentDisplayDiv.innerText += value;
    // console.log(value)
 
    displayValue.push(value);
    
}

function appendOperatorValue(operatorValue) {
    console.log("pressed operator");
    // if(currentDisplayDiv.innerText == '') {
    //     currentDisplayDiv.innerText = '';
    //     operator = '';
    // }
        if(nextValue !== null) operate()
            
            if(result !== null) {
                currentValue = result;
                console.log('1' + operatorValue)
                previousDisplayDiv.innerText = " " + currentValue + " " + operatorValue;
            }
        else if(result == null)
        {
            currentValue = displayValue;
            console.log('2 ' + operatorValue);
            currentValue = currentValue.join('');
            previousDisplayDiv.innerText += currentValue + ' ' + operatorValue;

        }
        
        currentDisplayDiv.innerText = ""
        // displayValue = '';
        displayValue = []
        

    
    operator = operatorValue;
    // console.log(operator)
    // console.log(currentValue)
}

function operate(){
    // console.log(displayValue)

    nextValue = displayValue;
    nextValue = nextValue.join('')

    currentValue = Number(currentValue);
    nextValue = Number(nextValue);

    console.log('operator' + operator)
    console.log('currentvalue2: ' + currentValue);
    console.log('nextvalue2: ' + nextValue);
    console.log(displayValue)

    switch (operator) {
        case '+':
            result = add(currentValue, nextValue)
            currentDisplayDiv.innerText = result;
            break;
    
        case '-':
            result = subtract(currentValue, nextValue)
            currentDisplayDiv.innerText = result;
            break;

        case '*':
            result = multiply(currentValue, nextValue)
            currentDisplayDiv.innerText = result;
            break;  

        case '/':
            result = divide(currentValue, nextValue)
            currentDisplayDiv.innerText = result;
            break;
            
        default:
            currentDisplayDiv.innerText = 'error';
            break;
    }

    // currentValue = result;
    // nextValue = currentValue;

}
