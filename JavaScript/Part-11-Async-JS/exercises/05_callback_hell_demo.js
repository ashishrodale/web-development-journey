// 05. Callback Hell (Nested Callbacks Pyramid)
function changeTextColor(color, delay, nextColorChange) {
    setTimeout(() => {
        console.log(`Color changed to ${color}`);
        if (nextColorChange) nextColorChange();
    }, delay);
}

changeTextColor("red", 1000, () => {
    changeTextColor("orange", 1000, () => {
        changeTextColor("green", 1000, () => {
            changeTextColor("blue", 1000);
        });
    });
});
