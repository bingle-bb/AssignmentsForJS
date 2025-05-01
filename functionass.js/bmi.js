function calculateBMI(weight, height) {
  return (weight / Math.pow(height, 2)).toFixed(2);
}

function categorizeBMI(bmi) {
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  return `BMI: ${bmi} (${category})`;
}

const weight = 60;
const height = 1.65;

const bmi = calculateBMI(weight, height);
const result = categorizeBMI(bmi);

console.log(result);
