// ASSIGNMENT 2: Simulated API Data Fetcher with Random Failures
function fakeFetch(endpoint) {
    return new Promise((resolve, reject) => {
        const responseTime = Math.floor(Math.random() * 1500) + 500;
        setTimeout(() => {
            const success = Math.random() > 0.25;
            if (success) {
                resolve({ status: 200, url: endpoint, data: `Payload response from ${endpoint}` });
            } else {
                reject(`HTTP 500: Server error while requesting ${endpoint}`);
            }
        }, responseTime);
    });
}

fakeFetch("/api/v1/users")
    .then((res) => {
        console.log("Fetched Users:", res);
        return fakeFetch("/api/v1/posts");
    })
    .then((res) => {
        console.log("Fetched Posts:", res);
    })
    .catch((err) => {
        console.error("API Request Failed:", err);
    });
