const gramsInput = document.getElementById("grams");
const calcSteps = document.getElementById("caluclation-steps")
const resultSpan = document.getElementById("result")
const convertToLbsBtn = document.getElementById("convertToLbs")
const convertToKgBtn = document.getElementById("convertToKg")

convertToKgBtn.addEventListener("click", function(){
    const gram = parseFloat(gramsInput.value);
    
    if((gram) > 0){
        const kilogram = (grams)*0.001;
        resultSpan.textContent = `${kilogram} kg`
        calcSteps.textContent = "";
    }
});

convertToLbsBtn.addEventListener("click", function(){
    const gram = parseFloat(gramsInput.value);
    
    if(grams>0){
        const pounds = grams*0.00220462;
        resultSpan.textContent = pounds.toFixed(4) + " lbs";
        calcSteps.textContent = "";
    } else{
        resultSpan.textContent = "Error";
        calcSteps.textContent = "";
    }
});