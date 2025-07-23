document.getElementById("calculateGrade")
.addEventListener("click",function(){
    let marksInput =document.getElementById("marks").value;
    let gradeOutput = document.getElementById("grade");
    let marks = Number(marksInput);
    if (marksInput === "" || marks <0 || isNaN(marks)){
        gradeOutput.innerText = "Error";
    }else if (marks>=90){
        gradeOutput.innerText = "A+";
    }else if (marks>=80 && marks <= 89){
        gradeOutput.innerText = "A";
    }else if (marks>=70 && marks <= 79){
        gradeOutput.innerText = "B+";
    }else if (marks>=60 && marks <= 69){
        gradeOutput.innerText = "B";
    }else if (marks>=50 && marks <= 59){
        gradeOutput.innerText = "C+";
    }else if (marks>=40 && marks <= 49){
        gradeOutput.innerText = "C";
    }else if (marks<40){
        gradeOutput.innerText = "F";
    }
});