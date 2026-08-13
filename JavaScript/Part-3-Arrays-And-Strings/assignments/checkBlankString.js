// Q3: Check whether a string is blank or not
function isBlank(str) {
    return str.trim().length === 0;
}
console.log("Q3 Output (Empty String):", isBlank("")); // true
console.log("Q3 Output (Non-Empty):", isBlank("JS")); // false
