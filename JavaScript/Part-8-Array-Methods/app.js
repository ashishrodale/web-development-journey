// ============================================================================
// JAVASCRIPT PART 8: HIGHER-ORDER ARRAY METHODS & MODERN ES6+ FEATURES
// Master Consolidated Implementation
// ============================================================================

console.log("=== 1. ARRAY METHODS: forEach, map, filter ===");

const numbers = [1, 2, 3, 4, 5];

// forEach
console.log("--- forEach Iteration ---");
numbers.forEach((num) => console.log(`Element: ${num}`));

// map
console.log("--- map Transformation ---");
const doubled = numbers.map((num) => num * 2);
console.log("Doubled Array:", doubled);

// filter
console.log("--- filter Evaluation ---");
const evens = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evens);


console.log("\n=== 2. BOOLEAN CHECKS: every & some ===");

const testArr = [10, 20, 30, 40];
const isAllMultiplesOfTen = testArr.every((el) => el % 10 === 0);
console.log("Are all elements multiples of 10?:", isAllMultiplesOfTen);

const hasNegative = testArr.some((el) => el < 0);
console.log("Does array contain any negative numbers?:", hasNegative);


console.log("\n=== 3. REDUCE METHOD: Accumulation & Min/Max ===");

// Sum of elements
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);

// Finding Maximum
const maxVal = testArr.reduce((max, el) => (el > max ? el : max), testArr[0]);
console.log("Maximum Value:", maxVal);

// Practice Question 2: Finding Minimum
function getMin(arr) {
    return arr.reduce((min, el) => (el < min ? el : min));
}
console.log("Minimum Value of [10, 20, 30, 40]:", getMin(testArr));


console.log("\n=== 4. DEFAULT PARAMETERS ===");

function greet(user = "Guest", role = "Developer") {
    return `Welcome ${user}, Role: ${role}`;
}
console.log(greet());
console.log(greet("Alice", "Admin"));


console.log("\n=== 5. SPREAD OPERATOR (Array & Object Literals) ===");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log("Combined Array with Spread:", combinedArray);

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergeObjects = (o1, o2) => ({ ...o1, ...o2 });
console.log("Merged Object:", mergeObjects(obj1, obj2));


console.log("\n=== 6. REST PARAMETERS ===");

function doubleAndReturnArgs(arr, ...args) {
    return [...arr, ...args.map((v) => v * 2)];
}
console.log("doubleAndReturnArgs([1,2,3], 4, 4):", doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log("doubleAndReturnArgs([2], 10, 4):", doubleAndReturnArgs([2], 10, 4));


console.log("\n=== 7. DESTRUCTURING (Arrays & Objects) ===");

// Array Destructuring
const colors = ["Red", "Green", "Blue", "Yellow"];
const [firstColor, secondColor, ...remainingColors] = colors;
console.log(`First: ${firstColor}, Second: ${secondColor}`);
console.log("Remaining Colors:", remainingColors);

// Object Destructuring
const student = { name: "Alex", score: 95, city: "New York" };
const { name, score } = student;
console.log(`Student Name: ${name}, Score: ${score}`);


console.log("\n=== 8. ASSIGNMENT QUESTIONS SOLUTIONS ===");

// AQ1: Square and sum elements using arrow function, then find average
const aqNums = [1, 2, 3, 4, 5];
const squares = aqNums.map((num) => num * num);
const aqSum = squares.reduce((acc, cur) => acc + cur, 0);
const aqAvg = aqSum / aqNums.length;
console.log(`AQ1 -> Squares: [${squares}], Sum: ${aqSum}, Average: ${aqAvg}`);

// AQ2: Map function adding 5 to each element
const aq2Nums = [2, 4, 6, 8, -2, -4];
const aq2Res = aq2Nums.map((num) => num + 5);
console.log("AQ2 -> Map (+5):", aq2Res);

// AQ3: Uppercase strings array
const aq3Strings = ["adam", "bob", "catlyn", "donald", "eve"];
const aq3Res = aq3Strings.map((str) => str.toUpperCase());
console.log("AQ3 -> Uppercase Strings:", aq3Res);
