console.log("********************** Simple Calculator *************************");

const prompt = require("prompt-sync")(); // <-- Input support added here

console.log("Enter the first number :")
const a = parseInt(prompt("> "));

console.log("Enter the second number :")
const b = parseInt(prompt("> "));

console.log("Enter the operation you want to perform (addition, subtraction, multiplication, division): ");
const operation = prompt("> "); // <-- Input here

switch(operation) {
    case "addition":
        console.log("Addition of two numbers:", a + b);
        break;
    case "subtraction":
        console.log("Subtraction of two numbers:", a - b);
        break;
    case "multiplication":
        console.log("Multiplication of two numbers:", a * b);
        break;
    case "division":
        console.log("Division of two numbers:", a / b);
        break;
    default:
        console.log("Invalid Input");
}

console.log("Thank you!");