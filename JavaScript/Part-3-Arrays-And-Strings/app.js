console.log("=== 1. STRING METHODS ===");
let message = "   Hello JavaScript World!   ";
console.log("Trimmed:", message.trim());
console.log("Uppercase:", message.trim().toUpperCase());
console.log("Index of 'World':", message.trim().indexOf("World"));
console.log("Method Chaining:", message.trim().toUpperCase().slice(0, 5));

console.log("\n=== 2. ARRAY METHODS ===");
let techStack = ["HTML", "CSS", "JS"];
techStack.push("React");
techStack.unshift("Git");
console.log("Array after push & unshift:", techStack);
console.log("Includes 'JS'?:", techStack.includes("JS"));
