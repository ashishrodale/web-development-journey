// ==========================================================
// JAVASCRIPT PART 12: PRACTICE ASSIGNMENTS
// ==========================================================

// Q1. Write an async function that fetches a random joke from an API using fetch and async/await.
async function getRandomJoke() {
    try {
        let res = await fetch("https://official-joke-api.appspot.com/random_joke");
        let joke = await res.json();
        console.log(`[Q1 Joke] ${joke.setup} - ${joke.punchline}`);
    } catch (err) {
        console.error("[Q1 Error]:", err);
    }
}
getRandomJoke();

// Q2. Parse a custom JSON string, update a property, and log the re-stringified JSON back.
const userJson = '{"username": "coder123", "score": 85}';
let userObj = JSON.parse(userJson);
userObj.score = 100; // Update score
let updatedJson = JSON.stringify(userObj);
console.log("[Q2 Updated JSON]:", updatedJson);

// Q3. Pass query parameters in a URL (e.g., searching for a university/user) using fetch with async/await.
async function searchUniversity(country) {
    try {
        // Adding URL parameters: ?country=...
        let url = `http://universities.hipolabs.com/search?country=${encodeURIComponent(country)}`;
        let response = await fetch(url);
        let list = await response.json();
        console.log(`[Q3 Universities in ${country} (First 2)]:`, list.slice(0, 2));
    } catch (error) {
        console.error("[Q3 Error]:", error);
    }
}
searchUniversity("India");

// Q4. Demonstrate handling a failed API response status (e.g., 404 Not Found).
async function checkStatusHandling() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/invalid-endpoint-404");
        if (!res.ok) {
            throw new Error(`HTTP Error Status: ${res.status}`);
        }
    } catch (err) {
        console.log("[Q4 Error Handled]:", err.message);
    }
}
checkStatusHandling();
