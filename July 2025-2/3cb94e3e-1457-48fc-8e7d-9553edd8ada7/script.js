const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');

const addBtn = document.getElementById('add');
const subtractionBtn = document.getElementById('subtract');
const multiplyBtn = document.getElementById('multiply');

function getNumbers(){
    const n1 = parseFloat(num1.value);
    const n2 = parseFloat(num2.value);
    if (isNaN(n1) || isNaN(n2)){
        result.textContent = 'Error';
        return null;
    }
    return [n1, n2];
}
 addBtn.addEventListener('click',() => {
     const nums = getNumbers();
     if (nums){
         result.textContent = nums[0] + nums[1];
     }
 });
 subtractionBtn.addEventListener('click', () =>{
     const nums = getNumbers();
     if  (nums){
         result.textContent = nums[0] - nums[1];
     }
 });
 multiplyBtn.addEventListener('click', () =>{
     const nums = getNumbers();
     if  (nums){
         result.textContent = nums[0] * nums[1];
     }
 })