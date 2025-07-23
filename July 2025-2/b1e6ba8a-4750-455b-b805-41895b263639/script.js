let btnEml = document.getElementById("calculateBMI")
let BMIEml = document.getElementById("bmiResult")
let categoryEML = document.getElementById("bmiCategory")
btnEml.onclick = function(){
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    let negative = weight < 0
    // let BMI = (weight / (height*height)).value
    if (negative < 0 ){
        BMIEml.textContent="Error"
       categoryEML.textContent="Error"
    }
   if (!weight || !height){
       BMIEml.textContent="Error"
       categoryEML.textContent="Error"
   }
   if ((weight / (height*height)) < 18.5 && (weight / (height*height)) >0){
       BMIEml.textContent = (weight / (height*height))
       categoryEML.textContent = "UnderWeight"
   }
  if ((weight / (height*height)) < 24.9 && (weight / (height*height)) >=18.5){
      BMIEml.textContent = (weight / (height*height))
      categoryEML.textContent = "Normalweight"
  }
  if ((weight / (height*height)) < 29.9 && (weight / (height*height)) >=25){
      BMIEml.textContent = (weight / (height*height))
      categoryEML.textContent = "Overweight"
  }
  if ((weight / (height*height)) >=30){
      BMIEml.textContent = (weight / (height*height))
      categoryEML.textContent = "Obese"
  }
}