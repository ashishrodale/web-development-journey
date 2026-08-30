// 11. Refactoring Old Callback Code into Promise Syntax
// Old Approach: nested callbacks
// modern Approach: returned promise chain

function delayLog(msg, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(msg);
            resolve();
        }, delay);
    });
}

delayLog("Refactored Task 1", 500)
    .then(() => delayLog("Refactored Task 2", 500))
    .then(() => delayLog("Refactored Task 3", 500));
