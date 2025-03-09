let number = 0;

function save_digit(pressed_digit) {
    let calculator_output = document.querySelector(".calculator_output");
    number = number*10+pressed_digit;
    calculator_output.innerText = number;
}

function clear_output() {
    let calculator_output = document.querySelector(".calculator_output");
    calculator_output.innerText = 0;
    number = 0;
}

function delete_last_digit() {
    let calculator_output = document.querySelector(".calculator_output");
    let user_input = calculator_output.innerText;
    user_input = Math.floor(user_input / 10);
    calculator_output.innerText = user_input;
    number = user_input;
}

let first_number = 0;
let operation = "";

function plus() {
    first_number = +number;
    clear_output();
    operation = "+";
} 

function minus() {
    first_number = +number;
    clear_output();
    operation = "-";
} 

function equal() {
    let calculator_output = document.querySelector(".calculator_output");
    let second_number = +calculator_output.innerText;

    let result = 0;
    if (operation == "+") {
        result = first_number + second_number;
    }
    else if (operation == "+") {
        result = first_number - second_number;
    }

    calculator_output.innerText = result
}