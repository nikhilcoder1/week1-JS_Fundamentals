import makePrompt from "prompt-sync"
const prompt = makePrompt();

console.log("********************** Student Marks Analyzer *************************");

const students = new Array(5)

console.log("Enter the marks of 5 students : ");

for (let i = 0; i < students.length; i++) {
    let mark;

    do {
        mark = Number(prompt(`Enter student ${i + 1} marks (0-100): `));
    } while (Number.isNaN(mark) || mark < 0 || mark > 100);

    students[i] = mark;
}

const total = students.reduce((sum,n) => sum+n,0)
const avg = (total / students.length)
const highest = Math.max(...students)
const lowest = Math.min(...students)

console.log(`Total marks : ${total}`)
console.log(`Average marks : ${avg.toFixed(2)}`)
console.log(`Highest marks : ${highest}`)
console.log(`Lowest marks : ${lowest}`)