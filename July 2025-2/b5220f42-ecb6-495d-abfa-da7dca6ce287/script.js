function button(){
    let weight=document.getElementById("weight").value
    let height=document.getElementById("height").value
    let bmi=document.getElementById("bmiResult")
    let category=document.getElementById("bmiCategory")
    let bmivalue=weight/(height*height)
    bmi.textContent=""
    category.textContent=""
    if (bmivalue<18.5 && bmivalue>0){
        bmi.textContent=bmivalue
        category.textContent="Underweight"
        return;
    }
    else if (bmivalue<24.9 && bmivalue>=18.5){
        bmi.textContent=bmivalue
        category.textContent="Normalweight"
        return;
    } 
    else if (bmivalue<29.9 && bmivalue>=25){
        bmi.textContent=bmivalue
        category.textContent="Overweight"
        return;
    } 
    else if (bmivalue>=30){
        bmi.textContent=bmivalue
        category.textContent="Obese"
        return;
    } 
    else if(weight<=0){
        bmi.textContent="Error"
        category.textContent="Error"
    }
    else if(weight===""||height===""){
         bmi.textContent="Error"
        category.textContent="Error"
        return;
    }
}