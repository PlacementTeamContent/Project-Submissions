let fstnumEl = document.getElementById("num1");
let secnum = document.getElementById("num2");
let addEl = document.getElementById("add");
let subEl = document.getElementById("subtract");
let multEl = document.getElementById("multiply");
let result = document.getElementById("result");



add.onclick = function(){
    if(fstnumEl.value==="" || secnum.value === ""){
        result.textContent = "Error";
    }
    else{
        result.textContent = parseInt(fstnumEl.value)+ parseInt(secnum.value);
    }
    
    
};


subEl.onclick = function(){
    if(fstnumEl.value==="" || secnum.value === ""){
        result.textContent = "Error";
    }
    else{
        result.textContent = parseInt(fstnumEl.value) - parseInt(secnum.value);
    }
    
    
};


multEl.onclick = function(){
    if(fstnumEl.value==="" || secnum.value === ""){
        result.textContent = "Error";
    }
    else{
        result.textContent = parseInt(fstnumEl.value) * parseInt(secnum.value);
    }
    
    
};