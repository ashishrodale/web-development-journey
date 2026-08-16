// Topic: ES6 For-Of & Nested For-Of Loops
console.log("--- For-Of Loop ---");
const fruits = ["mango", "apple", "banana"];
for (const fruit of fruits) {
    console.log(fruit);
}

console.log("--- Nested For-Of Loop ---");
const collection = [["a", "b"], ["c", "d"]];
for (const row of collection) {
    for (const char of row) {
        console.log(`Char: ${char}`);
    }
}
