// 08. then() and catch() Methods
function checkNumber(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(`Valid number: ${num}`);
        } else {
            reject(`Invalid number: ${num} must be greater than 10`);
        }
    });
}

checkNumber(15)
    .then((result) => console.log("Success:", result))
    .catch((error) => console.error("Error:", error));
