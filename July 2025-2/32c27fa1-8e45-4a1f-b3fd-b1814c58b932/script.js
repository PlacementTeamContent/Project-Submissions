let kg = document.getElementById("weight");
let hei = document.getElementById("height");
let but= document.getElementById("calculateBMI");
let res = document.getElementById("bmiResult");
let ca = document.getElementById("bmiCategory");
but.onclick=function(){
    let bmi = kg/(hei*hei);
    console.log(bmi);
}