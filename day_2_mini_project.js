import makePrompt from "prompt-sync";
const prompt = makePrompt();

console.log("********************** BMI Calculator *************************");

const weight = Number(prompt("Enter weight (kg): "));
const height = Number(prompt("Enter height (m): "));

if (Number.isNaN(weight) || Number.isNaN(height)) {
    console.log("Enter valid numeric values.");
    process.exit(1);
}

if (weight <= 0 || height <= 0) {
    console.log("Weight and height must be positive values.");
    process.exit(1);
}

function calculateBMI(weight, height) {
    return weight / (height * height);
}

function getBMIStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
}

const bmi = calculateBMI(weight, height);

console.log(`Your BMI is: ${bmi.toFixed(2)}`);
console.log(`Category: ${getBMIStatus(bmi)}`);