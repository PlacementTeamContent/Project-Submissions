document.getElementById("calculateBMI").onclick = () => {
    let w = +document.getElementById("weight").value;
    let h = +document.getElementById("height").value;
    let r = document.getElementById("bmiResult");
    let c = document.getElementById("bmiCategory");
    
    if (!w || !h || w<= 0 || h <= 0) {
        r.textContent = c.textContent = "Error";
        return;
    }
    
    let bmi = w / (h*h), cat = "";
    if (bmi<18.5) cat = "underweight";
    else if (bmi<24.9) cat = "Normalweight";
    else if (bmi < 29.9) cat - "Overweight";
    else cat = "Obese";
    
    r.textContent = bmi.toFixed(2);
    c.textContent = cat
    
};