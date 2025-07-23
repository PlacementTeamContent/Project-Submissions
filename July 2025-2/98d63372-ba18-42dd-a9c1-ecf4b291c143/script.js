let calculate1=document.getElementById("calculateBMI")
let bmi_el=document.getElementById("bmiCategory")
let weights=document.getElementById("weight")
let heights= document.getElementById("height")
let bmiresults=document.getElementById("bmiresult")

let bmi= weights/(heights*heights)
console.log(bmi)
function calculate(){
    if (weights >0 && heights >0){
        if (bmi<18.5){
            bmiresults.textContent="calculated BMI"
            bmi_el.textContent="Underweight"
        }
        else if(bmi<24.9 && bmi>=18.5){
            bmiresults.textContent="calculated BMI"
            bmi_el.textContent="Normalweight"
        }
        else if(bmi<29.9 && bmi>=25){
            bmiresults.textContent="calculated BMI"
            bmi_el.textContent="Overweight"
        }
        else if(bmi>=30){
             bmiresults.textContent="calculated BMI"
            bmi_el.textContent="Obese"
        }
    }
    else if(weights===()|| heights===(){
        bmiresults.textContent="Error"
        bmi_el.textContent="Error"
        
    }
    
    else if(weights<=0 || heights<=0){
        bmiresults.textContent="Error"
        bmi_el.textContent="Error"
    }