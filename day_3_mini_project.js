import makePrompt from "prompt-sync"
const prompt = makePrompt();

console.log("********************** Student Marks Analyzer *************************");

const students = new Array(5)

console.log("Enter the marks of 5 students : ");
for(let i=0;i<students.length;i++){
  students[i] = Number(prompt(`Enter student ${i+1} marks : `))
}

const total = students.reduce((sum,n) => sum+n,0)
const avg = (total / students.length)
const highest = Math.max(...students)
const lowest = Math.min(...students)

console.log(`Total marks : ${total}`)
console.log(`Average marks : ${avg}`)
console.log(`Highest marks : ${highest}`)
console.log(`Lowest marks : ${lowest}`)