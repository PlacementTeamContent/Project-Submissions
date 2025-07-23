const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDispaly = document.getElementById("result");

function calculation (operation) {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    
    if (isNaN(num1)  || isNaN(num2) ){
        resultDispaly.textContent = "! please enter valid numbers.";
        return ;
    }
     let result;
     if(operation === "add"){
         result = num1 + num2;
     }else if(operation === "subtract"){
         result = num1 - num2;
     }else if(operation === "multiply"){
         result = num1 * num2;
     }
     
     resultDispaly.textContent = `Result: ${result}`;
}