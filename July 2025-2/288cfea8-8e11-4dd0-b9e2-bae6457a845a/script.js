let calculateEl = document.getElementById("calculate")
let resultEl = document.getElementById("result")
let errorMsg = document.getElementById('calculation-steps')

calculateEl.addEventListener("click", (event)=>{
    event.preventDefault();
    let first = document.getElementById('num1').value.trim()
    let second = document.getElementById('num2').value.trim()
    let third = document.getElementById('num3').value.trim()
    
    let average = (first+second+third)/3;
    
    if(!first || !second || !third){
        resultEl.textContent = "Error";
        errorMsg.textContent = "Please enter all the numbers."
        return;
    }
    
    else{
        errorMsg.textContent="";
        resultEl.textContent= `Average: ${average}`
    }
    
})