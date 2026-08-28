// Activity: Random Color Generator
let btn = document.querySelector("#colorBtn");

btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    let div = document.querySelector("#colorBox");
    div.style.backgroundColor = randomColor;
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}
