let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let num3=document.getElementById("num3");
let calculate=document.getElementById("calculate");
let result=document.getElementById("result");
let calculation=document.getElementById("calculation-steps");

function number(){
    const num1=document.getElementById("num1").value;
const num2=document.getElementById("num2").value;
const num3=document.getElementById("num3").value;
if(!num1 || !num2 || !num3){
    result.textContent="Error";
calculation.textContent="Please enter all the numbers.";
return;
}
let av=parseInt(num1)+parseInt(num2)+parseInt(num3)
    

result.textContent="Avrrage: "+av;
calculation.textContent=""
}
calculate.addEventListener("click",number);