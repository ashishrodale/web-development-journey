// ASSIGNMENT 1: Dynamic Delayed Color Changer with Promises
function changeBackground(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Applied Background Color: ${color}`);
            resolve(`Color state updated to ${color}`);
        }, delay);
    });
}

changeBackground("violet", 1000)
    .then(() => changeBackground("indigo", 1000))
    .then(() => changeBackground("blue", 1000))
    .then(() => changeBackground("green", 1000))
    .then(() => changeBackground("yellow", 1000))
    .then(() => changeBackground("orange", 1000))
    .then(() => changeBackground("red", 1000));
