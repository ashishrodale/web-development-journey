// ==========================================================
// JAVASCRIPT PART 13: PRACTICE ASSIGNMENTS
// ==========================================================

// Q1. Fetch a random activity using Axios from an open API.
async function getRandomActivity() {
    try {
        let res = await axios.get("https://boredapi.com/api/activity");
        console.log(`[Q1 Activity]: ${res.data.activity} (Type: ${res.data.type})`);
    } catch (err) {
        console.log("[Q1 Fallback Demo]: API call completed with error code check.", err.message);
    }
}
getRandomActivity();

// Q2. Pass multiple query string parameters (e.g., country and limit) using Axios params.
async function fetchZipCodeData(countryCode, zipCode) {
    try {
        let url = `https://api.zippopotam.us/${countryCode}/${zipCode}`;
        let res = await axios.get(url);
        console.log(`[Q2 Location Search]: ${res.data.places[0]['place name']}, ${res.data.country}`);
    } catch (err) {
        console.error("[Q2 Error]: Invalid Zip code or Country Code.", err.message);
    }
}
fetchZipCodeData("us", "90210");

// Q3. Send a request with dynamic HTTP Headers and log status codes.
async function fetchHeaderSecuredData() {
    try {
        let res = await axios.get("https://httpbin.org/headers", {
            headers: {
                "X-Custom-Header": "JavaScript-Part-13-Student",
                "Authorization": "Bearer sample_token_12345"
            }
        });
        console.log("[Q3 Custom Headers Sent]:", res.data.headers);
    } catch (err) {
        console.error("[Q3 Error]:", err);
    }
}
fetchHeaderSecuredData();

// Q4. Implement error handling for invalid API URLs using Axios try...catch.
async function testAxiosRejection() {
    try {
        await axios.get("https://jsonplaceholder.typicode.com/invalid-route-404");
    } catch (error) {
        if (error.response) {
            console.log(`[Q4 Handled Error]: Status Code ${error.response.status} - Not Found`);
        } else {
            console.log("[Q4 Network Error]:", error.message);
        }
    }
}
testAxiosRejection();
