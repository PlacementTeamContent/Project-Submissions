let addition = document.getElementById("add");
let subtraction = document.getElementById("subtract");
let multiplicaiton = document.getElementById("multiply");
addition.onclick = function() {
    let firstNumber = document.getElementById("num1").value;
    let secondNumber = document.getElementById("num2").value;
    let resultSection = document.getElementById("result");

    if (firstNumber === "" || secondNumber === "") {
        resultSection.textContent = "Error";
    } else {
        resultSection.textContent = parseInt(firstNumber) + parseInt(secondNumber);
    }
}
subtraction.onclick = function() {
    let firstNumber = document.getElementById("num1").value;
    let secondNumber = document.getElementById("num2").value;
    let resultSection = document.getElementById("result");

    if (firstNumber === "" || secondNumber === "") {
        resultSection.textContent = "Error";
    } else {
        resultSection.textContent = parseInt(firstNumber) - parseInt(secondNumber);
    }
}
multiplicaiton.onclick = function() {
    let firstNumber = document.getElementById("num1").value;
    let secondNumber = document.getElementById("num2").value;
    let resultSection = document.getElementById("result");

    if (firstNumber === "" || secondNumber === "") {
        resultSection.textContent = "Error";
    } else {
        resultSection.textContent = parseInt(firstNumber) * parseInt(secondNumber);
    }
}