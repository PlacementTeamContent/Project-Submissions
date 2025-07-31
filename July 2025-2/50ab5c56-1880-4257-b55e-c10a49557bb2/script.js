let fnum=document.getElementById("num1")
let snum=document.getElementById("num2")
let tnum=document.getElementById("num3")
let but=document.getElementById("calculate")
let msg=document.getElementById("calculation-steps")
let emsg=document.getElementById("result")
but.onclick=function(){
    let first=fnum.value;
    let sec=snum.value;
    let third=tnum.value;
    if(first==="" || sec==="" || third===""){
        emsg.textContent="Error";
        msg.textContent="Please enter all the numbers."
    }else{
        let avg=(parseFloat(first)+parseFloat(sec)+parseFloat(third))/3;
        emsg.textContent="Average: "+avg
        msg.textContent=""
    }
}