// 07. Refactoring Callback Patterns with Promises
function stepOne() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 1 Complete"), 500);
    });
}

function stepTwo() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 2 Complete"), 500);
    });
}

stepOne().then((res) => {
    console.log(res);
    return stepTwo();
}).then((res) => {
    console.log(res);
});
