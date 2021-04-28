const screen = document.getElementById("display");
const equation = document.getElementById("display2");

let operation = '';
let firstNumber = '';
let secondNumber = '';
let history = '';

document.querySelectorAll(".nums")
.forEach(numberButton => numberButton.addEventListener('click', setNumbers));

document.querySelectorAll(".operators")
.forEach(operator => operator.addEventListener("click", setOperation));

document.querySelector("#equal")
.addEventListener("click", () => { 
    if (secondNumber) {
        const result = compute();
        screen.value = result;
        firstNumber = result; 
        operation = '';
        secondNumber = '';
        setHistory(" = " + result);
    }
} );

document.querySelector("#clear")
.addEventListener("click", remove);

document.querySelector("#point")
.addEventListener("click", (e) => {
    handleDecimalClick(e);
});


function setNumbers(e) {
    const number = e.target.textContent;

    if (!operation) {
        firstNumber += number;
        screen.value = firstNumber;
        setHistory(number)
    }
        
    if (operation) {
        secondNumber += number;
        screen.value = secondNumber;
        setHistory(number)
    }
    
}

function setOperation(e) {
    dots = 0;
    const selectedOperator = e.target.textContent;
    if (firstNumber && !operation) {
        operation = selectedOperator;
        setHistory(' ' + operation + ' ');
        return; 
    } 

    if (secondNumber) {
        compute();
        operation = selectedOperator;
        equation.value += ' ' + operation + ' ';
    }

};

function compute() {  
    if (operation === "+") {
        return add(firstNumber, secondNumber);
    } 
    if (operation === "-") {
        return subtract(firstNumber, secondNumber);
    } 
    if (operation === "x") {
        return multiply(firstNumber, secondNumber);
    } 
    if (operation === "÷") {
        return divide(firstNumber, secondNumber);
    }
};

function remove() {
    firstNumber = '';
    operation = '';
    screen.value = '';
    history = ''; 
    setHistory()
};

function handleDecimalClick() {
    if (!operation) {
        if (firstNumber.indexOf('.') === -1) {
            firstNumber += '.'; 
            setHistory('.');
            return; 
        }
        
    }

    if (operation) {
        if (secondNumber.indexOf('.') === -1) {
            secondNumber += "."; 
            setHistory('.'); 
            return; 
        }
    }
}


function add(num1, num2) {
    return `${Number(num1) + Number(num2)}`; 
}

function subtract(num1, num2) {
    return `${Number(num1) - Number(num2)}`; 
}

function multiply(num1, num2) {
    return `${Number(num1) * Number(num2)}`; 
}

function divide(num1, num2) {
    return `${Number(num1) / Number(num2)}`; 
}

//UTILS 
function setHistory(result = '') {
    history += result
    equation.value = history;
}