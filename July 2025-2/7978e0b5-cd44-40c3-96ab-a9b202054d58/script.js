let marks = document.getElementById("marks")
let grade = document.getElementById("grade")
let calculate=  document.getElementById("calculateGrade")
 calculate.addEventListener("click",function(){

    if (marks.value === "") {
        grade.textContent = "Error"
    } else {
        let a = parseInt(marks.value)
        if(a>=90){
           grade.textContent = "A+" 
        }
        else if(80<= a <= 89){
             grade.textContent = "A" 
        }
         else if(70<= a <= 79){
             grade.textContent = "B+" 
        }
         else if(60<= a <= 69){
             grade.textContent = "B+" 
        }
         else if(50<= a <= 59){
             grade.textContent = "C+" 
        }
         else if(40<= a <= 49){
             grade.textContent = "C" 
        }
        else {
              grade.textContent = "F" 
        }
    }
      

})