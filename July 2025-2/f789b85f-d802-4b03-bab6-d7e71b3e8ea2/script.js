let marks = document.getElementById("marks");
let container = document.getElementById("grade");
// let calculateGrade=addEventListener("onclick",function(){
//     if(event.value){
//     if (parseInt(marks)>0 && parseInt(marks)>=90){
//         // container.textContent="A+"
//         console.log("A+")
//     }
//     }
// })
function calculateGrade() {
    if ((marks.value) > 0 && (marks.value) >= 90) {
        container.textContent = "A+"
    } else if ((marks.value) > 0 && marks.value >= 80 && marks.value <= 89) {
        container.textContent = "A"
    } else if ((marks.value) > 0 && marks.value >= 70 && marks.value <= 79) {
        container.textContent = "B+"
    } else if ((marks.value) > 0 && marks.value >= 60 && marks.value <= 69) {
        container.textContent = "B"
    } else if ((marks.value) > 0 && marks.value >= 50 && marks.value <= 59) {
        container.textContent = "C+"
    } else if ((marks.value) > 0 && marks.value>=40 && marks.value<=49) {
        container.textContent = "C"
    }else if ((marks.value) > 0 && marks.value<40) {
        container.textContent = "F"
    }else if(marks.value===""){
        container.textContent="Error"
    }
    
}