let num1El=document.getElementById("num1");
let num2El=document.getElementById("num2");
let resultEl=document.getElementById("result");

function add(){
    if(num1El.value==="" || num2El.value===""){
        resultEl.textContent="Error";
    }
    else{
        let num1=parseInt(num1El.value);
    let num2=parseInt(num2El.value);
    let result=num1+num2;
    resultEl.textContent=result;
    }
    
}
function sub(){
    if(num1El.value==="" || num2El.value===""){
        resultEl.textContent="Error";
    }
    else{
        let num1=parseInt(num1El.value);
    let num2=parseInt(num2El.value);
    let result=num1-num2;
    resultEl.textContent=result;
    }
    
}
function mat(){
    if(num1El.value==="" || num2El.value===""){
        resultEl.textContent="Error";
    }
    else{
        let num1=parseInt(num1El.value);
    let num2=parseInt(num2El.value);
    let result=num1*num2;
    resultEl.textContent=result;
    }
    
}