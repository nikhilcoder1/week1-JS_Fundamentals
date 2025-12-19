form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "") {
    error.textContent = "Field is required";
  } else {
    error.textContent = "";
    console.log("Form submitted");
  }
});
