let weightinput=document.getElementById("weight")
let heightinput=document.getElementById("height")
let calculateBMIinput=document.getElementById("calculateBMI")
let bmiResultinput=document.getElementById("bmiResult")
let bmiCategoryinput=document.getElementById("bmiCategory")

calculateBMI.addEventListener("click",function(){
    let wetval=weightinput.value;
    let hetval=heightinput.value;
    // let bmires=bmiResultinput.value;
    // let bmicat=bmiCategoryinput.value;
    let resu=wetval/(hetval*hetval)
    
    
    if(wetval>0 && hetval>0){
        bmiResultinput.textContent=resu;
        
    }
    if(resu<18.5){
        bmiResultinput.textContent=wetval/(hetval*hetval)
        bmiCategoryinput.textContent="Underweight"
        return
    }if(wetval/(hetval*hetval)<24.9 && wetval/(hetval*hetval)>=18.5){
        bmiResultinput.textContent=wetval/(hetval*hetval) 
        bmiCategoryinput.textContent="Overweight"
        return
    }if(wetval/(hetval*hetval)>=30){
        bmiResultinput.textContent=wetval/(hetval*hetval) 
        bmiCategoryinput.textContent="Obese"
        return
    }
    if(!wetval || !hetval){
        bmiResultinput.textContent="Error"
        bmiCategoryinput.textContent="Error"
    }
    if(wetval<=0 || hetval<=0){
        bmiResultinput.textContent="Error"
        bmiCategoryinput.textContent="Error"
    }
    
})