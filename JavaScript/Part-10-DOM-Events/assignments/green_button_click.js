// Qs2. Create a button dynamically and change color to green on click

let greenBtn = document.createElement("button");
greenBtn.innerText = "Click Me";
document.body.appendChild(greenBtn);

greenBtn.addEventListener("click", function () {
    this.style.backgroundColor = "green";
    this.style.color = "white";
});
