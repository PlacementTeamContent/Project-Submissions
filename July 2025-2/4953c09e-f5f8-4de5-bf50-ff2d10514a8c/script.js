let weightingrams = document.getElementById('grams')
let reslut = document.getElementById('result')
let steps = document.getElementById('calculation-steps')
function kiloconvert(){
    let grams = (weightingrams).value 
    if(grams>0){
        reslut.textContent= grams*0.001
        steps.textContent=""
    }
    else{
        reslut.textContent= "Error"
        steps.textContent=""
        
    }
}

function poundsconvert(){
    let grams = (weightingrams).value 
    if(grams>0){
        reslut.textContent= grams*0.00220462
        steps.textContent=""
    }
    else{
        reslut.textContent= "Error"
        steps.textContent=""
        
    }
}