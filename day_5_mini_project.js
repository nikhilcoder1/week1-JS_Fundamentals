console.log("***************Guess the Number Game***************");

import makeprompt from "prompt-sync";
const prompt = makeprompt();

const target = Math.floor(Math.random() * 10) + 1;
let guess;

while (guess !== target) {
  guess = Number(prompt("Guess number (1-10)"));

  if (guess > target) console.log("Too high");
  else if (guess < target) console.log("Too low");
  else console.log("Correct!");
}