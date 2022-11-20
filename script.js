/*PSEUDO-CODE
    1. Get entered operand
        i. set eventlisteners to numerals
        ii. store in firstOperandHolder
    2. Get operator
        i. eventlisteners on operators
        ii. display operator
        iii. store firstOperandHolder and operator in string.?
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
let firstOperand = null;
let secondOperand = null;
let operatorState = null;
let operator; //the operator that's shown




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
    if (num1 === 0 && num2 ===0){
        sum
    }
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



}


/*=================================================
                    INPUT
=================================================*/

//GET NUMBERS

const numBtns = document.getElementsByClassName('numeral');

for (const num of numBtns){
    num.addEventListener('click', () => {
        getNumInput(num);
    })
}

function getNumInput(obj) {
    let inputNum = obj.textContent;

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
          op.addEventListener('click', () =>{
            getOperator(op);
        });
}

function getOperator(obj) {
    operator = obj.textContent
        
    if (sum !== null) {
        firstOperand = sum;
        resetOnEqual();
    } 
    
    if (firstOperand === null) {
            return;
    } else if (operatorState !== null) {
        return;
    } else if (operator == '×') {
        operatorState = '*';                    
    } else {
        operatorState = obj.textContent;
    } 

    updtDisplay();
}
    
//APPLY OPERATOR

const equalSign = document.getElementById('equalSign');

equalSign.addEventListener('click', () => {
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
})

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


    











