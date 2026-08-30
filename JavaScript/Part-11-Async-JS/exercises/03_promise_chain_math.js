// ASSIGNMENT 3: Sequential Mathematical Pipeline
function addAsync(n, val) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(n + val), 500);
    });
}

addAsync(10, 5)
    .then((res) => {
        console.log("Step 1 (10 + 5):", res);
        return addAsync(res, 20);
    })
    .then((res) => {
        console.log("Step 2 (Result + 20):", res);
        return addAsync(res, -5);
    })
    .then((finalRes) => {
        console.log("Final Calculated Value:", finalRes);
    });
