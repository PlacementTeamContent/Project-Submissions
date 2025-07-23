let calculate=document.getElementById("calculate");
let steps=document.getElementById("calculation-steps");
let result=document.getElementById("result");

calculate.addEventListener("click",(event)=>{
    result.textContent="";
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let num3=document.getElementById("num3").value;
    steps.textContent="";
    result.textContent="";
    if(!num1 || !num2 || !num3){
    steps.textContent="Please enter all the numbers."
    return;
    }
});