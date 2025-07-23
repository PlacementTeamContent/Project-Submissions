function getInputValues(){
    const num1=document.getElementById("num1").value.trim();
   const num2= document.getElementById("num2").value.trim();
   const resultField = document.getElementById("result");
   const val1=parseFloat(num1);
   const val2=parseFloat(num2);
   if (isNaN(val1) || isNaN(val2)){
       resultField.textContent="Error";
       return null;
   }
   return [val1 , val2]
    
}
document.getElementById("add").addEventListener("click",function()
{
    const values=getInputValues()
    if (values){
        document.getElementById("result").textContent=values[0]+values[1];
    }
})

document.getElementById("subtract").addEventListener("click",function(){
    const values=getInputValues()
    if (values){
        document.getElementById("result").textContent=values[0]-values[1]
    }
})
document.getElementById("multiply").addEventListener("click", function(){
    const values=getInputValues()
    if (values){
        document.getElementById("result").textContent=values[0]*values[1]
    }
})