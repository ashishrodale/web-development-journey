// ==========================================
// 1. CONSOLE LOGGING & BASIC OUTPUT
// ==========================================
console.log("Welcome to JavaScript Part 1 Basics!");
console.log(12345);
console.log("Sum of 10 + 20 =", 10 + 20);

// ==========================================
// 2. DATA TYPES & VARIABLES (let, const, var)
// ==========================================
let age = 21;                  // Number
let fullName = "Ashish";       // String
let isLearning = true;         // Boolean
let emptyVal = null;           // Null
let unassignedVal;            // Undefined

const PI = 3.14159;           // Constant (Cannot be reassigned)

console.log("Age:", age);
console.log("Name:", fullName);
console.log("Is Learning:", isLearning);

// ==========================================
// 3. ARITHMETIC & ASSIGNMENT OPERATORS
// ==========================================
let a = 10;
let b = 5;

console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulo / Remainder (a % b):", a % b);
console.log("Exponentiation (a ** b):", a ** b);

// Assignment Operators
a += 5; // Equivalent to: a = a + 5
console.log("Value of 'a' after += 5:", a);

// ==========================================
// 4. UNARY OPERATORS (Increment / Decrement)
// ==========================================
let count = 0;
count++; // Increment
console.log("Count after increment (++):", count);

count--; // Decrement
console.log("Count after decrement (--):", count);

// ==========================================
// 5. STRINGS, INDEXING & LENGTH
// ==========================================
let str = "JavaScript";

console.log("String Value:", str);
console.log("Total Length:", str.length);
console.log("First Character (str[0]):", str[0]);
console.log("Last Character:", str[str.length - 1]);

// ==========================================
// 6. TEMPLATE LITERALS
// ==========================================
let item = "Laptop";
let price = 50000;

// Traditional Concatenation vs Template Literal Syntax
let outputOld = "The price of " + item + " is " + price + " INR.";
let outputNew = `The price of ${item} is ${price} INR.`;

console.log("Old Style:", outputOld);
console.log("Template Literal Style:", outputNew);
