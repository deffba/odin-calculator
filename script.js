/*PSEUDO-CODE
    1. Get entered operand
        i. set eventlisteners to numerals
        ii. store in firstOperand
    2. Get operator
        i. eventlisteners on operators
        ii. display operator
        iii. store firstOperand and operator in string.?
        iiib. store operator separately and await second operand.
    3. Get next operand(s)
    4. Perform calculation
    5. Display result

    Nice-to-haves
    1. Keyboard support
    2. Square root calculation
    3. Memory function

    */



/*=================================================
                GLOBAL VARIABLES
=================================================*/
let displayValue = null;
let firstOperand = null;
let secondOperand = null;
let operatorState = null;




/*=================================================
                MATH FUNCTIONS
=================================================*/

function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}



/*=================================================
                    DISPLAY
=================================================*/

let display = document.getElementById('display');

function updtDisplay(string) {
    display.textContent = string;
}



/*=================================================
                    INPUT
=================================================*/

//Number buttons

const numBtns = document.getElementsByClassName('numeral');

    //first operand & display
function getNum() {
    for (const num of numBtns) {
        num.addEventListener('click', () =>{
            if (displayValue === null) {
                displayValue = num.textContent;
                updtDisplay(displayValue);
                return; 
            }
            displayValue += num.textContent;
            updtDisplay(displayValue);
            console.log(displayValue);
        });
    }
}

getNum()

    //second operand
function getNumTwo() {
    for (const num of numBtns) {
        num.addEventListener('click', () =>{
            if (secondOperand === null) {
                secondOperand = num.textContent;
                console.log(secondOperand);
            } else {
                secondOperand += num.textContent;
                console.log(secondOperand);
            }
        });
}}

//Decimal point button
const point = document.getElementById('point');

point.addEventListener('click', () => {
    if (displayValue === null) {
        return;
        
    } else if (displayValue.includes('.')) {
        return;
    } else if (secondOperand !== null) {;
        secondOperand += point.textContent;
        console.log(secondOperand);
        displayValue += point.textContent;
        updtDisplay(displayValue);
    } else {
        displayValue += point.textContent;
        updtDisplay(displayValue);
    }
});

//Operators 
const operators = document.getElementsByClassName('operator');

function getOp() {
    for (const operator of operators) {
        operator.addEventListener('click', () =>{
            if (displayValue === null) {
                return;
            } else if (displayValue.includes(`${operatorState}`)){
                return;
            }
            else if (operator.textContent == '×') {
                operatorState = '*';
                firstOperand = Number(displayValue);
                displayValue += '*';
                updtDisplay(displayValue);
            } else {
                operatorState = operator.textContent;
                displayValue += operatorState;
                updtDisplay(displayValue);
            } 
            getNumTwo();
        });
    }
}

getOp();



//Reset
const clearBtn = document.querySelector('#ac');

clearBtn.addEventListener('click', () => {
    displayValue = null;
    firstOperand = null;
    secondOperand = null;
    operatorState = null;
    updtDisplay('0');
});
