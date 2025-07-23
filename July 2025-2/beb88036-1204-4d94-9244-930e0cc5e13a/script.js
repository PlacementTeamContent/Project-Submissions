function getnumber(){
    const num1=document.getElementById('num').value.trim(); 
    const num2=document.getElementById('num2').value.trim(); 
    
    const n1=parseFloat(num1); 
    const n2=parseFloat(num2); 
    if (isNaN(n1) || isNan(n2)){
        return null; 
    } 
    return {n1,n2}; 
} 
//addition
document.getElementById('add').addEventListener('click', function(){
    const nums=getNumbers(); 
    if(nums){
        document.getElementById('result').textContent = nums.n1 + nums.n2;
    }else {
        document.getElementById('result').textContent = 'Error';
    }
});

//subtraction 
document.getElementById('subtract').addEventListener('click', function(){
    const nums=getNumbers(); 
    if(nums){
        document.getElementById('result').textContent = nums.n1 - nums.n2;
    }else {
        document.getElementById('result').textContent = 'Error';
    }
});

//multiplication
document.getElementById('subtract').addEventListener('click', function(){
    const nums=getNumbers(); 
    if(nums){
        document.getElementById('result').textContent = nums.n1 * nums.n2;
    }else {
        document.getElementById('result').textContent = 'Error';
    }
});