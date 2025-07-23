const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;
const calculateBMI = document.getElementById('calculateBMI');
const bmiResult = document.getElementById('bmiResult');
const bmiCategory = document.getElementById('bmiCategory');

calculateBMI.onclick = function() {
    if(!weight ||!height){
       bmiResult.textContent='Error';
       bmiCategory.textContent='Error';
       return;
   }
   if((weight>0)|| (height>0)){
       calculateBMI.textContent=weight/(height*height);
       return ;
   }
   if(calculateBMI.value<18.5){
       bmiResult.textContent=calculateBMI.value;
       bmiCategory.textContent='UnderWeight';
       return ;
   }
   if(calculateBMI.value<24.9 && calculateBMI>=18.5){
       bmiResult.textContent=calculateBMI.value;
       bmiCategory.textContent='Normalweight';
       return;
   }
   if(calculateBMI.value<29.9 && calculateBMI>=25){
       bmiResult.textContent=calculateBMI.value;
       bmiCategory.textContent='Overweight';
       return;
   }
   if(calculateBMI.value>=30){
       bmiResult.textContent=calculateBMI.value;
       bmiCategory.textContent='Obese';
       return;
   }
   
   if(weight<=0 || height<=0){
       bmiResult.textContent='Error';
       bmiCategory.textContent='Error';
       return;
   }
   
   
}