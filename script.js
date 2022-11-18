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
let initialValue = null;
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

function getNum() {
    for (const num of numBtns) {
        num.addEventListener('click', () =>{
            if (initialValue === null) {
                initialValue = num.textContent;
                updtDisplay(initialValue);
                return; 
            }
            initialValue += num.textContent;
            updtDisplay(initialValue);
            console.log(initialValue);
        });
    }
}

getNum()

//Decimal point button
const point = document.getElementById('point');

point.addEventListener('click', () => {
    if (initialValue === null) {
        return;
    } else if (initialValue.includes('.')) {
        return;
    } else {
        initialValue += point.textContent;
        updtDisplay(initialValue);
    }
})





/*function cp() {
    for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', () => {
        console.log('hello');
    });
};
}

cp();*/



/*function getNum() {numBtns.forEach(item => {
    item.addEventListener('click', () => {
        let number = item.textContent;
        console.log(number);
    });
});
}

getNum();*/
