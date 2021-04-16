const screen = document.getElementById("display");

// document.getElementsByClassName("nums").addEventListener("click", append);

document.getElementById("one").addEventListener("click", append1);
document.getElementById("two").addEventListener("click", append2);
document.getElementById("three").addEventListener("click", append3);
document.getElementById("four").addEventListener("click", append4);
document.getElementById("five").addEventListener("click", append5);
document.getElementById("six").addEventListener("click", append6);
document.getElementById("seven").addEventListener("click", append7);
document.getElementById("eight").addEventListener("click", append8);
document.getElementById("nine").addEventListener("click", append9);

document.getElementById("divide").addEventListener("click", division);
document.getElementById("multiply").addEventListener("click", multiplication);
document.getElementById("subtract").addEventListener("click", subtraction);
document.getElementById("add").addEventListener("click", addition);
document.getElementById("equal").addEventListener("click", solve);

// function append(e) {
//     e.preventDefault()
//     if (e.target.getElementById === "one") {
//         screen.value += 1;
//     } else if (e.target.getElementById.contains('two')) {
//         screen.value += 2;
//     } else if (e.target.getElementById.contains('three')) {
//         screen.value += 3;
//     } else if (e.target.getElementById.contains('four')) {
//         screen.value += 4;
//     } else if (e.target.getElementById.contains('five')) {
//         screen.value += 5;
//     } else if (e.target.getElementById.contains('six')) {
//         screen.value += 6;
//     } else if (e.target.getElementById.contains('seven')) {
//         screen.value += 7;
//     } else if (e.target.getElementById.contains('eight')) {
//         screen.value += 8;
//     } else if (e.target.getElementById.contains('nine')) {
//         screen.value += 9;
//     }
// };

function append1(e) {
    e.preventDefault()
    screen.value += 1;
}
function append2(e) {
    e.preventDefault()
    screen.value += 2;
};
function append3(e) {
    e.preventDefault()
    screen.value += 3;
};
function append4(e) {
    e.preventDefault()
    screen.value += 4;
};
function append5(e) {
    e.preventDefault()
    screen.value += 5;
};
function append6(e) {
    e.preventDefault()
    screen.value += 6;
};
function append7(e) {
    e.preventDefault()
    screen.value += 7;
};
function append8(e) {
    e.preventDefault()
    screen.value += 8;
};
function append9(e) {
    e.preventDefault()
    screen.value += 9;
};