let num1El = document.getElementById('num1');
let num2El = document.getElementById('num2');
let addEl = document.getElementById('add');
let subtractEl = document.getElementById('subtract');
let multiplyEl = document.getElementById('multiply');
let resultEl = document.getElementById('result');
let calculationstepsEl = document.getElementById('calculation-steps');
add.onclick = function(){
    let numadd1 = parseInt(num1El.value)
    let numadd2 = parseInt(num2El.value)
    let add1 = ( numadd1) + (numadd2)

    let sub1 = numadd1 - numadd2
    let mul1 = numadd1 * numadd2
    if((num1El.value==="") || (num2El.value==="")){
        resultEl.textContent="Error"
    }else if(add1){
        resultEl.textContent=add1
    } else if(sub1){
        resultEl.textContent=sub1
    }else{
        resultEl.textContent=mul1
    }
    
}