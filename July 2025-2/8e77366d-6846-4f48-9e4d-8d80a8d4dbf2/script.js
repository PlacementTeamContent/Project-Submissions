const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultSpan = document.getElementById("result");
const stepsParagraph = document.getElementById("calculation-steps");

function getInputValue() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    if(isNaN(num1) || isNaN(num2)){
        resultSpan.textContent = "Error";
        return null;
    }
    return [num1, num2];
}

function updateResult(result, steps) {
    resultSpan.textContent = result;
    stepsParagraph.textContent = steps;
}
document.getElementById("add").addEventListener("click", () => {
    const [num1, num2] = getInputValue();
    const result = num1 + num2;
    updateResult(result);
});
document.getElementById("subtract").addEventListener("click", () => {
    const [num1, num2] = getInputValue();
    const result = num1 - num2;
    updateResult(result);
});
document.getElementById("multiply").addEventListener("click", () => {
    const [num1, num2] = getInputValue();
    const result = num1 * num2;
    updateResult(result);
});