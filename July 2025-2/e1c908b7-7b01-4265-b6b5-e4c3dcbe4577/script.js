let inputEl =  document.getElementById("marks");
let buttonEl = document.getElementById("calculateGrade");
let resEL = document.getElementById("grade");

buttonEl.addEventListener("click", function(){
    let input = inputEl.value;
    if(input>0 && input>=90){
        resEL.textContent = "A+"
    }
    if(input>80 && input<89){
        resEL.textContent = "A"
    }
    if(input>70 && input<79){
        resEL.textContent = "B+"
    }
    if(input>60 && input<69){
        resEL.textContent = "B"
    }
    if(input>50 && input<59){
        resEL.textContent = "C+"
    }
    if(input>40 && input<49){
        resEL.textContent = "C"
    }
    if(input>0 && input<40){
        resEL.textContent = "F"
    }
    if(input === ""){
        resEL.textContent = "Error"
    }
})