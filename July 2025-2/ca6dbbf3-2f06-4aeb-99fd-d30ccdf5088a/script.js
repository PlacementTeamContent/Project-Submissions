let weight = document.getElementById("weight")
let height = document.getElementById("height")
let calculateBMI = document.getElementById("calculateBMI")
let bmiResult = document.getElementById("bmiResult")
let bmiCategory =document.getElementById("bmiCategory")

calculateBMI.onclick = function(){
    let a= parseFloat(weight.value)
    let b=parseFloat(height.value)
    let c=parseFloat(a/(b*b))
    if(weight.value=="" || height.value =="" || parseFloat(height.value)<0 || parseFloat(weight.value) <0){
        bmiCategory.textContent="Error"
        bmiResult.textContent="Error"
    }
    else if(c<18.5){
        bmiResult.textContent=c
        bmiCategory.textContent="Underweight"
    }
    
    else if(c>18.5 || c<24.9){
        bmiResult.textContent=c
        bmiCategory.textContent="Normalweight"
    }
}