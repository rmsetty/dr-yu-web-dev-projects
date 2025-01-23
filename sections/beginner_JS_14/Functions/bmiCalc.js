// BMI = weight divided by height squared.
// function that takes weight and height as inputs 
// calculates BMI value as an output. 
// The output should be rounded to the nearest whole number.

function BMI(weight, height){
    var bmi = Math.round(weight / (height * height)); 
    return bmi; 
}