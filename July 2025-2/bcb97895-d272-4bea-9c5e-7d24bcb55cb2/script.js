const n1 = document.getElementById("num1")
const n2 = document.getElementById("num2")
const n3 = document.getElementById("num3")
const result = document.getElementById("result")
const calSteps = document.getElementById("calculation-steps")
const calBtn = document.getElementById("calculate")

calBtn.addEventListener("click", 
function(){
    const val1 = n1.value;
    const val2 = n2.value;
    const val3 = n3.value;
    if(val1 !== "" && val2 !== "" && val3 !== ""){
        const average =(parseFloat(val1) + parseFloat(val2) + parseFloat(val3))/3
        result.textContent = `Average: ${parseInt(average)}`
        calSteps.textContent = ""
    }
    else{
        result.textContent = "Error"
        calSteps.textContent = "Please enter all the numbers."
    }
})