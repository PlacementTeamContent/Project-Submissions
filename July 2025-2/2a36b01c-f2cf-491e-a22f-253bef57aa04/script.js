let firstNumber=document.getElementById("num1")
let secondNumber=document.getElementById("num2")
let addBtn=document.getElementById("add")
let subtractBtn=document.getElementById("subtract");
let multiplyBtn=document.getElementById("multiply");
let result=document.getElementById("result");
let calculationSteps = document.getElementById("calculation-steps")
addBtn.onclick=function(){
    if(firstNumber.value==="" || secondNumber.value===""){
        result.textContent="Error";
    }else if(firstNumber.value+secondNumber.value){
        let res=firstNumber+secondNumber;
        result.textContent=res;
    }
}
subtractBtn.onclick=function(){
    if(firstNumber.value==="" || secondNumber.value===""){
        result.textContent="Error";
    }
}
multiplyBtn.onclick=function(){
    if(firstNumber.value==="" || secondNumber.value===""){
        result.textContent="Error";
    }
}