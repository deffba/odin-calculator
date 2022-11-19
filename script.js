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
let displayValue = null;
let firstOperandHolder = null;
let secondOperandHolder = null;
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

function updtDisplay() {
    if (firstOperand === null) {
    display.textContent = 0;
    } else if (firstOperand !== null && operatorState === null) {
        display.textContent = `${firstOperand}`;
    } else if (operatorState !== null) {
        display.textContent = `${firstOperand}${operatorState}`;
    } 
    
    if (secondOperand !== null) {
        display.textContent = `${firstOperand}${operatorState}${secondOperand}`;
    }

}


/*=================================================
                    INPUT
=================================================*/

//GET NUMBERS

const numBtns = document.getElementsByClassName('numeral');

for (const num of numBtns){
    num.addEventListener('click', () => {
        let inputNum = num.textContent;

        if (operatorState === null) { //handle firstOperand both as null value and int
            (firstOperand === null) ? firstOperand = inputNum : firstOperand += inputNum; 
            updtDisplay();
        }

        if (operatorState !== null) {
            (secondOperand === null) ? secondOperand = inputNum : secondOperand += inputNum; 
            updtDisplay();
        }
    })
}


//


//GET OPERATOR

const operators = document.getElementsByClassName('operator');

for (const op of operators) {
          op.addEventListener('click', () =>{
            let operator = op.textContent
        
                    if (operatorState !== null) {
                        return;
                    } else if (operator == '×') {
                        operatorState = '*';                    
                    } else {
                        operatorState = op.textContent;
                    } 

                    updtDisplay();
                });
            }











// /*=================================================
//                     DISPLAY
// =================================================*/

// let display = document.getElementById('display');

// function updtDisplay(string) {
//     display.textContent = string;
// }



// /*=================================================
//                     INPUT
// =================================================*/

// //Number buttons

// const numBtns = document.getElementsByClassName('numeral');

//     //first operand & display






//  function getNum() {
//     for (const num of numBtns) {
//         num.addEventListener('click', () =>{
//             if (operatorState !== null){
//                 return;
//             } else if(firstOperandHolder === null) {
//                 firstOperandHolder = num.textContent;
//                 displayValue = firstOperandHolder;
//                 updtDisplay(displayValue);
//                 return; 
//             }
//             firstOperandHolder += num.textContent;
//             displayValue = firstOperandHolder;
//             updtDisplay(displayValue);
//             console.log(firstOperandHolder);
//         });
//     }
// }

// getNum()

//     //second operand
// function getNumTwo() {
//     for (const num of numBtns) {
//         num.addEventListener('click', () =>{
 
//             if (operatorState === null){
//                 return;
//             }            
//             else if (secondOperandHolder === null) {
//                 secondOperandHolder = num.textContent;
//                 displayValue += secondOperandHolder;
//                 updtDisplay(displayValue);
//                 return;
//             }
        
//                 secondOperandHolder += num.textContent;
//                 displayValue += num.textContent;
//                 updtDisplay(displayValue);

//         });
// }}

// //Decimal point button
// const point = document.getElementById('point');

// point.addEventListener('click', () => {
//     if (firstOperandHolder === null) {
//         return;
        
//     } else if (firstOperandHolder.includes('.')) {
//         return;
//     } else if (secondOperandHolder !== null) {;
//         secondOperandHolder += point.textContent;
//         console.log(secondOperandHolder);
//         displayValue += point.textContent;
//         updtDisplay(displayValue);
//     } else {
//         firstOperandHolder += point.textContent;
//         displayValue = firstOperandHolder;
//         updtDisplay(displayValue);
//     }
// });

// //Operators 
// const operators = document.getElementsByClassName('operator');

// function getOp() {
//     for (const operator of operators) {
//         operator.addEventListener('click', () =>{
//             firstOperandHolder = Number(firstOperandHolder);

//             if (typeof firstOperandHolder !== 'number') {
//                 return;
//             } else if (displayValue.includes(`${operatorState}`)){
//                 return;
//             }
//             else if (operator.textContent == '×') {
//                 operatorState = '*';
//                 displayValue += '*';
//                 updtDisplay(displayValue);
//             } else {
//                 operatorState = operator.textContent;
//                 displayValue += operatorState;
//                 updtDisplay(displayValue);
//             } 
//             firstOperand = Number(firstOperandHolder);
//             secondOperandHolder = null;
//             getNumTwo();
//         });
//     }
// }

// getOp();



// //Reset
// const clearBtn = document.querySelector('#ac');

// clearBtn.addEventListener('click', () => {
//     displayValue = null;
//     firstOperandHolder = null;
//     secondOperandHolder = null;
//     firstOperand = null;
//     secondOperand = null;
//     operatorState = null;
//     updtDisplay('0');

    
// });
