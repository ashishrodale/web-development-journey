// Q4: Test if character at given index is lower case
function isLowerCaseAt(str, index) {
    let char = str.charAt(index);
    return char === char.toLowerCase() && char !== char.toUpperCase();
}
console.log("Q4 Output ('JavaScript', index 1):", isLowerCaseAt("JavaScript", 1)); // true
