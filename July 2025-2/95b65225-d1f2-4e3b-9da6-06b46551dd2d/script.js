let grams=document.getElementById("grams").value
let kilograms=document.getElementById("convertToKg")
let pounds=document.getElementById("convertToLbs")
let result=document.getElementById("calculation-steps")

kilograms.onclick=function(){
    let kgs=kilograms.value
    let gms=grams.value
    
    if(grams.value>0){
        kgs=gms*0.001
        result.textContent=kgs
    }
    else{
        result.textContent="Error"
        
    }
}

pounds.onclick=function(){
    if(grams.value>0){
        pounds=grams*0.00220462
        result.textContent=" "
    }
}