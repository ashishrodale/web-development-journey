// ============================================================================
// JAVASCRIPT PART 10: DOM EVENTS MASTER IMPLEMENTATION
// Covers: DOM Events, Mouse/Pointer Events, Event Listeners, this keyword,
// Keyboard Events, Form Events, Extracting Form Data, and More Events
// ============================================================================

// --- 1. Random Color Generator Activity ---
let btn = document.querySelector("#colorBtn");

btn.addEventListener("click", function () {
    console.log("Generate random color clicked");
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("#colorBox");
    div.style.backgroundColor = randomColor;

    console.log("Color updated to:", randomColor);
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

// --- 2. 'this' in Event Listeners & Event Listeners for Elements ---
function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
    this.style.color = "white";
}

btn.addEventListener("click", changeColor);

// --- 3. Keyboard Events (code, key properties) ---
document.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key, "Code:", event.code);
});
