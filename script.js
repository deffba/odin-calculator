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

