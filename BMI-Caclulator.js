var weight = prompt("Please enter your weight in kg: ");
var height = prompt("Please enter your height in meters: ");

function bmiCalculator(weight, height) {
  height = Math.pow(height, 2);
  bmiValue = weight / height;
  bmiValue = Math.round(bmiValue);
  interpretation = " ";

  if (bmiValue <= 18.5) {
    interpretation = "Your BMI is " + bmiValue + ", so you are underweight.";

  }
  if (bmiValue > 18.5 && bmi <= 24.9) {
    interpretation = "Your BMI is " + bmiValue + ", so you have a normal weight";
  }
  if (bmiValue > 24.9) {
    interpretation = "Your BMI is " + bmiValue + ", so you are overweight";
  }
  return interpretation;
}


bmiCalculator(weight, height);
console.log(interpretation);
