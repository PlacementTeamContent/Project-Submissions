let num1=document.getElementById('num1').value
let num2=document.getElementById('num2').value
let num3=document.getElementById('num3').value
let result=document.getElementById("result")
let calculate=document.getElementById("calculate")
let calculationSteps=document.getElementById("calculation-steps")
// calculate.addEventListener('blur', function(){
//     result.textContent=""
//     calculationSteps.textContent=""
//     if(!num1 || !num2 || !num3){
//         result.textContent="Error"
//         calculationSteps.textContent='Please enter all the numbers.'
//     }
// })
calculate.addEventListener("click", function(){
    result.textContent=""
    calculationSteps.textContent=""
    if(!num1 || !num2 || !num3){
        result.textContent="Error"
        calculationSteps.textContent='Please enter all the numbers.'
    }
    let r=num1+num2+num3
    console.log(r)
})