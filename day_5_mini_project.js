import makePrompt from "prompt-sync";
const prompt = makePrompt();

console.log("*************** Guess the Number Game ***************");

const target = Math.floor(Math.random() * 10) + 1;
let guess;
let attempts = 0;

while (guess !== target) {
    guess = Number(prompt("Guess a number between 1 and 10: "));
    attempts++;

    if (Number.isNaN(guess) || guess < 1 || guess > 10) {
        console.log("❌ Invalid input. Enter a number between 1 and 10.");
        continue;
    }

    if (guess > target) {
        console.log("📈 Too high!");
    } else if (guess < target) {
        console.log("📉 Too low!");
    } else {
        console.log(`🎉 Correct! You guessed it in ${attempts} attempts.`);
    }
}
console.log("*************** Game Over ***************");