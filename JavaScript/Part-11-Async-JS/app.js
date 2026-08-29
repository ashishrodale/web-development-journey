// ====================================================================
// JAVASCRIPT PART 11: ASYNCHRONOUS JAVASCRIPT & PROMISES MASTER SCRIPT
// ====================================================================

console.log("%c=== JS PART 11: ASYNC & PROMISES MASTER MODULE LOADED ===", "color: #38bdf8; font-weight: bold; font-size: 14px;");

// --------------------------------------------------------------------
// 1. CALL STACK & VISUALIZATION DEMO
// --------------------------------------------------------------------
function firstFunction() {
    console.log("Call Stack: Inside firstFunction()");
    secondFunction();
    console.log("Call Stack: Exiting firstFunction()");
}

function secondFunction() {
    console.log("Call Stack: Inside secondFunction()");
    thirdFunction();
}

function thirdFunction() {
    console.log("Call Stack: Inside thirdFunction() [Top of Stack]");
}

firstFunction();

// --------------------------------------------------------------------
// 2. JS IS SINGLE THREADED & ASYNCHRONOUS WEB APIs
// --------------------------------------------------------------------
console.log("Synchronous Log 1: Execution Starting...");

setTimeout(() => {
    console.log("Asynchronous Log: Handled by Web APIs via Event Loop (2000ms delay)");
}, 2000);

console.log("Synchronous Log 2: Execution Continued standard flow...");

// --------------------------------------------------------------------
// 3. PROMISE REFACTORED COLOR CHANGER (Replacing Callback Hell)
// --------------------------------------------------------------------
function changeColorPromise(element, color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element) {
                element.style.backgroundColor = color;
                console.log(`Promise Resolved: Applied color -> ${color}`);
                resolve(`Color successfully changed to ${color}`);
            } else {
                reject("Promise Rejected: Element not found!");
            }
        }, delay);
    });
}

// --------------------------------------------------------------------
// 4. PROMISE CHAINING & ERROR HANDLING (then / catch)
// --------------------------------------------------------------------
function saveToDatabase(data) {
    return new Promise((resolve, reject) => {
        const internetSpeed = Math.floor(Math.random() * 10) + 1;
        setTimeout(() => {
            if (internetSpeed > 3) {
                resolve(`Success: Data "${data}" saved to DB.`);
            } else {
                reject("Failure: Connection Timeout while saving data.");
            }
        }, 1000);
    });
}

// Demonstrating Promise Chaining with sequential requests
saveToDatabase("User Profile Data")
    .then((result) => {
        console.log("Chain Step 1:", result);
        return saveToDatabase("User Preferences");
    })
    .then((result) => {
        console.log("Chain Step 2:", result);
        return saveToDatabase("User Activity Logs");
    })
    .then((result) => {
        console.log("Chain Step 3:", result);
        console.log("%cAll data saved successfully!", "color: #10b981; font-weight: bold;");
    })
    .catch((error) => {
        console.error("Promise Chain Error Caught:", error);
    });

// --------------------------------------------------------------------
// 5. INTERACTIVE UI BINDING
// --------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById("startBtn");
    const colorBox = document.getElementById("colorBox");
    const stageText = document.getElementById("stageText");

    if (startBtn && colorBox) {
        startBtn.addEventListener("click", () => {
            stageText.textContent = "Executing Async Sequence...";

            changeColorPromise(colorBox, "#1e3a8a", 1000)
                .then(() => {
                    stageText.textContent = "Stage 1 Complete: Deep Blue";
                    return changeColorPromise(colorBox, "#065f46", 1000);
                })
                .then(() => {
                    stageText.textContent = "Stage 2 Complete: Emerald Green";
                    return changeColorPromise(colorBox, "#831843", 1000);
                })
                .then(() => {
                    stageText.textContent = "Stage 3 Complete: Rose Red";
                    return changeColorPromise(colorBox, "#0f172a", 1000);
                })
                .then(() => {
                    stageText.textContent = "Asynchronous Sequence Complete!";
                })
                .catch((err) => {
                    stageText.textContent = `Sequence Failed: ${err}`;
                });
        });
    }
});
