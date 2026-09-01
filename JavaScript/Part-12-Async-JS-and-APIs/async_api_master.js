// ==========================================================
// JAVASCRIPT PART 12: ASYNC/AWAIT & APIS MASTER PRACTICE
// ==========================================================

// 1. async Functions & await Keyword
async function getGreeting() {
    return "Hello, Async World!";
}

async function demoAsync() {
    let message = await getGreeting();
    console.log("Async Result:", message);
}
demoAsync();

// 2. Handling Rejections with try...catch
async function fetchWithErrorHandling() {
    try {
        let response = await fetch("https://invalid-api-url-example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Caught API Error successfully:", error.message);
    }
}
fetchWithErrorHandling();

// 3. JSON Operations (Accessing JSON Data)
const jsonString = '{"name": "Alice", "role": "Developer", "active": true}';
const jsObject = JSON.parse(jsonString); // Convert JSON string to JS object
console.log("Parsed JSON Object Name:", jsObject.name);

const backToJson = JSON.stringify(jsObject); // Convert JS object to JSON string
console.log("Stringified JSON:", backToJson);

// 4. API Requests with Fetch, Headers, and URL Parameters
const catFactUrl = "https://catfact.ninja/fact";

async function getCatFact() {
    try {
        // HTTP Headers & URL Params demo
        const response = await fetch(catFactUrl, {
            headers: {
                "Accept": "application/json"
            }
        });

        // HTTP Status Codes Check
        console.log("HTTP Status Code:", response.status); // e.g., 200 OK

        const data = await response.json();
        console.log("API Response Data:", data);

        const displayDiv = document.getElementById("factContainer");
        if (displayDiv) {
            displayDiv.innerText = data.fact;
        }
    } catch (err) {
        console.log("Error fetching cat fact:", err);
    }
}

document.getElementById("fetchFactBtn")?.addEventListener("click", getCatFact);
