let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let num3 = document.getElementById("num3")
let calculateBtn = document.getElementById("calculate")
let result = document.getElementById("result")
let idsteps =document.getElementById("calculation-steps")
calculateBtn.onclick = function(){
    if(num1.value === "" && num2.value === ""&&num3.value  === "" ){
        result.textContent= "Error"
        idsteps.textContent = "Please enter all the numbers."
    }
    // result.textContent = `Average: ${(num1.value/2)+(num2.value/2)+(num3.value)/2}`
    
}