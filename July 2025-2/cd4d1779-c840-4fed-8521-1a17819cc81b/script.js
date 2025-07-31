let firstnum=document.getElementById("num1");
let secondnum=document.getElementById("num2");
let addition=document.getElementById("add");
let subtraction=document.getElementById("subtract");
let product=document.getElementById("multiply");
let answer=document.getElementById("result");
let calculation=document.getElementById("calculation-steps");

addition.addEventListener("click",function(){
    if(firstnum.value==="" || secondnum.value===""){
        answer.textContent="Error";
    }
    else{
        answer.textContent=parseInt(firstnum.value)+parseInt(secondnum.value)
    }

})

subtraction.addEventListener("click",function(){
    if(firstnum.value==="" || secondnum.value===""){
        answer.textContent="Error";
    }
    else{
        answer.textContent=parseInt(firstnum.value)-parseInt(secondnum.value)
    }

})
product.addEventListener("click",function(){
    if(firstnum.value==="" || secondnum.value===""){
        answer.textContent="Error";
    }
    else{
        answer.textContent=parseInt(firstnum.value)*parseInt(secondnum.value)
    }

})