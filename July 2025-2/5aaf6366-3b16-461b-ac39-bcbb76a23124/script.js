first_number =document.getElementById("num1");
second_number=document.getElementById("num2"); 
third_numer = document.getElementById("num3"); 
cal_btn=document.getElementById("calculate"); 
result= document.getElementById("result"); 
cal_btn.onclick=function(){
    let first =first_number.value; 
    let second = second_number.value; 
    let third = third_numer.value;
    if(first === parseInt(first_number) || second === parseInt(second_number) || third === parseInt(third_numer)){
        let calculatedAverage= parseInt(first)+parseInt(second)+parseInt(third)
        result.textContent= `Average: ${calculatedAverage}`
    }
}