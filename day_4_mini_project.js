import makePrompt from "prompt-sync";
const prompt = makePrompt();

console.log("********************* User Profile Card Builder **********************");

function createUser(name, age, technicalSkills, softSkills) {
    return {
        name,
        age,
        skills: {
            technical: technicalSkills,
            soft: softSkills
        },
        greet() {
            return `Hello, I am ${this.name}`;
        }
    };
}

console.log("\nEnter User Credentials --->\n");

const name = prompt("Enter User's name: ");
const age = Number(prompt("Enter User's age: "));

if (Number.isNaN(age) || age <= 0) {
    console.log("Invalid age entered.");
    process.exit(1);
}

const techSkills = [];
const softSkills = [];

console.log("\nAdd Technical Skills (Type 'done' when finished):");
while (true) {
    const skill = prompt("Enter a technical skill: ");
    if (skill.toLowerCase() === "done") break;
    if (skill.trim() === "") continue;
    techSkills.push(skill);
}

console.log("\nAdd Soft Skills (Type 'done' when finished):");
while (true) {
    const skill = prompt("Enter a soft skill: ");
    if (skill.toLowerCase() === "done") break;
    if (skill.trim() === "") continue;
    softSkills.push(skill);
}

const user = createUser(
    name,
    age,
    techSkills.length ? techSkills : ["JavaScript", "HTML", "CSS"],
    softSkills.length ? softSkills : ["Communication", "Teamwork", "Problem-Solving"]
);

console.log("\n------------------------------------------------");
console.log("--------------- USER PROFILE ------------------");
console.log(`Name        : ${user.name}`);
console.log(`Age         : ${user.age}`);
console.log(`Tech Skills : ${user.skills.technical.join(", ")}`);
console.log(`Soft Skills : ${user.skills.soft.join(", ")}`);
console.log(user.greet());
console.log("------------------------------------------------");