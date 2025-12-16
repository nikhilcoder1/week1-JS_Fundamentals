console.log("*********************User Profile Card Builder**********************")

function createUser(name , age , technicalskills, softskills){
    return {
        name , 
        age , 
        skills : {
            technical : technicalskills,
            soft : softskills
        },
        greet(){
            return `Hello , I am ${this.name}`
        }
    };
}

const user = createUser(
    "Nikhil",
    22,
    ["JS" , "React" , "Tailwind CSS" , "JAVA"],
    ["Leadership" , "Cooperation" , "Collaboration"]
);

console.log("------------------------------------------------")

console.log("----------User Profile----------")
console.log(`Name : ${user.name}`)
console.log(`Age : ${user.age}`)
console.log(`Tech Skills : ${user.skills.technical.join(" , ")}`)
console.log(`Soft Skills : ${user.skills.soft.join(" , ")}`)
console.log(user.greet())
console.log("------------------------------------------------")