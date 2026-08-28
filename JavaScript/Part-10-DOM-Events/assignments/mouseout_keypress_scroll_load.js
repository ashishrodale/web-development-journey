// Qs1. Event Listeners Practice: mouseout, keypress, scroll, load

// 1. mouseout event
document.body.addEventListener("mouseout", function () {
    console.log("Mouse left the document body");
});

// 2. keypress event
document.addEventListener("keypress", function (event) {
    console.log("Keypressed:", event.key);
});

// 3. scroll event
window.addEventListener("scroll", function () {
    console.log("Page is being scrolled");
});

// 4. load event
window.addEventListener("load", function () {
    console.log("Page fully loaded!");
});
