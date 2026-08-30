// 10. Results & Errors in Promises
function divideAsync(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject(new Error("Division by zero is not allowed."));
        } else {
            resolve(a / b);
        }
    });
}

divideAsync(20, 4)
    .then((res) => console.log("Division Result:", res))
    .catch((err) => console.error("Division Error:", err.message));
