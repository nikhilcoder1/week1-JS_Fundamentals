const form = document.getElementById("signupForm")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Username validation
    const length = document.getElementById("username").value().trim();

    if(length == ""){
        console.log("Enter the username")
    }
    
    
})