// ==========================================================
// JAVASCRIPT PART 13: AXIOS & ADVANCED API OPERATIONS
// ==========================================================

// 1. Using Axios - Basic GET Request
const catFactUrl = "https://catfact.ninja/fact";

async function getCatFact() {
    try {
        // Axios automatically parses JSON data into res.data
        let res = await axios.get(catFactUrl);
        console.log("Axios Response Data:", res.data.fact);
    } catch (error) {
        console.error("Axios Error:", error);
    }
}
getCatFact();

// 2. DogPictures API Demo
const dogApiUrl = "https://dog.ceo/api/breeds/image/random";
const dogBtn = document.getElementById("getDogBtn");
const dogContainer = document.getElementById("dogImageContainer");

async function getRandomDogImage() {
    try {
        let res = await axios.get(dogApiUrl);
        let imgUrl = res.data.message; // Image URL returned by Dog CEO API

        // Display image on DOM
        dogContainer.innerHTML = `<img src="${imgUrl}" alt="Random Dog">`;
    } catch (err) {
        console.error("Failed to load dog picture:", err);
        dogContainer.innerText = "Error loading image.";
    }
}
dogBtn?.addEventListener("click", getRandomDogImage);

// 3. Sending Headers with API Requests
const dadJokeUrl = "https://icanhazdadjoke.com/";

async function getDadJokeWithHeaders() {
    try {
        // Configuring Headers in Axios
        const config = {
            headers: {
                Accept: "application/json"
            }
        };

        let res = await axios.get(dadJokeUrl, config);
        console.log("Header Demo - Dad Joke:", res.data.joke);
    } catch (err) {
        console.error("Error fetching header request:", err);
    }
}
getDadJokeWithHeaders();

// 4. Activity using Query Strings (Universities API)
const uniSearchUrl = "http://universities.hipolabs.com/search";
const searchBtn = document.getElementById("searchBtn");
const countryInput = document.getElementById("countryInput");
const universityList = document.getElementById("universityList");

async function getUniversitiesByCountry(country) {
    try {
        // Passing Query Parameters via Axios config params object (?name=country)
        let res = await axios.get(uniSearchUrl, {
            params: {
                country: country
            }
        });

        displayUniversities(res.data.slice(0, 5)); // Limit to first 5 results
    } catch (err) {
        console.error("Error searching universities:", err);
    }
}

function displayUniversities(colleges) {
    universityList.innerHTML = "";
    if (colleges.length === 0) {
        universityList.innerHTML = "<li>No universities found.</li>";
        return;
    }

    for (let col of colleges) {
        let li = document.createElement("li");
        li.innerText = `${col.name} (${col.country})`;
        universityList.appendChild(li);
    }
}

searchBtn?.addEventListener("click", () => {
    let country = countryInput.value.trim();
    if (country) {
        getUniversitiesByCountry(country);
    }
});
