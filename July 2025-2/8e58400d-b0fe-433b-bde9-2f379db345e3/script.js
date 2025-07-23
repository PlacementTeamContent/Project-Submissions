let num1El = document.getElementById("num1");
let num2El = document.getElementById("num2");
let resultEl = document.getElementById("result");
let addEl = document.getElementById("add");
let subtractEl = document.getElementById("subtract");
let multiplyEl = document.getElementById("multiply");
addEl.onclick = function() {
    if (num1El.value === ""){
        resultEl.textContent = "Error";
    }
    else if (num2El.value === ""){
        resultEl.textContent = "Error";
    }
    else if (num1El.value === "" || num2El.value === ""){
        resultEl.textContent = "Error";
    }
    else{
        resultEl.textContent = parseInt(num1El.value) + parseInt(num2El.value);
    }
    
}
subtractEl.onclick = function() {
    if (num1El.value === ""){
        resultEl.textContent = "Error";
    }
    else if (num2El.value === ""){
        resultEl.textContent = "Error";
    }
    else if (num1El.value === "" || num2El.value === ""){
        resultEl.textContent = "Error";
    }
    else{
        resultEl.textContent = parseInt(num1El.value) - parseInt(num2El.value);
    }
    
}
multiplyEl.onclick = function() {
    if (num1El.value === ""){
        resultEl.textContent = "Error";
    }
    else if (num2El.value === ""){
        resultEl.textContent = "Error";
    }
    else if (num1El.value === "" || num2El.value === ""){
        resultEl.textContent = "Error";
    }
    else{
        resultEl.textContent = parseInt(num1El.value) * parseInt(num2El.value);
    }
    
}