let num1=document.getElementById("num1")
let num2=document.getElementById("num2")
let add=document.getElementById("add")
let subtract=document.getElementById("subtract")
let multiply=document.getElementById("multiply")
let result=document.getElementById("result")

add.addEventListener("click" ,function(){
    let first=num1.value
    let second=num2.value
    if (first =="" || second == ""){
        result.textContent="Error"
    }
    else{
        let first=num1.value
        let second=num2.value
        first=parseFloat(first)
        second=parseFloat(second)
        let sum =first+second
        result.textContent=sum
    }
})
subtract.addEventListener("click" ,function(){
    let first=num1.value
    let second=num2.value
    if (first ==="" || second === ""){
        result.textContent="Error"
    }
    else{
        let first=num1.value
        let second=num2.value
        first=parseFloat(first)
        second=parseFloat(second)
        let sub =first-second
        result.textContent=sub
    }
})
multiply.addEventListener("click" ,function(){
    let first=num1.value
    let second=num2.value
    if (first ==="" || second === ""){
        result.textContent="Error"
    }
    else{
        let first=num1.value
        let second=num2.value
        first=parseFloat(first)
        second=parseFloat(second)
        let mul =first*second
        result.textContent=mul
    }
})