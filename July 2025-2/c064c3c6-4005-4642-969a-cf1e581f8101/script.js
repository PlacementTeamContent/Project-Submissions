const gramsInput=document.getElementById('grams');
const resultDisplay=document.getElementById('result');
const stepsDisplay=document.getElementById('calculation-steps');

document.getElementById('convertToKg').addEventListener('click',()=>{
    const grams = parseFloat(gramsInput.value);
    if (isNaN(grams) || grams<0){
        showError("PLease enter a valid non-negative  number.")
        return
    }
    const kilograms =grams/100;
    resultDisplay.textContent=`${kilograms.toFixed(3)} kg`;
    stepsDisplay.textContent=`${grams} grams/1000= ${kilograms.toFixed(3)} kilogramss `;
})


document.getElementById('convertToKg').addEventListener('click',()=>{
    const grams = parseFloat(gramsInput.value);
    if (isNaN(grams) || grams<0){
        showError("PLease enter a valid non-negative  number.")
        return
    }
    const pounds =grams*0.00220462;
    resultDisplay.textContent=`${kilograms.toFixed(3)} lbs`;
    stepsDisplay.textContent=`${grams} grams*0.00220462= ${pounds.toFixed(3)} ponds `;
}) 
function showError(message){
    resultDisplay.textContent="-"
    stepsDisplay. textContent=message
}