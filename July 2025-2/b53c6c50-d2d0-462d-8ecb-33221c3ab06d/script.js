document.getElementById('calculateBMI').addEventListener('click',function(){
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    const bmiResult = document.getElementById('bmiResult');
    const bmiCategory = document.getElementById('bmiCategory');
    
    if(!weight || !height || weight<=0 || height<=0){
        bmiResult.textContent = 'Error';
        bmiCategory.textContent = 'Error';
        return;
    }
    
    const bmi = (weight/(height*height)).toFixed(2);
    bmiResult.textContent = bmi;
    
    if(bmi<18.5){
        bmiCategory.textContent = 'Underweight';
    }
    else if(bmi>=18.5 && bmi<24.9){
        bmiCategory.textContent = 'Normalweight';
    }
    else if (bmi>=25 && bmi<29.9){
        bmiCategory.textContent = 'Overweight';
    }else{
        bmiCategory.textContent = 'Obese';
    }
});