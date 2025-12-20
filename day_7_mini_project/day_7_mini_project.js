const form = document.getElementById("signupForm")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    // Username validation
    const username = document.getElementById("username").value.trim();

    if(username === ""){
        showError("usernameError","Username is required!");
        isValid = false;
    }else{
        clearError("usernameError");
    }

    // Email validation
    const email = document.getElementById("email").value.trim()

    if(!isValidateEmail(email)){
        showError("emailError","Invalid email address!");
        isValid = false;
    }else{
        clearError("emailError")
    }

    // Password Validation
    const password = document.getElementById("password").value;

    if(password.length<6){
        showError("passwordError","Password must be of atleast 6 characters!")
        isValid = false
    }else{
        clearError("passwordError")
    }

    if (isValid) {
        alert("Form submitted successfully 🚀");
        form.reset();
    } 
    

    // Helper functions 

    function showError(id , message){
        document.getElementById(id).innerText = message;
    }

    function clearError(id) {
        document.getElementById(id).innerText = "";
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
})