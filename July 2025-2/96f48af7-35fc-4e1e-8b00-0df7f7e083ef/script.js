let weigth = document.getElementById("weigth");
let height = document.getElementById("height");
let bmi = document.getElementById("calculateBMI");
let bmisc = document.getElementById("bmiResult");
let cat = document.getElementById("bmiCategory");

bmi.addEventListener("click" , function(){
    
    if(weigth.value===""){
        bmisc.textContent="Error";
        cat.textContent="Error";
        
    }
    else if (weigth.value>0 && height.value > 0){
        bmi=weight/(height*height);
        bmisc.textContent=bmi;
    }
    else if(bmi<18.5){
        bmisc.textContent=bmi;
        cat.textContent="Underweight";
    }
    else if(bmi<24.9 && bmi >=18.5 ){
        bmisc.textContent=bmi;
        cat.textContent="Normalweight";
    }
    else if(bmi<29.9 && bmi>=25){
        bmisc.textContent=bmi;
        cat.textContent="Overweight";
    }
    else if(bmi>=30){
        bmisc.textContent=bmi;
        cat.textContent="Obese";
    }
});