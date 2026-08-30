// 06. Setting up for Promises
function makeApiRequest(url) {
    return new Promise((resolve, reject) => {
        const isSuccess = true;
        if (isSuccess) {
            resolve(`Data fetched successfully from ${url}`);
        } else {
            reject("Connection Error");
        }
    });
}

console.log(makeApiRequest("https://api.example.com/data"));
