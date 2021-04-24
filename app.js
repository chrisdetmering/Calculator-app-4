const screen = document.getElementById("display");
const equation = document.getElementById("display2");
const regex = /[0-9+][.][0-9+]/gm;
let operate = '';
let firstNumber = '';
let secondNumber = '';
let solved = 0;

const numberButtons = document.querySelectorAll(".nums");
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', (e) => {
        const number = e.target.textContent;
        screen.value += number;
        equation.value += number;

        if (operate === '') {
            firstNumber += number;
        } else if (operate != '') {
            if (secondNumber === '') {
                screen.value = '';
                screen.value += number;
            }
            secondNumber += number;
        }
    })
});

const operators = document.querySelectorAll(".operators");
operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        const selectedOperator = e.target.textContent;

        if (firstNumber != '' && operate === '') {
            operate = selectedOperator;
            equation.value += ' ' + operate + ' ';
        } else if (firstNumber && operate) {
        }
        if (secondNumber != '') {
        }
    })
});




const equals = document.querySelector("#equal");
equals.addEventListener("click", compute);

function compute() {
    solved += 1;

    if (secondNumber === '') {
    };
    let a = '';
    let b = '';

    if (regex.test(firstNumber) === true) {
        a = parseFloat(firstNumber);
    } else {
        a = parseInt(firstNumber);
    }

    if (regex.test(secondNumber) === true) {
        b = parseFloat(secondNumber);
    } else {
        b = parseInt(secondNumber);
    }


    if (operate === "+") {
        let solve = a + b;
        screen.value = solve;
        equation.value += " = " + solve;
    } else if (operate === "-") {
        let solve = a - b;
        screen.value = solve;
        equation.value += " = " + solve;
    } else if (operate === "x") {
        let solve = a * b;
        screen.value = solve;
        equation.value += " = " + solve;
    } else if (operate === "÷") {
        let solve = a / b;
        screen.value = solve;
        equation.value += " = " + solve;
    };
};

const clear = document.querySelector("#clear");
clear.addEventListener("click", remove);

function remove() {
    if (secondNumber === '') {
        firstNumber = '';
        operate = '';
        screen.value = '';
        equation.value = '';
    }

    if (secondNumber != '' && screen.value != '') {
        screen.value = '';
        secondNumber = '';
        equation.value = firstNumber + ' ' + operate + ' ';
    }

    if (solved > 0) {
        firstNumber = '';
        operate = '';
        screen.value = '';
        equation.value = '';
        solved = 0;
    }

};
