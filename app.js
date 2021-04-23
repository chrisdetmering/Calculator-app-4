const screen = document.getElementById("display");
const numberButtons = document.querySelectorAll(".nums");
const operators = document.querySelectorAll(".operators");
const total = 0;
const a = screen.value;

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', () => {
        screen.value += (numberButton.textContent);
    })
})


document.getElementById("divide").addEventListener("click", division);
document.getElementById("multiply").addEventListener("click", multiplication);
document.getElementById("subtract").addEventListener("click", subtraction);
document.getElementById("add").addEventListener("click", addition);
document.getElementById("equal").addEventListener("click", solve);

function addition(e) {
    e.preventDefault();
    total += a;
    a = total;
};


