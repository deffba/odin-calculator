
/*=================================================
                GLOBAL VARIABLES
=================================================*/
let firstOperand = null;
let secondOperand = null;
let operatorState = null;
let operator; //the operator that's displayed




/*=================================================
                MATH FUNCTIONS
=================================================*/
let sum = null;

function addition(num1, num2) {
    return sum = num1 + num2;
}

function subtraction(num1, num2) {
    return sum = num1 - num2;
}

function multiplication(num1, num2) {
    return sum = num1 * num2;
}

function division(num1, num2) {
    return sum = num1 / num2;
}



/*=================================================
                    DISPLAY
=================================================*/

let display = document.getElementById('display');

function updtDisplay() {
    if (firstOperand === null) { //when empty
        display.textContent = 0;
    } else if (firstOperand !== null && operatorState === null) { //start displaying 1st operand
        display.textContent = `${firstOperand}`;
    } else if (operatorState !== null) { //display 1st operand and operator
        display.textContent = `${firstOperand}${operator}`;
    }

    if (secondOperand !== null) { //display 1st operand, operator and 2nd operand
        display.textContent = `${firstOperand}${operator}${secondOperand}`;
    }

    if (sum !== null) { //display sum after pressing equal sign
        display.textContent = sum;
    }

    if (sum == 'Infinity') { //When dividing by zero
        display.style.fontSize = '38px';
        infAndBeyond = setTimeout(() => {
            sum += ' and beyond!';
            updtDisplay()
        }, 1750)
    }



}


/*=================================================
                    INPUT
=================================================*/

//GET NUMBERS

const numBtns = document.getElementsByClassName('numeral');

for (const num of numBtns) {
    num.addEventListener('click', () => {
        getNumInput(num);
    })
}

window.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key >= 0 || key <= 9) {
    getNumInput(key)
}
})



function getNumInput(obj) {
    let inputNum;
    
    if (obj >= 0 || obj <= 9) { //differentiate between mouse and keyboard input
        inputNum = obj;
    } else {
        inputNum = obj.textContent;
    }


    if (operatorState === null) { //handle firstOperand both as null value and int
        (firstOperand === null) ? firstOperand = inputNum : firstOperand += inputNum;
        updtDisplay();
    }

    if (operatorState !== null) {
        (secondOperand === null) ? secondOperand = inputNum : secondOperand += inputNum;
        updtDisplay();
    }
}


//GET DECIMAL POINT

let decimalPoint = document.getElementById('point');

decimalPoint.addEventListener('click', () => {
    getDecPnt(decimalPoint);

});

function getDecPnt(obj) {
    let decPnt = obj.textContent;

    if (operatorState === null) { //prevent several decimal points in one number
        if (firstOperand.includes('.')) {
            return;
        } else {
            firstOperand += decPnt;
        }
    }

    if (operatorState !== null) { //prevent several decimal points in one number
        if (secondOperand.includes('.')) {
            return;
        } else {
            secondOperand += decPnt;
        }
    }

    updtDisplay();
}


//GET OPERATOR

const operators = document.getElementsByClassName('operator');

for (const op of operators) {
    op.addEventListener('click', () => {
        getOperator(op);
    });
}

window.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key == '/' || key == '*' || key == '+' || key == '-') {
        event.preventDefault();
    getOperator(key);
}
})

function getOperator(obj) {
    
    //operator = obj.textContent

    if (obj == '+' || obj == '-') { //handle keyboard input
        operator = obj;
    } else if (obj == '/' ){
        operator = '÷'
    } else if (obj == '*') {
        operator = '×';
    } else {
        operator = obj.textContent;
    }

    if (sum !== null) { //continue calculating with new sum
        firstOperand = sum;
        resetOnEqual();
    }

    if (firstOperand === null) {//prevent inputting operator before first operand
        return;
    } else if (operatorState !== null) {
        return;
    } else if (operator == '×') {
        operatorState = '*';
    } else {
        operatorState = operator;
    }
    

    updtDisplay();
}

//APPLY OPERATOR

const equalSign = document.getElementById('equalSign');

equalSign.addEventListener('click', () => {
    operate();
})



window.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;
    if (event.key == '=') {
        operate();
    }
})

function operate() {
    let fO = Number(firstOperand);
    let sO = Number(secondOperand);


    switch (operatorState) {
        case '+':
            addition(fO, sO)
            break;

        case '-':
            subtraction(fO, sO)
            break;

        case '*':
            multiplication(fO, sO)
            break;

        case '÷':
            division(fO, sO)
            break;

    }

    updtDisplay();

}

//RESET

function resetOnEqual() { //partial reset after equals to continue operation
    sum = null;
    operatorState = null;
    secondOperand = null;
}

const acBtn = document.getElementById('ac')

acBtn.addEventListener('click', () => {
    fullRst();
})

function fullRst() { //clears both operands and operator and resets screen
    sum = null;
    operatorState = null;
    secondOperand = null;
    firstOperand = null;
    display.style.fontSize = '65px';
    updtDisplay();
}


//DELETE

const delBtn = document.getElementById('delete');

delBtn.addEventListener('click', () => {
    del();
})

function del() {
    if (secondOperand !== null) {
        secondOperand = secondOperand.slice(0, -1);
        if (secondOperand === '') { //if all characters are deleted you can keep deleting
            secondOperand = null;
        }

    } else if (operatorState !== null) {
        operatorState = null;
    } else {
        firstOperand = firstOperand.slice(0, -1);
    }
    updtDisplay();
}














