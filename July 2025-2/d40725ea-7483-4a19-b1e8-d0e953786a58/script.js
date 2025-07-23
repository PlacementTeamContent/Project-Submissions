let num_1 = document.getElementById("num1").value;
let num_2 = document.getElementById("num2").value;
let num_3 = document.getElementById("num3").value;
let btn = document.getElementById("calculate");
let res = document.getElementById("result");
let err = document.getElementById("calculation-steps");

function click(){
    if (num_1 === "" || num_2 === "" || num_3 === ""){
        res.textContent = "Error"
        err.textContent = "Please enter all the numbers."
    }else{
        let sum = parseInt(num_1) + parseInt(num_2) + parseInt(num_3);
        let avg = sum/3;
        res.textContent = avg;
        err.textContent = ""
    }
}
btn.addEventListener("click", click())