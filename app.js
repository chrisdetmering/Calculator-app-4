const screen = document.getElementById("display");
const equation = document.getElementById("display2");
let operate = '';
let firstNumber = '';
let secondNumber = '';
let resolved = 0;



const numberButtons = document.querySelectorAll(".nums");
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', (e) => {
        const number = e.target.textContent;
        screen.value += number;
        equation.value += number;

        if (operate === '') {
            firstNumber += number;
        }
        if (operate != '') {
            if (secondNumber === '') {
                screen.value = '';
                screen.value += number;
            }
            secondNumber += number;
        }


        console.log('first number', firstNumber);
        console.log("second number", secondNumber);
        console.log("operator", operate);
    })
});

const operators = document.querySelectorAll(".operators");
operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        const selectedOperator = e.target.textContent;

        if (firstNumber != '' && operate === '') {
            operate = selectedOperator;
            screen.value += ' ' + operate;
            equation.value += ' ' + operate + ' ';
            console.log(operate);
        };

        if (secondNumber != '') {

        }
    })
});

const clear = document.querySelector("#clear");
clear.addEventListener("click", () => {
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
});


const equals = document.querySelector("#equal");
equals.addEventListener("click", () => {
    if (secondNumber === '') {
        return
    };
    const regex = /[0-9+][.][0-9+]/gm;
    let a = '';
    let b = '';

    if (regex.test(firstNumber) === true) {
        a = parseFloat(firstNumber);
    } else {
        a = parseInt(firstNumber);
    }


    if (regex.test(firstNumber) === true) {
        b = parseFloat(secondNumber);
    } else {
        b = parseInt(secondNumber);
    }


    if (operate === "+") {
        let solve = a + b;
        screen.value = solve;
        equation.value += " = " + solve;
        console.log(solve);
    } else if (operate === "-") {
        let solve = a - b;
        screen.value = solve;
        equation.value += " = " + solve;
        console.log(solve);
    } else if (operate === "x") {
        let solve = a * b;
        screen.value = solve;
        equation.value += " = " + solve;
        console.log(solve);
    } else if (operate === "÷") {
        let solve = a / b;
        screen.value = solve;
        equation.value += " = " + solve;
        console.log(solve);
    };

});
