document.getElementById("calculate").addEventListener("click", function () {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;
    const result= document.getElementById("result");
    const steps= document.getElementById("calculation-steps");
    if (parseInt(num1) === "" || parseInt(num2) === "" || parseInt(num3) === "" ) {
        result.textContent = "Error";
        steps.textContent = "Please enter all the numbers.";
        return;
}


const average = (parseFloat(num1) + parseFloat(num2) + parseFloat(num3)) / 3;
result.textContent = "Average"
steps.textCcontent = "";
});