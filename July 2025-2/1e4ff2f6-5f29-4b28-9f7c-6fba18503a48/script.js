let marksInputEl=document.getElementById("marks");
let gradeMsg=document.getElementById("grade");
let calculateGradeBtn=document.getElementById("calculateGrade");

calculateGradeBtn.addEventListener("click", function(){
   
        if(marksInputEl.value==="" || marksInputEl.value<0){
         gradeMsg.textContent="Error";
        }
        else if (marksInputEl.value>=90){
            gradeMsg.textContent="A+";
        }
        else if(marksInputEl.value>80 && marksInputEl.value<89){
             gradeMsg.textContent="A";
        }
        else if(marksInputEl.value>70 && marksInputEl.value<79){
             gradeMsg.textContent="B+";
        }
        else if(marksInputEl.value>60 && marksInputEl.value<69){
             gradeMsg.textContent="B";
        }
        else if(marksInputEl.value>50 && marksInputEl.value<59){
             gradeMsg.textContent="C+";
        }
        else if(marksInputEl.value>40 && marksInputEl.value<49){
             gradeMsg.textContent="C";
        }
        else if(marksInputEl.value<40){
             gradeMsg.textContent="F";
        }
        
    
})