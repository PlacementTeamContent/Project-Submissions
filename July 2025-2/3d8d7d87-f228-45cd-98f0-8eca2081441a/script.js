let inputElement=document.getElementById("marks")
let grade1=document.getElementById("grade")



function btn1(){
    let store=parseInt(inputElement.value);
    if(store>=90){
        grade1.textContent="A+"
    }
    else if(store>=80 && store<=89 ){
        grade1.textContent="A"
    }
       else if(store>=70 && store<=79 ){
        grade1.textContent="B+"
    }
       else if(store>=60 && store<=69 ){
        grade1.textContent="B"
    }
       else if(store>=50 && store<=59 ){
        grade1.textContent="C+"
    }
       else if(store>=40 && store<=49 ){
        grade1.textContent="C"
    }
       else if(store<=40){
        grade1.textContent="F"
    }
       else {
        grade1.textContent="Error"
    }

    
    
    
}