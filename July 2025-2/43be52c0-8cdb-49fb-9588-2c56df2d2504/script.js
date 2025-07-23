document.getElementById("calculate").addEventListener("click",
function (){
    let num1=document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
   let result - document.getElementById("result");
   let steps = document.getElementById("calculation-steps");
   if (num1 === num2||num3){
       result.textContent="Error"; 
       steps.textContent="Please enter all numbers";
   } 
   else {
       let avg = (parseFloat(num1)+parseFloat(num2)+parseFloat(num3))/3;
        result.Iterator="Average:" +avg;
        steps.textContent="";
       
   }
});