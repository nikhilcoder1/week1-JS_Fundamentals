console.log("********************** Student Marks Analyzer *************************");

import makePrompt from "prompt-sync";
const prompt = makePrompt();

const numberOfStudents = Number(prompt("Enter the number of students : "));

if(!Number.isInteger(numberOfStudents) || numberOfStudents <= 0){
    console.log("Enter a valid positive integer for the number of students.")
    process.exit(1);
}

const students = new Array(numberOfStudents);