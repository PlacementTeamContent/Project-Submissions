let weightInput=document.getElementById("weight");
let heightInput=document.getElementById("height");
let calculateBtn=document.getElementById("calculateBMI");
let bmiInput=document.getElementById("bmiResult");
let categoryInput=document.getElementById("bmiCategory");

calculateBtn.addEventListener("click",function(){
    let weightval=weightInput.value
    let heightval=heightInput.value
    
    let intval1=parseFloat(weightval)
    let intval2=parseFloat(heightval)
    if(intval1>0 && intval2>0){
        bmiInput.textContent=intval1/(intval2*intval2)
    }
    let bmi=intval1/(intval2*intval2);
    if(bmi<18.5){
        categoryInput.textContent="Underweight";
    }
    if(bmi>=18.5 && bmi<24.9){
        categoryInput.textContent="Normalweight";
    }
    if(bmi>=25 && bmi<29.9){
        categoryInput.textContent="Overweight";
    }
     if(bmi>=30){
        categoryInput.textContent="Obese";
    }
    if(!weightval || !heightval){
        bmiInput.textContent="Error";
        categoryInput.textContent="Error";
    }
    if(intval1<=0 || intval2<=0){
        bmiInput.textContent="Error";
        categoryInput.textContent="Error";
    }
})