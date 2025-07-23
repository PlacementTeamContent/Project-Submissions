let firstNum = document.getElementById('num1');
let secondNum = document.getElementById('num2');
let addition = document.getElementById('add');
let subtraction = document.getElementById('subtract');
let product = document.getElementById('multiply');
let answer = document.getElementById('result');
let calculation = document.getElementById('calculation-steps');



addition.addEventListener("click", function(){
    if(firstNum.value === "" || secondNum.value === ""){
    answer.textContent = "Error";
    }else{
    answer.textContent = parseInt(firstNum.value) + parseInt(secondNum.value);
    }
});

subtraction.addEventListener("click", function(){
    if(firstNum.value === "" || secondNum.value === ""){
    answer.textContent = "Error";
    }else{
    answer.textContent = parseInt(firstNum.value) - parseInt(secondNum.value);
    }
});

product.addEventListener("click", function(){
    if(firstNum.value === "" || secondNum.value === ""){
    answer.textContent = "Error";
    }else{
    answer.textContent = parseInt(firstNum.value) * parseInt(secondNum.value);
    }
});