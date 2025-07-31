let calbtn = document.getElementById("calculate")
let first =  document.getElementById("num1").value
let second =  document.getElementById("num2").value
let third =  document.getElementById("num3").value
let error = document.getElementById("result")
let step = document.getElementById("calculation-steps")
calbtn.onclick = function(){
    if(first === ""|| second === ""||third === ""){
        error.textContent = "Error"
        step.textContent = "Please enter all the numbers."
    }
    else if (first >0 && second > 0 && third > 0){
        let avg = first + second + third /3 
        let total = parseInt(avg)
        error.textContent = total
    }
}