// ASSIGNMENT 2: Simulated API Data Fetcher
function fakeFetch(endpoint) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 2000) + 500;
        setTimeout(() => {
            if (Math.random() > 0.2) {
                resolve({ status: 200, data: `Payload from ${endpoint}` });
            } else {
                reject(`Network error fetching from ${endpoint}`);
            }
        }, delay);
    });
}

fakeFetch("/api/user")
    .then((res) => {
        console.log("Fetch success:", res);
        return fakeFetch("/api/posts");
    })
    .then((res) => console.log("Fetch success:", res))
    .catch((err) => console.error("Fetch failed:", err));
