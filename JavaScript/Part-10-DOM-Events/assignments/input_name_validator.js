// Qs3. Input field restricting input to a-z, A-Z, space, dynamically updated in Heading

let heading = document.createElement("h2");
heading.innerText = "Your Name";

let input = document.createElement("input");
input.setAttribute("placeholder", "enter your name");

document.body.appendChild(heading);
document.body.appendChild(input);

input.addEventListener("input", function () {
    // Retain only letters (a-z, A-Z) and spaces
    let filteredValue = this.value.replace(/[^a-zA-Z ]/g, "");
    
    // Update input field to sanitized value
    this.value = filteredValue;
    
    // Dynamically display in H2 heading
    heading.innerText = filteredValue.length > 0 ? filteredValue : "Your Name";
});
