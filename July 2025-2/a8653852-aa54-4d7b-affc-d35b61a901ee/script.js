let num1El=document.getElementById("num1");
let num2El=document.getElementById("num2");
let addEl=document.getElementById("add");
let subtractEl=document.getElementById("subtract");
let multiplyEl=document.getElementById("multiply");
let para=document.getElementById("calculation-steps");
let resultEl=document.getElementById("result")

addEl.onclick=function(){
    let a=parseInt(num1El.value)+parseInt(num2El.value);
    resultEl.textContent=a;
    
    
    if(num1El.value==="" || num2El.value===""){
        resultEl.textContent="Error"
    }

}

subtractEl.onclick=function(){
    let a=parseInt(num1El.value)-parseInt(num2El.value);
    resultEl.textContent=a;
    
    if(num1El.value==="" || num2El.value===""){
        resultEl.textContent="Error"
    }

}
multiplyEl.onclick=function(){
    let a=parseInt(num1El.value)*parseInt(num2El.value);
    resultEl.textContent=a;
    if(num1El.value==="" || num2El.value===""){
        resultEl.textContent="Error"
    }

}