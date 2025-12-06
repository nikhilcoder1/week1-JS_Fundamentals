console.log("********************** Simple Calculator *************************");

const prompt = require("prompt-sync")(); // <-- Input support added here

let a = 10;
let b = 20;

console.log("Enter the operation you want to perform (addition, subtraction, multiplication, division): ");
const operation = prompt("> "); // <-- Input here

switch (operation) {
    case "add":
    case "addition":
        console.log("Result:", a + b);
        break;

    case "sub":
    case "subtraction":
        console.log("Result:", a - b);
        break;

    case "mul":
    case "multiplication":
        console.log("Result:", a * b);
        break;

    case "div":
    case "division":
        if (b === 0) {
            console.log("Division by zero? Bold move, but no.");
        } else {
            console.log("Result:", a / b);
        }
        break;

    default:
        console.log("Invalid operation.");
}

console.log("Thank you!");
