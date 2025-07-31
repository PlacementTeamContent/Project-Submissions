function calculateBMI(){
    const height=document.getElementById("height").value;
    const weight=document.getElementById("weight").value;
    const result=document.getElementById("bmiResult");
    const categoryEle=document.getElementById("bmiCategory")
    let category=""
    if(height>0 &&weight>0){
        const bmi=weight/(height*height)
        if(bmi<18.5){
            category="Underweight";
        }
         else if(18.5<=bmi<24.9){
            category="Normalweight";
        }
        else if(25.5<=bmi<29.9){
            category="Overweight";
        }
        else{
            category="Obese";
        }
        result.textContent=bmi.toFixed(2)
        categoryEle.textContent=category;
    }
}