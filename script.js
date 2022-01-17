const display = document.querySelector('.display');
const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')
const numbers = document.querySelectorAll('.num')
const operators = document.querySelectorAll('.oper');
const backspace = document.querySelector('#back');
let displayValue = "" ;
let int1 = "";
let int2 = "";
let operand = "";
const history = document.querySelector('.history')

function add(a,b){
    let sum = parseInt(a) + parseInt(b);
    // history.textContent += " + "
    if(!isNaN(sum)){
        int1 = sum;
        int2 = "";
    }
    return sum;
}

function subtract(a,b){
    let sum = parseInt(a) - parseInt(b);
    if(!isNaN(sum)){
        int1 = sum;
        int2 = "";
    }
    return sum;
}

function multiply(a,b){
    let sum = parseInt(a) * parseInt(b);
    if(!isNaN(sum)){
        int1 = sum;
        int2 = "";
    }
    return sum;
}

function divide(a,b){
    let sum = parseInt(a) / parseInt(b);
    if(!isNaN(sum)){
        int1 = sum;
        int2 = "";
    }
    return sum;
}

function operate(operator,a,b){
    if(int2 !== ""){
        history.textContent = `${int1} ${operand} ${int2}`
    }
    else{
        history.textContent = `${int1}`
    }
    
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
    }
}

function firstNum(input){
    if(int1 == 0){
        display.textContent = "";
        int1 = ""
    }
    int1 += input;
    display.textContent += input;
}

function secondNum(input){
    if(int2 == 0){
        display.textContent = "";
        int2 = ""
    }
    int2 += input;
    display.textContent += input;
    console.log(input)
}

numbers.forEach(num => {
    num.addEventListener('click', function(){
        console.log(operand)
    // if(int1.charAt(0) == "0" && num.textContent == "0"){
    //     console.log("kr")
    //     return;        
    // }
    if(operand == ""){
        firstNum(num.textContent);
        console.log('bok')
    }
    if(int1 !== "" && operand !== ""){
        display.textContent == "";
        secondNum(num.textContent)
        console.log('k')
    }
    })
})

operators.forEach(oper => {
    oper.addEventListener('click', function(){
         history.textContent += display.textContent;
        if(int1 !== "" && int2 !== ""){
            int1 = operate(operand,int1, int2)
            console.log("bok")
            display.textContent = `=${int1}`;
            console.log(int2)
            // history.textContent = `${int1} ${operand} ${int2}`
        }
        else{
            operate(oper.textContent);
            display.textContent = oper.textContent;
            operand = oper.textContent;
        }
        
    })
})

equals.addEventListener('click', function(){
    if(int1 !== "" && int2 !== ""){
        display.textContent = operate(operand, int1, int2);
    }
    else if(int1 !== "" && int2 == ""){
        return
    }
    
})

backspace.addEventListener('click', function(){
    if(operand == ""){
        int1 = int1.slice(0, -1);
        console.log(int1)
        display.textContent = int1;
    }
    else{
        int2 = int2.slice(0,-1);
        console.log(int2)
        display.textContent = int2;
    }
    
})

clear.addEventListener('click', function(){
    display.textContent = "";
    history.textContent = "";
    operand = "";
    int2 = "";
    int1 = "";
})

