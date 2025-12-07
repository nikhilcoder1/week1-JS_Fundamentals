console.log("********************** BMI Calculator *************************");

const makePrompt = require("prompt-sync")
const prompt = makePrompt();

// weight in kg, height in meters
const weight = Number(prompt("Enter weight (kg): "));
const height = Number(prompt("Enter height (m): "));

if (Number.isNaN(weight) || Number.isNaN(height)) {
    console.log("Enter valid numeric values, my dude.");
    process.exit(1);
}

if (height <= 0) {
    console.log("Height cannot be zero or negative. Physics disagrees.");
    process.exit(1);
}

const bmi = weight / (height * height);

console.log(`Your BMI is: ${bmi.toFixed(2)}`);

let status;
if (bmi < 18.5) status = "Underweight";
else if (bmi < 24.9) status = "Normal";
else if (bmi < 29.9) status = "Overweight";
else status = "Obese";

console.log(`Category: ${status}`);