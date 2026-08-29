// ASSIGNMENT 1: Delayed Color Changer using Promises
function changeBackground(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            console.log(`Changed background to ${color}`);
            resolve();
        }, delay);
    });
}

changeBackground("red", 1000)
    .then(() => changeBackground("orange", 1000))
    .then(() => changeBackground("green", 1000))
    .then(() => changeBackground("blue", 1000));
