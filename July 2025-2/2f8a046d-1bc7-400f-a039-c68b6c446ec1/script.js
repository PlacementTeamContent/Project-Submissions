let inp=document.getElementById('marks')
let btn =document.getElementById('calculateGrade')
let para=document.getElementById('grade')
btn.onclick=function(){
    if(inp.value===""){
        para.textContent="Error"
    }else if(inp.value>=90){
        para.textContent="A+"
    }else if(inp.value>=80 && inp.value<90){
         para.textContent="A"
    }else if(inp.value>=70 && inp.value<80){
         para.textContent="B+"
    }else if(inp.value>=60 && inp.value<70){
         para.textContent="B"
    }else if(inp.value>=50 && inp.value<60){
         para.textContent="C+"
    }else if(inp.value>=40 && inp.value<50){
         para.textContent="C"
    }else if(inp.value<40){
         para.textContent="F"
    }
}