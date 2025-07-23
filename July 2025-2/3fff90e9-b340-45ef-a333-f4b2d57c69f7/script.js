let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let num3 = document.getElementById("num3");

let result = document.getElementById("result")

function calculate(){
    let sum = (num1+num2+num3)/3;
    result.textContent = sum;
    console.log(sum)
}