document.getElementById("calculate").addEventListener("click",function(){
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);
    const num3=parseFloat(document.getElementById("num3").value);
    
    const resultElement=document.getElementById("result");
    const stepsElement=document.getElementById("calculation-steps");
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)){
        resultElement.innerText="Error";
        stepsElement.innerText="Please enter all the numbers";
        resultElement.style.color="red";
    }else{
        const average=((num1+num2+num3)/3).toFixed(2);
        resultElement.inner=`Average: ${average}`;
        stepsELement.innerText=`(${num1}+${num2}+${num3})/3 = ${average}`;
        resultElement.style.color='green';
    }
})