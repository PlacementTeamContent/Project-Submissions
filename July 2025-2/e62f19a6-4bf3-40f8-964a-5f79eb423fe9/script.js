let convertToKgbtn=document.getElementById("convertToKg");
let coverttopounds=document.getElementById("convertToLbs");
let gramsinput=document.getElementById("grams");
let calsteps=document.getElementById("calculation-steps");
let res=document.getElementById("result");

convertToKgbtn.onclick=function(){
    gramsinputval=gramsinput.value;
    
    if ((parseInt(gramsinputval))>0){
        res.textContent=gramsinputval*0.001;
        calsteps.textContent=""
    }
    else if(parseInt(gramsinputval)<0 || gramsinputval===""){
        res.textContent="Error"
        calsteps.textContent=""
    }
}
coverttopounds.onclick=function(){
    gramsinputval=gramsinput.value;
    
    if ((parseInt(gramsinputval))>0){
        res.textContent=gramsinputval*0.00220462;
        calsteps.textContent=""
    }
    else if(parseInt(gramsinputval)<0 || gramsinputval===""){
        res.textContent="Error"
        calsteps.textContent=""
    }
}