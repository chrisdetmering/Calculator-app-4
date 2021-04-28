const screen = document.getElementById("display");
const equation = document.getElementById("display2");
let operate = '';
let firstNumber = '';
let secondNumber = '';
let solved = 0;
let dots = 0;

const numberButtons = document.querySelectorAll(".nums");
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', addNumbers);

    function addNumbers(e) {
        const number = e.target.textContent;

        if (solved > 0 && operate === '') {
            screen.value = number;
            equation.value = number;
            firstNumber = number;
            solved = 0
            return
        } else if (solved > 0 && operate != '') {
            screen.value = number;
            equation.value += number;
            secondNumber += number;
            solved = 0
            return
        }
        if (solved === 0) {
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

        }
    }
});

const operators = document.querySelectorAll(".operators");
operators.forEach(operator => {
    operator.addEventListener("click", maths);
});

function maths(e) {
    dots = 0;
    const selectedOperator = e.target.textContent;
    if (firstNumber != '' && operate === '') {
        operate = selectedOperator;
        equation.value += ' ' + operate + ' ';
        solved = 0;
    } else if (firstNumber && operate) {
    }
    if (secondNumber != '') {
        compute();
        operate = selectedOperator;
        equation.value += ' ' + operate + ' ';
    }

};

const equals = document.querySelector("#equal");
equals.addEventListener("click", compute);

function compute() {
    if (solved > 0) { }
    else if (solved === 0) {
        let a = parseFloat(firstNumber);
        let b = parseFloat(secondNumber);
        dots = 0;


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

        firstNumber = screen.value;
        operate = '';
        secondNumber = '';
        solved += 1;
    }
};

const clear = document.querySelector("#clear");
clear.addEventListener("click", remove);

function remove() {
    dots = 0;
    if (secondNumber === '') {
        firstNumber = '';
        operate = '';
        screen.value = '';
        equation.value = '';
    }

    if (secondNumber != '') {
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

const dot = document.querySelector("#point");
dot.addEventListener("click", (e) => {
    const decimal = e.target.textContent;
    if (dots > 0) {
    } else if (operate === '' && firstNumber === '') {
        dots += 1;
        firstNumber = `0${decimal}`;
        screen.value = `0${decimal}`;
        equation.value = `0${decimal}`;
    } else if (operate === '' && solved === 0) {
        dots += 1;
        firstNumber += decimal;
        screen.value += decimal;
        equation.value += decimal;
    } else if (operate != '' && secondNumber === '') {
        dots += 1;
        secondNumber = `0${decimal}`;
        screen.value = `0${decimal}`;
        equation.value += `0${decimal}`;
    } else if (operate != '' && secondNumber != '') {
        dots += 1;
        secondNumber += decimal;
        screen.value += decimal;
        equation.value += decimal;
    }
});