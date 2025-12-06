console.log("********************** Simple Calculator *************************");

const prompt = require("prompt-sync")(); 

// ask for numbers instead of hardcoding
const a = Number(prompt("Enter first number: "));
const b = Number(prompt("Enter second number: "));

if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Bro... enter valid numbers.");
    process.exit(1);
}

const operation = prompt("Enter operation (add, sub, mul, div): ").toLowerCase();

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

console.log("Thank you!");