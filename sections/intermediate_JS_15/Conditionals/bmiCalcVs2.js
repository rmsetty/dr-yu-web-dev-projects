function BMI(weight, height){
    var message = "";
    var bmi = Math.round(weight / (height * height)); 
    
    if(bmi > 24.9) {
        message = "Your BMI is " + bmi +", so you are overweight.";
    } 
    else if(bmi >= 18.5 && bmi <= 24.9) {
        message = "Your BMI is " + bmi +", so you have a normal weight.";
    } 
    else if(bmi < 18.5) {
        message = "Your BMI is " + bmi +", so you are underweight.";
    }

    return message;
}
