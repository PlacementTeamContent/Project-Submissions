document.getElementById("add").onclick = function (){
    calculate("add");
};
document.getElementById("subtract").onclick = function (){
    calculate("subtract");
};
document.getElementById("multiply").onclick = function (){
    calculate("multiply");
};
function calculate(operation){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultField = document.getElementById("result");
    
    if (isNaN(num1) || isNaN(num2)){
        resultField.textContent = "Error";
        return;
    }
    let result;
    if (operation === "add"){
        result = num1+num2;
    }
    else if (operation === "subtract"){
        result = num1-num2;
    }
    else if (operation === "multiply"){
        result = num1*num2;
    }
    resultField.textContent = result;
}