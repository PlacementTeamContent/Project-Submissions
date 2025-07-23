let marks = document.getElementById("marks");
let calculateGrade = document.getElementById("calculateGrade");
let grade = document.getElementById("grade");
let calculationSteps = document.getElementById("calculation-steps");

calculateGrade.addEventListener("click",()=> {
    if(marks.value >= 90) {
        grade.textContent = "A+";
    }
    else if(marks.value >=80 && marks.value <=89) {
        grade.textContent = "A";
    }
    else if(marks.value >=70 && marks.value <=79) {
        grade.textContent = "B+";
    }
    else if(marks.value >=60 && marks.value <=69) {
        grade.textContent = "B";
    }
    else if(marks.value >=50 && marks.value <=59) {
        grade.textContent = "C+";
    }
    else if(marks.value >=40 && marks.value <=49) {
        grade.textContent = "C";
    }
    else if(marks.value < 40) {
        grade.textContent = "F";
    }
    if(marks.value === "") {
        grade.textContent = "Error";
    }
})