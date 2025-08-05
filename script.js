function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

function operate(operator, one, two) {
    if(operator == '+') {
        return add(one, two);
    } else if (operator == '-') {
        return subtract(one, two);
    } else if (operator == '*') {
        return multiply(one, two);
    } else if (operator == '/') {
        return divide(one, two);
    }
}

let num1 = null;
let num2 = null;
let operator = null;
let currentInput = "";

const screen = document.querySelector(".screen");

document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        screen.textContent = currentInput;
    })
})

document.querySelectorAll(".functions").forEach(operation => {
    operation.addEventListener('click', function() {
        if (currentInput != "") {
            if(num1 && operator) {
                num2 = Number(currentInput)
                num1 = operate(operator, num1, num2);
                screen.textContent = num1;
            } else {
                num1 = Number(currentInput);
            }
            currentInput = "";
        }
        operator = this.textContent;
    })
})

document.querySelector(".operate").addEventListener("click", () => {
    if(currentInput !== "" && operator && num1) {
        num2 = Number(currentInput);
        const result = operate(operator, num1, num2);
        screen.textContent = result;
        num1 = result;
        currentInput = "";
        operator = null;
        num2 = null;
    }
})

document.querySelector("#on").addEventListener("click", () => {
    screen.textContent = "";
    currentInput = "";
    num1 = null;
    num2 = null;
    operator = null;
})

document.querySelector("#off").addEventListener("click", () => {
    screen.textContent = "";
    currentInput = "";
    num1 = null;
    num2 = null;
    operator = null;
})