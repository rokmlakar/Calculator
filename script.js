const display = document.querySelector('.display');
const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')
const numbers = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.oper');
const backspace = document.querySelector('#back');
const decPoint = document.querySelector('.dot')
const history = document.querySelector('.history')
let displayValue = "";
let int1 = "";
let int2 = "";
let operand = "";


function add(a, b) {
    let sum = parseFloat(a) + parseFloat(b);
    // history.textContent += " + "
    if (!isNaN(sum)) {
        int1 = sum;
        int2 = "";
    }
    return sum;
}

function subtract(a, b) {
    let sum = parseFloat(a) - parseFloat(b);
    if (!isNaN(sum)) {
        int1 = sum;
        int2 = "";
    }
    return sum;
}

function multiply(a, b) {
    let sum = parseFloat(a) * parseFloat(b);
    if (!isNaN(sum)) {
        int1 = sum;
        int2 = "";
    }
    return sum;
}

function divide(a, b) {
    let sum = parseFloat(a) / parseFloat(b);
    if(parseFloat(a) % parseFloat(b) !== 0){
        sum.toFixed(2)
    }
    console.log(a, b)
    if (a = '0' && b == '0') {
        console.log('000')
        sum = "I dont understand"
    }
    if (!isNaN(sum)) {
        int1 = sum;
        int2 = "";
    }
    return sum;
}

function operate(operator, a, b) {
    if (int2 !== "") {
        history.textContent = `${int1} ${operand} ${int2}`
    }
    else {
        history.textContent = `${int1}`
    }

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function firstNum(input) {
    int1 += input;
    display.textContent += input;
}

function secondNum(input) {
    int2 += input;
    display.textContent += input;
    console.log(input)
}

numbers.forEach(num => {
    num.addEventListener('click', function () {
        console.log(int1)
        let check = history.textContent;
        check = check.slice(-1);
        let checkNum = display.textContent;
        if(check !== "" && operand == ""){
            secondNum(num.textContent)
            console.log(num.textContent)
        }
        if(checkNum.includes('=') == true){
            display.textContent = "";
            history.textContent = "";
            operand = "";
            int2 = "";
            int1 = "";
        }
        if(checkNum == operand){
            display.textContent = "";
        }
        if(checkNum.charAt(0) == "0" && checkNum.length == 1){
            console.log("e")
            return
        }
        if(operand == "" && int1 !== ""){
        }
        if (operand == "" ) {
            firstNum(num.textContent);
        }
        if (int1 !== "" && operand !== "") {
            if (int2.length < 1 && check != operand) {
                history.textContent += ` ${operand}`;
            }
            secondNum(num.textContent)
        }
    })
})

operators.forEach(oper => {
    oper.addEventListener('click', function () {
        history.textContent += display.textContent;
        if (int1 !== "" && int2 !== "") {
            int1 = operate(operand, int1, int2)
            display.textContent = `=${int1}`;
            console.log(int1, int2)
        }
        else {
            console.log(int1, int2)
            operate(oper.textContent);
            display.textContent = oper.textContent;
            operand = oper.textContent;
        }
    })
})

equals.addEventListener('click', function () {
    if (int1 !== "" && int2 !== "") {
        display.textContent = `=${operate(operand, int1, int2)}`;
    }
    else if (int1 !== "" && int2 == "") {
        return
    }
})

decPoint.addEventListener('click', function () {
    let check = display.textContent;
    if (check.includes(".") == false) {
        if (operand == "") {
            int1 += "."
            display.textContent = int1;
        }
        if (operand !== "") {
            int2 += "."
            display.textContent = int2;
        }
    }
})

backspace.addEventListener('click', function () {
    if (operand == "") {
        int1 = int1.slice(0, -1);
        console.log(int1)
        display.textContent = int1;
    }
    else {
        int2 = int2.slice(0, -1);
        console.log(int2)
        display.textContent = int2;
    }
})

clear.addEventListener('click', function () {
    display.textContent = "";
    history.textContent = "";
    operand = "";
    int2 = "";
    int1 = "";
})

window.onkeydown = function(e){
    let x = e.key;
    let choice;
    switch(x){
        case '1':
            choice = document.querySelector('#one');
            choice.click();
            break;
        case '2':
            choice = document.querySelector('#two');
            choice.click();
            break;
        case '3':
            choice = document.querySelector('#three');
            choice.click();
            break;
        case '4':
            choice = document.querySelector('#four');
            choice.click();
            break;
        case '5':
            choice = document.querySelector('#five');
            choice.click();
            break;
        case '6':
            choice = document.querySelector('#six');
            choice.click();
            break;
        case '7':
            choice = document.querySelector('#seven');
            choice.click();
            break;
        case '8':
            choice = document.querySelector('#eight');
            choice.click();
            break;
        case '9':
            choice = document.querySelector('#nine');
            choice.click();
            break;
        case '0':
            choice = document.querySelector('#zero');
            choice.click();
            break;
        case '+':
            choice = document.querySelector('#addition');
            choice.click();
            break;
        case '-':
            choice = document.querySelector('#subtraction');
            choice.click();
            break;
        case '/':
            choice = document.querySelector('#division');
            choice.click();
            break;
        case '*':
            choice = document.querySelector('#multiplication');
            choice.click();
            break;
        case '.':
            choice = document.querySelector('#decimal');
            choice.click();
            break;
        case 'Enter':
            choice = document.querySelector('#equals');
            choice.click();
            break;
        case 'Backspace':
            choice = document.querySelector('#back');
            choice.click();
            break;
        case 'Escape':
            choice = document.querySelector('#clear');
            choice.click();
            break;
    }
}